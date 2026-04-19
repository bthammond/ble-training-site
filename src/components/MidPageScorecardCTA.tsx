import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

/**
 * Mid-page CTA band used across home + service pages.
 * Full-width, dark background, pushes the Scorecard as primary conversion.
 */
export default function MidPageScorecardCTA() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 text-center">
        <AnimateOnScroll>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Business Health Scorecard
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-white leading-[1.1]">
            Not sure where to start?
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-crimson" />
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
            Take our free 5-minute Business Health Scorecard. Get a personalized
            report across Leadership, Team, Operations, Culture, Growth, and
            Succession Readiness.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/scorecard"
              className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Take the Free Scorecard <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Schedule a Conversation
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
