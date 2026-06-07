"use client";

/**
 * Client-side funnel-event tracker that emits GA4 events via the
 * gtag global already initialized in src/app/layout.tsx.
 *
 * Why not @vercel/analytics? This site uses GA4 (the analytics layer
 * the rest of the marketing org reports against), not Vercel Web
 * Analytics. Keeping events in one place means the funnel dashboard
 * doesn't fragment.
 *
 * Naming convention: `<surface>_<thing>_<verb_past>`. Examples:
 *   scorecard_started
 *   scorecard_completed
 *   growth_call_clicked
 *
 * Mirrors training-gen/lib/track-event.ts (which uses Vercel Analytics).
 * Same names + props shape on both so cross-site funnel reports stay
 * consistent.
 */

type GtagProps = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

const recentlyFired = new Map<string, number>();
const DEDUPE_WINDOW_MS = 500;

export function trackEvent(name: string, props?: GtagProps): void {
  const key = `${name}::${JSON.stringify(props ?? {})}`;
  const now = Date.now();
  const last = recentlyFired.get(key);
  if (last && now - last < DEDUPE_WINDOW_MS) return;
  recentlyFired.set(key, now);
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, props ?? {});
    }
  } catch {
    /* swallow — analytics never breaks the flow */
  }
}
