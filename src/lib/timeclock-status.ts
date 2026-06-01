/**
 * Server-side fetcher for the BLE TimeClock public locations-status
 * endpoint that powers the live "Open Now / Closed" badges and today's
 * hours on /locations.
 *
 * Strictly server-side: imports a possibly-secret X-Api-Key from
 * env. The result is a JSON-serializable map keyed by training-site
 * slug ("tyler-tx", "clarks-summit-pa", …), so the page can render
 * server-side and downstream client components stay simple.
 *
 * Fail-soft: any error (timeout, 5xx, malformed payload) returns an
 * empty map so the page falls back to the static weekly schedule
 * defined in lib/locations.ts. A TimeClock outage should never break
 * the marketing site.
 *
 * Caching: uses Next.js ISR (next.revalidate = 300) so each unique
 * render is cached at the edge for 5 minutes and refreshed in the
 * background. Visitors get sub-100ms reads; TimeClock sees one hit
 * per 5 min per region.
 */

export type LiveLocationDay = {
  date: string;
  is_closed_date: boolean;
  hours_label: string | null;
  open_at_utc: string | null;
  close_at_utc: string | null;
};

export type LiveLocationStatus = {
  id: number;
  name: string;
  city: string;
  state: string;
  address_line: string | null;
  timezone: string;
  today: LiveLocationDay & { is_open_now: boolean };
  week: LiveLocationDay[];
};

// ── Public-hours clamp ─────────────────────────────────────────────
// The schedule in BLE TimeClock reflects when employees are on-site
// (proctors arrive early to set up the testing rooms, stay late to
// reset). Visitors should never see hours that imply the doors are
// open during prep/breakdown time. The static schedule in
// lib/locations.ts encodes the public-facing window per location
// (8 AM – 5 PM most centers, 9 AM – 6 PM for Lincoln + Topeka). We
// clamp the live day's start/end to that window before rendering.

function parseHM12(label: string): number {
  // "7:15 AM" or "5:00 PM" → minutes since local midnight.
  const m = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return Number.NaN;
  let h = Number(m[1]);
  const min = Number(m[2]);
  const isPm = m[3].toUpperCase() === "PM";
  if (h === 12) h = 0;
  if (isPm) h += 12;
  return h * 60 + min;
}

