import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Blog — Insights on Training, Leadership & Business Growth",
  description:
    "Practical insights on corporate training, leadership development, testing, and growing your business — from the BLE Training team.",
  alternates: { canonical: "/blog" },
};

const POSTS = [
  {
    slug: "five-signs-your-team-needs-leadership-training",
    title: "5 Signs Your Team Needs Leadership Training",
    excerpt:
      "Most companies wait until there's a problem to invest in leadership development. Here are five early warning signs that it's time — before turnover, morale, or performance forces your hand.",
    category: "Leadership",
    date: "April 2026",
    readTime: "4 min read",
  },
  {
    slug: "what-to-expect-on-test-day",
    title: "What to Expect on Test Day at a BLE Training Center",
    excerpt:
      "Walking into a testing center for the first time can be stressful. Here's exactly what happens from the moment you arrive to the moment you finish — no surprises.",
    category: "Testing",
    date: "April 2026",
    readTime: "3 min read",
  },
  {
    slug: "family-business-succession-planning",
    title: "Succession Planning for Family Businesses: Where to Start",
    excerpt:
      "Succession is the conversation nobody wants to have — until it's too late. Here's a practical framework for getting started, whether you're 5 years out or 15.",
    category: "Consulting",
    date: "April 2026",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-14 pb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Blog
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-black">
            Insights &amp; Ideas
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-crimson" />
          <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
            Practical thinking on training, leadership, testing, and growing
            your business.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
          <div className="space-y-8">
            {POSTS.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 80}>
                <article className="bg-white border-t-4 border-crimson shadow-sm p-8 md:p-10 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 text-xs text-black/50">
                    <span className="font-bold uppercase tracking-wider text-crimson">
                      {post.category}
                    </span>
                    <span>&middot;</span>
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 font-serif text-2xl md:text-3xl text-black">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-black/70 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-crimson">
                    Coming soon
                  </p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="mt-16 text-center">
              <p className="text-black/50">
                More articles coming soon. Want to be notified?
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:text-crimson-soft transition-colors"
              >
                Subscribe for updates <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
