import Link from "next/link";
import { ArrowRight, Layers, Compass, ClipboardCheck } from "lucide-react";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Stats from "@/components/Stats";
import LocationsGrid from "@/components/LocationsGrid";
import ConsultingFeature from "@/components/ConsultingFeature";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — SOCIAL PROOF / CREDIBILITY BAR */}
      <PartnerLogos />

      {/* SECTION 3 — STATS */}
      <Stats />

      {/* SECTION 4 — THE PROBLEM WE SOLVE */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <AnimateOnScroll className="lg:col-span-2">
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-black">
              &ldquo;Most training companies are built for HR departments.
              <span className="text-crimson"> We&apos;re built for the owner in the room.</span>&rdquo;
            </blockquote>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120} className="lg:col-span-3 space-y-6">
            <p className="text-lg text-black/80 leading-relaxed">
              Most business owners hit a ceiling. Revenue stalls. The team
              isn&apos;t performing the way it should. Family dynamics complicate
              decisions that should be simple. And the consultants they find
              either don&apos;t understand small business — or charge like
              they&apos;re still billing Fortune 500 clients.
            </p>
            <p className="text-lg text-black/80 leading-relaxed">
              BLE is different. We&apos;ve spent twenty years inside enterprise
              organizations, designing the systems that make teams perform. Now
              we bring that same rigor to owner-led businesses — without the
              enterprise price tag or the generic playbook.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 5 — THREE PILLARS */}
      <section className="bg-[#F7F7F7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                Our Practice
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black">
                Three ways we work with you.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Build a team that performs without you managing every detail.",
                label: "Organizational Systems & Training",
                body:
                  "We design training programs, onboarding systems, and coaching frameworks that create high-functioning organizations. Tested in enterprise environments. Built for your business.",
                href: "/how-we-work",
                cta: "Learn More",
              },
              {
                icon: Compass,
                title: "Strategic advisory for founders, owners, and the families who built with them.",
                label: "Owner & Family Business Advisory",
                body:
                  "Succession planning, founder coaching, and growth strategy — designed for the specific dynamics of owner-led and family businesses.",
                href: "/consulting",
                cta: "Explore Advisory",
              },
              {
                icon: ClipboardCheck,
                title: "Six professional testing centers across the U.S.",
                label: "Proctored Testing Centers",
                body:
                  "Computer-based proctored exams through Pearson VUE, Prometric, PSI, and more. Flexible scheduling, professional staff, six locations.",
                href: "/locations",
                cta: "Find a Center",
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimateOnScroll key={pillar.label} delay={i * 90}>
                  <article className="h-full flex flex-col bg-white border-t-4 border-crimson shadow-sm p-8 lg:p-10">
                    <div className="flex h-12 w-12 items-center justify-center bg-black">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>
                    <span className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-crimson">
                      {pillar.label}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl text-black leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-black/70 leading-relaxed flex-1">
                      {pillar.body}
                    </p>
                    <Link
                      href={pillar.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft transition-colors"
                    >
                      {pillar.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTING CENTERS MAP STRIP */}
      <LocationsGrid />

      {/* SECTION 7 — CONSULTING FEATURE */}
      <ConsultingFeature />

      {/* SECTION 8 — CLIENT TESTIMONIAL */}
      <TestimonialSlider />

      {/* SECTION 9 — RED CROSS CPR/BLS */}
      <section className="bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
              American Red Cross
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-black">
              BLS, CPR &amp; First Aid
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
              Offered at BLE Training locations. Register directly with the
              Red Cross and we&apos;ll see you in the classroom.
            </p>
            <a
              href="https://www.redcross.org/take-a-class/bls?latitude=41.3117471&longitude=-75.83741739999999&searchtype=class&zip=Wyoming%2C%20PA%2018644%2C%20USA&zipcode=18644"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-700 transition-colors"
            >
              Register with Red Cross <ArrowRight className="h-4 w-4" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 10 — CLOSING CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Ready to build something that lasts?
            </h2>
            <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Book a 30-minute consultation. We&apos;ll listen, ask the right
              questions, and tell you honestly whether we&apos;re the right fit.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-crimson px-10 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
