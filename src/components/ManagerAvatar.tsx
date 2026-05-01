import Image from "next/image";
import type { Manager } from "@/lib/locations";

type Props = {
  manager: Manager;
  size?: "sm" | "md" | "lg";
};

const SIZES = {
  sm: { box: "h-12 w-12", text: "text-sm" },
  md: { box: "h-20 w-20", text: "text-2xl" },
  lg: { box: "h-32 w-32 md:h-36 md:w-36", text: "text-4xl md:text-5xl" },
} as const;

/**
 * Manager headshot. Renders a real photo if `manager.photo` is set,
 * otherwise a crimson circle with the manager's initials in white serif.
 * Same component is used in the sidebar (sm), a directory card (md),
 * and the dedicated team section (lg) to keep the visual identity consistent
 * once real photos arrive — just drop the file in /public and add `photo`.
 */
export default function ManagerAvatar({ manager, size = "md" }: Props) {
  const s = SIZES[size];

  if (manager.photo) {
    return (
      <div
        className={`${s.box} relative overflow-hidden rounded-full ring-4 ring-crimson/20 shrink-0`}
      >
        <Image
          src={manager.photo}
          alt={`${manager.name}, ${manager.title} at BLE Training`}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-label={`${manager.name} — photo coming soon`}
      className={`${s.box} ${s.text} shrink-0 flex items-center justify-center rounded-full bg-crimson text-white font-serif font-bold ring-4 ring-crimson/20`}
    >
      {manager.initials}
    </div>
  );
}
