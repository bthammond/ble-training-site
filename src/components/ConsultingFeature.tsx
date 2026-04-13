import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ConsultingFeature() {
  return (
    <section className="bg-white border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-28 text-center">
        <AnimateOnScroll>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-crimson">
            SMB &amp; Family Business Consulting
          </span>
          <h2 className="mt-6 font-serif text-5xl md:text-6xl text-black leading-[1.05] tracking-tight">
            A specialist practice for the businesses that outlast their founders.
          </h2>
          <div className="mx-auto mt-8 h-px w-24 bg-crimson" />
          <p className="mt-8 font-serif text-xl md:text-2xl text-black/80 leading-relaxed italic">
            &ldquo;Family businesses and founder-led companies face a distinct
            set of challenges — governance, succession, identity. We&apos;ve
            spent twenty years building a practice designed around them.&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-black/70">
            — The BLE Training Practice
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              {
                k: "01",
                t: "Succession & Governance",
                d: "Ownership transitions, family constitutions, and the board structures that hold them.",
              },
              {
                k: "02",
                t: "Founder Coaching",
                d: "Confidential advisory for principals making decisions that blur business and relationship.",
              },
              {
                k: "03",
                t: "Growth Strategy",
                d: "Three- and five-year plans tied to operating cadence, pricing, and role clarity.",
              },
            ].map((it) => (
              <div key={it.k}>
                <div className="font-serif text-3xl text-crimson">
                  {it.k}
                </div>
                <h3 className="mt-3 font-serif text-2xl text-black">
                  {it.t}
                </h3>
                <p className="mt-3 text-black/70 leading-relaxed">
                  {it.d}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={250}>
          <div className="mt-14">
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 rounded-md bg-crimson px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black shadow-md hover:bg-crimson-soft transition-all"
            >
              Explore our consulting practice
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
