import type { Metadata } from "next";
import { PricingView } from "./pricing-view";
import { JsonLd } from "@/components/json-ld";
import { CONTENT_LAST_MODIFIED, OG_IMAGE } from "@/lib/site";
import {
  breadcrumbSchema,
  graph,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/schema";

const title = "Plans from ₹199 a Month";
const description =
  "Learnometry plans for CBSE, JEE and NEET students. From ₹199 a month, credits refill daily, cancel any month, and 30 free credits every month.";

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
            dateModified: CONTENT_LAST_MODIFIED["/pricing"],
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
