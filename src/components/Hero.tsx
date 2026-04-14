import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 50%, rgba(158,27,50,0.6) 100%), url('/home-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-48">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 text-crimson">
            <span className="h-px w-12 bg-crimson" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">
              BLE Training
            </span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-white">
            Build Teams. Certify Talent.
            <br />
            <span className="text-crimson">Grow Businesses.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Training, testing, and consulting — from startups to the Fortune 500.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-crimson px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-crimson-soft transition-colors"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/testing"
              className="group inline-flex items-center justify-center gap-2 rounded-sm border-2 border-crimson bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-crimson hover:bg-crimson hover:text-white transition-colors"
            >
              <ClipboardCheck className="h-4 w-4" />
              Schedule a Test
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-crimson" />
    </section>
  );
}
