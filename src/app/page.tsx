import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Stats from "@/components/Stats";
import ProcessSteps from "@/components/ProcessSteps";
import ServicePillars from "@/components/ServicePillars";
import LocationsGrid from "@/components/LocationsGrid";
import ConsultingFeature from "@/components/ConsultingFeature";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <Stats />
      <ProcessSteps />
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
              Twenty years of doing the work.
            </h2>
            <div className="mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-lg text-black/70 leading-relaxed">
              BLE Training is a corporate training company with a focus on
              small and mid-sized businesses. We work closely with
              founder-led and family-owned companies, and we run proctored
              testing centers across the country. Our clients stay because
              we deliver.
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

      {/* RED CROSS BANNER */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-red-50 border-2 border-red-200">
                <span className="text-4xl">🏥</span>
              </div>
              <div className="text-center md:text-left flex-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                  American Red Cross
                </span>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl text-black">
                  BLS, First Aid &amp; CPR Training
                </h2>
                <p className="mt-3 text-black/70 max-w-xl leading-relaxed">
                  We offer American Red Cross Basic Life Support, First Aid,
                  and CPR classes at our testing centers. Register directly
                  with the Red Cross and we&apos;ll see you in the classroom.
                </p>
              </div>
              <a
                href="https://www.redcross.org/take-a-class/bls?latitude=41.3117471&longitude=-75.83741739999999&searchtype=class&zip=Wyoming%2C%20PA%2018644%2C%20USA&zipcode=18644"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-700 transition-colors"
              >
                Register with Red Cross
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

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
                <h2 className="font-serif text-4xl md:text-5xl text-white">
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
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
