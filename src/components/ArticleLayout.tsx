import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Clock, Calendar } from "lucide-react";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import type { Article } from "@/lib/articles";

type Props = {
  article: Article;
  children: React.ReactNode;
};

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleLayout({ article, children }: Props) {
  const url = `https://www.ble.training/insights/${article.slug}`;

  const schema = [
    {
      ...articleSchema({
        headline: article.title,
        description: article.metaDescription,
        url,
        datePublished: article.publishDate,
        author: article.author,
      }),
      image: `https://www.ble.training${article.heroImage}`,
    },
    breadcrumbSchema([
      { name: "Home", url: "https://www.ble.training" },
      { name: "Insights", url: "https://www.ble.training/insights" },
      { name: article.title, url },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb strip */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-8">
          <nav aria-label="Breadcrumb" className="text-xs text-black/70">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link href="/" className="hover:text-crimson transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-black/40" />
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-crimson transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-black/40" />
              </li>
              <li className="text-black font-medium truncate max-w-[16rem]">
                {article.category}
              </li>
            </ol>
          </nav>
        </div>

        {/* Article header */}
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            {article.category}
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-black">
            {article.title}
          </h1>
          <div className="mt-6 h-1 w-24 bg-crimson" />
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-black/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(article.publishDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
            <span>By {article.author}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="relative aspect-[3/2] w-full overflow-hidden border-t-4 border-crimson shadow-sm">
            <Image
              src={article.heroImage}
              alt={article.heroAlt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12">
          <div className="article-prose text-lg text-black/85 leading-[1.75]">
            {children}
          </div>
        </div>
      </article>

      {/* Scorecard CTA */}
      <section className="bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
          <div className="bg-black text-white p-10 md:p-14 border-t-4 border-crimson text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              How healthy is your business, really?
            </h2>
            <p className="mt-4 text-white/75 max-w-xl mx-auto leading-relaxed">
              Take our free 5-minute Business Health Scorecard. Get a
              personalized report across Leadership, Team, Operations, Culture,
              Growth, and Succession Readiness.
            </p>
            <Link
              href="/scorecard"
              className="mt-8 inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Take the Free Scorecard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Insights */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to Insights
          </Link>
        </div>
      </section>
    </>
  );
}
