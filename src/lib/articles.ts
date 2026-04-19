/**
 * Blog article metadata — single source of truth for the Insights section.
 * Individual article pages live at /insights/<slug>/page.tsx and import
 * from this module so titles, excerpts, and dates stay in sync with the
 * listing page.
 */

export type ArticleCategory =
  | "Family Business"
  | "Leadership Development"
  | "Proctored Testing"
  | "Corporate Training";

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  metaDescription: string; // 140-160 chars, SEO-tuned
  readTime: string;
  publishDate: string; // ISO YYYY-MM-DD
  author: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "onboarding-process-costing-you-people",
    title: "Why Your Onboarding Process Is Costing You Good People",
    category: "Corporate Training",
    excerpt:
      "30% of new hires leave inside 90 days — and onboarding is the hidden cause. The three things new hires actually need, and the 90-day framework that retains them.",
    metaDescription:
      "Roughly 30% of new hires leave within 90 days. Here's why — and the 90-day onboarding framework that separates orientation from real onboarding.",
    readTime: "7 min read",
    publishDate: "2026-03-22",
    author: "The BLE Training Team",
  },
  {
    slug: "real-cost-of-leadership-gap",
    title: "The Real Cost of Doing Nothing About Your Leadership Gap",
    category: "Corporate Training",
    excerpt:
      "There's an invisible line item on every mid-market P&L: the cost of undertrained leaders. Here's how to calculate it — and why it's usually seven figures.",
    metaDescription:
      "Undertrained leaders cost mid-market companies six and seven figures annually. Here's how to calculate your leadership gap — and what to do about it.",
    readTime: "8 min read",
    publishDate: "2026-02-18",
    author: "The BLE Training Team",
  },
  {
    slug: "what-to-expect-pearson-vue-testing-center",
    title: "What to Expect at a Pearson VUE Testing Center",
    category: "Proctored Testing",
    excerpt:
      "A practical, reassuring guide for first-time test-takers. How to register, what to bring, what happens at check-in, and how results are delivered.",
    metaDescription:
      "First time at a Pearson VUE testing center? Here's exactly what happens — registration, what to bring, check-in, the exam itself, and how you get results.",
    readTime: "6 min read",
    publishDate: "2026-01-15",
    author: "The BLE Training Team",
  },
  {
    slug: "why-best-performers-make-worst-managers",
    title: "Why Your Best Performers Make the Worst New Managers",
    category: "Leadership Development",
    excerpt:
      "The most common and expensive promotion decision in mid-market business. Why technical excellence doesn't predict leadership — and what works instead.",
    metaDescription:
      "Promoting your top performer to manager is the most common — and most expensive — mistake in mid-market business. Here's why, and what actually works.",
    readTime: "8 min read",
    publishDate: "2025-12-09",
    author: "The BLE Training Team",
  },
  {
    slug: "family-business-succession-guide",
    title: "How to Build a Succession Plan That Actually Works",
    category: "Family Business",
    excerpt:
      "Most family business succession plans fail quietly. Why succession is a people problem, not a paperwork problem — and the 24-month framework that works.",
    metaDescription:
      "Most family business succession plans fail — not loudly, but quietly. Here's the 3-stage framework and 24-month timeline that actually transfers a business.",
    readTime: "9 min read",
    publishDate: "2025-11-12",
    author: "The BLE Training Team",
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  "Corporate Training",
  "Leadership Development",
  "Family Business",
  "Proctored Testing",
];
