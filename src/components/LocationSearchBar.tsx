"use client";

import { useState, useCallback } from "react";
import { Search, Crosshair, Loader2 } from "lucide-react";
import { calculateDistance, type Location } from "@/lib/locations";

interface Props {
  locations: Location[];
  onResults: (sorted: Location[], distances: Map<string, number>) => void;
  onReset: () => void;
}

export default function LocationSearchBar({ locations, onResults, onReset }: Props) {
  const [query, setQuery] = useState("");
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);

  const sortByDistance = useCallback(
    (lat: number, lng: number) => {
      const distances = new Map<string, number>();
      locations.forEach((l) => {
        distances.set(l.slug, calculateDistance(lat, lng, l.coordinates.lat, l.coordinates.lng));
      });
      const sorted = [...locations].sort(
        (a, b) => (distances.get(a.slug) ?? 0) - (distances.get(b.slug) ?? 0)
      );
      onResults(sorted, distances);
    },
    [locations, onResults]
  );

  const handleSearch = useCallback(() => {
    const q = query.trim().toLowerCase();
    if (!q) { onReset(); return; }

    const filtered = locations.filter(
      (l) =>
        l.city.toLowerCase().includes(q) ||
        l.stateName.toLowerCase().includes(q) ||
        l.state.toLowerCase() === q ||
        l.postalCode.startsWith(q)
    );

    if (filtered.length > 0) {
      const ref = filtered[0];
      const distances = new Map<string, number>();
      filtered.forEach((l) => {
        distances.set(l.slug, calculateDistance(ref.coordinates.lat, ref.coordinates.lng, l.coordinates.lat, l.coordinates.lng));
      });
      onResults(filtered, distances);
    } else {
      onResults([], new Map());
    }
  }, [query, locations, onResults, onReset]);

  const handleGeolocate = useCallback(() => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser.");
      return;
    }
    setGeoLoading(true);
    setGeoError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => { setGeoLoading(false); sortByDistance(pos.coords.latitude, pos.coords.longitude); },
      () => { setGeoLoading(false); setGeoError("Unable to get your location. Search by city or zip instead."); }
    );
  }, [sortByDistance]);

  const handleClear = () => { setQuery(""); setGeoError(null); onReset(); };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by city, state, or zip code..."
            className="w-full border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-black shadow-sm transition-all focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-crimson-soft"
        >
          Search
        </button>
        <button
          onClick={handleGeolocate}
          disabled={geoLoading}
          className="flex items-center gap-2 border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-black shadow-sm transition-all hover:border-crimson hover:text-crimson disabled:opacity-50"
        >
          {geoLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Crosshair className="h-4 w-4" />}
          <span className="hidden sm:inline">Near Me</span>
        </button>
      </div>
      <div className="mt-2 flex items-center justify-between">
        {geoError && <p className="text-xs text-red-600">{geoError}</p>}
        {(query || geoError) && (
          <button onClick={handleClear} className="ml-auto text-xs font-medium text-black/50 underline transition-colors hover:text-crimson">
            Clear &amp; show all
          </button>
        )}
      </div>
    </div>
  );
}
