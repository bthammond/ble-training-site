import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    default: "BLE Training | Authorized Professional Testing & Certification Centers",
    template: "%s | BLE Training",
  },
  description:
    "BLE Training provides secure, proctored testing environments for Pearson VUE, Prometric, and Meazure Learning in TX, PA, OH, NE, and KS.",
  keywords: [
    "Authorized Professional Testing",
    "Certification Centers",
    "Proctored Testing Centers",
    "Pearson VUE Testing",
    "Prometric Testing",
    "Meazure Learning Testing",
    "PSI Testing",
    "Kryterion Testing",
    "ETS Testing",
    "Corporate Training",
    "SMB Consulting",
    "Family Business Consulting",
  ],
  openGraph: {
    type: "website",
    title: "BLE Training | Authorized Professional Testing & Certification Centers",
    description:
      "Secure, proctored testing for Pearson VUE, Prometric, and Meazure Learning across Texas, Pennsylvania, Ohio, Nebraska, and Kansas.",
    siteName: "BLE Training",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="bg-white text-black min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
