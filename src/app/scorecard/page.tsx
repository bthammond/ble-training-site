import type { Metadata } from "next";
import ScorecardClient from "./ScorecardClient";

export const metadata: Metadata = {
  title: "Family Business Health Scorecard — Free Assessment",
  description:
    "Take BLE Training's free 10-question assessment to evaluate your business readiness across succession, team performance, operations, and growth. Get your score in 2 minutes.",
  alternates: { canonical: "/scorecard" },
};

export default function ScorecardPage() {
  return <ScorecardClient />;
}
