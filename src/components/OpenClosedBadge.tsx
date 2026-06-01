"use client";

import { useEffect, useState } from "react";
import { isOpenNow, type Schedule } from "@/lib/locations";
import type { LiveLocationStatus } from "@/lib/timeclock-status";

/**
 * "Open Now / Closed" pill on a location card.
 *
 * Prefers live BLE TimeClock schedule data when available (the
 * server-fetched `live` prop). Falls back to the static weekly
 * schedule when TimeClock is unreachable or the location has no
 * shifts scheduled today.
 *
 * The browser computes is-open against `now()` and the UTC open/close
 * windows in the live payload — never against the 5-min cached
 * `is_open_now` flag, which can drift past its window as the cache
 * ages.
 */
export default function OpenClosedBadge({
  schedule,
  live,
}: {
  schedule: Schedule;
  live?: LiveLocationStatus;
}) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    if (live) {
      const today = live.today;
      if (today.is_closed_date || !today.open_at_utc || !today.close_at_utc) {
        setOpen(false);
        return;
      }
      const nowMs = Date.now();
      setOpen(
        nowMs >= Date.parse(today.open_at_utc) &&
          nowMs < Date.parse(today.close_at_utc),
      );
      return;
    }
    setOpen(isOpenNow(schedule));
  }, [schedule, live]);

  if (open === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
        open
          ? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
          : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${open ? "bg-green-500" : "bg-red-500"}`} />
      {open ? "Open Now" : "Closed"}
    </span>
  );
}
