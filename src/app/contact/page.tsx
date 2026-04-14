import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { LOCATIONS, CONTACT } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Contact BLE Training",
  description:
    "Talk to the BLE Training team. Schedule a consultation, book a test, or ask about our advisory and training services.",
  keywords: [
    "Contact BLE Training",
    "1-877-TRY-BLE-1",
    "Corporate Training Inquiry",
    "Proctored Testing Appointment",
    "Owner Advisory Inquiry",
  ],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Get in Touch
          </span>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl text-white leading-[1.05]">
            Let&apos;s talk.
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-crimson" />
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re ready to get started or still figuring out
            whether we&apos;re the right fit — a 30-minute conversation is
            always the right first step.
          </p>
        </div>
      </section>

      {/* PRIMARY CONTACT BAND */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-t-4 border-crimson shadow-sm p-8 text-center">
            <Phone className="mx-auto h-8 w-8 text-crimson" strokeWidth={1.75} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-black/60">
              Toll-Free
            </p>
            <a
              href={CONTACT.tollFreeHref}
              className="mt-2 block font-serif text-3xl md:text-4xl text-black hover:text-crimson transition-colors"
            >
              {CONTACT.tollFreeDisplay}
            </a>
            <p className="mt-1 text-sm text-black/60 tracking-wider">
              {CONTACT.tollFreeVanity}
            </p>
          </div>

          <div className="bg-white border-t-4 border-crimson shadow-sm p-8 text-center">
            <Mail className="mx-auto h-8 w-8 text-crimson" strokeWidth={1.75} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-black/60">
              Email
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-2 block font-serif text-2xl md:text-3xl text-black hover:text-crimson transition-colors break-all"
            >
              {CONTACT.email}
            </a>
            <p className="mt-1 text-sm text-black/60">
              Response within one business day
            </p>
          </div>
        </div>
      </section>

      {/* FORM + LOCATIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <AnimateOnScroll className="lg:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl text-black">
              What are you working on?
            </h2>
            <div className="mt-4 h-px w-24 bg-crimson" />
            <p className="mt-4 text-black/70 leading-relaxed">
              Tell us a bit about your situation and we&apos;ll be in touch
              within one business day.
            </p>
            <div className="mt-8">
              <LeadForm />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120} className="lg:col-span-1">
            <div className="sticky top-32">
              <h2 className="font-serif text-2xl text-black">
                Testing Centers
              </h2>
              <div className="mt-4 h-px w-24 bg-crimson" />
              <ul className="mt-6 space-y-3">
                {LOCATIONS.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="group flex items-center gap-3 border-t-2 border-crimson pt-3 hover:bg-slate-50 transition-colors -mx-2 px-2 py-1"
                    >
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-crimson" />
                      <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                          {loc.city}, {loc.state}
                        </span>
                        <span className="block text-xs text-black/60 mt-0.5">
                          {loc.schedule.openDaysShort} · {loc.schedule.display}
                        </span>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-black/30 group-hover:text-crimson transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/locations"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors"
              >
                View all locations <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
