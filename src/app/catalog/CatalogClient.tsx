"use client";

import { useState, useMemo } from "react";
import { Search, BookOpen } from "lucide-react";
import { COURSES, CATEGORIES, type Course } from "@/data/courses";
import CourseModal from "@/components/CourseModal";

const CATEGORY_EMOJIS: Record<string, string> = {
  "Leadership & Management": "👔",
  Communication: "💬",
  "Sales & Marketing": "📈",
  "HR & Talent": "👥",
  "Finance & Business": "💰",
  "Safety & Compliance": "🛡️",
  "Project Management": "📋",
  "Personal Development": "🎯",
  "Training & Facilitation": "🎓",
  "Technology & Digital": "💻",
};

function getTeaser(overview: string): string {
  const firstSentence = overview.split(/\.\s/)[0];
  if (firstSentence.length > 120) return firstSentence.substring(0, 117) + "...";
  return firstSentence + ".";
}

export default function CatalogClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const matchesSearch =
        !search || c.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || c.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="flex items-center justify-center gap-2 text-crimson mb-4">
            <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            SoftSkills Course Catalog
          </h1>
          <p className="mt-2 text-lg text-crimson font-semibold tracking-wide">
            2026 Edition
          </p>
          <div className="mx-auto mt-4 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            {COURSES.length} courses across {CATEGORIES.length - 1} categories.
            Search, filter, and request any course for onsite or web-based delivery.
          </p>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto mb-4">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses by title..."
              className="w-full border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-black shadow-sm transition-all focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? "bg-crimson text-white"
                    : "bg-slate-100 text-black/60 hover:bg-slate-200"
                }`}
              >
                {cat === "All" ? "All" : `${CATEGORY_EMOJIS[cat] || ""} ${cat}`}
              </button>
            ))}
          </div>

          {/* Counter */}
          <p className="mt-3 text-center text-xs text-black/50">
            Showing{" "}
            <span className="font-bold text-black">
              {filtered.length}
            </span>{" "}
            of {COURSES.length} courses
          </p>
        </div>
      </section>

      {/* Card grid */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg font-medium text-black/50">
                No courses match your search.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-3 text-sm font-medium text-crimson underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((course) => (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className="group text-left bg-white border border-slate-200 p-5 hover:border-crimson/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-2xl mb-3">
                    {CATEGORY_EMOJIS[course.category] || "📚"}
                  </div>
                  <h3 className="font-serif text-base text-black leading-snug group-hover:text-crimson transition-colors">
                    {course.title}
                  </h3>
                  <span className="mt-2 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black/50">
                    {course.category}
                  </span>
                  <p className="mt-2 text-xs text-black/60 leading-relaxed">
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
