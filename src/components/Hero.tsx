import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import TrackedLink from "@/components/TrackedLink";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-[85vh] flex items-center">
      <Image
        src="/ble-hero-main.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 50%, rgba(158,27,50,0.55) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 text-crimson">
            <span className="h-px w-12 bg-crimson" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">
              Built for Business Leaders
            </span>
          </div>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight text-white">
            Build the team and operating system<br />
            <span className="text-crimson">your growing business needs.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            BLE helps owner-led and mid-market companies train managers,
            improve team performance, and prepare for growth or succession.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/scorecard"
              className="group inline-flex items-center justify-center gap-2 bg-crimson px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-crimson-soft transition-colors"
            >
              Take the Free Business Health Scorecard
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <TrackedLink
              href="/contact"
              event="growth_call_clicked"
              props={{ placement: "hero" }}
              className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Schedule a 30-Minute Growth Call
            </TrackedLink>
          </div>

          {/* Trust bar */}
          <div className="mt-12 pt-8 border-t border-white/15 max-w-2xl">
            <p className="text-sm text-white/60 leading-relaxed">
              Enterprise-tested training, consulting, and testing expertise —
              built for growing businesses. Trusted across 40+ industries since 2007.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-crimson" />
    </section>
  );
}
