"use client";

import { useEffect, useState } from "react";
import { isOpenNow, type Schedule } from "@/lib/locations";

export default function OpenClosedBadge({ schedule }: { schedule: Schedule }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenNow(schedule));
  }, [schedule]);

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
