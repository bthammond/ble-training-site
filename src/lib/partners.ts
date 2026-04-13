export type Partner = {
  slug: string;
  name: string;
  initials: string;
  domain: string;
  logoSrc: string;
  url: string;
  tagline: string;
};

export const PARTNERS: Partner[] = [
  {
    slug: "pearson-vue",
    name: "Pearson VUE",
    initials: "PV",
    domain: "pearsonvue.com",
    logoSrc: "/pearson-vue-logo.png",
    url: "https://home.pearsonvue.com/test-taker.aspx",
    tagline: "IT, healthcare, and professional certifications",
  },
  {
    slug: "prometric",
    name: "Prometric",
    initials: "PM",
    domain: "prometric.com",
    logoSrc: "/prometric-logo.png",
    url: "https://www.prometric.com/test-takers/search",
    tagline: "Licensure, academic, and corporate exams",
  },
  {
    slug: "psi",
    name: "PSI",
    initials: "PSI",
    domain: "psiexams.com",
    logoSrc: "/psi-logo.png",
    url: "https://test-takers.psiexams.com/",
    tagline: "Regulatory, financial, and real-estate exams",
  },
  {
    slug: "meazure-learning",
    name: "Meazure Learning",
    initials: "ML",
    domain: "meazurelearning.com",
    logoSrc: "/meazure-learning-logo.png",
    url: "https://www.meazurelearning.com/candidate-services",
    tagline: "Academic and higher-education testing",
  },
  {
    slug: "kryterion",
    name: "Kryterion",
    initials: "KR",
    domain: "kryterion.com",
    logoSrc: "/kryterion-logo.png",
    url: "https://www.kryterion.com/test-takers/",
    tagline: "Global online proctored certifications",
  },
  {
    slug: "ets",
    name: "ETS",
    initials: "ETS",
    domain: "ets.org",
    logoSrc: "/ets-logo.png",
    url: "https://www.ets.org/login.html",
    tagline: "TOEFL, GRE, and graduate assessments",
  },
  {
    slug: "scantron",
    name: "Scantron",
    initials: "SC",
    domain: "scantron.com",
    logoSrc: "/scantron-logo.png",
    url: "https://www.scantron.com/candidate-services/",
    tagline: "Assessment and certification services",
  },
  {
    slug: "examity",
    name: "Examity",
    initials: "EX",
    domain: "examity.com",
    logoSrc: "/examity-logo.png",
    url: "https://examity.com/test-taker-services/",
    tagline: "Live and automated remote proctoring",
  },
];
