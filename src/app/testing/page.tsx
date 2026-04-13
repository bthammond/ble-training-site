import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Clock, Award, ArrowRight, MapPin, Search } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Proctored Testing Centers — 6 U.S. Locations",
  description:
    "Secure proctored testing across Tyler TX, Clarks Summit PA, Toledo OH, Lincoln NE, Omaha NE, and Topeka KS. Schedule your professional exam at BLE Training.",
  keywords: [
    "Proctored Testing Centers",
    "Professional Exam Proctoring",
    "Certification Testing",
    "Tyler TX Testing Center",
    "Omaha Testing Center",
    "Topeka Testing Center",
  ],
};

export default function TestingPage() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #9e1b32, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-crimson/40 bg-crimson/10 px-4 py-1.5 text-xs font-medium text-crimson-soft uppercase tracking-wide">
            <ShieldCheck className="h-3.5 w-3.5" />
            Proctored Testing Hub
          </span>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] text-white">
            Testing centers you can <span className="text-crimson italic">rely on.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">
            Six professionally-staffed locations deliver a secure, quiet, and
            accredited testing environment for certification and licensure
            exams nationwide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: ShieldCheck, title: "Secure & Accredited", desc: "Industry-standard protocols and staff trained to national certification requirements." },
          { icon: Clock, title: "Flexible Scheduling", desc: "Weekday and evening appointments across all six locations." },
          { icon: Award, title: "Professional Environment", desc: "Quiet, private testing rooms designed to minimize distraction." },
        ].map((f, i) => {
          const Icon = f.icon;
          return (
            <AnimateOnScroll key={f.title} delay={i * 80}>
              <div className="rounded-xl border border-[color:var(--border)] bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-black text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl text-black">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </AnimateOnScroll>
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <AnimateOnScroll>
          <div className="border-t-4 border-crimson bg-white p-8 md:p-12">
            <div className="text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson">
                Our Locations
              </span>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl text-black">
                Find a center near you.
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group flex flex-col items-center gap-1.5 p-4 hover:bg-slate-50 transition-colors text-center"
                >
                  <MapPin className="h-5 w-5 text-crimson" />
                  <span className="font-serif text-lg text-black group-hover:text-crimson transition-colors">
                    {loc.city}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">
                    {loc.state}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-sm bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                <Search className="h-4 w-4" />
                Search All Locations
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mt-14 rounded-2xl border border-[color:var(--border)] bg-[color:var(--cream)] p-10 text-center">
            <h3 className="font-serif text-3xl text-black">
              Need help choosing a location or exam?
            </h3>
            <p className="mt-3 text-black/70 max-w-2xl mx-auto">
              Our team can match you with the right center, confirm
              accreditation for your specific exam, and walk you through
              what to expect on test day.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-crimson px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Talk to a proctor <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
