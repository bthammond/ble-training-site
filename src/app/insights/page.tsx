import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights — Knowledge Hub for Business Owners",
  description:
    "Deep thinking on succession planning, team performance, leadership development, and growing owner-led businesses. From the BLE Training team.",
  alternates: { canonical: "/insights" },
};

const CORNERSTONE = [
  {
    tag: "Succession",
    title: "The Complete Guide to Succession Planning for Family Businesses",
    excerpt:
      "Succession is the conversation nobody wants to have — until it's too late. This guide covers governance, timing, family dynamics, and the most common mistakes we see after 20 years of doing this work.",
    readTime: "12 min read",
  },
  {
    tag: "Team Performance",
    title: "How to Build an Onboarding System That Actually Works",
    excerpt:
      "Most businesses lose new hires in the first 90 days because onboarding is an afterthought. Here's the framework we've used with enterprise clients — adapted for owner-led businesses.",
    readTime: "8 min read",
  },
  {
    tag: "Leadership",
    title: "What Business Owners Get Wrong About Team Performance",
    excerpt:
      "It's rarely the people. It's almost always the system. Here are the five structural problems we see in every underperforming team — and how to fix them without replacing anyone.",
    readTime: "10 min read",
  },
];

const ARTICLES = [
  {
    tag: "Growth",
    title: "5 Signs Your Team Needs Leadership Training",
    excerpt:
      "Most companies wait until there's a problem to invest in leadership development. Here are five early warning signs.",
    readTime: "4 min read",
  },
  {
    tag: "Testing",
    title: "What to Expect on Test Day at a BLE Training Center",
    excerpt:
      "Walking into a testing center for the first time can be stressful. Here's exactly what happens from arrival to finish.",
    readTime: "3 min read",
  },
  {
    tag: "Family Business",
    title: "Succession Planning: Where to Start When You've Been Avoiding It",
    excerpt:
      "A practical framework for getting started, whether you're 5 years out or 15.",
    readTime: "5 min read",
  },
  {
    tag: "Operations",
    title: "Why Your SOPs Aren't Working (And What to Do Instead)",
    excerpt:
      "Documentation isn't the problem. Adoption is. Here's how to build processes people actually follow.",
    readTime: "6 min read",
  },
  {
    tag: "Founder",
    title: "The Founder's Trap: How to Stop Being the Business",
    excerpt:
      "You started it, you grew it, and now you can't leave it. Here's how to build a business that runs without you in every room.",
    readTime: "7 min read",
  },
  {
    tag: "Growth",
    title: "Pricing for Growth: Why Most SMBs Undercharge",
    excerpt:
      "If your margins are thin and your team is stretched, the problem might not be costs — it might be pricing.",
    readTime: "5 min read",
  },
];

export default function InsightsPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.ble.training/insights#blog",
    name: "BLE Training Insights",
    description:
      "Deep thinking on succession planning, team performance, leadership development, and growing owner-led businesses.",
    url: "https://www.ble.training/insights",
    publisher: { "@id": "https://www.ble.training/#organization" },
  };

  const schema = [
    blogSchema,
    breadcrumbSchema([
      { name: "Home", url: "https://www.ble.training" },
      { name: "Insights", url: "https://www.ble.training/insights" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="flex items-center gap-3 text-crimson mb-5">
            <BookOpen className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">
              Knowledge Hub
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Insights for the owners<br />
            <span className="text-crimson">building what&apos;s next.</span>
          </h1>
          <div className="mt-8 h-1 w-24 bg-crimson" />
          <p className="mt-8 text-lg text-white/80 max-w-2xl leading-relaxed">
            Deep thinking on succession, team performance, leadership, and
            growing the businesses that owners and families build.
          </p>
        </div>
      </section>

      {/* CORNERSTONE CONTENT */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Featured Guides
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
              Start here.
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />
          </AnimateOnScroll>

          <div className="mt-12 space-y-6">
            {CORNERSTONE.map((post, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <article className="bg-[#F7F7F7] border-l-4 border-crimson p-8 md:p-10 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 text-xs text-black/50">
                    <span className="font-bold uppercase tracking-wider text-crimson">
                      {post.tag}
                    </span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl md:text-3xl text-black leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-black/70 leading-relaxed max-w-3xl">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-crimson">
                    Coming soon
                  </p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-[#F7F7F7]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              All Insights
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
              Practical thinking for business owners.
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />
          </AnimateOnScroll>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((post, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <article className="bg-white border-t-4 border-crimson shadow-sm p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-crimson">
                    {post.tag}
                  </span>
                  <h3 className="mt-2 font-serif text-lg text-black leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-xs text-black/60 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-black/40">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                    <span className="font-semibold text-crimson">Coming soon</span>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Want to know where your business stands?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Take our free 2-minute Health Scorecard and get a clear picture
              of your succession, team, and growth readiness.
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
