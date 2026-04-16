import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Case Studies — Client Results",
  description:
    "Real results from real clients. See how BLE Training has helped owner-led businesses strengthen teams, plan transitions, and grow.",
  alternates: { canonical: "/case-studies" },
};

const CASES = [
  {
    tag: "Family Business",
    title: "Helping a manufacturing family navigate a third-generation transition",
    challenge:
      "A $12M manufacturing company with three generations of family involvement had no written succession plan. The founder was ready to step back, but the next generation wasn't aligned on roles, governance, or ownership structure.",
    approach:
      "BLE facilitated a multi-month engagement covering governance design, family role definition, and a phased transition plan. We worked with both generations privately before bringing the full family together.",
    result:
      "The family agreed on a governance structure, defined clear operational roles, and executed a transition plan over 18 months. The business continued to grow through the transition.",
    quote: "They are the reason this business is still in the family.",
    attribution: "Margaret R. — Third-generation Owner",
  },
  {
    tag: "Corporate Training",
    title: "Rolling out a leadership program across four regional offices",
    challenge:
      "A logistics company with 400+ employees had promoted top performers into management roles — but none had received formal leadership training. Engagement scores were declining and turnover was rising.",
    approach:
      "BLE designed a 12-week leadership development program delivered on-site across four locations. The curriculum was customized to the company's operating cadence and industry-specific challenges.",
    result:
      "Engagement scores increased 28 points within two quarters. Frontline managers reported higher confidence in decision-making, and voluntary turnover dropped by 15%.",
    quote: "The frontline managers are finally operating like owners.",
    attribution: "David O. — VP People & Culture",
  },
  {
    tag: "Proctored Testing",
    title: "Providing a professional, stress-free testing experience for healthcare candidates",
    challenge:
      "A healthcare certification candidate had tested at multiple centers and experienced inconsistent environments — noise, unprepared staff, and technical issues that disrupted focus.",
    approach:
      "At a BLE Testing Center, the candidate experienced a standardized process: 30-minute early arrival, secure locker storage, ID verification, and a quiet, private workstation with trained proctors on-site.",
    result:
      "The candidate passed their certification exam and subsequently recommended BLE to colleagues in their professional network.",
    quote: "Frankly calmer than any center I'd sat in before.",
    attribution: "Priya S. — Certification Candidate, Healthcare",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Results
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl text-white leading-tight">
            Real work. Real results.
          </h1>
          <div className="mt-8 h-1 w-24 bg-crimson" />
          <p className="mt-8 text-lg text-white/80 max-w-2xl leading-relaxed">
            Every engagement is different. Here are a few examples of the
            problems we&apos;ve solved and the outcomes we&apos;ve delivered.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
          <div className="space-y-16">
            {CASES.map((c, i) => (
              <AnimateOnScroll key={i}>
                <article className="border-t-4 border-crimson bg-white shadow-sm p-8 md:p-12">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-crimson">
                    {c.tag}
                  </span>
                  <h2 className="mt-3 font-serif text-2xl md:text-3xl text-black leading-snug">
                    {c.title}
                  </h2>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">
                        The Challenge
                      </h3>
                      <p className="text-sm text-black/70 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">
                        Our Approach
                      </h3>
                      <p className="text-sm text-black/70 leading-relaxed">{c.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">
                        The Result
                      </h3>
                      <p className="text-sm text-black/70 leading-relaxed">{c.result}</p>
                    </div>
                  </div>

                  {c.quote && (
                    <div className="mt-8 border-l-4 border-crimson pl-6">
                      <p className="font-serif text-lg text-black italic">
                        &ldquo;{c.quote}&rdquo;
                      </p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-black/50">
                        {c.attribution}
                      </p>
                    </div>
                  )}
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="mt-20 text-center">
              <h2 className="font-serif text-3xl text-black">
                Your business could be next.
              </h2>
              <p className="mt-4 text-black/60 max-w-lg mx-auto">
                Every case study started with a conversation. Let&apos;s have yours.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
                >
                  Talk to Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/scorecard"
                  className="inline-flex items-center gap-2 border-2 border-black px-8 py-4 text-xs font-bold uppercase tracking-wider text-black hover:bg-crimson hover:text-white hover:border-crimson transition-colors"
                >
                  Take the Free Scorecard
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
