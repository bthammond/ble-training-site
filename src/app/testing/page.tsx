import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Clock, Award, Users, ArrowRight, MapPin } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PartnerLogos from "@/components/PartnerLogos";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Proctored Testing Centers",
  description:
    "Schedule your proctored exam at one of six BLE Testing Centers. Authorized partner for Pearson VUE, Prometric, PSI, and more.",
  keywords: [
    "Proctored Testing Centers",
    "Professional Exam Proctoring",
    "Certification Testing",
    "Tyler TX Testing Center",
    "Omaha Testing Center",
    "Topeka Testing Center",
  ],
  alternates: { canonical: "/testing" },
};

const FEATURES = [
  {
    icon: Award,
    title: "Professional Environment",
    desc: "Quiet, equipped, and staffed for focused testing.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Book online or by phone at your convenience.",
  },
  {
    icon: ShieldCheck,
    title: "All Major Providers",
    desc: "Pearson VUE, Prometric, PSI, and more under one roof.",
  },
  {
    icon: Users,
    title: "Experienced Staff",
    desc: "Our center teams are trained to the same standard across all six locations.",
  },
];

export default function TestingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #9e1b32, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Proctored Testing
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
            Schedule Your<br />
            <span className="text-crimson">Proctored Exam.</span>
          </h1>
          <div className="mt-8 h-1 w-24 bg-crimson" />
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
            Six BLE Testing Centers across the U.S. — flexible scheduling,
            professional staff, all major credentialing providers.
          </p>
          <div className="mt-10">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Schedule a Test <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROVIDER LOGOS */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/50">
            We are an authorized test delivery partner for:
          </p>
        </div>
        <PartnerLogos />
      </section>

      {/* WHY BLE — FEATURES */}
      <section className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Why BLE
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                What to expect at a BLE Testing Center.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimateOnScroll key={f.title} delay={i * 70}>
                  <article className="h-full bg-white border-t-4 border-crimson shadow-sm p-8">
                    <div className="flex h-12 w-12 items-center justify-center bg-black">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-serif text-xl text-black">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm text-black/70 leading-relaxed">
                      {f.desc}
                    </p>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CROSS-SELL BRIDGE */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 text-center">
          <AnimateOnScroll>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Certifying your team&apos;s skills is step one.
              <span className="text-crimson font-semibold"> Growing their performance is step two.</span>
            </p>
            <Link
              href="/how-we-work"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors"
            >
              See how we train teams <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* LOCATION GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Our Locations
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                Six centers. One standard.
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex flex-col items-center gap-1.5 p-6 border border-slate-200 hover:border-crimson hover:bg-[#F7F7F7] transition-all text-center"
              >
                <MapPin className="h-5 w-5 text-crimson" />
                <span className="mt-2 font-serif text-lg text-black group-hover:text-crimson transition-colors">
                  {loc.city}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">
                  {loc.state}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Search All Locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Need help choosing a location or exam?
            </h2>
            <p className="mt-4 text-lg text-white/75 max-w-2xl mx-auto">
              Give us a call and we&apos;ll help you find the right center,
              confirm your exam details, and walk you through what to expect
              on test day.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Talk to a Proctor <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
