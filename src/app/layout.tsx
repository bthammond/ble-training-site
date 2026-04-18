import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bletraining.com"),
  title: {
    default: "BLE Training — Build High-Performing Organizations",
    template: "%s | BLE Training",
  },
  description:
    "Enterprise-tested training, organizational design, and consulting services for business leaders and growing companies. Six testing centers nationwide.",
  keywords: [
    "Corporate Training",
    "Organizational Design",
    "Owner Consulting",
    "Family Business Consulting",
    "Proctored Testing Centers",
    "Pearson VUE Testing",
    "Prometric Testing",
    "Founder Coaching",
    "Succession Planning",
    "Leadership Training",
    "BLE Training",
  ],
  openGraph: {
    type: "website",
    title: "BLE Training — Build High-Performing Organizations",
    description:
      "Enterprise-tested training, organizational design, and consulting services for business leaders and growing companies.",
    siteName: "BLE Training",
    images: [
      {
        url: "/BLE-Training---black-letters.png",
        width: 800,
        height: 400,
        alt: "BLE Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLE Training — Build High-Performing Organizations",
    description:
      "Enterprise-tested training, organizational design, and consulting services for business leaders and growing companies.",
    images: ["/BLE-Training---black-letters.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/BLE-Training---black-letters.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1JGH1MD3XZ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1JGH1MD3XZ');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="bg-white text-black min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
