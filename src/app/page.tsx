import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicePillars from "@/components/ServicePillars";
import LocationsGrid from "@/components/LocationsGrid";
import ConsultingFeature from "@/components/ConsultingFeature";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicePillars />
      <LocationsGrid />
      <ConsultingFeature />

      <section id="about" className="bg-white border-y border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              About BLE Training
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-black">
              Quiet expertise, compounded over decades.
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-lg text-black/70 leading-relaxed">
              We are a specialist firm serving corporate clients, certification
              candidates, and the owner-operators who are the backbone of the
              American economy. Our practice is built on long relationships,
              discretion, and measurable results.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-crimson px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years serving SMBs", value: "20+" },
                { label: "Family business engagements", value: "300+" },
                { label: "Client retention", value: "94%" },
                { label: "Industries served", value: "40+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-t-4 border-crimson bg-slate-50 p-6"
                >
                  <div className="font-serif text-4xl text-black">
                    {item.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-black/70">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <TestimonialSlider />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="relative bg-black text-white p-12 md:p-16 text-center overflow-hidden border-t-4 border-crimson">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, #9e1b32, transparent 45%), radial-gradient(circle at 80% 80%, #9e1b32, transparent 45%)",
                }}
              />
              <div className="relative">
                <h2 className="font-serif text-4xl md:text-5xl">
                  Ready to work with us?
                </h2>
                <p className="mt-4 text-white/80 max-w-xl mx-auto">
                  Book a 30-minute consultation. We&apos;ll listen, ask hard
                  questions, and tell you honestly whether we&apos;re the right
                  fit.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-sm bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
                >
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
