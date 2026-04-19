import { Handshake, MessageSquare, Wrench, Telescope } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const VALUES = [
  {
    icon: Handshake,
    title: "Earned, Not Assumed",
    desc: "We don't assume trust — we earn it. Every engagement starts with listening, not pitching. We've never sold a program we didn't believe in.",
  },
  {
    icon: MessageSquare,
    title: "Honest Over Comfortable",
    desc: "We'll tell you what you need to hear, not what you want to hear. If training isn't the answer, we'll say so. That candor is what you're paying us for.",
  },
  {
    icon: Wrench,
    title: "Built for Your Business",
    desc: "No off-the-shelf programs. Every training and consulting engagement is designed around your specific situation, culture, and goals — not a generic template.",
  },
  {
    icon: Telescope,
    title: "Long-Term Thinking",
    desc: "We measure success in years, not workshops. Our goal is to build capability that outlasts our engagement — and ultimately make ourselves unnecessary.",
  },
];

export default function CompanyValues() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              What We Believe
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white leading-tight">
              Four principles we operate by.
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <article className="flex gap-5 border-t-2 border-crimson pt-6">
                  <div className="shrink-0">
                    <Icon className="h-10 w-10 text-crimson" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-white leading-tight">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-white/75 leading-relaxed">{v.desc}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
