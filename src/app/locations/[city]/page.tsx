import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  HeartPulse,
  Compass,
  Users,
  CalendarDays,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import LocationContact from "@/components/LocationContact";
import OpenClosedBadge from "@/components/OpenClosedBadge";
import ExpandableHours from "@/components/ExpandableHours";
import {
  LOCATIONS,
  CONTACT,
  ORG,
  directionsUrl,
  getLocation,
  openingHoursSpec,
  phoneE164WithExt,
} from "@/lib/locations";

type Params = { city: string };

export function generateStaticParams(): Params[] {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await props.params;
  const loc = getLocation(city);
  if (!loc) return {};
  const title = `BLE Training Testing Center in ${loc.city}, ${loc.state}`;
  const description = `BLE Training's ${loc.city} center delivers proctored exams for Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity. Secure lockers, trained proctors, and solid privacy partitions. ${loc.address}. Call ${CONTACT.tollFreeDisplay}.`;
  return {
    title,
    description,
    keywords: [
      `BLE Training Testing Center ${loc.city} ${loc.state}`,
      `Proctored Testing ${loc.city}`,
      `Pearson VUE ${loc.city}`,
      `Prometric ${loc.city}`,
      `Certification Exam ${loc.city}`,
      `${loc.city} ${loc.state} Testing Center`,
    ],
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `${title} | BLE Training`,
      description,
      url: `/locations/${loc.slug}`,
    },
  };
}

