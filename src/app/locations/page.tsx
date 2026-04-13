import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import LocationContact from "@/components/LocationContact";
import LocationHours from "@/components/LocationHours";
import { LOCATIONS, directionsUrl } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Testing Center Locations — 6 Authorized U.S. Centers",
  description:
    "Visit BLE Training's authorized testing centers in Tyler TX, Clarks Summit PA, Toledo OH, Lincoln NE, Omaha NE, and Topeka KS — secure lockers, trained proctors, solid privacy partitions.",
  keywords: [
    "BLE Training Locations",
    "Authorized Testing Center Tyler TX",
    "Authorized Testing Center Toledo OH",
    "Authorized Testing Center Omaha NE",
    "Authorized Testing Center Lincoln NE",
    "Authorized Testing Center Topeka KS",
    "Authorized Testing Center Clarks Summit PA",
  ],
  alternates: { canonical: "/locations" },
};

export default function LocationsDirectoryPage() {
  return (
    <>
      {/* HERO — uses home-hero.png as background */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/home-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-28 md:py-40 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/85">
            BLE Training
          </span>
          <h1 className="mt-4 font-serif font-bold text-white uppercase tracking-tight leading-[0.95] text-6xl md:text-8xl lg:text-9xl">
            Our Centers
          </h1>
          <div className="mt-8 mx-auto h-1 w-24 bg-crimson" />
          <p className="mt-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Six authorized testing locations across Texas, Pennsylvania, Ohio,
            Nebraska, and Kansas — consistent standards in every room.
          </p>
        </div>
      </section>

      {/* CARD GRID — UA crimson-topped cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, i) => (
              <AnimateOnScroll key={loc.slug} delay={i * 70}>
                <article className="group h-full flex flex-col bg-white border-t-4 border-crimson shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson">
                      Authorized Testing Center
                    </span>
                    <h2 className="mt-3 font-serif text-3xl text-black leading-tight">
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="hover:text-crimson transition-colors"
                      >
                        {loc.city},{" "}
                        <span className="text-crimson">{loc.state}</span>
                      </Link>
                    </h2>

                    <address className="mt-4 flex items-start gap-2 text-sm text-black not-italic leading-relaxed">
                      <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-crimson" />
                      <span>{loc.address}</span>
                    </address>

                    <LocationContact extension={loc.extension} />
                    <LocationHours schedule={loc.schedule} />

                    <p className="mt-5 text-sm text-black/75 leading-relaxed flex-1">
                      {loc.description.split(". ").slice(0, 2).join(". ")}.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="inline-flex items-center justify-center gap-2 flex-1 bg-crimson px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
                      >
                        View Center
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href={directionsUrl(loc.address)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 flex-1 border-2 border-black bg-white px-4 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-crimson hover:text-white hover:border-crimson transition-colors"
                      >
                        Get Directions
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
