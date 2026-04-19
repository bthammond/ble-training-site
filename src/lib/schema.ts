/**
 * Centralized Schema.org JSON-LD helpers for BLE Training.
 * These feed AI search agents (SearchGPT, Perplexity, Gemini) and
 * traditional search engines to surface BLE as an authority.
 */

export const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.ble.training/#organization",
  name: "BLE Training",
  alternateName: "BLE",
  url: "https://www.ble.training",
  logo: "https://www.ble.training/BLE-Training---black-letters.png",
  description:
    "Corporate training, business consulting, and proctored testing for mid-market companies and owner-led businesses. Six authorized testing centers across the U.S.",
  telephone: "+1-877-879-2531",
  email: "info@ble.training",
  foundingDate: "2007",
  founder: {
    "@type": "Person",
    "@id": "https://www.ble.training/about#brian-hammond",
    name: "Brian T. Hammond",
    jobTitle: "Founder & Chief Learning Officer",
    url: "https://brianthammond.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Louisiana State University",
    },
    knowsAbout: [
      "Corporate Training",
      "Leadership Development",
      "Succession Planning",
      "Family Business Consulting",
      "Organizational Development",
    ],
  },
  sameAs: ["https://www.linkedin.com/company/bletraining"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "PA",
  },
  areaServed: "US",
  knowsAbout: [
    "Corporate Training",
    "Leadership Development",
    "Business Consulting",
    "Succession Planning",
    "Family Business Consulting",
    "Proctored Testing",
    "Organizational Development",
    "Team Performance",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.ble.training/#website",
  url: "https://www.ble.training",
  name: "BLE Training",
  description: "Train Your Team. Grow Your Business.",
  publisher: { "@id": "https://www.ble.training/#organization" },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider: { "@id": "https://www.ble.training/#organization" },
    areaServed: "US",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.ble.training/about#brian-hammond",
    name: "Brian T. Hammond",
    jobTitle: "Founder & Chief Learning Officer",
    worksFor: { "@id": "https://www.ble.training/#organization" },
    url: "https://brianthammond.com",
    image: "https://www.ble.training/brian-hammond-headshot.png",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Louisiana State University",
    },
    knowsAbout: [
      "Corporate Training",
      "Leadership Development",
      "Succession Planning",
      "Family Business Consulting",
      "Organizational Development",
      "Team Performance",
    ],
    sameAs: ["https://brianthammond.com"],
  };
}

export function articleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  author = "Brian T. Hammond",
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: "https://brianthammond.com",
    },
    publisher: { "@id": "https://www.ble.training/#organization" },
  };
}
