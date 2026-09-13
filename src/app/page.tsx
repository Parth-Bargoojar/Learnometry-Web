import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { FoundersNote } from "@/components/sections/founders-note";
import { Trust } from "@/components/sections/trust";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/site";
import {
  faqPageSchema,
  graph,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/schema";

const title = "JEE, NEET & CBSE Diagnostic Test + Study Plan | Learnometry";
const description =
  "Free diagnostic test for CBSE, JEE & NEET students. Find the exact concepts pulling your marks down, get a day-by-day study plan, and retest to confirm the fix.";

export const metadata: Metadata = {
  /* Absolute title: the home page is the one page that should not carry the "| Learnometry" suffix twice. */
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({ path: "/", name: title, description }),
          softwareApplicationSchema(),
          faqPageSchema(),
        ])}
      />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <WhatYouGet />
        <WhoItsFor />
        <FoundersNote />
        <Trust />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
