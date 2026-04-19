import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CompanyValues from "@/components/CompanyValues";
import { personSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About BLE Training — Twenty Years of Doing the Work",
  description:
    "BLE Training has been building high-performing organizations since 2007. Learn about our team, our story, and why we focus on mid-market businesses.",
  openGraph: {
    title: "About BLE Training",
    description:
      "BLE Training has been building high-performing organizations since 2007. Learn about our team, our story, and why we focus on mid-market businesses.",
    url: "https://www.ble.training/about",
  },
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

export default function AboutPage() {
  const schema = [
    personSchema(),
    breadcrumbSchema([
      { name: "Home", url: "https://www.ble.training" },
      { name: "About", url: "https://www.ble.training/about" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden">
        <Image
          src="/brian-header-for-bedford-louis-ellicott.png"
          alt="Brian T. Hammond — Founder of Bedford, Louis & Ellicott, LLC (BLE Training)"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            About BLE Training
          </span>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-white">
            Twenty years of<br />
            <span className="text-crimson">doing the work.</span>
          </h1>
          <div className="mt-8 h-1 w-24 bg-crimson" />
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            We are a corporate training and consulting company with deep roots
            in enterprise performance — built for the mid-market companies
            and business leaders driving growth today.
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
              &ldquo;We exist to make teams perform better — through training
              that actually sticks, consulting that fits the business, and
              testing that meets the standard.&rdquo;
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
                <span className="font-semibold text-black">Bedford, Louis &amp; Ellicott, LLC</span> —
                doing business as <span className="font-semibold text-black">BLE Training</span> —
                was founded in 2007 with a single conviction: that great training
                is something you feel, not just something you buy.
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
                Today, BLE is one company that does three things: we train
                teams, certify their skills, and provide the strategic
                consulting that helps businesses grow. Most firms specialize
                in one. We connect all three — because training without
                credentials is incomplete, and strategy without trained
                people is just a plan on paper.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* VALUES */}
      <CompanyValues />

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
                At BLE, Brian&apos;s focus is simple: bring that standard to
                the leaders and businesses building what&apos;s next — with
                specialty depth for family-run companies that need
                relationship-aware guidance.
              </p>
              <p>
                His MBA from Louisiana State University concentrated in
                entrepreneurship and family business — grounding BLE&apos;s
                consulting practice in both operational rigor and the
                relational dynamics that make owner-led businesses unique.
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
