import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-[85vh] flex items-center">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 50%, rgba(158,27,50,0.55) 100%), url('/home-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-white">
            Train Your Team.<br />
            <span className="text-crimson">Grow Your Business.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            You built the business. Let us build the team.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-crimson px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-crimson-soft transition-colors"
            >
              Talk to Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/scorecard"
              className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Check Your Readiness Score
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-12 pt-8 border-t border-white/15 max-w-2xl">
            <p className="text-sm text-white/60 leading-relaxed">
              Trusted by enterprise clients across 40+ industries —
              now focused on the owners building what&apos;s next.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-crimson" />
    </section>
  );
}
