import type { Metadata } from "next";
import { MapPin, Clock, ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { LOCATIONS } from "@/lib/locations";
import ProctorApplicationForm from "./ProctorApplicationForm";

export const metadata: Metadata = {
  title: "Careers — Join the BLE Training Team",
  description:
    "BLE Training is hiring part-time proctors at all six testing center locations. Flexible scheduling, professional environment, paid training.",
  alternates: { canonical: "/careers" },
};

const BENEFITS = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Work around your schedule. Proctors are scheduled based on exam volume — mornings, afternoons, and weekends available.",
  },
  {
    icon: ShieldCheck,
    title: "Paid Training",
    desc: "We train you on every testing partner's protocols — Pearson VUE, Prometric, PSI, and more. No prior proctoring experience required.",
  },
  {
    icon: Users,
    title: "Professional Environment",
    desc: "Work in a quiet, modern testing center with a small, reliable team. No retail. No call center. Just focused, professional work.",
  },
  {
    icon: MapPin,
    title: "Six Locations",
    desc: "We have centers in Tyler TX, Clarks Summit PA, Toledo OH, Lincoln NE, Omaha NE, and Topeka KS — and we're always looking for good people.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Careers at BLE Training
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
            We&apos;re hiring proctors<br />
            <span className="text-crimson">at all six centers.</span>
          </h1>
          <div className="mt-8 h-1 w-24 bg-crimson" />
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Part-time, flexible, and professional. If you&apos;re detail-oriented,
            reliable, and comfortable in a quiet, structured environment —
            we want to hear from you.
          </p>
        </div>
      </section>

      {/* WHAT PROCTORS DO */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              The Role
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl text-black">
              What does a proctor do?
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />
            <div className="mt-10 space-y-6 text-lg text-black/80 leading-relaxed">
              <p>
                Proctors are the people who keep our testing centers running.
                You&apos;re the first person a candidate sees when they walk in,
                and the last person they see when they leave. In between,
                you&apos;re responsible for making sure every exam is administered
                securely, professionally, and on time.
              </p>
              <p>
                Day to day, that means checking IDs, managing secure locker
                storage, monitoring the testing room, handling candidate
                questions, and following the specific protocols of each
                testing partner. It&apos;s structured, detail-oriented work
                in a quiet, professional environment.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="mt-12">
              <h3 className="font-serif text-2xl text-black mb-6">
                What we&apos;re looking for
              </h3>
              <ul className="space-y-3">
                {[
                  "Reliable, detail-oriented, and comfortable following structured procedures",
                  "Strong communication skills — candidates are often nervous and need a calm, professional presence",
                  "Comfortable with technology — you'll manage computer-based testing systems",
                  "Ability to stand/move for extended periods and maintain focus in a quiet environment",
                  "Background check required (we handle this as part of the hiring process)",
                  "No prior proctoring experience needed — we provide paid training on every partner's protocols",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-crimson mt-0.5" />
                    <span className="text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Why Work With Us
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
                What you get.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <AnimateOnScroll key={b.title} delay={i * 70}>
                  <article className="h-full bg-white border-t-4 border-crimson shadow-sm p-8">
                    <div className="flex h-12 w-12 items-center justify-center bg-black">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-serif text-xl text-black">{b.title}</h3>
                    <p className="mt-3 text-sm text-black/70 leading-relaxed">{b.desc}</p>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Open Locations
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
              We&apos;re hiring at every center.
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.slug}
                  className="flex flex-col items-center gap-1.5 p-5 border border-slate-200 text-center"
                >
                  <MapPin className="h-5 w-5 text-crimson" />
                  <span className="font-serif text-lg text-black">{loc.city}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">
                    {loc.state}
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="bg-[#F7F7F7]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Apply Now
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl text-black">
                Interested? Tell us about yourself.
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
              <p className="mt-6 text-black/70 max-w-xl mx-auto">
                Fill out the form below and we&apos;ll reach out within a few
                business days. No formal resume required — just tell us who
                you are and which location you&apos;re interested in.
              </p>
            </div>
          </AnimateOnScroll>

          <ProctorApplicationForm locations={LOCATIONS.map((l) => `${l.city}, ${l.state}`)} />
        </div>
      </section>
    </>
  );
}
