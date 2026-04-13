import type { Metadata } from "next";
import Link from "next/link";
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
  title: "About BLE Training — A Legacy of Clarity & Integrity",
  description:
    "Founded in 2007 in Pennsylvania, BLE Training delivers targeted enterprise training through a vetted pool of 200+ consultants. Led by Founder & Chief Learning Officer Brian T. Hammond.",
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
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('/home-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 md:py-48 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/85">
            About BLE Training
          </span>
          <h1 className="mt-6 font-serif font-bold text-white uppercase tracking-tight leading-[0.95] text-5xl md:text-7xl lg:text-8xl">
            Who
            <br />
            <span className="text-white">We Are</span>
          </h1>
          <div className="mt-8 mx-auto h-1 w-24 bg-crimson" />
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Our Mission
            </span>
            <blockquote className="mt-6 font-serif text-3xl md:text-5xl text-black leading-[1.15] tracking-tight">
              &ldquo;To enhance enterprise productivity by providing targeted
              training that strengthens employee technical skills, processes,
              and strategy.&rdquo;
            </blockquote>
            <div className="mx-auto mt-8 h-1 w-20 bg-crimson" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* VALUES — 4-column (wraps to 5 on xl) */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Our Values
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-black">
                The principles we operate by.
              </h2>
              <div className="mx-auto mt-6 h-1 w-20 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimateOnScroll key={v.title} delay={i * 70}>
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center">
                      <Icon
                        className="h-14 w-14 text-crimson"
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

      {/* LEADERSHIP */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <AnimateOnScroll className="lg:col-span-1">
            <div className="bg-white border-t-4 border-crimson shadow-sm overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brian-hammond-headshot.png"
                alt="Brian T. Hammond — Founder & Chief Learning Officer, BLE Training"
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
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-black">
              Training is something you <em>do</em>, not something you buy.
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-black leading-relaxed">
              With over 30 years of experience building companies — including
              more than 15 years in corporate America before founding BLE
              Training — Brian has sat on both sides of the table. He knows
              what good training looks like from the inside out.
            </p>
            <p className="mt-4 text-black leading-relaxed">
              As the visionary behind BLE Training, Brian built the systems
              and processes that drive every location. With leadership at each
              of our six centers running day-to-day operations, he focuses
              on what matters most — making sure the standards stay high
              and the company keeps moving forward.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <AnimateOnScroll className="lg:col-span-1">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Company Profile
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
              A Pennsylvania firm, built since 2007.
            </h2>
            <div className="mt-6 h-1 w-20 bg-crimson" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={120} className="lg:col-span-2">
            <p className="text-lg text-white leading-relaxed">
              BLE Training is a Pennsylvania-based learning and testing
              services company formed in 2007. From a single classroom in the
              Northeast, we have grown into a national practice operating six
              BLE Training testing centers and drawing on a vetted pool of more
              than two hundred consultants.
            </p>
            <p className="mt-4 text-lg text-white/90 leading-relaxed">
              Our consultants are selected for operational depth — nearly all
              have spent the bulk of their careers inside the industries they
              now teach. They are matched to each engagement by domain, not by
              availability, which is why our programs feel specific to the
              client, never off-the-shelf.
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "2007", label: "Founded" },
                { value: "PA", label: "Headquartered" },
                { value: "200+", label: "Consultants" },
                { value: "6", label: "Testing Centers" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border-t-4 border-crimson pt-4"
                >
                  <div className="font-serif text-4xl text-white">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-crimson px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                Our services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
              >
                Contact us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
