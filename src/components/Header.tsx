"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const UTILITY_LINKS = [
  { href: "/contact", label: "Contact" },
  { href: "/locations", label: "Locations" },
];

const NAV_LINKS = [
  { href: "/how-we-work", label: "How We Work" },
  { href: "/consulting", label: "Business Consulting" },
  { href: "/locations", label: "Testing Centers" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Tier 1 — thin crimson utility strip */}
      <div className="bg-crimson text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-end h-8 text-xs">
          <ul className="flex items-center gap-6">
            {UTILITY_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white font-semibold hover:underline underline-offset-2"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tier 2 — white header with black logo + black bold nav */}
      <div
        className={`bg-white border-b border-slate-200 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" aria-label="BLE Training home">
            <Image
              src="/BLE-Training---black-letters.png"
              alt="BLE Training"
              width={280}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-black hover:text-crimson transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-black hover:text-crimson transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/scorecard"
              className="inline-flex items-center justify-center border-2 border-crimson px-5 py-[10px] text-xs font-bold uppercase tracking-wider text-crimson hover:bg-crimson hover:text-white transition-colors"
            >
              Free Scorecard
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center bg-crimson px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Schedule a Test
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden text-black p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <ul className="px-6 py-4 flex flex-col gap-3 text-sm uppercase tracking-wider font-bold">
              <li>
                <Link
                  href="/scorecard"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-crimson hover:text-crimson-soft"
                >
                  Free Scorecard →
                </Link>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-black hover:text-crimson"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-black hover:text-crimson"
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-full bg-crimson px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
                >
                  Schedule a Test
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
