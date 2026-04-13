import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { LOCATIONS, CONTACT } from "@/lib/locations";
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
              Six centers. One standard of excellence.
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-crimson" />
            <p className="mt-6 text-black/70 leading-relaxed">
              Accredited, quiet, professionally-staffed environments for
              certification and licensure candidates nationwide.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc, i) => (
            <AnimateOnScroll key={loc.slug} delay={i * 70}>
              <Link
                href={`/locations/${loc.slug}`}
                className="group h-full flex flex-col bg-white border-t-4 border-crimson shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crimson">
                    <MapPin className="h-3.5 w-3.5" />
                    BLE Training Testing Center
                  </div>
                  <h3 className="mt-4 font-serif text-3xl text-black leading-tight group-hover:text-crimson transition-colors">
                    {loc.city},{" "}
                    <span className="text-crimson">{loc.state}</span>
                  </h3>

                  <address className="mt-5 flex items-start gap-2.5 text-sm text-black not-italic leading-relaxed">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-crimson" />
                    <span>{loc.address}</span>
                  </address>

                  <p className="mt-3 flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 shrink-0 text-crimson" />
                    <span className="text-black">
                      {CONTACT.tollFreeDisplay}
                      <span className="mx-2 text-black/40">·</span>
                      Ext: <span className="font-bold">{loc.extension}</span>
                    </span>
                  </p>

                  <div className="mt-3 text-sm text-black/70">
                    <span className="font-semibold text-black">{loc.schedule.openDaysShort}:</span>{" "}
                    {loc.schedule.display}
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-12 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 rounded-sm bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              View All Locations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
