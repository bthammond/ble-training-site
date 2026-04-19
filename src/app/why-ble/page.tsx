import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, ShieldCheck, Building2, Heart, Award, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Why BLE Training — What Makes Us Different",
  description:
    "What makes BLE Training different from other corporate training companies? Practitioners, not professors. Custom programs, not off-the-shelf curriculum.",
  alternates: { canonical: "/why-ble" },
  openGraph: {
    title: "Why BLE Training",
    description:
      "What makes BLE Training different from other corporate training companies? Practitioners, not professors. Custom programs, not off-the-shelf curriculum.",
    url: "https://www.ble.training/why-ble",
  },
};

const DIFFERENTIATORS = [
  {
    icon: Clock,
    title: "20 years in the business",
    description: "We were founded in 2007. Our founder has over 30 years of experience — 15+ in corporate America before starting BLE Training. We've been on your side of the table.",
  },
  {
    icon: Building2,
    title: "6 testing centers, one standard",
    description: "Every center is staffed with trained proctors, equipped with private workstations, and built for focused testing. Same experience, every location.",
  },
  {
    icon: Users,
    title: "We work with businesses of all sizes",
    description: "From small businesses to enterprise clients. We don't have a minimum contract size or a one-size-fits-all program. We meet you where you are.",
  },
  {
    icon: Heart,
    title: "Specialty practices when you need them",
    description: "Beyond core training and consulting, we have deep expertise in leadership transitions, succession planning, and the relationship dynamics of family-run businesses.",
  },
  {
    icon: ShieldCheck,
    title: "8 authorized testing partners",
    description: "We deliver exams for Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity. Your candidates can take almost any certification exam at our centers.",
  },
  {
    icon: Award,
    title: "We don't sell off-the-shelf",
    description: "Every training program is designed around your team, your industry, and your goals. We don't resell someone else's courseware and call it custom.",
  },
];

export default function WhyBLEPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Why BLE Training
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight">
            We show up, do the work,<br />
            <span className="text-crimson">and deliver results.</span>
          </h1>
          <div className="mx-auto mt-6 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg">
            There are a lot of training companies out there. Here&apos;s why
            our clients choose us — and stay.
          </p>
        </div>
      </section>

      {/* THE REAL REASON */}
      <section className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              One partner. Three stages.
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-black leading-tight">
              Most companies hire three different vendors to train, certify,
              and advise. We do all three — because they work better together.
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
              Training without credentials is incomplete. Testing without
              development is a missed opportunity. And strategy without
              trained people is just a plan on paper.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <AnimateOnScroll key={d.title} delay={i * 70}>
                  <div className="h-full border-t-4 border-crimson bg-white p-8 shadow-sm">
                    <Icon className="h-8 w-8 text-crimson" strokeWidth={1.5} />
                    <h3 className="mt-4 font-serif text-xl text-black">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-black/70 leading-relaxed text-sm">
                      {d.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-black">
              Ready to see the difference?
            </h2>
            <p className="mt-4 text-black/60 max-w-xl mx-auto">
              One conversation is all it takes. No pitch decks, no pressure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                Talk to Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 border-2 border-black px-8 py-4 text-xs font-bold uppercase tracking-wider text-black hover:bg-crimson hover:text-white hover:border-crimson transition-colors"
              >
                See How We Work
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
