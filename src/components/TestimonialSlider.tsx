"use client";

import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "BLE's succession work gave our family a shared language for a transition we'd been avoiding for a decade. They are the reason this business is still in the family.",
    name: "Margaret R.",
    role: "Third-generation Owner, Manufacturing",
  },
  {
    quote:
      "We rolled out their leadership program across four regions. Engagement scores climbed 28 points, and the frontline managers are finally operating like owners.",
    name: "David O.",
    role: "VP People & Culture, Logistics",
  },
  {
    quote:
      "The proctored testing process was smooth, professional, and frankly calmer than any center I'd sat in before. I'd recommend BLE to any candidate.",
    name: "Priya S.",
    role: "Certification Candidate, Healthcare",
  },
  {
    quote:
      "Their consulting team doesn't hand you a deck and leave — they sit in the P&L with you. Our margins are up double digits since engagement.",
    name: "Carlos M.",
    role: "Founder & CEO, B2B Services",
  },
];

export default function TestimonialSlider() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  const t = TESTIMONIALS[i];

  return (
    <section id="stories" className="relative bg-black text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, #9e1b32 0, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 py-24 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson">
          Success Stories
        </span>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">
          What clients say about working with us.
        </h2>

        <div className="mt-14 relative">
          <Quote className="mx-auto h-10 w-10 text-crimson/70" />
          <div key={i} className="slide-in mt-6">
            <p className="mx-auto max-w-3xl font-serif text-2xl md:text-3xl leading-relaxed text-white/95">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-8 flex justify-center gap-1 text-crimson">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm tracking-wide uppercase text-white/60">
              <span className="text-white font-semibold">{t.name}</span> · {t.role}
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => setI((v) => (v - 1 + total) % total)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-crimson" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((v) => (v + 1) % total)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