function parseHM24(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function formatHM12(mins: number): string {
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  const period = h24 >= 12 ? "PM" : "AM";
  const displayH = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${displayH}:${m.toString().padStart(2, "0")} ${period}`;
}

function clampDay(
  day: LiveLocationDay,
  publicOpenMin: number,
  publicCloseMin: number,
): LiveLocationDay {
  if (
    day.is_closed_date ||
    !day.hours_label ||
    !day.open_at_utc ||
    !day.close_at_utc
  ) {
    return day;
  }
  const parts = day.hours_label.split(/\s*[–—-]\s*/); // –, —, or -
  if (parts.length !== 2) return day;
  const liveStart = parseHM12(parts[0]);
  const liveEnd = parseHM12(parts[1]);
  if (Number.isNaN(liveStart) || Number.isNaN(liveEnd)) return day;

  const effectiveStart = Math.max(liveStart, publicOpenMin);
  const effectiveEnd = Math.min(liveEnd, publicCloseMin);

  if (effectiveEnd <= effectiveStart) {
    return {
      ...day,
      hours_label: null,
      open_at_utc: null,
      close_at_utc: null,
    };
  }
  // Shift the UTC instants by the same number of minutes we clamped
  // off the local window. Safe within a single day — no DST edges
  // are crossed by a sub-day shift.
  const startShiftMs = (effectiveStart - liveStart) * 60_000;
  const endShiftMs = (effectiveEnd - liveEnd) * 60_000;
  return {
    ...day,
    hours_label: `${formatHM12(effectiveStart)} – ${formatHM12(effectiveEnd)}`,
    open_at_utc: new Date(
      Date.parse(day.open_at_utc) + startShiftMs,
    ).toISOString(),
    close_at_utc: new Date(
      Date.parse(day.close_at_utc) + endShiftMs,
    ).toISOString(),
  };
}

/**
 * Clamp a live status against the public-facing schedule from
 * lib/locations.ts. Hides employee-only prep/breakdown time from
 * visitors. Returns the input unchanged if the location has no
 * non-trivial public window.
 */
export function clampToPublicHours(
  live: LiveLocationStatus,
  publicSchedule: { opens: string; closes: string },
): LiveLocationStatus {
  const publicOpenMin = parseHM24(publicSchedule.opens);
  const publicCloseMin = parseHM24(publicSchedule.closes);
  if (
    Number.isNaN(publicOpenMin) ||
    Number.isNaN(publicCloseMin) ||
    publicCloseMin <= publicOpenMin
  ) {
    return live;
  }
  const clampedToday = clampDay(live.today, publicOpenMin, publicCloseMin);
  const nowMs = Date.now();
  const isOpenNow =
    !!clampedToday.open_at_utc &&
    !!clampedToday.close_at_utc &&
    !clampedToday.is_closed_date &&
    nowMs >= Date.parse(clampedToday.open_at_utc) &&
    nowMs < Date.parse(clampedToday.close_at_utc);
  return {
    ...live,
    today: { ...clampedToday, is_open_now: isOpenNow },
    week: live.week.map((d) => clampDay(d, publicOpenMin, publicCloseMin)),
  };
}

type ApiResponse = {
  generated_at: string;
  locations: LiveLocationStatus[];
};

const REVALIDATE_SECONDS = 300; // 5 min
const FETCH_TIMEOUT_MS = 3000;

/**
 * US state name → 2-letter postal code. Covers every state TimeClock
 * stores. The training-site slug convention uses the 2-letter code
 * ("toledo-oh"), but TimeClock stores the full state name ("Ohio"), so
 * we translate before building the lookup key.
 */
const STATE_CODE: Record<string, string> = {
  alabama: "AL",
  alaska: "AK",
  arizona: "AZ",
  arkansas: "AR",
  california: "CA",
  colorado: "CO",
  connecticut: "CT",
  delaware: "DE",
  florida: "FL",
  georgia: "GA",
  hawaii: "HI",
  idaho: "ID",
  illinois: "IL",
  indiana: "IN",
  iowa: "IA",
  kansas: "KS",
  kentucky: "KY",
  louisiana: "LA",
  maine: "ME",
  maryland: "MD",
  massachusetts: "MA",
  michigan: "MI",
  minnesota: "MN",
  mississippi: "MS",
  missouri: "MO",
  montana: "MT",
  nebraska: "NE",
  nevada: "NV",
  "new hampshire": "NH",
  "new jersey": "NJ",
  "new mexico": "NM",
  "new york": "NY",
  "north carolina": "NC",
  "north dakota": "ND",
  ohio: "OH",
  oklahoma: "OK",
  oregon: "OR",
  pennsylvania: "PA",
  "rhode island": "RI",
  "south carolina": "SC",
  "south dakota": "SD",
  tennessee: "TN",
  texas: "TX",
  utah: "UT",
  vermont: "VT",
  virginia: "VA",
  washington: "WA",
  "west virginia": "WV",
  wisconsin: "WI",
  wyoming: "WY",
};

/**
 * Convert a TimeClock {city, state} pair to the training-site slug
 * convention ("Clarks Summit" + "Pennsylvania" → "clarks-summit-pa")
 * so the caller can look up by slug. Accepts both full state names
 * (which is what TimeClock currently stores) and 2-letter codes
 * (defensive — if the DB ever migrates).
 */
function toSlug(city: string, state: string): string {
  const slugCity = city
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const raw = state.toLowerCase().trim();
  const code = raw.length === 2 ? raw : (STATE_CODE[raw] ?? raw);
  return `${slugCity}-${code.toLowerCase()}`;
}

export async function getLiveStatusMap(): Promise<Map<string, LiveLocationStatus>> {
  const base = process.env.TIMECLOCK_API_URL;
  if (!base) {
    // Not configured yet — return empty so the page falls back to
    // the static schedule. Logged here for ops awareness during
    // initial rollout.
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[timeclock-status] TIMECLOCK_API_URL not set — returning empty map (static fallback will render)",
      );
    }
    return new Map();
  }
  const url = `${base.replace(/\/$/, "")}/api/public/locations/status`;
  const apiKey = process.env.TIMECLOCK_API_KEY;
  const headers: Record<string, string> = { Accept: "application/json" };
  if (apiKey) headers["X-Api-Key"] = apiKey;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const res = await fetch(url, {
      headers,
      signal: controller.signal,
      next: { revalidate: REVALIDATE_SECONDS },
    });
    clearTimeout(timer);
    if (!res.ok) {
      console.warn(
        `[timeclock-status] upstream ${res.status} ${res.statusText}`,
      );
      return new Map();
    }
    const data = (await res.json()) as ApiResponse;
    if (!data || !Array.isArray(data.locations)) {
      console.warn("[timeclock-status] malformed payload");
      return new Map();
    }
    const map = new Map<string, LiveLocationStatus>();
    for (const loc of data.locations) {
      map.set(toSlug(loc.city, loc.state), loc);
    }
    return map;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`[timeclock-status] fetch failed: ${msg}`);
    return new Map();
  }
}
