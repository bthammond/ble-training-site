import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import { PARTNERS } from "@/lib/partners";

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
              <a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} — open registration in a new tab`}
                className="flex items-center justify-center h-20 px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={p.logoSrc}
                  alt={p.name}
                  width={200}
                  height={80}
                  className="max-h-full max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
