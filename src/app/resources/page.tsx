import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  LineChart,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ResourceCard from "@/components/ResourceCard";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Free Resources for Business Owners & Leaders",
  description:
    "Free downloadable playbooks, templates, and worksheets for mid-market business owners — succession planning, manager onboarding, business health assessment.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Resources | BLE Training",
    description:
      "Free downloadable playbooks, templates, and worksheets for mid-market business owners — succession planning, manager onboarding, business health assessment.",
    url: "https://www.ble.training/resources",
  },
};

const ICON_CLASS = "h-9 w-9";
const RESOURCES = [
  {
    icon: <BookOpen className={ICON_CLASS} strokeWidth={1.5} />,
    title: "Family Business Succession Playbook",
    description:
      "A step-by-step guide to planning leadership transitions in family-owned businesses. The three-stage framework, the 24-month timeline, and the conversations most families avoid.",
    tag: "resource-succession-playbook",
  },
  {
    icon: <ClipboardList className={ICON_CLASS} strokeWidth={1.5} />,
    title: "90-Day Manager Onboarding Template",
    description:
      "A structured onboarding framework for newly promoted managers. The weekly cadence, coaching prompts, and 30/60/90-day checkpoints that make first-time managers succeed instead of failing quietly.",
    tag: "resource-manager-onboarding",
  },
  {
    icon: <LineChart className={ICON_CLASS} strokeWidth={1.5} />,
    title: "Business Health Self-Assessment Worksheet",
    description:
      "A printable version of the BLE Training Business Health Scorecard. Walk through Leadership, Team, Operations, Culture, Growth, and Succession — on paper, at your own pace.",
    tag: "resource-scorecard-worksheet",
  },
];

export default function ResourcesPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://www.ble.training" },
    { name: "Resources", url: "https://www.ble.training/resources" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Free Resources
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
            Playbooks, templates,<br />
            <span className="text-crimson">and practical tools.</span>
          </h1>
          <div className="mt-8 h-1 w-24 bg-crimson" />
          <p className="mt-8 max-w-2xl text-lg text-white/80 leading-relaxed">
            The frameworks we use with clients — made available to you at no
            cost. Enter your email and we&apos;ll send each resource as soon
            as it&apos;s published.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-[#F7F7F7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESOURCES.map((r, i) => (
              <AnimateOnScroll key={r.tag} delay={i * 80}>
                <ResourceCard
                  icon={r.icon}
                  title={r.title}
                  description={r.description}
                  tag={r.tag}
                />
              </AnimateOnScroll>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-black/60">
            More resources on the way. Subscribe on the{" "}
            <Link
              href="/insights"
              className="text-crimson hover:text-crimson-soft underline"
            >
              Insights page
            </Link>{" "}
            to hear first when they drop.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Want to go deeper than a playbook?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Take our free 5-minute Business Health Scorecard for a
              personalized read on where your business stands.
            </p>
            <Link
              href="/scorecard"
              className="mt-8 inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Take the Scorecard <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
