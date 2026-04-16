import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Compass, Shield, TrendingUp, Users2, Handshake, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Owner & Family Business Consulting",
  description:
    "Strategic consulting for founders, owners, and family businesses. Succession planning, growth strategy, and founder coaching from BLE Training.",
  keywords: [
    "Owner Consulting",
    "Family Business Consulting",
    "Founder Coaching",
    "Succession Planning",
    "Family Business Governance",
    "Business Transition Planning",
  ],
  alternates: { canonical: "/consulting" },
};

const PRACTICES = [
  {
    icon: Shield,
    title: "Succession & Governance",
    outcome: "Get the right structure in place before you need it — not after.",
    desc: "Planning ownership transitions, setting up boards, and getting the right structure in place.",
  },
  {
    icon: Users2,
    title: "Founder & Family Coaching",
    outcome: "One-on-one advising for when business decisions become personal ones.",
    desc: "Confidential coaching for founders and family members navigating difficult decisions.",
  },
  {
    icon: Compass,
    title: "Strategic Roadmaps",
    outcome:
      "A practical three-to-five year plan built around your cash flow, your team, and where you actually want to go.",
    desc: "Planning work grounded in your real numbers, not generic frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Growth Operations",
    outcome:
      "Turn growth goals into margin results by fixing pricing, sales, and team performance.",
    desc: "Hands-on operating work — not slides. We sit in the P&L with you.",
  },
  {
    icon: Handshake,
    title: "Transaction Advisory",
    outcome:
      "Guidance for owners thinking about buying, selling, or restructuring — before you're in the room.",
    desc: "Prepare the business, the people, and the owner for the transaction itself.",
  },
  {
    icon: Heart,
    title: "Legacy Design",
    outcome:
      "Plan what comes next — for the business, the family, and the impact you want to leave.",
    desc: "Helping families think about succession, next generation, and lasting impact.",
  },
];

const FIT_CRITERIA = [
  "You're an owner or founder who has grown past the startup phase but feels like the business still depends on you for everything",
  "You're navigating a family dynamic that affects how decisions get made",
  "You're thinking about succession — selling, transitioning, or bringing in the next generation — and you don't know where to start",
  "You've tried generic business coaching and it didn't fit",
  "You want someone who has been inside high-performing organizations and can translate that for your business",
];

export default function ConsultingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #9e1b32, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Owner &amp; Family Business Consulting
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-5xl text-white">
            A specialist practice for the businesses that
            <span className="text-crimson"> owners and families build and keep.</span>
          </h1>
          <div className="mt-8 h-1 w-24 bg-crimson" />
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            Most consultants treat owner-led businesses like smaller versions of
            big corporations. We don&apos;t. We understand the dynamics that come
            with ownership — and we work with them, not around them.
          </p>
        </div>
      </section>

      {/* ENTERPRISE CREDIBILITY BRIDGE */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24 text-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Enterprise-Tested. Owner-Focused.
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-white leading-tight">
              We learned what good looks like at scale.
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-crimson" />
            <p className="mt-8 text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              We didn&apos;t start in consulting. We started inside organizations —
              building the teams, coaching the leaders, and designing the
              operating structures that made them perform.
              That&apos;s what makes our consulting practice different.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Who This Is For
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl text-black">
              You might be in the right place if...
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />

            <ul className="mt-10 space-y-5">
              {FIT_CRITERIA.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                  <p className="text-lg text-black/80 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="family" className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Practice Areas
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                How we work with you.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
              <p className="mt-6 text-lg text-black/70 leading-relaxed">
                Every engagement is confidential and built around your situation —
                not a template.
              </p>
            </div>
          </AnimateOnScroll>

          <div id="entrepreneurship" className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICES.map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimateOnScroll key={p.title} delay={i * 60}>
                  <article className="h-full bg-white border-t-4 border-crimson shadow-sm p-8 flex flex-col">
                    <div className="flex h-12 w-12 items-center justify-center bg-black">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-serif text-xl text-black">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-base font-serif italic text-crimson leading-snug">
                      {p.outcome}
                    </p>
                    <p className="mt-3 text-sm text-black/70 leading-relaxed">
                      {p.desc}
                    </p>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAIN → CERTIFY → GROW BRIDGE */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 text-center">
          <AnimateOnScroll>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Strategy is only as good as the team that executes it. That&apos;s
              why we also
              <span className="text-crimson font-semibold"> train your people </span>
              and
              <span className="text-crimson font-semibold"> certify their skills </span>
              — all under one roof.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/how-we-work"
                className="text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors inline-flex items-center gap-2"
              >
                See how we train teams <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-white/30 hidden sm:inline">|</span>
              <Link
                href="/testing"
                className="text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors inline-flex items-center gap-2"
              >
                See our testing centers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-[#F7F7F7]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Start the Conversation
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
              Tell us what you&apos;re trying to solve.
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-lg text-black/70 leading-relaxed">
              It starts with a 30-minute call. No pitch deck. No pressure. Just
              an honest conversation about what&apos;s going on and whether we
              can help.
            </p>

            <ul className="mt-8 space-y-4 text-black">
              {[
                "Confidential & NDA-friendly",
                "Response within one business day",
                "We scope the work to fit the problem, not the other way around",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-crimson" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <LeadForm />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
