"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { Article, ArticleCategory } from "@/lib/articles";
import { ARTICLE_CATEGORIES } from "@/lib/articles";

type Props = { articles: Article[] };

type Filter = "All" | ArticleCategory;

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function InsightsGrid({ articles }: Props) {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? articles : articles.filter((a) => a.category === filter);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-6">
        {(["All", ...ARTICLE_CATEGORIES] as Filter[]).map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                active
                  ? "bg-crimson text-white"
                  : "bg-white border border-slate-300 text-black hover:border-crimson hover:text-crimson"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Article grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post, i) => (
          <AnimateOnScroll key={post.slug} delay={i * 60}>
            <Link
              href={`/insights/${post.slug}`}
              className="group block h-full bg-white border-t-4 border-crimson shadow-sm p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-crimson">
                <span>{post.category}</span>
                <span className="text-black/30">·</span>
                <span className="text-black/50">{formatDate(post.publishDate)}</span>
              </div>
              <h3 className="mt-3 font-serif text-xl text-black leading-snug group-hover:text-crimson transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-black/70 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between text-xs text-black/50">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
                <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-crimson group-hover:text-crimson-soft">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-black/60">
          No articles in this category yet. Check back soon.
        </p>
      )}
    </>
  );
}
