"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, ExternalLink, Navigation } from "lucide-react";
import { LOCATIONS, directionsUrl, type Location } from "@/lib/locations";
import LocationSearchBar from "./LocationSearchBar";
import LocationContact from "./LocationContact";
import OpenClosedBadge from "./OpenClosedBadge";
import ExpandableHours from "./ExpandableHours";

export default function LocationsDirectoryGrid() {
  const [displayed, setDisplayed] = useState<Location[]>(LOCATIONS);
  const [distances, setDistances] = useState<Map<string, number>>(new Map());
  const [noResults, setNoResults] = useState(false);

  const handleResults = useCallback((sorted: Location[], dist: Map<string, number>) => {
    setDisplayed(sorted);
    setDistances(dist);
    setNoResults(sorted.length === 0);
  }, []);

  const handleReset = useCallback(() => {
    setDisplayed(LOCATIONS);
    setDistances(new Map());
    setNoResults(false);
  }, []);

  return (
    <>
      <LocationSearchBar locations={LOCATIONS} onResults={handleResults} onReset={handleReset} />

      {noResults ? (
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-black/50">No testing centers found matching your search.</p>
          <p className="mt-1 text-sm text-black/40">Try a different city, state, or zip code.</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((loc) => {
            const dist = distances.get(loc.slug);
            return (
              <article
                key={loc.slug}
                className="group h-full flex flex-col bg-white border-t-4 border-crimson shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-crimson">
                      <MapPin className="h-3.5 w-3.5" />
                      BLE Training Testing Center
                    </span>
                    <OpenClosedBadge schedule={loc.schedule} />
                  </div>

                  <h2 className="mt-3 font-serif text-3xl text-black leading-tight">
                    <Link href={`/locations/${loc.slug}`} className="hover:text-crimson transition-colors">
                      {loc.city}, <span className="text-crimson">{loc.state}</span>
                    </Link>
                  </h2>

                  {dist != null && (
                    <div className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black/60 ring-1 ring-slate-200">
                      <Navigation className="h-3 w-3" />
                      {dist} miles away
                    </div>
                  )}

                  <address className="mt-4 flex items-start gap-2 text-sm text-black not-italic leading-relaxed">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-crimson" />
                    <span>{loc.address}</span>
                  </address>

                  <LocationContact extension={loc.extension} />
                  <ExpandableHours schedule={loc.schedule} />

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 mt-auto pt-4">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="inline-flex items-center justify-center gap-2 flex-1 bg-crimson px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
                    >
                      View Center <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={directionsUrl(loc.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 flex-1 border-2 border-black bg-white px-4 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-crimson hover:text-white hover:border-crimson transition-colors"
                    >
                      Get Directions <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}
