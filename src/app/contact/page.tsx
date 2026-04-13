import type { Metadata } from "next";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { LOCATIONS, CONTACT, directionsUrl } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Contact BLE Training — Call 1-877-TRY-BLE-1",
  description:
    "Reach BLE Training toll-free at 1-877-879-2531 or info@ble.training. Six authorized testing centers: Tyler TX, Clarks Summit PA, Toledo OH, Lincoln NE, Omaha NE, Topeka KS.",
  keywords: [
    "Contact BLE Training",
    "1-877-TRY-BLE-1",
    "Book a Consultation",
    "Corporate Training Inquiry",
    "Proctored Testing Appointment",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* HERO STRIP */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 pb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Get in Touch
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-black">
            Contact BLE Training
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-crimson" />
          <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            Call our toll-free line, send an email, or submit the form below.
            A member of our team responds within one business day.
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
              Send us a message
            </h2>
            <div className="mt-4 h-px w-24 bg-crimson" />
            <p className="mt-4 text-black/70 leading-relaxed">
              Share a little context and we&apos;ll be in touch within one
              business day to schedule a confidential 30-minute call.
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
              <ul className="mt-6 space-y-5">
                {LOCATIONS.map((loc) => (
                  <li key={loc.slug} className="border-t-2 border-crimson pt-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-crimson" />
                      <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                        {loc.city}, {loc.state}
                      </span>
                    </div>
                    <address className="mt-2 text-sm text-black not-italic leading-relaxed">
                      {loc.address}
                    </address>
                    <a
                      href={directionsUrl(loc.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-black underline underline-offset-4 decoration-2 hover:text-crimson hover:decoration-crimson transition-colors"
                    >
                      Get Directions
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
