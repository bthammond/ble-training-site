import type { Metadata } from "next";
import LocationsDirectoryGrid from "@/components/LocationsDirectoryGrid";

export const metadata: Metadata = {
  title: "Testing Center Locations — 6 U.S. Centers",
  description:
    "Visit BLE Training's BLE Training testing centers in Tyler TX, Clarks Summit PA, Toledo OH, Lincoln NE, Omaha NE, and Topeka KS — secure lockers, trained proctors, solid privacy partitions.",
  keywords: [
    "BLE Training Locations",
    "BLE Training Testing Center Tyler TX",
    "BLE Training Testing Center Toledo OH",
    "BLE Training Testing Center Omaha NE",
    "BLE Training Testing Center Lincoln NE",
    "BLE Training Testing Center Topeka KS",
    "BLE Training Testing Center Clarks Summit PA",
  ],
  alternates: { canonical: "/locations" },
};

export default function LocationsDirectoryPage() {
  return (
    <>
      {/* HERO */}
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
            Six testing locations across Texas, Pennsylvania, Ohio,
            Nebraska, and Kansas — consistent standards in every room.
          </p>
        </div>
      </section>

      {/* SEARCH + CARD GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <LocationsDirectoryGrid />
        </div>
      </section>
    </>
  );
}
