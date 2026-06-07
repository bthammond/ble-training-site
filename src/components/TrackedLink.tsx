"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { trackEvent } from "@/lib/track-event";

/**
 * Drop-in <Link> wrapper that fires a GA4 event before navigating.
 * Use from server components by lifting just the Link wrapper into
 * a client boundary — keeps the rest of the page server-rendered.
 *
 * The event fires on click, not on navigation completion, so we
 * capture intent even if the route fails to load.
 */
export default function TrackedLink({
  href,
  event,
  props,
  className,
  children,
}: {
  href: string;
  event: string;
  props?: Record<string, string | number | boolean | null>;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent(event, props)}
    >
      {children}
    </Link>
  );
}
