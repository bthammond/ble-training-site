import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Compass,
  ClipboardCheck,
  GraduationCap,
  MapPin,
  ChevronDown,
  CheckCircle2,
  BarChart3,
  Users2,
  Settings,
  Workflow,
} from "lucide-react";

const LMS_BASE = "https://learning.ble.training";
import Image from "next/image";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ConsultingFeature from "@/components/ConsultingFeature";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { LOCATIONS } from "@/lib/locations";
import { PARTNERS } from "@/lib/partners";
import MidPageScorecardCTA from "@/components/MidPageScorecardCTA";

const HOME_FAQS = [
  {
    q: "What types of businesses does BLE Training work with?",
    a: "BLE Training specializes in mid-market and owner-led businesses with 25 to 500 employees. We work across industries including manufacturing, healthcare, logistics, professional services, and family-owned businesses — and we have deep specialty practices for family business succession and founder-led operations.",
  },
  {
    q: "How is BLE Training different from other training companies?",
    a: "We build every program from scratch for each client — we do not resell off-the-shelf curriculum. Our team has led real organizations and brings practitioner experience, not just academic frameworks. We also offer training, consulting, and testing under one roof.",
  },
  {
    q: "Do you offer proctored testing for professional certifications?",
    a: "Yes. BLE Training operates 6 proctored testing centers across the United States, authorized for 8 major testing providers including Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity. Centers are ADA-accessible with private workstations and trained proctors.",
  },
  {
    q: "What is the Business Health Scorecard?",
    a: "The BLE Training Business Health Scorecard is a free 5-minute assessment that evaluates your organization across 6 dimensions: Leadership, Team, Operations, Culture, Growth, and Succession Readiness. You receive a personalized report with recommendations.",
  },
  {
    q: "Do you work with family-owned businesses?",
    a: "Yes. Family business succession and governance is one of our specialty practices. Our consulting work covers ownership transitions, next-generation leadership development, board design, and the relationship-aware guidance that family-led operations require.",
  },
  {
    q: "How long does a typical training engagement last?",
    a: "Engagements range from single-session workshops to multi-year leadership development programs. Most corporate training engagements run 3–12 months. Consulting engagements are scoped around the specific problem — typically 3 to 18 months. We scope every engagement to fit the problem, not a template.",
  },
];

const PAIN_POINTS = [
  "Your best employees were promoted into management, but no one trained them to manage.",
  "The business depends too much on the owner for daily decisions.",
  "Growth has created complexity your team is struggling to handle.",
  "Succession conversations are overdue or unclear.",
  "You need practical training and operating systems, not generic workshops.",
];

const OFFERS = [
  {
    icon: BarChart3,
    label: "Business Health Diagnostic",
    body: "A focused assessment of leadership, team performance, operations, growth constraints, and succession risk — ending with a practical action roadmap.",
    cta: "Request a Diagnostic",
    href: "/contact",
  },
  {
    icon: Users2,
    label: "Custom Team Training",
    body: "Role-specific training paths for managers, frontline leaders, and high-potential employees, built around the work your team actually does.",
    cta: "Request a Team Training Plan",
    href: "/contact",
  },
  {
    icon: Workflow,
    label: "Leadership Operating System Sprint",
    body: "Clarify roles, meeting rhythms, scorecards, accountability habits, and decision rights so the business does not depend on one person.",
    cta: "Build Your Leadership System",
    href: "/consulting",
  },
  {
    icon: Settings,
    label: "Succession Readiness Assessment",
    body: "A confidential readiness review for family-run and owner-led companies preparing for leadership, governance, or ownership transition.",
    cta: "Start Succession Assessment",
    href: "/consulting",
  },
  {
    icon: ClipboardCheck,
    label: "Testing Centers",
    body: "Professional proctored testing centers for major certification providers, with trained staff and clear exam-day guidance.",
    cta: "Schedule Your Exam",
    href: "/register",
  },
];

