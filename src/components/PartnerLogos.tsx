import AnimateOnScroll from "./AnimateOnScroll";

const PARTNERS = [
  { name: "Pearson VUE", logo: "/pearson-vue-logo.png", height: "h-10" },
  { name: "Prometric", logo: "/prometric-logo.png", height: "h-14" },
  { name: "PSI", logo: "/psi-logo.png", height: "h-10" },
  { name: "Meazure Learning", logo: "/meazure-learning-logo.png", height: "h-10" },
  { name: "Kryterion", logo: "/kryterion-logo.png", height: "h-10" },
  { name: "ETS", logo: "/ets-logo.png", height: "h-10" },
  { name: "Scantron", logo: "/scantron-logo.png", height: "h-10" },
  { name: "Examity", logo: "/examity-logo.png", height: "h-10" },
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
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
