import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  PenTool,
  Rocket,
  ArrowRight,
  Users,
  Layers,
  Target,
  ShieldCheck,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Organizational Training & Systems",
  description:
    "Custom training programs, onboarding systems, and coaching frameworks for businesses at every stage. Built around your people and goals.",
  alternates: { canonical: "/how-we-work" },
};

const STEPS = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consult",
    body:
      "We start with a real conversation. Tell us what's not working — whether it's team performance, a leadership gap, an ownership transition, or something you can't quite name yet.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    body:
      "We build a program around your situation. Every engagement is scoped to your people, your industry, and your goals. Nothing off the shelf.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deliver",
    body:
      "We show up and do the work. On-site or virtual, one session or ongoing — and we stay accountable to results, not just delivery.",
  },
];

const CAPABILITIES = [
  {
    icon: Users,
    title: "Leadership & Management Development",
    desc: "Help managers run teams instead of tasks. Built from methodology that worked at enterprise scale.",
  },
  {
    icon: Layers,
    title: "Onboarding System Design",
    desc: "New hires productive in weeks, not months. A proven framework customized to your business.",
  },
  {
    icon: GraduationCap,
    title: "Coaching Framework & Infrastructure",
    desc: "Build internal coaching capability so development doesn't depend on any one person.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Skills Training",
    desc: "Safety, regulatory, and technical training aligned to your industry requirements.",
  },
  {
    icon: Target,
    title: "Team Performance Programs",
    desc: "Diagnose where performance breaks down, then fix the systems, not just the symptoms.",
  },
  {
    icon: BookOpen,
    title: "Custom Curriculum Development",
    desc: "Tailored course content built around your operating reality — not a generic library.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Our Approach
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white max-w-5xl">
            We don&apos;t deliver training programs.
            <br />
            <span className="text-crimson">We build organizations that perform.</span>
          </h1>
          <div className="mt-8 h-1 w-24 bg-crimson" />
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
            Every engagement starts with understanding your business — your
            people, your gaps, and your goals. Then we build around that.
            Not the other way around.
          </p>
        </div>
      </section>

      {/* THREE-STEP PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                How We Work
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                Three steps. No runaround.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.number} delay={i * 100}>
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-crimson bg-white">
                      <Icon className="h-7 w-7 text-crimson" />
                    </div>
                    <div className="mt-5 text-xs font-bold uppercase tracking-widest text-crimson">
                      Step {step.number}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-black">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-black/70 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Capabilities
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                What we build for your organization.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
              <p className="mt-6 text-lg text-black/70 leading-relaxed">
                Our training and organizational design work spans leadership
                development, team performance, onboarding design, and coaching
                infrastructure. We&apos;ve built these systems for enterprise
                clients. We bring the same methodology to yours.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.icon;
              return (
                <AnimateOnScroll key={c.title} delay={i * 60}>
                  <article className="h-full bg-white border-t-4 border-crimson shadow-sm p-8">
                    <Icon className="h-8 w-8 text-crimson" strokeWidth={1.5} />
                    <h3 className="mt-4 font-serif text-xl text-black">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm text-black/70 leading-relaxed">
                      {c.desc}
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
              Training is step one. When your team is ready,
              <span className="text-crimson font-semibold"> certify their skills </span>
              at one of our six testing centers — and
              <span className="text-crimson font-semibold"> grow with confidence </span>
              knowing they&apos;re qualified.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/testing"
                className="text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors inline-flex items-center gap-2"
              >
                See our testing centers <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-white/30 hidden sm:inline">|</span>
              <Link
                href="/consulting"
                className="text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors inline-flex items-center gap-2"
              >
                Explore consulting <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* COURSE CATALOG CTA */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Course Catalog
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
              150+ programs across 10 categories.
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
              Looking for something specific? Browse our full Professional
              Development Catalog — leadership, communication, sales, HR,
              compliance, and more. Available for onsite or virtual delivery.
            </p>
            <Link
              href="/catalog"
              className="mt-8 inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Browse the Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Let&apos;s build what your team actually needs.
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Start with a 30-minute conversation. We&apos;ll understand
              what&apos;s working, what isn&apos;t, and whether we&apos;re
              the right partner to help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                Talk to Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/consulting"
                className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Explore Owner Consulting
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
