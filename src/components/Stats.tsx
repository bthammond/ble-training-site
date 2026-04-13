"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: number; suffix?: string; prefix?: string };

const STATS: Stat[] = [
  { label: "Students Trained", value: 12500, suffix: "+" },
  { label: "Success Rate", value: 97, suffix: "%" },
  { label: "Testing Centers", value: 6 },
  { label: "Years of Practice", value: 20, suffix: "+" },
];

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
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
