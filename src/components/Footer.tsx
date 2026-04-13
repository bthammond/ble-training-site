import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { LOCATIONS, CONTACT } from "@/lib/locations";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 border-t-4 border-crimson text-black mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="inline-flex items-center mb-5" aria-label="BLE Training home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/BLE-Training---black-letters.png"
              alt="BLE Training — Authorized Professional Testing & Certification Centers"
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed text-black/70">
            Corporate training, proctored testing, and SMB consulting — with a
            niche focus on family business and entrepreneurship.
          </p>
          <div className="mt-5 space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <Phone className="h-4 w-4 text-crimson mt-0.5" />
              <span>
                <a
                  href={CONTACT.tollFreeHref}
                  className="block text-base font-bold text-black hover:text-crimson transition-colors"
                >
                  {CONTACT.tollFreeDisplay}
                </a>
                <span className="block text-xs text-black/60 tracking-wider">
                  Toll-Free · {CONTACT.tollFreeVanity}
                </span>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-crimson" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold text-black hover:text-crimson transition-colors"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-black mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-black/70">
            <li><Link href="/#services" className="hover:text-crimson">Corporate Training</Link></li>
            <li><Link href="/testing" className="hover:text-crimson">Proctored Testing</Link></li>
            <li><Link href="/consulting" className="hover:text-crimson">SMB Consulting</Link></li>
            <li><Link href="/consulting#family" className="hover:text-crimson">Family Business</Link></li>
            <li><Link href="/consulting#entrepreneurship" className="hover:text-crimson">Entrepreneurship</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-black mb-4">Testing Centers</h4>
          <ul className="space-y-2 text-sm text-black/70">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/testing#${loc.slug}`}
                  className="flex items-center gap-2 hover:text-crimson"
                >
                  <MapPin className="h-3.5 w-3.5 text-crimson" />
                  {loc.city}, {loc.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-black mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-black/70">
            <li><Link href="/#about" className="hover:text-crimson">About</Link></li>
            <li><Link href="/#stories" className="hover:text-crimson">Success Stories</Link></li>
            <li><Link href="/contact" className="hover:text-crimson">Contact</Link></li>
            <li><Link href="/contact" className="hover:text-crimson">Book a Consultation</Link></li>
          </ul>
        </div>
      </div>

      {/* CENTER HOURS BAND — white text on black; hours vary by city */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-crimson" />
            <h4 className="font-serif text-xl text-white">Center Hours</h4>
            <span className="text-xs text-white/60 uppercase tracking-widest">
              Hours vary by location
            </span>
          </div>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-sm">
            {LOCATIONS.map((loc) => (
              <li
                key={loc.slug}
                className="border-t border-white/15 pt-3 flex flex-col"
              >
                <span className="font-bold text-white uppercase tracking-wider text-xs">
                  {loc.city}, {loc.state}
                </span>
                <span className="text-white/90 mt-0.5">
                  {loc.schedule.openDaysShort} · {loc.schedule.display}
                </span>
                <span className="text-white/60 text-xs mt-0.5">
                  {loc.schedule.closedDaysShort}: Closed
                </span>
              </li>
            ))}
          </ul>
          <p
            className="mt-6 italic text-white/70"
            style={{ fontSize: "12px" }}
          >
            Hours are subject to change based on exam scheduling. Call{" "}
            <a
              href={CONTACT.tollFreeHref}
              className="font-bold text-white hover:text-crimson transition-colors not-italic"
            >
              {CONTACT.tollFreeDisplay}
            </a>{" "}
            to confirm availability.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black text-white/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {year} BLE Training. All rights reserved.</p>
          <p className="flex items-center gap-6">
            <Link href="#" className="hover:text-crimson">Privacy</Link>
            <Link href="#" className="hover:text-crimson">Terms</Link>
            <Link href="#" className="hover:text-crimson">Accessibility</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
