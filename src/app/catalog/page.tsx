import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Professional Development Catalog — 2026 Edition | BLE Training",
  description:
    "Browse 150+ corporate training courses across leadership, communication, sales, HR, safety, project management, and more. Request onsite or web-based delivery.",
};

export default function CatalogPage() {
  return <CatalogClient />;
}
