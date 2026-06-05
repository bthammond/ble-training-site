"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: number; suffix?: string; prefix?: string };

const STATS: Stat[] = [
  { label: "Professionals Trained", value: 5000, suffix: "+" },
  { label: "Client Retention Rate", value: 92, suffix: "%" },
  { label: "Testing Center Locations", value: 6 },
  { label: "Years in Practice", value: 20, suffix: "+" },
];

// Initialize at `target` so server-rendered HTML (and any reader before
// the IntersectionObserver fires — Googlebot, link unfurlers, screen
// readers, reduced-motion users) sees the real number instead of 0.
// When the section scrolls into view we briefly reset to 0 and animate
// up; reduced-motion users skip the animation entirely.
function useCountUp(target: number, start: boolean, duration = 1600) {
  const [n, setN] = useState(target);
  useEffect(() => {
    if (!start) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setN(target);
      return;
    }
    setN(0);
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const n = useCountUp(stat.value, active);
  return (
    <div className="text-center">
      <div className="font-serif text-5xl md:text-6xl text-black tabular-nums">
        {stat.prefix}
        {n.toLocaleString()}
        <span className="text-crimson">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-widest text-black/70">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[color:var(--cream)] border-y border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s) => (
          <StatItem key={s.label} stat={s} active={active} />
        ))}
      </div>
    </section>
  );
}
