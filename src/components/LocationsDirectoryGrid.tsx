"use client";

import { useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, ExternalLink, Navigation, Phone } from "lucide-react";
import { LOCATIONS, directionsUrl, type Location } from "@/lib/locations";
import { clampToPublicHours, type LiveLocationStatus } from "@/lib/timeclock-status";
import LocationSearchBar from "./LocationSearchBar";
import OpenClosedBadge from "./OpenClosedBadge";
import ExpandableHours from "./ExpandableHours";
import ManagerAvatar from "./ManagerAvatar";

export default function LocationsDirectoryGrid({
  liveStatusEntries = [],
}: {
  /** Server-fetched live status keyed by training-site slug. Passed as
   *  entries (instead of a Map) because Maps don't survive the
   *  server-component → client-component serialization boundary. */
  liveStatusEntries?: Array<[string, LiveLocationStatus]>;
}) {
  const liveStatus = useMemo(
    () => new Map(liveStatusEntries),
    [liveStatusEntries],
  );
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
            // Clamp live data to the public-facing window once per
            // location so OpenClosedBadge and ExpandableHours see the
            // same numbers (no employee prep/breakdown time leaks).
            const rawLive = liveStatus.get(loc.slug);
            const live = rawLive
              ? clampToPublicHours(rawLive, loc.schedule)
              : undefined;
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
                    <OpenClosedBadge
                      schedule={loc.schedule}
                      live={live}
                    />
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

                  <a
                    href={`tel:${loc.localPhoneE164}`}
                    className="mt-3 flex items-center gap-2 text-sm text-black hover:text-crimson transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-crimson" />
                    <span className="font-semibold">{loc.localPhoneDisplay}</span>
                    <span className="text-[10px] tracking-wide text-black/45 uppercase">
                      Direct
                    </span>
                  </a>

                  <ExpandableHours
                    schedule={loc.schedule}
                    live={live}
                  />

                  {/* Manager preview */}
                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-3">
                    <ManagerAvatar manager={loc.manager} size="sm" />
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-crimson">
                        Center Manager
                      </p>
                      <p className="mt-0.5 font-serif text-base text-black truncate">
                        {loc.manager.name}
                      </p>
                    </div>
                  </div>

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
