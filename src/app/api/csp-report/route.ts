import { NextResponse } from "next/server";

import { checkRateLimit, clientIpFromHeaders } from "@/lib/rate-limit";

/**
 * CSP violation report sink. Browsers POST here when a directive in
 * the report-only header is hit. We log to stdout (so Vercel runtime
 * logs surface it) under a clearly-greppable prefix.
 *
 * Per-IP rate-limited at 30/hr because a misbehaving page can spam
 * thousands of reports per pageview. Fail-open: a rate-limit outage
 * mustn't drop legitimate reports during the tuning window.
 */
export async function POST(request: Request) {
  const ip = clientIpFromHeaders(request.headers);
  const rl = await checkRateLimit(`csp-report:${ip}`, {
    max: 30,
    windowMs: 60 * 60 * 1000,
  });
  if (!rl.allowed) {
    return new NextResponse(null, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new NextResponse(null, { status: 400 });
  }

  // Browsers wrap the report under "csp-report" for the old format
  // and use the bare body for the new Reporting API. Flatten both.
  const report =
    body && typeof body === "object" && "csp-report" in body
      ? (body as Record<string, unknown>)["csp-report"]
      : body;

  console.log(
    "[csp-report]",
    JSON.stringify({
      ts: new Date().toISOString(),
      ip,
      ua: request.headers.get("user-agent") ?? null,
      report,
    }),
  );

  // Browsers ignore the response body; 204 keeps the wire quiet.
  return new NextResponse(null, { status: 204 });
}
