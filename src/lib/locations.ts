export type Schedule = {
  /** Full day names for Schema.org JSON-LD, e.g. "Monday" */
  openDays: string[];
  /** Display string of open days, e.g. "Mon, Tue, Fri, Sat" or "Mon – Sat" */
  openDaysShort: string;
  /** Display string of closed days, e.g. "Wed, Thu, Sun" */
  closedDaysShort: string;
  /** 24h "HH:MM" for JSON-LD */
  opens: string;
  /** 24h "HH:MM" for JSON-LD */
  closes: string;
  /** Display string for time range, e.g. "8:00 AM – 5:00 PM" */
  display: string;
};

export type Location = {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  address: string;
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  extension: string;
  schedule: Schedule;
  mapQuery: string;
  description: string;
  coordinates: { lat: number; lng: number };
  bls?: {
    /** Red Cross BLS registration URL, or omit for "coming soon" */
    registrationUrl?: string;
    /** Show a "Coming Soon" placeholder when no URL yet */
    comingSoon?: boolean;
  };
};

const HRS_8_5: Pick<Schedule, "opens" | "closes" | "display"> = {
  opens: "08:00",
  closes: "17:00",
  display: "8:00 AM – 5:00 PM",
};

const HRS_9_6: Pick<Schedule, "opens" | "closes" | "display"> = {
  opens: "09:00",
  closes: "18:00",
  display: "9:00 AM – 6:00 PM",
};

export const LOCATIONS: Location[] = [
  {
    slug: "tyler-tx",
    city: "Tyler",
    state: "TX",
    stateName: "Texas",
    address: "3200 Troup Hwy, Suite 216, Tyler, TX 75701",
    street: "3200 Troup Hwy, Suite 216",
    locality: "Tyler",
    region: "TX",
    postalCode: "75701",
    extension: "708",
    schedule: {
      openDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      openDaysShort: "Mon – Sat",
      closedDaysShort: "Sun",
      ...HRS_8_5,
    },
    mapQuery: "3200 Troup Hwy, Suite 216, Tyler, TX 75701",
    coordinates: { lat: 32.3113, lng: -95.2753 },
    description:
      "Our Tyler center serves East Texas and the ArkLaTex region from a facility on Troup Highway. We deliver certification and licensure exams across IT, healthcare, skilled trades, insurance, and more. Plenty of parking right out front, wheelchair accessible, and staff on-site during all appointments.",
  },
  {
    slug: "clarks-summit-pa",
    city: "Clarks Summit",
    state: "PA",
    stateName: "Pennsylvania",
    address: "233 Northern Blvd, Suite 4, Clarks Summit, PA 18411",
    street: "233 Northern Blvd, Suite 4",
    locality: "Clarks Summit",
    region: "PA",
    postalCode: "18411",
    extension: "704",
    schedule: {
      openDays: ["Monday", "Wednesday", "Friday", "Saturday"],
      openDaysShort: "Mon, Wed, Fri, Sat",
      closedDaysShort: "Tue, Thu, Sun",
      ...HRS_8_5,
    },
    mapQuery: "233 Northern Blvd, Suite 4, Clarks Summit, PA 18411",
    coordinates: { lat: 41.4870, lng: -75.7088 },
    bls: {
      registrationUrl:
        "https://www.redcross.org/take-a-class/bls?latitude=41.3117471&longitude=-75.83741739999999&searchtype=class&zip=Wyoming%2C%20PA%2018644%2C%20USA&zipcode=18644",
    },
    description:
      "Our Clarks Summit location serves the Scranton–Wilkes-Barre area and candidates from the Lehigh Valley, Northeastern PA, and the Southern Tier of New York. Easy access from I-81 and I-476 with on-site parking. We deliver professional, certification, licensure, and higher-education exams.",
  },
  {
    slug: "toledo-oh",
    city: "Toledo",
    state: "OH",
    stateName: "Ohio",
    address: "5151 Monroe Street, Suite 208, Toledo, OH 43623",
    street: "5151 Monroe Street, Suite 208",
    locality: "Toledo",
    region: "OH",
    postalCode: "43623",
    extension: "706",
    schedule: {
      openDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
      openDaysShort: "Mon, Tue, Wed, Thu, Sat",
      closedDaysShort: "Fri, Sun",
      ...HRS_8_5,
    },
    mapQuery: "5151 Monroe Street, Suite 208, Toledo, OH 43623",
    coordinates: { lat: 41.6874, lng: -83.6244 },
    description:
      "Our Toledo center on Monroe Street is a convenient stop for candidates from Northwest Ohio, Southeast Michigan, and anywhere along the Detroit-to-Cleveland corridor. We handle IT certs, nursing licensure, insurance exams, trade credentials, and more. ADA-accessible with plenty of parking.",
  },
  {
    slug: "lincoln-ne",
    city: "Lincoln",
    state: "NE",
    stateName: "Nebraska",
    address: "5715 S 34th St, Suite 300, Lincoln, NE 68516",
    street: "5715 S 34th St, Suite 300",
    locality: "Lincoln",
    region: "NE",
    postalCode: "68516",
    extension: "703",
    schedule: {
      openDays: ["Monday", "Tuesday", "Friday", "Saturday"],
      openDaysShort: "Mon, Tue, Fri, Sat",
      closedDaysShort: "Wed, Thu, Sun",
      ...HRS_9_6,
    },
    mapQuery: "5715 S 34th St, Suite 300, Lincoln, NE 68516",
    coordinates: { lat: 40.7788, lng: -96.6680 },
    description:
      "Our Lincoln center on South 34th Street serves the state capital, the University of Nebraska community, and candidates from western Iowa and northern Kansas. We deliver graduate admissions exams, IT and healthcare certifications, language proficiency tests, and professional licensure. On-site parking, fully ADA-accessible.",
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "NE",
    stateName: "Nebraska",
    address: "14450 W Center Rd, Suite 210, Omaha, NE 68144",
    street: "14450 W Center Rd, Suite 210",
    locality: "Omaha",
    region: "NE",
    postalCode: "68144",
    extension: "707",
    schedule: {
      openDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      openDaysShort: "Tue – Sat",
      closedDaysShort: "Sun, Mon",
      ...HRS_8_5,
    },
    mapQuery: "14450 W Center Rd, Suite 210, Omaha, NE 68144",
    coordinates: { lat: 41.2362, lng: -96.1273 },
    bls: {
      comingSoon: true,
    },
    description:
      "Our Omaha center on West Center Road serves the Omaha–Council Bluffs metro area and candidates from western Iowa, eastern Nebraska, and northern Kansas. We deliver certification, licensure, and graduate admissions exams across IT, healthcare, finance, and trades. On-site parking, ADA-accessible.",
  },
  {
    slug: "topeka-ks",
    city: "Topeka",
    state: "KS",
    stateName: "Kansas",
    address: "2800 S.W. Wanamaker Rd., Ste. 150, Topeka, KS 66614",
    street: "2800 S.W. Wanamaker Rd., Ste. 150",
    locality: "Topeka",
    region: "KS",
    postalCode: "66614",
    extension: "713",
    schedule: {
      openDays: ["Monday", "Tuesday", "Friday", "Saturday"],
      openDaysShort: "Mon, Tue, Fri, Sat",
      closedDaysShort: "Wed, Thu, Sun",
      ...HRS_9_6,
    },
    mapQuery: "2800 SW Wanamaker Rd, Ste 150, Topeka, KS 66614",
    coordinates: { lat: 39.0134, lng: -95.7622 },
    description:
      "Our Topeka center on S.W. Wanamaker Road serves the Kansas capital region, Manhattan, Lawrence, and candidates from northern Oklahoma and western Missouri. We deliver professional certification, state licensure, healthcare, and trade exams. On-site parking, ADA-accessible.",
  },
];

