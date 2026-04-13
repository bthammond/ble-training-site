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
    desc: "Planning ownership transitions, setting up boards, and getting the right structure in place.",
  },
  {
    icon: Users2,
    title: "Founder & Family Coaching",
    desc: "One-on-one advising for founders and family members when business decisions get personal.",
  },
  {
    icon: Compass,
    title: "Strategic Roadmaps",
    desc: "Practical growth plans built around your cash flow, your team, and where you want to be in three to five years.",
  },
  {
    icon: TrendingUp,
    title: "Growth Operations",
    desc: "Hands-on work with your sales, pricing, and margins to turn growth goals into real results.",
  },
  {
    icon: Handshake,
    title: "Transaction Advisory",
    desc: "Guidance for owners thinking about buying, selling, or restructuring their business.",
  },
  {
    icon: Heart,
    title: "Legacy Design",
    desc: "Helping families think about what comes next — bringing in the next generation, giving back, and building something that lasts.",
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
          <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl text-white">
            A specialist practice for <span className="text-crimson italic">family businesses</span> and <span className="text-crimson italic">founders.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">
            Most consultants treat family businesses like smaller versions
            of big corporations. We don&apos;t. We understand the dynamics
            that come with family ownership — and we work with them,
            not around them.
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
            How we work.
            </h2>
            <p className="mt-4 text-lg text-black/70 leading-relaxed">
              We sit down with owners, operators, and families to figure out
              what needs to happen — then we help make it happen. Every
              engagement is confidential and built around your situation,
              not a template.
            </p>
          </div>
        </AnimateOnScroll>

        <div id="entrepreneurship" className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRACTICES.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimateOnScroll key={p.title} delay={i * 60}>
                <div className="h-full rounded-xl border border-[color:var(--border)] bg-white p-7 hover:border-crimson/60 transition-colors">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-black text-white">
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
              It usually starts with a 30-minute call. No pitch deck, no
              pressure — just a conversation about what&apos;s going on and
              whether we can help.
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
