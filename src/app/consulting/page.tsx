import type { Metadata } from "next";
import { Heart, Compass, Shield, TrendingUp, Users2, Handshake } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "SMB Consulting — Family Business & Entrepreneurship",
  description:
    "Strategic advisory for small-to-mid-sized businesses with a specialist practice in family business succession, governance, and founder-led growth.",
  keywords: [
    "SMB Consulting",
    "Family Business Consulting",
    "Entrepreneurship Advisory",
    "Succession Planning",
    "Family Business Governance",
    "Founder Coaching",
  ],
};

const PRACTICES = [
  {
    icon: Shield,
    title: "Succession & Governance",
    desc: "Clear frameworks for ownership transition, family constitutions, and board formation.",
  },
  {
    icon: Users2,
    title: "Founder & Family Coaching",
    desc: "Confidential advisory for principals navigating decisions that blur business and relationship.",
  },
  {
    icon: Compass,
    title: "Strategic Roadmaps",
    desc: "Three- and five-year plans tied to cash flow, operating cadence, and role clarity.",
  },
  {
    icon: TrendingUp,
    title: "Growth Operations",
    desc: "Sales, pricing, and margin work to turn growth ambitions into disciplined execution.",
  },
  {
    icon: Handshake,
    title: "Transaction Advisory",
    desc: "Buy-side and sell-side counsel for owners weighing acquisition, recapitalization, or exit.",
  },
  {
    icon: Heart,
    title: "Legacy Design",
    desc: "Philanthropy, next-gen engagement, and the stewardship that makes businesses last.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-black to-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #9e1b32, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-crimson/40 bg-crimson/10 px-4 py-1.5 text-xs font-medium text-crimson-soft uppercase tracking-wide">
            Consulting Corner
          </span>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">
            A specialist practice for <span className="text-crimson italic">family businesses</span> and <span className="text-crimson italic">founders.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">
            Most consulting firms treat family businesses like smaller versions
            of corporations. We don&apos;t. Our work is tailored to the governance,
            continuity, and relational dynamics that make these companies
            unlike any other.
          </p>
        </div>
      </section>

      <section id="family" className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <AnimateOnScroll>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson">
              Our Approach
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
              Patient counsel. Rigorous execution.
            </h2>
            <p className="mt-4 text-lg text-black/70 leading-relaxed">
              We sit with owners, operators, and families to build the
              structure that allows the business to grow and the relationships
              to hold. Every engagement is bespoke, confidential, and
              outcome-driven.
            </p>
          </div>
        </AnimateOnScroll>

        <div id="entrepreneurship" className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRACTICES.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimateOnScroll key={p.title} delay={i * 60}>
                <div className="h-full rounded-xl border border-[color:var(--border)] bg-white p-7 hover:border-crimson/60 transition-colors">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-black text-crimson">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-black">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>

      <section className="bg-[color:var(--cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <AnimateOnScroll>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson">
              Start the Conversation
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
              Tell us what you&apos;re trying to solve.
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              Most of our engagements begin with a confidential 30-minute call.
              No pitch decks, no pressure — just a conversation about what&apos;s
              working, what isn&apos;t, and whether we&apos;re the right fit.
            </p>

            <ul className="mt-8 space-y-4 text-black">
              {[
                "Confidential & NDA-friendly",
                "Response within one business day",
                "Engagements scoped to fit the decision at hand",
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
