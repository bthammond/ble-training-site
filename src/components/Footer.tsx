import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { LOCATIONS, CONTACT } from "@/lib/locations";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 border-t-4 border-crimson text-black mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="inline-flex items-center mb-5" aria-label="BLE Training home">
            <Image
              src="/BLE-Training---black-letters.png"
              alt="BLE Training"
              width={200}
              height={40}
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
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">
              Stay in the loop
            </p>
            <NewsletterSignup />
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
          <a
            href="https://www.redcross.org/take-a-class/bls?latitude=41.3117471&longitude=-75.83741739999999&searchtype=class&zip=Wyoming%2C%20PA%2018644%2C%20USA&zipcode=18644"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-4 py-2 text-xs font-bold text-red-700 hover:bg-red-100 transition-colors"
          >
            <span>🏥</span>
            Red Cross BLS / CPR / First Aid
          </a>
        </div>

        <div>
          <h4 className="font-serif text-lg text-black mb-4">Testing Centers</h4>
          <ul className="space-y-2 text-sm text-black/70">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="flex items-center gap-2 hover:text-crimson"
                >
                  <MapPin className="h-3.5 w-3.5 text-crimson" />
                  {loc.city}, {loc.state}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/locations"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-crimson hover:text-crimson-soft transition-colors"
          >
            Hours &amp; details <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div>
          <h4 className="font-serif text-lg text-black mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-black/70">
            <li><Link href="/about" className="hover:text-crimson">About</Link></li>
            <li><Link href="/why-ble" className="hover:text-crimson">Why BLE Training</Link></li>
            <li><Link href="/blog" className="hover:text-crimson">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-crimson">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-crimson">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white text-black/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {year} BLE Training. All rights reserved.</p>
          <p className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-crimson">Privacy</Link>
            <Link href="/cookies" className="hover:text-crimson">Cookies</Link>
            <Link href="/terms" className="hover:text-crimson">Terms</Link>
            <Link href="/accessibility-statement" className="hover:text-crimson">Accessibility</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
