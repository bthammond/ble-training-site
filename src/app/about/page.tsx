import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  HandHeart,
  Flame,
  Scale,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About BLE Training — Twenty Years of Doing the Work",
  description:
    "BLE Training is a Pennsylvania-based corporate training and consulting company founded in 2007. Six testing centers. Enterprise experience. Owner-focused.",
  keywords: [
    "About BLE Training",
    "Brian T. Hammond",
    "Chief Learning Officer",
    "Pennsylvania Training Company",
    "Enterprise Training Firm",
    "Corporate Learning Consulting",
  ],
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We do the right thing when it is difficult. Our reputation is built on delivering what we promise, in writing, to every client.",
  },
  {
    icon: HandHeart,
    title: "Service to Others",
    desc: "Every engagement is scoped around the outcomes our clients and their employees actually need — not a product we're selling.",
  },
  {
    icon: Flame,
    title: "Passion",
    desc: "Great training is felt, not just delivered. Our instructors bring operational experience and genuine enthusiasm for the craft.",
  },
  {
    icon: Scale,
    title: "Consistency",
    desc: "The same rigor, protocol, and quality — from our first kickoff call through every proctored exam and classroom hour.",
  },
  {
    icon: Sparkles,
    title: "Open-Mindedness",
    desc: "We listen first. Each enterprise, agency, and candidate arrives with its own history, and our curriculum is shaped to match.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            About BLE Training
          </span>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-white">
            Twenty years of<br />
            <span className="text-crimson">doing the work.</span>
          </h1>
          <div className="mt-8 h-1 w-24 bg-crimson" />
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            We are a corporate training and consulting company with deep roots in
            enterprise performance — and a focused practice built for the
            owners and families running the businesses that matter most.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-24 text-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Our Mission
            </span>
            <blockquote className="mt-8 font-serif text-3xl md:text-5xl text-black leading-[1.2] tracking-tight">
              &ldquo;To enhance enterprise productivity by providing targeted
              training that strengthens employee technical skills, processes,
              and strategy — at every level of business.&rdquo;
            </blockquote>
            <div className="mx-auto mt-10 h-1 w-20 bg-crimson" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Our Story
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black leading-tight">
              Built from the inside out.
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />

            <div className="mt-10 space-y-6 text-lg text-black/80 leading-relaxed">
              <p>
                BLE Training was founded in 2007 with a single conviction: that
                great training is something you feel, not just something you buy.
              </p>
              <p>
                Over the past twenty years, we&apos;ve worked inside enterprise
                organizations across financial services, automotive, and
                professional services — designing the onboarding systems,
                coaching frameworks, and organizational workflows that define
                high-performing teams.
              </p>
              <p>
                That experience shaped everything. It&apos;s why our programs
                feel specific, not generic. It&apos;s why our consultants are
                matched by domain expertise, not availability. And it&apos;s why
                our clients stay.
              </p>
              <p>
                Today, BLE operates six testing centers across the United States
                and an consulting practice focused on the founders and family
                businesses building for the long term.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Our Values
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                The principles we operate by.
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimateOnScroll key={v.title} delay={i * 70}>
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center">
                      <Icon
                        className="h-12 w-12 text-crimson"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-bold text-black uppercase tracking-wide">
                      {v.title}
                    </h3>
                    <div className="mx-auto mt-3 h-px w-10 bg-crimson" />
                    <p className="mt-4 text-sm text-black leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP — Brian Hammond */}
      <section className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <AnimateOnScroll className="lg:col-span-1">
            <div className="bg-white border-t-4 border-crimson shadow-sm overflow-hidden">
              <Image
                src="/brian-hammond-headshot.png"
                alt="Brian T. Hammond — Founder & Chief Learning Officer, BLE Training"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover object-top"
              />
              <div className="p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson">
                  Leadership
                </p>
                <h3 className="mt-2 font-serif text-3xl text-black leading-tight">
                  Brian T. Hammond
                </h3>
                <p className="mt-2 text-sm font-semibold text-black">
                  Founder &amp; Chief Learning Officer
                </p>
                <p className="mt-1 text-xs text-black/60">
                  MBA, Louisiana State University
                </p>
                <a
                  href="https://brianthammond.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-crimson hover:text-crimson-soft transition-colors"
                >
                  Learn more about Brian
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120} className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Founder&apos;s Note
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-black leading-tight">
              The work before the work is the real product.
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />
            <div className="mt-8 space-y-5 text-lg text-black/80 leading-relaxed">
              <p>
                Brian founded BLE Training after more than fifteen years in
                corporate America — building teams, designing training systems,
                and leading organizational development at the enterprise level.
              </p>
              <p>
                His work has taken him inside some of the country&apos;s most
                recognized organizations, where he designed the coaching
                frameworks and operational structures that turned good teams
                into high-performing ones.
              </p>
              <p>
                At BLE, Brian&apos;s focus is simple: bring that standard to the
                owners and families who are building businesses worth keeping.
              </p>
              <p>
                His MBA from Louisiana State University concentrated in
                entrepreneurship and family business — the same work BLE&apos;s
                consulting practice is now built around.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* COMPANY PROFILE STATS */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2007", label: "Founded" },
              { value: "PA", label: "Headquartered" },
              { value: "40+", label: "Industries Served" },
              { value: "6", label: "Testing Centers" },
            ].map((s) => (
              <div key={s.label} className="border-t-4 border-crimson pt-5">
                <div className="font-serif text-4xl md:text-5xl text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/how-we-work"
              className="inline-flex items-center justify-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              How We Work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
