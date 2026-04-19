import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  IdCard,
  FileCheck,
  Clock,
  Armchair,
  ShieldCheck,
  Download,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Testing Preparation Checklist — What to Bring on Test Day",
  description:
    "Your BLE Training test-day checklist — ID requirements, arrival window, prohibited items, and everything you need to pass the proctor's security check.",
  keywords: [
    "Testing Preparation Checklist",
    "Proctored Exam Success",
    "Test Day Requirements",
    "BLE Training Testing Center Tyler TX",
  ],
  alternates: { canonical: "/register/checklist" },
};

const CHECKLIST = [
  {
    icon: IdCard,
    title: "Valid government ID",
    desc: "Bring an unexpired driver's license, passport, or state-issued ID matching the name on your registration exactly.",
  },
  {
    icon: FileCheck,
    title: "Confirmation email",
    desc: "Print or save a digital copy of the appointment confirmation from your testing provider. Check-in needs it.",
  },
  {
    icon: Clock,
    title: "Arrive 30 minutes early",
    desc: "Early arrival leaves time for check-in, biometrics, and locker storage before your session begins.",
  },
  {
    icon: Armchair,
    title: "Know your center",
    desc: "Confirm the BLE Training location, parking, and accessibility details before your test day.",
  },
  {
    icon: ShieldCheck,
    title: "Review the rules",
    desc: "Each provider has a prohibited-items policy — review it on the provider's site after you register.",
  },
  {
    icon: Download,
    title: "Save your score report",
    desc: "After your exam, download and archive your score report directly from the provider's portal.",
  },
];

export default function ChecklistPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HEADER */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 pb-14">
          <nav aria-label="Breadcrumb" className="text-xs text-black/70">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-crimson transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-black/60" />
              </li>
              <li>
                <Link href="/register" className="hover:text-crimson transition-colors">
                  Register for an Exam
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-black/60" />
              </li>
              <li className="text-black font-medium">Testing Preparation</li>
            </ol>
          </nav>

          <div className="mt-8 max-w-4xl">
            <div className="flex items-center gap-2 text-crimson">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Registration opened in a new tab
              </span>
            </div>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.04] tracking-tight text-black">
              Testing Preparation{" "}
              <span className="text-crimson">Checklist.</span>
            </h1>
            <div className="mt-6 h-1 w-24 bg-crimson" />
            <p className="mt-6 text-lg text-black/70 leading-relaxed max-w-3xl">
              Finish your provider registration in the other tab, then work
              through this checklist so test day is routine — not stressful.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHECKLIST.map((c, i) => {
            const Icon = c.icon;
            return (
              <AnimateOnScroll key={c.title} delay={i * 60}>
                <div className="h-full bg-white border-t-4 border-crimson shadow-sm p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-black text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-black">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/70 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <AnimateOnScroll>
          <div className="bg-black text-white p-10 md:p-12 text-center border-t-4 border-crimson">
            <h2 className="font-serif text-3xl md:text-4xl">
              Questions before test day?
            </h2>
            <p className="mt-3 text-white/80 max-w-2xl mx-auto">
              Our proctors will confirm your provider, your BLE Training
              location, and answer anything the partner&apos;s confirmation
              email didn&apos;t cover.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-crimson px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                Talk to a proctor <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/testing"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-crimson px-7 py-3 text-xs font-bold uppercase tracking-wider text-crimson hover:bg-crimson hover:text-white transition-colors"
              >
                View testing centers
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
