import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const PARTNERS = [
  { name: "Pearson VUE", logo: "/pearson-vue-logo.png", w: 200, h: 80 },
  { name: "Prometric", logo: "/prometric-logo.png", w: 200, h: 80 },
  { name: "PSI", logo: "/psi-logo.png", w: 200, h: 80 },
  { name: "Meazure Learning", logo: "/meazure-learning-logo.png", w: 200, h: 80 },
  { name: "Kryterion", logo: "/kryterion-logo.png", w: 200, h: 80 },
  { name: "ETS", logo: "/ets-logo.png", w: 200, h: 80 },
  { name: "Scantron", logo: "/scantron-logo.png", w: 200, h: 80 },
  { name: "Examity", logo: "/examity-logo.png", w: 200, h: 80 },
];

export default function PartnerLogos() {
  return (
    <section className="bg-white border-y border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <AnimateOnScroll>
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-black/50">
            Delivering exams for the world&apos;s leading testing providers
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center h-20 px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
