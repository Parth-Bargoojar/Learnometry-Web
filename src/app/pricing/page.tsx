import type { Metadata } from "next";
import { PricingView } from "./pricing-view";

export const metadata: Metadata = {
  title: "Pricing & Plans — Learnometry",
  description:
    "Predictable daily AI study allowances for CBSE, JEE, and NEET students. Choose from ₹199, ₹299, or ₹349 monthly plans with daily quota resets and zero hidden fees.",
};

export default function PricingPage() {
  return <PricingView />;
}
