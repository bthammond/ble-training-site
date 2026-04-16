"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Lock,
  Download,
  Star,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { COURSES, CATEGORIES, type Course } from "@/data/courses";
import CourseModal from "@/components/CourseModal";
import CatalogGate from "@/components/CatalogGate";

/* ── Category metadata ──────────────────────────────────────── */
const CAT_META: Record<
  string,
  { emoji: string; gradient: string; description: string }
> = {
  "Leadership & Management": {
    emoji: "👔",
    gradient: "from-slate-900 to-slate-700",
    description: "Build stronger leaders at every level of your organization.",
  },
  Communication: {
    emoji: "💬",
    gradient: "from-blue-900 to-blue-700",
    description: "Write, speak, listen, and present with confidence.",
  },
  "Sales & Marketing": {
    emoji: "📈",
    gradient: "from-emerald-900 to-emerald-700",
    description: "Grow revenue with proven sales and marketing techniques.",
  },
  "HR & Talent": {
    emoji: "👥",
    gradient: "from-purple-900 to-purple-700",
    description: "Recruit, retain, and develop the people behind the business.",
  },
  "Finance & Business": {
    emoji: "💰",
    gradient: "from-amber-900 to-amber-700",
    description: "Sharpen financial skills and business acumen across your team.",
  },
  "Safety & Compliance": {
    emoji: "🛡️",
    gradient: "from-red-900 to-red-700",
    description: "Keep your workplace safe, compliant, and audit-ready.",
  },
  "Project Management": {
    emoji: "📋",
    gradient: "from-cyan-900 to-cyan-700",
    description: "Plan, execute, and deliver projects on time and on budget.",
  },
  "Personal Development": {
    emoji: "🎯",
    gradient: "from-rose-900 to-rose-700",
    description: "Help individuals grow in confidence, creativity, and focus.",
  },
  "Training & Facilitation": {
    emoji: "🎓",
    gradient: "from-indigo-900 to-indigo-700",
    description: "Train the trainers — facilitation, design, and delivery.",
  },
  "Technology & Digital": {
    emoji: "💻",
    gradient: "from-teal-900 to-teal-700",
    description: "Digital literacy, cybersecurity, and tech-forward skills.",
  },
};

const POPULAR_IDS = [1, 3, 10, 25, 40, 70]; // Curated popular courses

const FREE_PREVIEWS = 2;

