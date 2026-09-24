import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { Trust } from "@/components/sections/trust";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/json-ld";
import { CONTENT_LAST_MODIFIED, OG_IMAGE } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const title = "How the Diagnose, Plan, Retest Loop Works";
const description =
  "How Learnometry diagnoses CBSE, JEE and NEET gaps in a 30-minute test, ranks them by exam weight into a daily plan, and retests to confirm each gap closed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/how-it-works",
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

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/how-it-works",
            dateModified: CONTENT_LAST_MODIFIED["/how-it-works"],
            name: `${title} | Learnometry`,
            description,
          }),
          breadcrumbSchema([{ name: "How it works", path: "/how-it-works" }]),
        ])}
      />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="How it works"
          title="From a 30-minute test to a gap you can prove is closed."
          description="What happens after you take your diagnostic, what you get back, and how we keep the numbers honest."
        />
        <HowItWorks />
        <WhatYouGet />
        <Trust />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
