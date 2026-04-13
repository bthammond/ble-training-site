"use client";

import { useState } from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";
import { todayHoursDisplay, HOURS_DISCLAIMER, type Schedule } from "@/lib/locations";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

export default function ExpandableHours({
  schedule,
  hideDisclaimer,
}: {
  schedule: Schedule;
  hideDisclaimer?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const todayIndex = new Date().getDay();
  const todayDisplay = todayHoursDisplay(schedule);

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
          {DAYS.map((day, i) => {
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
          })}
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
