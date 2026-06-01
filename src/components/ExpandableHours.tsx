"use client";

import { useState } from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";
import { todayHoursDisplay, HOURS_DISCLAIMER, type Schedule } from "@/lib/locations";
import type { LiveLocationStatus } from "@/lib/timeclock-status";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

/**
 * "Today: 8:00 AM – 5:00 PM" line, expandable into the 7-day breakdown.
 *
 * Prefers live BLE TimeClock data when present:
 *   - today's line uses `live.today.hours_label`
 *   - the expanded 7-day breakdown uses `live.week[]`
 * Falls back to the static weekly schedule when live data is missing
 * (TimeClock unreachable, no shifts scheduled, or component used
 * standalone).
 */
export default function ExpandableHours({
  schedule,
  live,
  hideDisclaimer,
}: {
  schedule: Schedule;
  live?: LiveLocationStatus;
  hideDisclaimer?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const todayIndex = new Date().getDay();
  const todayDisplay = live
    ? live.today.hours_label ?? "Closed"
    : todayHoursDisplay(schedule);

  return (
    <div className="mt-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-2 text-sm text-black transition-colors hover:text-crimson"
      >
        <Clock className="h-4 w-4 shrink-0 text-crimson" />
        <span>
          Today: <span className="font-semibold">{todayDisplay}</span>
        </span>
        {expanded ? (
          <ChevronUp className="ml-auto h-4 w-4 text-black/40" />
        ) : (
          <ChevronDown className="ml-auto h-4 w-4 text-black/40" />
        )}
      </button>

      {expanded && (
        <div className="mt-2 ml-6 space-y-1 border-l-2 border-slate-100 pl-3">
          {live ? renderLiveWeek(live) : renderStaticWeek(schedule, todayIndex)}
        </div>
      )}

      {!hideDisclaimer && (
        <p className="mt-2 italic text-black/60" style={{ fontSize: "12px" }}>
          {HOURS_DISCLAIMER}
        </p>
      )}
    </div>
  );
}

function renderStaticWeek(schedule: Schedule, todayIndex: number) {
  return DAYS.map((day, i) => {
    const isOpen = schedule.openDays.includes(day);
    return (
      <div
        key={day}
        className={`flex justify-between text-xs ${
          i === todayIndex ? "font-bold text-crimson" : "text-black/70"
        }`}
      >
        <span>{day}</span>
        <span>{isOpen ? schedule.display : "Closed"}</span>
      </div>
    );
  });
}

function renderLiveWeek(live: LiveLocationStatus) {
  return live.week.map((day, i) => {
    // The live response orders week[0] = today in the location's local
    // calendar; map back to a weekday name from the date string for
    // display.
    const dt = new Date(`${day.date}T12:00:00Z`); // noon UTC dodges DST edges
    const dayName = DAYS[dt.getUTCDay()];
    return (
      <div
        key={day.date}
        className={`flex justify-between text-xs ${
          i === 0 ? "font-bold text-crimson" : "text-black/70"
        }`}
      >
        <span>{dayName}</span>
        <span>
          {day.is_closed_date
            ? "Closed (holiday)"
            : day.hours_label ?? "Closed"}
        </span>
      </div>
    );
  });
}
