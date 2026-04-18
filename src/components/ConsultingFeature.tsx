import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const SERVICES = [
  "Growth Strategy",
  "Leadership Coaching",
  "Growth Operations",
  "Succession & Governance",
  "Transaction Advisory",
  "Family Business Specialty",
];

export default function ConsultingFeature() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, #9e1b32, transparent 45%), radial-gradient(circle at 85% 70%, #9e1b32, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <AnimateOnScroll className="lg:col-span-3">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Business Consulting
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
            Growing a business<br />
            <span className="text-crimson">deserves more than a template.</span>
          </h2>
          <div className="mt-8 h-px w-24 bg-crimson" />

          <p className="mt-8 text-lg text-white/80 leading-relaxed">
            We&apos;ve worked inside organizations that run at the highest levels.
            We know what a high-functioning team looks like, what leadership
            transitions actually require, and what leaders need when business
            decisions get complicated.
          </p>

          <p className="mt-5 text-lg text-white/80 leading-relaxed">
            Our consulting practice is built for mid-market companies and
            owner-led businesses — with specialty depth for family-run
            operations that don&apos;t run like corporations.
          </p>

          <Link
            href="/consulting"
            className="mt-10 inline-flex items-center gap-2 bg-crimson px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
          >
            Explore Our Consulting Practice <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150} className="lg:col-span-2">
          <div className="border-t-4 border-crimson bg-white/[0.04] p-8 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-crimson">
              Practice Areas
            </p>
            <ul className="mt-6 space-y-3">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 font-serif text-lg text-white border-b border-white/10 pb-3 last:border-0"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