export const CONTACT = {
  tollFreeDisplay: "1-877-879-2531",
  tollFreeVanity: "1-877-TRY-BLE-1",
  tollFreeHref: "tel:+18778792531",
  tollFreeE164: "+1-877-879-2531",
  email: "info@ble.training",
};

export const HOURS_DISCLAIMER =
  "Note: Hours are subject to change based on exam scheduling. Please contact the center directly or call 1-877-879-2531 for the latest availability.";

export const ORG = {
  name: "BLE Training",
  url: "https://www.ble.training",
  logo: "https://www.ble.training/BLE-Training---black-letters.png",
  sameAs: [
    "https://www.linkedin.com/company/bletraining",
    "https://www.facebook.com/bletraining",
  ] as string[],
};

export function directionsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

/** Click-to-call URL including extension (comma pauses ~2s before DTMF dials the ext). */
export function telHrefWithExt(extension: string): string {
  return `tel:+18778792531,${extension}`;
}

/** Schema.org-friendly telephone with ext. per RFC 3966. */
export function phoneE164WithExt(extension: string): string {
  return `+1-877-879-2531;ext=${extension}`;
}

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

/** Schema.org openingHoursSpecification for a given location. */
export function openingHoursSpec(schedule: Schedule) {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: schedule.openDays,
      opens: schedule.opens,
      closes: schedule.closes,
    },
  ];
}

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

/** Check if a center is currently open based on its schedule */
export function isOpenNow(schedule: Schedule): boolean {
  const now = new Date();
  const todayName = DAYS[now.getDay()];
  if (!schedule.openDays.includes(todayName)) return false;

  const [openH, openM] = schedule.opens.split(":").map(Number);
  const [closeH, closeM] = schedule.closes.split(":").map(Number);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return currentMinutes >= openH * 60 + openM && currentMinutes < closeH * 60 + closeM;
}

/** Get today's display string, e.g. "8:00 AM – 5:00 PM" or "Closed" */
export function todayHoursDisplay(schedule: Schedule): string {
  const todayName = DAYS[new Date().getDay()];
  if (!schedule.openDays.includes(todayName)) return "Closed";
  return schedule.display;
}

/** Calculate distance in miles between two coordinates (Haversine). */
export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3959;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}
