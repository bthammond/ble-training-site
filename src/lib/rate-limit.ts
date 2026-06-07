/**
 * Fixed-window rate limiter for ble-training-site API routes.
 *
 * Backends:
 *   - Upstash Redis via REST API when KV_REST_API_URL / KV_REST_API_TOKEN
 *     (or the legacy UPSTASH_REDIS_REST_* names) are configured. This is
 *     the only correct option on Vercel — in-memory state doesn't survive
 *     cold starts.
 *   - In-memory fallback for local dev when env vars are absent. Logs a
 *     warning once per cold start so the dev knows it's not enforcing
 *     across processes.
 *
 * Mirrors the implementation in training-gen/lib/rate-limit.ts so both
 * apps share semantics. Slimmed down — no per-user generation locks,
 * no daily caps; just per-key fixed-window counters.
 */

export interface RateLimitResult {
  allowed: boolean
  used: number
  limit: number
  retryAfterSec: number
}

export interface RateLimitOptions {
  /** Max requests per window. */
  max: number
  /** Window length in ms. */
  windowMs: number
  /**
   * If true, deny when Upstash is unreachable. Use on cost-sensitive
   * routes (e.g. AI proxies). Default false — newsletter / lead forms
   * stay open on Redis outage.
   */
  failClosed?: boolean
}

/* ---------- env reader ---------- */
function readUpstashEnv(role: "url" | "token"): string | undefined {
  const candidates =
    role === "url"
      ? ["KV_REST_API_URL", "UPSTASH_REDIS_REST_URL"]
      : ["KV_REST_API_TOKEN", "UPSTASH_REDIS_REST_TOKEN"]
  for (const name of candidates) {
    const raw = process.env[name]?.trim()
    if (raw) return raw.replace(/^["']|["']$/g, "")
  }
  return undefined
}

/* ---------- in-memory fallback ---------- */
interface Bucket {
  count: number
  windowStart: number
}
const memoryBuckets = new Map<string, Bucket>()
let warnedNoBackend = false
function warnNoBackendOnce(): void {
  if (warnedNoBackend) return
  warnedNoBackend = true
  console.warn(
    "[rate-limit] No Upstash credentials — falling back to in-memory limiter. " +
      "NOT safe on serverless. Set KV_REST_API_URL + KV_REST_API_TOKEN in production."
  )
}

function checkInMemory(
  key: string,
  max: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now()
  const existing = memoryBuckets.get(key)
  if (!existing || now - existing.windowStart >= windowMs) {
    memoryBuckets.set(key, { count: 1, windowStart: now })
    return {
      allowed: true,
      used: 1,
      limit: max,
      retryAfterSec: Math.ceil(windowMs / 1000),
    }
  }
  const retryAfterSec = Math.max(
    0,
    Math.ceil((existing.windowStart + windowMs - now) / 1000)
  )
  if (existing.count >= max) {
    return { allowed: false, used: existing.count, limit: max, retryAfterSec }
  }
  existing.count += 1
  return {
    allowed: true,
    used: existing.count,
    limit: max,
    retryAfterSec,
  }
}

/* ---------- Upstash backend ---------- */
async function checkUpstash(
  key: string,
  max: number,
  windowMs: number,
  url: string,
  token: string,
  failClosed: boolean
): Promise<RateLimitResult> {
  const ttlSec = Math.ceil(windowMs / 1000)
  const now = Date.now()
  const windowIndex = Math.floor(now / windowMs)
  const bucketKey = `rl:${key}:${windowIndex}`
  const windowStartMs = windowIndex * windowMs
  const retryAfterSec = Math.max(
    0,
    Math.ceil((windowStartMs + windowMs - now) / 1000)
  )

  try {
    const response = await fetch(`${url.replace(/\/$/, "")}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", bucketKey],
        ["EXPIRE", bucketKey, String(ttlSec), "NX"],
      ]),
      signal: AbortSignal.timeout(2000),
    })
    if (!response.ok) {
      throw new Error(`Upstash returned ${response.status}`)
    }
    const data = (await response.json()) as Array<{
      result?: number
      error?: string
    }>
    const incrResult = data[0]?.result
    if (typeof incrResult !== "number") {
      throw new Error("Upstash INCR returned non-number")
    }
    return {
      allowed: incrResult <= max,
      used: incrResult,
      limit: max,
      retryAfterSec,
    }
  } catch (err) {
    if (failClosed) {
      console.error(
        "[rate-limit] Upstash check failed; failing CLOSED:",
        err
      )
      return { allowed: false, used: max + 1, limit: max, retryAfterSec }
    }
    console.error("[rate-limit] Upstash check failed; failing open:", err)
    return {
      allowed: true,
      used: 0,
      limit: max,
      retryAfterSec,
    }
  }
}

export async function checkRateLimit(
  key: string,
  options: RateLimitOptions
): Promise<RateLimitResult> {
  const { max, windowMs, failClosed = false } = options
  const url = readUpstashEnv("url")
  const token = readUpstashEnv("token")
  if (url && token) {
    return checkUpstash(key, max, windowMs, url, token, failClosed)
  }
  if (failClosed && process.env.NODE_ENV === "production") {
    console.error(
      `[rate-limit] failClosed key "${key}" reached in production with no Upstash credentials. Denying.`
    )
    return {
      allowed: false,
      used: max + 1,
      limit: max,
      retryAfterSec: Math.ceil(windowMs / 1000),
    }
  }
  warnNoBackendOnce()
  return checkInMemory(key, max, windowMs)
}

/**
 * Extract the best-effort client IP from request headers. Works on
 * Vercel (x-forwarded-for) and local dev (falls back to "unknown").
 */
export function clientIpFromHeaders(headers: Headers): string {
  const xff = headers.get("x-forwarded-for")
  if (xff) return xff.split(",")[0].trim()
  const real = headers.get("x-real-ip")
  if (real) return real.trim()
  return "unknown"
}