export default async function LocationPage(props: {
  params: Promise<Params>;
}) {
  const { city } = await props.params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${ORG.url}/locations/${loc.slug}#business`,
    name: `${ORG.name} — ${loc.city}, ${loc.state}`,
    image: ORG.logo,
    url: `${ORG.url}/locations/${loc.slug}`,
    telephone: phoneE164WithExt(loc.extension),
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.locality,
      addressRegion: loc.region,
      postalCode: loc.postalCode,
      addressCountry: "US",
    },
    openingHoursSpecification: openingHoursSpec(loc.schedule),
    areaServed: loc.stateName,
    parentOrganization: { "@id": `${ORG.url}#org` },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${ORG.url}#org`,
    name: ORG.name,
    url: ORG.url,
    logo: ORG.logo,
    telephone: CONTACT.tollFreeE164,
    email: CONTACT.email,
    sameAs: ORG.sameAs,
    department: LOCATIONS.map((l) => ({
      "@type": "LocalBusiness",
      "@id": `${ORG.url}/locations/${l.slug}#business`,
      name: `${ORG.name} — ${l.city}, ${l.state}`,
      telephone: phoneE164WithExt(l.extension),
      address: {
        "@type": "PostalAddress",
        streetAddress: l.street,
        addressLocality: l.locality,
        addressRegion: l.region,
        postalCode: l.postalCode,
        addressCountry: "US",
      },
    })),
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    loc.mapQuery
  )}&output=embed`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />

      {/* HEADER STRIP */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 pb-12">
          <nav aria-label="Breadcrumb" className="text-xs text-black/70">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-crimson transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-black/40" />
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-crimson transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-black/40" />
              </li>
              <li className="text-black font-medium">
                {loc.city}, {loc.state}
              </li>
            </ol>
          </nav>

          <div className="mt-8 max-w-4xl">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-crimson">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">
                  BLE Training Testing Center
                </span>
              </div>
              <OpenClosedBadge schedule={loc.schedule} />
            </div>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-black">
              BLE Training Testing Center in{" "}
              <span className="text-crimson">
                {loc.city}, {loc.state}
              </span>
              .
            </h1>
            <div className="mt-6 h-1 w-24 bg-crimson" />
          </div>
        </div>
      </section>

      {/* FACILITY OVERVIEW + MAP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl md:text-3xl text-black">
              About this center.
            </h2>
            <div className="mt-4 h-px w-24 bg-crimson" />
            <p className="mt-6 text-black leading-relaxed">
              {loc.description}
            </p>
          </div>

          <aside className="lg:col-span-2">
            <div className="bg-white border-t-4 border-crimson shadow-sm">
              <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden">
                <iframe
                  title={`Map of BLE Training ${loc.city}, ${loc.state}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[30%] hover:grayscale-0 transition-all"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson">
                  Visit our {loc.city} Center
                </span>
                <address className="mt-3 flex items-start gap-2 text-sm text-black not-italic leading-relaxed">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-crimson" />
                  <span>{loc.address}</span>
                </address>
                <LocationContact extension={loc.extension} />
                <ExpandableHours schedule={loc.schedule} />

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={directionsUrl(loc.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full border-2 border-black bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-crimson hover:text-white hover:border-crimson transition-colors"
                  >
                    Get Directions
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 w-full bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
                  >
                    Schedule Your Exam
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* BLS (Clarks Summit + Omaha only) */}
      {loc.bls && (
        <section className="bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="bg-crimson text-white p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex items-center gap-5 md:col-span-1">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-white">
                  <HeartPulse
                    className="h-12 w-12 text-crimson"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/85">
                    Red Cross
                  </span>
                  <p className="mt-1 font-serif text-2xl text-white leading-tight">
                    BLS Training
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
                  {loc.bls.registrationUrl
                    ? `Basic Life Support classes available at our ${loc.city} center.`
                    : `Basic Life Support classes are coming soon to our ${loc.city} center.`}
                </h3>
                <p className="mt-3 text-white/90 text-sm leading-relaxed">
                  {loc.bls.registrationUrl
                    ? "American Red Cross Basic Life Support (BLS) for healthcare providers and first responders. Register directly with the Red Cross and we'll see you in the classroom."
                    : "We're finalizing our Red Cross BLS schedule for this center. Call the toll-free line to be added to the waiting list and we'll notify you when registration opens."}
                </p>
                <div className="mt-6">
                  {loc.bls.registrationUrl ? (
                    <a
                      href={loc.bls.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-crimson hover:bg-black hover:text-white transition-colors"
                    >
                      Register with Red Cross
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 border-2 border-white bg-transparent px-7 py-3 text-xs font-bold uppercase tracking-wider text-white">
                      Schedule Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MORE THAN A TESTING CENTER */}
      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                BLE In {loc.city}
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-black leading-tight">
                We&apos;re more than a testing center in {loc.city}.
              </h2>
              <div className="mt-6 h-px w-24 bg-crimson" />
              <p className="mt-6 text-lg text-black/75 leading-relaxed">
                Most companies hire one vendor to test, another to train, and
                a third to consult. In {loc.city}, BLE does all three — because
                training without credentials is incomplete, and strategy without
                trained people is just a plan on paper.
              </p>
              <p className="mt-4 text-lg text-black/75 leading-relaxed">
                Whether you&apos;re certifying your team, developing their
                leadership, or planning where the business goes next — we&apos;re
                here for all of it.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Compass,
                title: "Owner Consulting",
                body:
                  "Strategic consulting for business leaders and owners.",
                cta: "Learn more",
                href: "/consulting",
              },
              {
                icon: Users,
                title: "Organizational Training",
                body: "Custom programs for your team.",
                cta: "Learn more",
                href: "/how-we-work",
              },
              {
                icon: CalendarDays,
                title: "Host an Event",
                body:
                  "Interested in hosting a workshop or roundtable at this location? Let's talk.",
                cta: "Get in touch",
                href: "/contact",
              },
            ].map((tile, i) => {
              const Icon = tile.icon;
              return (
                <AnimateOnScroll key={tile.title} delay={i * 80}>
                  <Link
                    href={tile.href}
                    className="group block h-full bg-[#F7F7F7] border-t-4 border-crimson p-8 hover:bg-white hover:shadow-lg transition-all"
                  >
                    <Icon className="h-8 w-8 text-crimson" strokeWidth={1.5} />
                    <h3 className="mt-4 font-serif text-2xl text-black">
                      {tile.title}
                    </h3>
                    <p className="mt-3 text-sm text-black/70 leading-relaxed">
                      {tile.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson group-hover:text-crimson-soft">
                      {tile.cta} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>

          <AnimateOnScroll>
            <div className="mt-14 text-center">
              <p className="text-lg text-black/70 max-w-xl mx-auto">
                Ready to connect? We&apos;d love to meet the businesses building
                in {loc.city}.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* OTHER CENTERS */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
          <AnimateOnScroll>
            <div className="border-b-2 border-black pb-5">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                More Locations
              </span>
              <h2 className="mt-2 font-serif text-3xl text-black">
                Sit for your exam anywhere we operate.
              </h2>
            </div>
          </AnimateOnScroll>

          <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {LOCATIONS.filter((l) => l.slug !== loc.slug).map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="group flex flex-col gap-1 p-4 bg-white hover:bg-white border-t-2 border-transparent hover:border-crimson shadow-sm transition-all"
                >
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-crimson">
                    <MapPin className="h-3 w-3" />
                    {l.state}
                  </span>
                  <span className="font-serif text-lg text-black group-hover:text-crimson transition-colors">
                    {l.city}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
