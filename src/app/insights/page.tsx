import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import NewsletterForm from "@/components/NewsletterForm";
import InsightsGrid from "./InsightsGrid";
import { ARTICLES } from "@/lib/articles";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights — Knowledge Hub for Business Owners",
  description:
    "Leadership, training, and business strategy insights for mid-market business owners and executives. New articles published monthly.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | BLE Training",
    description:
      "Leadership, training, and business strategy insights for mid-market business owners and executives. New articles published monthly.",
    url: "https://www.ble.training/insights",
  },
};

export default function InsightsPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.ble.training/insights#blog",
    name: "BLE Training Insights",
    description:
      "Leadership, training, and business strategy insights for mid-market business owners and executives.",
    url: "https://www.ble.training/insights",
    publisher: { "@id": "https://www.ble.training/#organization" },
    blogPost: ARTICLES.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `https://www.ble.training/insights/${a.slug}`,
      datePublished: a.publishDate,
      author: { "@type": "Organization", name: "BLE Training" },
    })),
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

      {/* HERO */}
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
            Leadership, training, and business strategy insights for
            mid-market business owners and executives. New articles published
            monthly.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-[#F7F7F7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <AnimateOnScroll>
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                All Insights
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
                Practical thinking for business owners.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <InsightsGrid articles={ARTICLES} />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20">
          <NewsletterForm variant="dark" />
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
              Take our free 5-minute Health Scorecard and get a clear picture
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
