"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const UTILITY_LINKS = [
  { href: "/contact", label: "Contact" },
  { href: "/locations", label: "Locations" },
];

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/register", label: "Register" },
  { href: "/consulting", label: "Consulting" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
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

      {/* Tier 2 — dark header with white logo + white bold nav */}
      <div
        className={`bg-black transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" aria-label="BLE Training home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/BLE-Training---white-letters.png"
              alt="BLE Training — Authorized Professional Testing & Certification Centers"
              className="h-12 w-auto"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white hover:text-crimson transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson hover:border-crimson transition-colors"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden border-t border-white/10 bg-black">
            <ul className="px-6 py-4 flex flex-col gap-3 text-sm uppercase tracking-wider font-bold">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-white hover:text-crimson"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-full border-2 border-white bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson hover:border-crimson transition-colors"
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
