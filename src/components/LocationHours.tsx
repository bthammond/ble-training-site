import { Clock } from "lucide-react";
import { HOURS_DISCLAIMER, type Schedule } from "@/lib/locations";

type Props = {
  schedule: Schedule;
  /** omit the disclaimer body (default: show) */
  hideDisclaimer?: boolean;
};

/**
 * Hours + explicit closed-days line + 12px italic disclaimer.
 * Phone/extension lives in <LocationContact/> and is rendered above this.
 */
export default function LocationHours({ schedule, hideDisclaimer }: Props) {
  return (
    <div className="mt-3">
      <div className="flex items-start gap-2 text-sm text-black">
        <Clock className="h-4 w-4 mt-0.5 shrink-0 text-crimson" />
        <div className="leading-relaxed">
          <p>
            <span className="font-semibold text-black">
              {schedule.openDaysShort}:
            </span>{" "}
            {schedule.display}
          </p>
          <p className="text-black/80">
            <span className="font-semibold text-black">
              {schedule.closedDaysShort}:
            </span>{" "}
            Closed
          </p>
        </div>
      </div>

      {!hideDisclaimer && (
        <p className="mt-2 italic text-black" style={{ fontSize: "12px" }}>
          {HOURS_DISCLAIMER}
        </p>
      )}
    </div>
  );
}
