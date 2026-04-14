import Link from "next/link";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { directionsUrl, type Location } from "@/lib/locations";
import LocationContact from "./LocationContact";
import LocationHours from "./LocationHours";

export default function LocationCard({ location }: { location: Location }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    location.mapQuery
  )}&output=embed`;

  return (
    <article
      id={location.slug}
      className="group flex flex-col border-t-4 border-crimson bg-white shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[16/9] bg-slate-50 relative overflow-hidden">
        <iframe
          title={`Map of ${location.city}, ${location.state}`}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups"
          className="absolute inset-0 h-full w-full border-0 grayscale-[40%] group-hover:grayscale-0 transition-all"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson">
          BLE Training Testing Center
        </span>
        <h3 className="mt-2 font-serif text-2xl text-black">
          {location.city}, {location.state}
        </h3>

        <address className="mt-3 flex items-start gap-2 text-sm text-black not-italic leading-relaxed">
          <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-crimson" />
          <span>{location.address}</span>
        </address>

        <LocationContact extension={location.extension} />
        <LocationHours schedule={location.schedule} />

        <a
          href={directionsUrl(location.address)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-black underline underline-offset-4 decoration-2 hover:text-crimson hover:decoration-crimson transition-colors self-start"
        >
          Get Directions
          <ExternalLink className="h-3.5 w-3.5" />
        </a>

        <Link
          href={`/contact?location=${location.slug}`}
          className="mt-6 inline-flex items-center justify-center gap-2 bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
        >
          Schedule a Test
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
