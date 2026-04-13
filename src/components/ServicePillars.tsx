import Link from "next/link";
import { Users, ClipboardCheck, Briefcase, Heart, ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const PILLARS = [
  {
    icon: Users,
    title: "Corporate Training",
    desc: "Leadership, compliance, and skills programs tailored to your teams — delivered on-site or virtually.",
    href: "/#services",
    tag: "For Enterprises",
  },
  {
    icon: ClipboardCheck,
    title: "Proctored Testing",
    desc: "Secure, accredited testing across six U.S. centers with flexible scheduling for professional exams.",
    href: "/testing",
    tag: "6 Locations",
  },
  {
    icon: Briefcase,
    title: "SMB Consulting",
    desc: "Strategic advisory, operational coaching, and growth roadmaps for small-to-mid-sized businesses.",
    href: "/consulting",
    tag: "Strategy",
  },
  {
    icon: Heart,
    title: "Family Business & Entrepreneurship",
    desc: "A specialist practice: succession planning, governance, founders' coaching, and legacy design.",
    href: "/consulting#family",
    tag: "Our Niche",
  },
];

export default function ServicePillars() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      <AnimateOnScroll>
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson">
            Our Practice
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
            Four pillars. One partnership.
          </h2>
          <p className="mt-4 text-lg text-black/70 leading-relaxed">
            Everything we do serves one outcome — helping organizations and
            operators build durable, disciplined businesses.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PILLARS.map((p, i) => {
          const Icon = p.icon;
          return (
            <AnimateOnScroll key={p.title} delay={i * 90}>
              <Link
                href={p.href}
                className="group relative flex flex-col h-full rounded-2xl border border-[color:var(--border)] bg-white p-8 hover:border-crimson/60 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-crimson group-hover:bg-crimson group-hover:text-black transition-colors">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-medium tracking-widest uppercase text-black/70">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-black">
                  {p.title}
                </h3>
                <p className="mt-3 text-black/70 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-black group-hover:text-crimson transition-colors">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
}
