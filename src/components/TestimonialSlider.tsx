import { Quote, Star } from "lucide-react";

export default function TestimonialSlider() {
  return (
    <section id="stories" className="relative bg-black text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, #9e1b32 0, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 py-24 lg:py-32 text-center">
        <Quote className="mx-auto h-12 w-12 text-crimson" />
        <blockquote className="mt-8 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-white max-w-4xl mx-auto">
          &ldquo;BLE&apos;s succession work gave our family a shared language
          for a transition we&apos;d been avoiding for a decade. They are the
          reason this business is still in the family.&rdquo;
        </blockquote>

        <div className="mt-10 flex justify-center gap-1 text-crimson">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-6 text-sm tracking-[0.2em] uppercase text-white/70">
          <span className="text-white font-bold">Margaret R.</span>
          <span className="mx-2 text-white/30">·</span>
          Third-generation Owner, Manufacturing
        </p>
      </div>
    </section>
  );
}
