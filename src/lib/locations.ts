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
      "The BLE Training center in Tyler serves candidates across East Texas and the ArkLaTex region from a professional facility on Troup Highway. Our testing suite is purpose-built for focus: solid privacy partitions separate each workstation, and every seat faces away from foot traffic to limit visual distraction. Secure lockers are provided at check-in for phones, smartwatches, bags, and any other prohibited personal items, returned only after the candidate has completed and signed out of the exam. Our proctors are trained to the published security standards of Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity, and they follow a strict identity-verification and chain-of-custody protocol before any exam begins. The Tyler center delivers certification and licensure exams across IT, healthcare, professional services, skilled trades, real estate, insurance, and regulated industries. Staff are on-site during all scheduled appointments, ready to assist with check-in, accessibility accommodation requests, and facility questions. Ample parking is available directly in front of the building, and wheelchair access is provided. We recommend arriving fifteen minutes before your appointment for identity verification, locker storage, and a brief pre-exam orientation.",
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
      "Our Clarks Summit location serves the Scranton–Wilkes-Barre metropolitan area and candidates traveling from the Lehigh Valley, Northeastern Pennsylvania, and the Southern Tier of New York. The testing room is arranged in the University of Alabama tradition of quiet discipline: solid privacy partitions isolate each candidate, seating spacing exceeds partner minimums, and ambient noise is actively controlled during peak exam hours. Secure lockers at the reception desk hold phones, wearables, wallets, and personal effects — nothing enters the testing room that is not explicitly permitted by the candidate's provider. Our proctors are credentialed against the protocols of every authorized partner we deliver — Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity — and all exams are administered under continuous observation. Candidates can expect a thorough identity check, rules briefing, and calm start to every session. We deliver professional, certification, licensure, and higher-education exams, including language, trade, and financial designations. Northern Boulevard offers easy access from I-81 and I-476 with on-site parking. Plan to arrive fifteen minutes before your scheduled time so the check-in and locker routine does not compress the start of your exam.",
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
      "The Toledo testing center on Monroe Street sits at a convenient crossroads for candidates from Northwest Ohio, Southeast Michigan, and the Detroit-to-Cleveland corridor. Our room is designed for silence and focus: solid privacy partitions separate every workstation, monitors are angled away from the room, and candidates are seated in a layout that removes direct sightlines between seats. A secure locker bank at reception stores phones, smartwatches, outerwear, and study materials — all returned only after the exam is completed and signed out. Proctors are trained and re-certified against the delivery standards of Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity, and follow identity-verification, seating, and pause-handling protocols specific to each provider. Exams delivered include IT certifications, nursing and allied health licensure, insurance and securities, state regulatory exams, trade credentials, and graduate admissions. The suite is ADA-accessible and offers ample shared parking. We request that candidates arrive fifteen minutes early to complete government-ID verification, store personal items, receive a concise rules briefing, and be seated comfortably before the exam timer begins.",
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
      "BLE Training's Lincoln center on South 34th Street delivers professional and academic exams for candidates in the Nebraska state capital, the University of Nebraska community, and travelers from western Iowa, northern Kansas, and central Nebraska. The testing suite is engineered for a distraction-free experience: solid privacy partitions flank every seat, workstations are calibrated to provider monitor and input specifications, and the room is held to a low ambient noise level throughout active exam sessions. Secure lockers at check-in receive phones, smartwatches, outerwear, bags, and any item not specifically authorized by the provider; contents are returned only after the candidate has successfully signed out of the exam. Our proctoring team is trained to the published standards of Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity, and maintains strict identity-verification and break-handling protocols. The Lincoln location is used for graduate admissions (GRE, GMAT-style), language proficiency, health and IT certifications, and professional licensure. On-site parking is available at the building, the space is fully ADA-accessible, and candidates should plan to arrive fifteen minutes before the scheduled exam time.",
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
      "Our Omaha testing center on West Center Road serves the Omaha–Council Bluffs metropolitan area and candidates traveling from western Iowa, eastern Nebraska, and northern Kansas. The testing suite is purpose-built for discipline and concentration: solid privacy partitions separate each workstation, seat spacing exceeds partner-minimum guidance, and monitor angles are set to protect candidate privacy from any in-room movement. Secure lockers at reception hold phones, smartwatches, bags, wallets, and any material not explicitly approved by the exam delivery partner — all contents are returned only after the candidate has completed and signed out of the exam. Proctors are trained and re-certified to the published protocols of Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity, with strict identity-verification, seating, pause-handling, and escalation procedures for every session. The Omaha center delivers certification, licensure, regulatory, graduate-admissions, and higher-education exams across IT, healthcare, finance, insurance, trades, and professional services. On-site parking is available, the facility is ADA-accessible, and we ask candidates to arrive fifteen minutes before their scheduled appointment time.",
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
      "BLE Training's Topeka center is located on S.W. Wanamaker Road and serves the Kansas state capital region, Manhattan, Lawrence, and candidates traveling from northern Oklahoma and western Missouri. The testing suite is engineered for the quiet, disciplined conditions expected by every authorized partner we deliver: solid privacy partitions separate each workstation, monitor placement protects candidate privacy, and the room is held to a strict low-noise standard during active sessions. Secure lockers are available at the reception desk for phones, smartwatches, study materials, bags, and any item not explicitly approved for the specific exam — all belongings are returned only after the candidate has formally signed out of the session. Our proctoring team is trained to the published security and delivery protocols of Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity, with strict identity-verification and chain-of-custody procedures for every appointment. The Topeka center delivers professional certification, state licensure, graduate admissions, language, healthcare, trade, and regulatory exams. Parking is available on-site, the suite is ADA-accessible, and candidates should plan to arrive fifteen minutes before the scheduled exam time for check-in.",
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
  url: "https://bletraining.com",
  logo: "https://bletraining.com/BLE-Training---black-letters.png",
  sameAs: [] as string[],
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