/* ── Helpers ─────────────────────────────────────────────────── */
function getTeaser(overview: string): string {
  const first = overview.split(/\.\s/)[0];
  return first.length > 120 ? first.substring(0, 117) + "..." : first + ".";
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/* ── Component ───────────────────────────────────────────────── */
export default function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [viewCount, setViewCount] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showGate, setShowGate] = useState(false);
  const [showPdfGate, setShowPdfGate] = useState(false);

  // Check cookie on mount
  useEffect(() => {
    if (getCookie("ble_catalog_access") === "granted") {
      setIsRegistered(true);
    }
  }, []);

  // Content protection
  useEffect(() => {
    const prevent = (e: Event) => e.preventDefault();
    document.addEventListener("contextmenu", prevent);
    document.addEventListener("copy", prevent);
    document.addEventListener("selectstart", prevent);

    // Block print
    const style = document.createElement("style");
    style.textContent = "@media print { body { display: none !important; } }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("copy", prevent);
      document.removeEventListener("selectstart", prevent);
      style.remove();
    };
  }, []);

  // Block keyboard shortcuts for copy/save/print
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ["c", "s", "p", "a", "u"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleCategoryClick = useCallback(
    (cat: string) => {
      if (!isRegistered) {
        const newCount = viewCount + 1;
        setViewCount(newCount);
        if (newCount > FREE_PREVIEWS) {
          setShowGate(true);
          return;
        }
      }
      setActiveCategory(cat);
      setSearch("");
    },
    [isRegistered, viewCount]
  );

  const handleRegistered = useCallback(() => {
    setIsRegistered(true);
    setShowGate(false);
  }, []);

  const filteredCourses = useMemo(() => {
    if (!activeCategory) return [];
    return COURSES.filter((c) => {
      const matchesCat = c.category === activeCategory;
      const matchesSearch =
        !search || c.title.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, search]);

  const popularCourses = useMemo(
    () => COURSES.filter((c) => POPULAR_IDS.includes(c.id)).slice(0, 6),
    []
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const c of COURSES) {
      counts[c.category] = (counts[c.category] || 0) + 1;
    }
    return counts;
  }, []);

  const previewsLeft = Math.max(0, FREE_PREVIEWS - viewCount);

  /* ── CATEGORY BROWSING VIEW ──────────────────────────────── */
  if (activeCategory) {
    return (
      <>
        {/* Header bar */}
        <section className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
            <button
              onClick={() => setActiveCategory(null)}
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all categories
            </button>
            <div className="flex items-center gap-4">
              <span className="text-4xl">
                {CAT_META[activeCategory]?.emoji || "📚"}
              </span>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-white">
                  {activeCategory}
                </h1>
                <p className="mt-1 text-white/60 text-sm">
                  {filteredCourses.length} courses available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
            <div className="relative max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${activeCategory} courses...`}
                className="w-full border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-black shadow-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
              />
            </div>
          </div>
        </section>

        {/* Course grid */}
        <section className="bg-slate-50 min-h-[60vh]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
            {filteredCourses.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-lg font-medium text-black/50">
                  No courses match your search.
                </p>
                <button
                  onClick={() => setSearch("")}
                  className="mt-3 text-sm font-medium text-crimson underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredCourses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className="group text-left bg-white border border-slate-200 rounded-lg p-6 hover:border-crimson/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="text-2xl">
                      {CAT_META[course.category]?.emoji || "📚"}
                    </span>
                    <h3 className="mt-3 font-serif text-base text-black leading-snug group-hover:text-crimson transition-colors">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-xs text-black/50 leading-relaxed">
                      {getTeaser(course.overview)}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Modal */}
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </>
    );
  }

  /* ── LANDING VIEW ────────────────────────────────────────── */
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, #9e1b32, transparent 40%), radial-gradient(circle at 70% 80%, #9e1b32, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="flex items-center justify-center gap-2 text-crimson mb-4">
            <BookOpen className="h-7 w-7" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
            Professional Development Catalog
          </h1>
          <p className="mt-3 text-lg text-crimson font-semibold tracking-wide">
            2026 Edition
          </p>
          <div className="mx-auto mt-4 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg">
            {COURSES.length} courses across {CATEGORIES.length - 1} categories —
            available for onsite or web-based delivery.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowPdfGate(true)}
              className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              <Download className="h-4 w-4" />
              Request Full Catalog
            </button>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Browse Categories
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Preview counter */}
      {!isRegistered && (
        <div className="bg-slate-900 text-white text-center py-2.5 text-xs tracking-wider">
          <Lock className="inline h-3 w-3 mr-1.5 text-crimson" />
          {previewsLeft > 0 ? (
            <>
              You have{" "}
              <span className="font-bold text-crimson">{previewsLeft}</span>{" "}
              free preview{previewsLeft !== 1 ? "s" : ""} remaining
            </>
          ) : (
            <>
              <button
                onClick={() => setShowGate(true)}
                className="font-bold text-crimson underline"
              >
                Register for free
              </button>{" "}
              to unlock the full catalog
            </>
          )}
        </div>
      )}

      {/* Popular Courses */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-5 w-5 text-crimson" />
            <h2 className="font-serif text-2xl text-black">Popular Courses</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularCourses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="group text-left bg-slate-50 border border-slate-200 rounded-lg p-6 hover:border-crimson/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl">
                    {CAT_META[course.category]?.emoji || "📚"}
                  </span>
                  <span className="shrink-0 rounded-full bg-crimson/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-crimson">
                    {course.category}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-lg text-black leading-snug group-hover:text-crimson transition-colors">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-black/50 leading-relaxed">
                  {getTeaser(course.overview)}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section id="categories" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Browse by Category
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
              {CATEGORIES.length - 1} areas of expertise.
            </h2>
            <p className="mt-3 text-black/50">
              Click a category to explore its courses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {CATEGORIES.filter((c) => c !== "All").map((cat) => {
              const meta = CAT_META[cat] || {
                emoji: "📚",
                gradient: "from-slate-900 to-slate-700",
                description: "",
              };
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`group relative overflow-hidden rounded-lg bg-gradient-to-br ${meta.gradient} p-6 text-left text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <span className="text-3xl">{meta.emoji}</span>
                  <h3 className="mt-3 font-serif text-lg leading-snug">
                    {cat}
                  </h3>
                  <p className="mt-1 text-xs text-white/50 leading-relaxed">
                    {meta.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-white/70">
                      {count} courses
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Need help choosing the right courses?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Our team can recommend a training program based on your
            team&apos;s size, industry, and goals. Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
          >
            Talk to Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      {/* Registration Gate */}
      {showGate && (
        <CatalogGate
          onRegistered={handleRegistered}
          previewsRemaining={previewsLeft}
        />
      )}

      {showPdfGate && (
        <PdfRequestGate onClose={() => setShowPdfGate(false)} />
      )}
    </>
  );
}

/* ── PDF Request Gate ──────────────────────────────────────── */
function PdfRequestGate({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [stage, setStage] = useState<"form" | "check-email" | "done">("form");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.replace(/[\r\n]/g, "").trim();
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, tag: "pdf" }),
      });
      const data = await res.json();

      if (data.success && data.alreadySubscribed) {
        setStage("done");
      } else if (data.success) {
        setStage("check-email");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Connection error. Try again.");
    } finally {
      setSending(false);
    }
  };

  if (stage === "done") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-10 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
          <h2 className="mt-4 font-serif text-2xl text-black">
            Your catalog is ready.
          </h2>
          <p className="mt-3 text-sm text-black/60">
            Click below to view the full Professional Development Catalog.
          </p>
          <a
            href="/BLE-Training-Professional-Development-Catalog-2026.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
          >
            <Download className="h-4 w-4" />
            View Catalog
          </a>
          <button
            onClick={onClose}
            className="mt-4 block mx-auto text-xs text-black/40 hover:text-black transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  if (stage === "check-email") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-black p-8 text-center">
            <Mail className="mx-auto h-10 w-10 text-crimson" />
            <h2 className="mt-4 font-serif text-2xl text-white">
              Check Your Email
            </h2>
            <p className="mt-3 text-sm text-white/70">
              We sent a confirmation link to <strong className="text-white">{email}</strong>.
              Confirm your email and we&apos;ll send you the catalog.
            </p>
          </div>
          <div className="p-8 space-y-4 text-center">
            <button
              onClick={() => setStage("done")}
              className="w-full bg-crimson px-6 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              I&apos;ve Confirmed My Email
            </button>
            <p className="text-[11px] text-black/40">
              Check your spam folder if you don&apos;t see it.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-black p-8 text-center">
          <Download className="mx-auto h-10 w-10 text-crimson" />
          <h2 className="mt-4 font-serif text-2xl text-white">
            Get the Full Catalog
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Enter your email and we&apos;ll send you access to the complete
            Professional Development Catalog.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-black/50 mb-1">
              Work Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full border border-slate-300 px-4 py-3 text-sm text-black focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
              required
            />
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-2 bg-crimson px-6 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors disabled:opacity-60"
          >
            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Send className="h-4 w-4" /> Send Me the Catalog</>}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="block mx-auto text-xs text-black/40 hover:text-black transition-colors"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
