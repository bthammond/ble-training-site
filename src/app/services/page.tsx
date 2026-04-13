import type { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  FlaskConical,
  Landmark,
  ShieldAlert,
  Cpu,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Services — Corporate, Government & Proctored Testing",
  description:
    "BLE Training serves Fortune 500 firms in manufacturing, pharma, and finance; government contractors needing operational security and technical design training; and candidates for Prometric, Pearson VUE, PSI, Kryterion, Scantron, and Meazure Learning exams.",
  keywords: [
    "Corporate Training Services",
    "Fortune 500 Training",
    "Government Contractor Training",
    "Operational Security Training",
    "Technical Design Training",
    "Proctored Testing Services",
    "Prometric Testing",
    "Pearson VUE Testing",
    "PSI Testing",
    "Kryterion Testing",
    "Scantron Testing",
    "Meazure Learning Testing",
  ],
  alternates: { canonical: "/services" },
};

const CORPORATE_SECTORS = [
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Process, safety, and operator certification programs for global manufacturers — delivered at the plant or in classroom cohorts.",
  },
  {
    icon: FlaskConical,
    title: "Pharmaceutical",
    desc: "Regulated-environment training including GxP refreshers, SOP rollouts, and technical onboarding for R&D and production teams.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    desc: "Compliance, licensure, leadership, and analyst-track curricula for banks, broker-dealers, insurers, and asset managers.",
  },
];

const GOVT_CAPABILITIES = [
  {
    icon: ShieldAlert,
    title: "Operational Security",
    desc: "OPSEC awareness, physical-security procedures, and insider-threat programs tailored to the contractor's mission.",
  },
  {
    icon: Cpu,
    title: "Technical Design",
    desc: "Systems engineering, architecture review, and applied-design training for technical staff supporting federal programs.",
  },
];

const TESTING_PARTNERS = [
  { name: "Prometric" },
  { name: "Pearson VUE" },
  { name: "PSI" },
  { name: "Kryterion" },
  { name: "Scantron" },
  { name: "Meazure Learning" },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 pb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Services
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-black">
            What we <span className="text-crimson">build.</span>
          </h1>
          <div className="mt-6 h-1 w-24 bg-crimson" />
          <p className="mt-6 text-lg md:text-xl text-black max-w-3xl leading-relaxed">
            Three practice areas, one standard. Corporate training for Fortune
            500 enterprises, technical programs for government contractors, and
            proctored testing for the world&apos;s leading certification
            providers.
          </p>
        </div>
      </section>

      {/* CORPORATE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                01 — Corporate Training
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-black">
                Fortune 500 &amp; enterprise engagements.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
              <p className="mt-6 text-black leading-relaxed">
                We design and deliver training for Fortune 500 companies in
                manufacturing, pharmaceutical, and financial services — on-site
                or virtual, classroom or one-to-one, leadership or technical.
                Every engagement is scoped around the client&apos;s operating
                reality, not a catalog.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORPORATE_SECTORS.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimateOnScroll key={s.title} delay={i * 70}>
                  <article className="h-full bg-white border-t-4 border-crimson shadow-sm p-8">
                    <span className="flex h-12 w-12 items-center justify-center">
                      <Icon className="h-10 w-10 text-crimson" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 font-serif text-2xl text-black">
                      {s.title}
                    </h3>
                    <div className="mt-3 h-px w-12 bg-crimson" />
                    <p className="mt-4 text-sm text-black leading-relaxed">
                      {s.desc}
                    </p>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* GOVERNMENT */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                02 — Government &amp; Contractors
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-black">
                An ideal partner for contractors.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
              <p className="mt-6 text-black leading-relaxed">
                BLE Training is an ideal partner for prime and sub-contractors
                delivering to federal, state, and local agencies. We supply
                discreet, experienced instructors for operational security and
                technical design training — delivered on secure sites, at the
                contractor&apos;s facility, or in our centers.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {GOVT_CAPABILITIES.map((g, i) => {
              const Icon = g.icon;
              return (
                <AnimateOnScroll key={g.title} delay={i * 70}>
                  <article className="h-full bg-white border-t-4 border-crimson shadow-sm p-8">
                    <span className="flex h-12 w-12 items-center justify-center">
                      <Icon className="h-10 w-10 text-crimson" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 font-serif text-2xl text-black">
                      {g.title}
                    </h3>
                    <div className="mt-3 h-px w-12 bg-crimson" />
                    <p className="mt-4 text-sm text-black leading-relaxed">
                      {g.desc}
                    </p>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTING */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                03 — Proctored Testing
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-black">
                High-stakes delivery, done right.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
              <p className="mt-6 text-black leading-relaxed">
                We are an authorized test-delivery center for the world&apos;s
                leading certification and licensure providers. Our proctors are
                trained to each provider&apos;s published security and delivery
                standards; every workstation is isolated behind solid privacy
                partitions; every session follows a strict chain-of-custody
                protocol.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TESTING_PARTNERS.map((p, i) => (
              <AnimateOnScroll key={p.name} delay={i * 50}>
                <div className="h-full bg-white border-t-4 border-crimson shadow-sm p-6 flex flex-col justify-center items-center text-center">
                  <ClipboardCheck
                    className="h-8 w-8 text-crimson"
                    strokeWidth={1.75}
                  />
                  <p className="mt-3 font-serif text-lg text-black leading-tight">
                    {p.name}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-crimson px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Register for an exam <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center gap-2 border-2 border-black bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-crimson hover:text-white hover:border-crimson transition-colors"
            >
              View testing centers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
