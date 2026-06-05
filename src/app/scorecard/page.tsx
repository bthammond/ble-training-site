import type { Metadata } from "next";
import ScorecardClient from "./ScorecardClient";

export const metadata: Metadata = {
  title: "Business Health Scorecard — Free Assessment",
  description:
    "Take BLE Training's free Business Health Scorecard to assess leadership, team performance, operations, growth readiness, and succession risk. Get a personalized action roadmap.",
  alternates: { canonical: "/scorecard" },
  openGraph: {
    title: "Business Health Scorecard | BLE Training",
    description:
      "Take BLE Training's free Business Health Scorecard to assess leadership, team performance, operations, growth readiness, and succession risk.",
    url: "https://www.ble.training/scorecard",
  },
};

export default function ScorecardPage() {
  return <ScorecardClient />;
}
