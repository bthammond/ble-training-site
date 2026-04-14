import Link from "next/link";
import { MapPin, ArrowRight, Search } from "lucide-react";
import { LOCATIONS } from "@/lib/locations";
import AnimateOnScroll from "./AnimateOnScroll";

export default function LocationsGrid() {
  return (
    <section id="locations" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Proctored Testing
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-black">
              Six locations. One standard.
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-black/70 leading-relaxed">
              Every BLE center is staffed, equipped, and held to the same
              professional standard — wherever you are.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="mt-14 border-t-4 border-crimson bg-white p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group flex flex-col items-center gap-1.5 p-4 hover:bg-slate-50 transition-colors text-center"
                >
                  <MapPin className="h-5 w-5 text-crimson" />
                  <span className="font-serif text-lg text-black group-hover:text-crimson transition-colors">
                    {loc.city}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">
                    {loc.state}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-sm bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                <Search className="h-4 w-4" />
                Find a Center Near You
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-black bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-black hover:bg-crimson hover:text-white hover:border-crimson transition-colors"
              >
                Schedule a Test
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
