import type { Metadata } from "next";
import ScorecardClient from "./ScorecardClient";

export const metadata: Metadata = {
  title: "Business Health Scorecard — Free Assessment",
  description:
    "Take BLE Training's free 5-minute Business Health Scorecard. Get a personalized report across Leadership, Team, Operations, Culture, Growth, and Succession.",
  alternates: { canonical: "/scorecard" },
  openGraph: {
    title: "Business Health Scorecard | BLE Training",
    description:
      "Take BLE Training's free 5-minute Business Health Scorecard. Get a personalized report across Leadership, Team, Operations, Culture, Growth, and Succession.",
    url: "https://www.ble.training/scorecard",
  },
};

export default function ScorecardPage() {
  return <ScorecardClient />;
}
