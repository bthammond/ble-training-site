"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if user hasn't already consented
    const consent = document.cookie.match(/(?:^|; )ble_cookie_consent=([^;]*)/);
    if (!consent) {
      // Small delay so it doesn't flash on initial load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `ble_cookie_consent=accepted; expires=${expires}; path=/; SameSite=Lax`;
    setVisible(false);
  };

  const decline = () => {
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `ble_cookie_consent=declined; expires=${expires}; path=/; SameSite=Lax`;
    setVisible(false);
    // Disable GA4 if declined
    if (typeof window !== "undefined") {
      (window as unknown as Record<string, unknown>)[`ga-disable-G-1JGH1MD3XZ`] = true;
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 text-white p-4 md:p-6 border-t-2 border-crimson">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 text-sm leading-relaxed">
          <p>
            We use cookies to improve your experience and analyze site traffic.
            By clicking &ldquo;Accept&rdquo; you consent to our use of cookies.{" "}
            <Link
              href="/cookies"
              className="text-crimson underline hover:text-crimson-soft"
            >
              Cookie Policy
            </Link>{" "}
            &middot;{" "}
            <Link
              href="/privacy"
              className="text-crimson underline hover:text-crimson-soft"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-6 py-2.5 bg-crimson text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
