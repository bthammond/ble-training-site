import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Professional Development Catalog — 2026 Edition | BLE Training",
  description:
    "Browse BLE Training's corporate training catalog across leadership, communication, sales, HR, safety, project management, and more. Available for onsite or web-based delivery.",
  alternates: { canonical: "/catalog" },
};

export default function CatalogPage() {
  return <CatalogClient />;
}
