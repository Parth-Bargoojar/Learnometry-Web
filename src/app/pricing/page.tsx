import type { Metadata } from "next";
import { PricingView } from "./pricing-view";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/site";
import {
  breadcrumbSchema,
  graph,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/schema";

const title = "Transparent Pricing & Plans";
const description =
  "Learnometry pricing for CBSE, JEE & NEET students: plans starting at ₹199/month with daily credit resets, no lock-in, and 30 free monthly credits.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/pricing",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Learnometry`,
    description,
    images: [OG_IMAGE],
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/pricing",
            name: `${title} | Learnometry`,
            description,
          }),
          softwareApplicationSchema(),
          breadcrumbSchema([{ name: "Pricing", path: "/pricing" }]),
        ])}
      />
      <PricingView />
    </>
  );
}
