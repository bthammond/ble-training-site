import Link from "next/link";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { LOCATIONS, directionsUrl } from "@/lib/locations";
import AnimateOnScroll from "./AnimateOnScroll";
import LocationContact from "./LocationContact";
import LocationHours from "./LocationHours";

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
              <article
                id={loc.slug}
                className="group h-full flex flex-col bg-white border-t-4 border-crimson shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crimson">
                    <MapPin className="h-3.5 w-3.5" />
                    Testing Center
                  </div>
                  <h3 className="mt-4 font-serif text-3xl text-black leading-tight">
                    {loc.city},{" "}
                    <span className="text-crimson">{loc.state}</span>
                  </h3>

                  <address className="mt-5 flex items-start gap-2.5 text-sm text-black not-italic leading-relaxed">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-crimson" />
                    <span>{loc.address}</span>
                  </address>

                  <LocationContact extension={loc.extension} />
                  <LocationHours schedule={loc.schedule} />

                  <a
                    href={directionsUrl(loc.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-black underline underline-offset-4 decoration-2 hover:text-crimson hover:decoration-crimson transition-colors self-start"
                  >
                    Get Directions
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <div className="mt-auto pt-6">
                    <Link
                      href={`/contact?location=${loc.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full rounded-sm bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
                    >
                      Schedule a Test
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
