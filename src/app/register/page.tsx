import type { Metadata } from "next";
import Link from "next/link";
import { IdCard, Clock, Lock, ExternalLink, Phone } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PartnerCard from "@/components/PartnerCard";
import { PARTNERS } from "@/lib/partners";
import {
  LOCATIONS,
  CONTACT,
  directionsUrl,
  telHrefWithExt,
} from "@/lib/locations";

export const metadata: Metadata = {
  title: "Authorized Partner Hub — Official Exam Registration",
  description:
    "Register for your exam through BLE Training's authorized proctored testing delivery partners — Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity.",
  keywords: [
    "Authorized Testing Center Tyler TX",
    "Official Exam Registration Hub",
    "Authorized National Test Delivery Center",
    "Proctored Testing Partners",
    "Pearson VUE Registration",
    "Prometric Registration",
    "PSI Exam Scheduling",
    "Kryterion Testing",
    "ETS Exam Registration",
  ],
  openGraph: {
    title: "Authorized Partner Hub | BLE Training",
    description:
      "Select your authorized provider below to access secure registration at a BLE Training test center.",
  },
};

const REQUIREMENTS = [
  {
    icon: IdCard,
    title: "Two Forms of Valid ID",
    desc: "A government-issued photo ID (Driver's License or Passport) plus a second form of ID — credit card with signature, Social Security card, or similar accepted secondary ID.",
  },
  {
    icon: Clock,
    title: "Arrive 15 Minutes Early",
    desc: "Plan to arrive at your BLE Training center at least 15 minutes before your scheduled appointment so check-in, biometrics, and locker storage don't compress your start time.",
  },
  {
    icon: Lock,
    title: "Use the Secure Lockers",
    desc: "Phones, smartwatches, wallets, and any personal belongings not permitted by your exam provider must be stored in our secure lockers before entering the testing room.",
  },
];

export default function RegisterPage() {
  return (
    <>
      {/* HERO — image with massive white serif overlay */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/home-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 md:py-48 text-center">
          <nav aria-label="Breadcrumb" className="text-xs text-white/80 mb-6">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white">Register</li>
            </ol>
          </nav>
          <h1 className="font-serif font-bold text-white uppercase tracking-tight leading-[0.9] text-6xl md:text-8xl lg:text-9xl">
            Registration
            <br />
            Hub
          </h1>
          <div className="mt-8 mx-auto h-1 w-24 bg-crimson" />
          <p className="mt-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Select your authorized provider below to begin your secure exam
            registration.
          </p>
        </div>
      </section>

      {/* PARTNER GRID — white cards on slate-50 */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Authorized Partners
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-black">
                Eight official testing partners.
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((p, i) => (
              <AnimateOnScroll key={p.slug} delay={i * 60}>
                <PartnerCard partner={p} />
              </AnimateOnScroll>
            ))}
          </div>

          <p className="mt-10 text-xs text-black/70 text-center max-w-3xl mx-auto leading-relaxed">
            Registration opens in a new tab. A BLE Training reminder appears
            here so you have the center details on hand when you return.
          </p>
        </div>
      </section>

      {/* CANDIDATE SUCCESS CHECKLIST — 4-column icon cards */}
      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-black">
                Candidate Success Checklist
              </span>
              <h2 className="mt-4 font-serif font-bold uppercase tracking-tight text-4xl md:text-5xl text-crimson">
                Test Day Requirements
              </h2>
              <div className="mx-auto mt-6 h-1 w-20 bg-crimson" />
              <p className="mt-6 text-black/70 leading-relaxed">
                Arrive prepared. The four essentials every candidate needs
                before sitting for a proctored exam at a BLE Training center.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {REQUIREMENTS.map((r, i) => {
              const Icon = r.icon;
              return (
                <AnimateOnScroll key={r.title} delay={i * 70}>
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center">
                      <Icon
                        className="h-14 w-14 text-crimson"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-bold text-black uppercase tracking-wide">
                      {r.title}
                    </h3>
                    <div className="mx-auto mt-3 h-px w-10 bg-crimson" />
                    <p className="mt-4 text-sm text-black/75 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATIONS — simple text list with Get Directions links */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <AnimateOnScroll>
            <div className="border-b-2 border-black pb-5 mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Our Testing Centers
              </span>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl text-black">
                Six locations nationwide.
              </h2>
            </div>
          </AnimateOnScroll>

          <ul className="divide-y divide-slate-300">
            {LOCATIONS.map((loc) => (
              <li
                key={loc.slug}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-4"
              >
                <div className="flex-1">
                  <span className="font-serif text-lg text-black">
                    {loc.city}, {loc.state}
                  </span>
                  <address className="ml-0 md:ml-3 text-sm text-black/70 not-italic inline">
                    {loc.address}
                  </address>
                  <p className="mt-1 text-sm flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-crimson" />
                    <a
                      href={telHrefWithExt(loc.extension)}
                      className="text-black hover:text-crimson transition-colors"
                    >
                      {CONTACT.tollFreeDisplay}
                      <span className="mx-1.5 text-black/40">·</span>
                      Ext: <span className="font-bold">{loc.extension}</span>
                    </a>
                  </p>
                </div>
                <a
                  href={directionsUrl(loc.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-black underline underline-offset-4 decoration-2 hover:text-crimson hover:decoration-crimson transition-colors"
                >
                  Get Directions
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
