import { MessageSquare, PenTool, Rocket } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const STEPS = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consult",
    description:
      "We start with a conversation. Tell us what you need — whether it's training for your team, a testing program, or help growing your business.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "We build a program around your situation — not a template. Every engagement is scoped to fit your people, your industry, and your goals.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deliver",
    description:
      "We show up and do the work. On-site or virtual, one session or ongoing — and we stay involved until the results are there.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              How We Work
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
              Three steps. No runaround.
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-crimson" />
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimateOnScroll key={step.number} delay={i * 100}>
                <div className="relative text-center">
                  {/* Connector line (hidden on mobile, hidden on last item) */}
                  {i < STEPS.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-white/15"
                    />
                  )}

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-crimson bg-black">
                    <Icon className="h-8 w-8 text-crimson" />
                  </div>

                  <div className="mt-4 text-xs font-bold uppercase tracking-widest text-crimson">
                    Step {step.number}
                  </div>

                  <h3 className="mt-2 font-serif text-3xl text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-white/70 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