export default function Home() {
  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      {/* 1 — HERO */}
      <Hero />

      {/* 2 — PAIN POINTS: You may be in the right place if… */}
      <section className="bg-black text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Is This You?
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-white leading-tight">
              You may be in the right place if&hellip;
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <ul className="space-y-4">
              {PAIN_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                Schedule a Growth Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/scorecard"
                className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Take the Free Scorecard
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 3 — PROOF: Numbers that matter */}
      <Stats />

      {/* 4 — PRODUCTIZED OFFERS */}
      <section className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Where to Start
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                Choose the starting point that fits your situation.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERS.map((offer, i) => {
              const Icon = offer.icon;
              return (
                <AnimateOnScroll key={offer.label} delay={i * 70}>
                  <article className="h-full flex flex-col bg-white border-t-4 border-crimson shadow-sm p-8 lg:p-10">
                    <div className="flex h-12 w-12 items-center justify-center bg-black">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>
                    <span className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-crimson">
                      {offer.label}
                    </span>
                    <p className="mt-3 text-black/70 leading-relaxed flex-1">
                      {offer.body}
                    </p>
                    <Link
                      href={offer.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors"
                    >
                      {offer.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 — PROBLEM: Show you understand their pain */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <AnimateOnScroll className="lg:col-span-2">
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-black">
              &ldquo;Most training companies are built for big HR departments.
              <span className="text-crimson"> We&apos;re built for the leaders responsible for results.</span>&rdquo;
            </blockquote>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120} className="lg:col-span-3 space-y-6">
            <p className="text-lg text-black/80 leading-relaxed">
              Most growing businesses hit a ceiling. Revenue stalls. The team
              isn&apos;t performing the way it should. Leadership transitions
              complicate decisions that should be simple. And the consultants
              they find either don&apos;t understand their business — or charge
              like they&apos;re still billing Fortune 500 clients.
            </p>
            <p className="text-lg text-black/80 leading-relaxed">
              BLE is different. We&apos;ve spent twenty years inside enterprise
              organizations, designing the systems that make teams perform. Now
              we bring that same rigor to mid-market companies and owner-led
              businesses — without the enterprise price tag or the generic playbook.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 6 — THREE PILLARS */}
      <section className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Our Practice
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                Four ways we work with you.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Self-paced starter courses for individuals and teams.",
                label: "Self-Paced Learning",
                body:
                  "A growing catalog of practitioner-built courses, with custom team programs available now. Earn verifiable certificates. Start in minutes.",
                href: `${LMS_BASE}/store`,
                cta: "Browse Courses",
                external: true,
              },
              {
                icon: Layers,
                title: "Build a team that performs without you managing every detail.",
                label: "Organizational Training",
                body:
                  "We design training programs, onboarding systems, and coaching frameworks that create high-functioning organizations. Tested in enterprise environments. Built for your business.",
                href: "/how-we-work",
                cta: "Request a Team Training Plan",
                external: false,
              },
              {
                icon: Compass,
                title: "Strategic consulting for business leaders and owners.",
                label: "Business Consulting",
                body:
                  "Growth strategy, leadership transitions, and operational consulting — with specialty practices for family-run and owner-led businesses.",
                href: "/consulting",
                cta: "Explore Consulting",
                external: false,
              },
              {
                icon: ClipboardCheck,
                title: "Credential your team with confidence.",
                label: "Proctored Testing Centers",
                body:
                  "Six professional testing centers across the U.S. Computer-based proctored exams through Pearson VUE, Prometric, PSI, and more.",
                href: "/locations",
                cta: "Find a Center",
                external: false,
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              const CtaTag = pillar.external ? "a" : Link;
              return (
                <AnimateOnScroll key={pillar.label} delay={i * 90}>
                  <article className="h-full flex flex-col bg-white border-t-4 border-crimson shadow-sm p-8 lg:p-10">
                    <div className="flex h-12 w-12 items-center justify-center bg-black">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>
                    <span className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-crimson">
                      {pillar.label}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl text-black leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-black/70 leading-relaxed flex-1">
                      {pillar.body}
                    </p>
                    <CtaTag
                      href={pillar.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors"
                    >
                      {pillar.cta}
                      {pillar.external && (
                        <span className="sr-only"> (opens in Learning Hub)</span>
                      )}
                      <ArrowRight className="h-4 w-4" />
                    </CtaTag>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY ONE COMPANY */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Why One Company
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl text-black leading-tight">
                Train. Certify. Grow.<br />
                <span className="text-crimson">One partner. All three stages.</span>
              </h2>
              <div className="mx-auto mt-8 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-5 text-lg text-black/80 leading-relaxed">
                <p>
                  Most companies hire a training vendor, send their people to
                  a separate testing center, and bring in a different consultant
                  for strategy. Three vendors. Three relationships. None of
                  them talking to each other.
                </p>
                <p>
                  We built BLE to be the one partner that connects all three —
                  because training without credentials is incomplete, testing
                  without development is a missed opportunity, and strategy
                  without trained people is just a plan on paper.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Train",
                    desc: "Build your team's capabilities through programs designed for your business.",
                  },
                  {
                    step: "02",
                    title: "Certify",
                    desc: "Validate their skills at one of six professional testing centers.",
                  },
                  {
                    step: "03",
                    title: "Grow",
                    desc: "Scale the business with a team that performs — and a plan that lasts.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 border-t-2 border-crimson pt-4"
                  >
                    <span className="font-serif text-2xl text-crimson shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-black">{item.title}</h3>
                      <p className="mt-1 text-sm text-black/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-12 text-center text-lg text-black/60 italic font-serif">
              Most of our clients start with one. Many end up using all three.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mid-page Scorecard CTA band */}
      <MidPageScorecardCTA />

      {/* OUTCOME PROOF */}
      <section className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Client Outcomes
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
                Real businesses. Measurable results.
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: "28-point",
                label: "engagement improvement",
                context: "After a 12-week leadership program for a logistics company with 400+ employees.",
              },
              {
                stat: "15%",
                label: "reduction in voluntary turnover",
                context: "Frontline managers reported higher confidence and operated more independently.",
              },
              {
                stat: "18-month",
                label: "family business transition",
                context: "Third-generation manufacturing company completed succession without growth disruption.",
              },
              {
                stat: "5,000+",
                label: "professionals trained",
                context: "Across 40+ industries, from frontline managers to C-suite executives.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 60}>
                <div className="bg-white border-t-4 border-crimson shadow-sm p-8">
                  <div className="font-serif text-4xl text-black">
                    {item.stat}
                    <span className="text-crimson">.</span>
                  </div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-wider text-crimson">
                    {item.label}
                  </div>
                  <p className="mt-3 text-sm text-black/60 leading-relaxed">
                    {item.context}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200}>
            <div className="mt-10 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors"
              >
                Read the full case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CONSULTING DEEP DIVE */}
      <ConsultingFeature />

      {/* TESTIMONIAL */}
      <TestimonialSlider />

      {/* ABOUT */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-12">
          <p className="text-base md:text-lg text-black/70 leading-relaxed">
            <strong className="text-black">Bedford, Louis &amp; Ellicott, LLC</strong> —
            operating as <strong className="text-black">BLE Training</strong> —
            is a U.S.-based corporate training, business consulting, and
            proctored testing company founded in <strong>2007</strong>. We
            specialize in mid-market and owner-led businesses with 25–500
            employees, offering custom{" "}
            <Link href="/how-we-work" className="text-crimson hover:text-crimson-soft underline">
              organizational training programs
            </Link>
            ,{" "}
            <Link href="/consulting" className="text-crimson hover:text-crimson-soft underline">
              business consulting
            </Link>
            {" "}with specialty depth in{" "}
            <Link
              href="/insights/family-business-succession-guide"
              className="text-crimson hover:text-crimson-soft underline"
            >
              family business succession
            </Link>
            , and{" "}
            <Link href="/testing" className="text-crimson hover:text-crimson-soft underline">
              six nationwide proctored testing centers
            </Link>
            {" "}authorized for Pearson VUE, Prometric, PSI, and five other
            providers. Headquartered in Pennsylvania and serving the
            continental United States across manufacturing, healthcare,
            logistics, financial services, and professional services.
          </p>
        </div>
      </section>

      {/* TESTING CENTERS + PARTNER LOGOS */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Proctored Testing
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                Six testing centers. All major providers.
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
              <p className="mt-6 text-black/70 leading-relaxed">
                We deliver computer-based proctored exams for Pearson VUE,
                Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron,
                and Examity — with professional staff at every location.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group flex flex-col items-center gap-1.5 p-5 border border-slate-200 hover:border-crimson hover:bg-[#F7F7F7] transition-all text-center"
                >
                  <MapPin className="h-5 w-5 text-crimson" />
                  <span className="font-serif text-lg text-black group-hover:text-crimson transition-colors">
                    {loc.city}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">
                    {loc.state}
                  </span>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-14 text-center text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Authorized test delivery partner for
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
              {PARTNERS.map((p) => (
                <a
                  key={p.slug}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} — open registration in a new tab`}
                  className="flex items-center justify-center h-16 px-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={p.logoSrc}
                    alt={p.name}
                    width={160}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
              ))}
            </div>
          </AnimateOnScroll>

          <div className="mt-10 text-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Schedule Your Exam <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* RED CROSS */}
      <section className="bg-[#F7F7F7]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16 text-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
              American Red Cross
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
              BLS, CPR &amp; First Aid
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-black/70 max-w-2xl mx-auto leading-relaxed">
              Offered at BLE Training locations. Register directly with the
              Red Cross and we&apos;ll see you in the classroom.
            </p>
            <a
              href="https://www.redcross.org/take-a-class/bls?latitude=41.3117471&longitude=-75.83741739999999&searchtype=class&zip=Wyoming%2C%20PA%2018644%2C%20USA&zipcode=18644"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-700 transition-colors"
            >
              Register with Red Cross <ArrowRight className="h-4 w-4" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Common Questions
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
                Quick answers.
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-12 space-y-3">
            {HOME_FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group border border-slate-200 bg-white hover:border-crimson/40 transition-colors"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 font-serif text-lg text-black">
                  <span>{faq.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 mt-0.5 text-crimson transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 text-black/70 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors"
            >
              See all FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Tell us what you&apos;re trying to solve.
            </h2>
            <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              It starts with a 30-minute conversation. No pitch deck. No
              pressure. Just a practical conversation about what is going on
              and whether BLE can help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-crimson px-10 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                Schedule a 30-Minute Growth Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/scorecard"
                className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Take the Free Business Health Scorecard
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
