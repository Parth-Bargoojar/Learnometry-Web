import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { KeyAnswers } from "@/components/sections/key-answers";
import { FoundersNote } from "@/components/sections/founders-note";
import { Trust } from "@/components/sections/trust";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/json-ld";
import { CONTENT_LAST_MODIFIED, OG_IMAGE } from "@/lib/site";
import {
  founderSchemas,
  graph,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/schema";

const title = "Learnometry: JEE, NEET & CBSE Diagnostic Test and Study Plan";
const description =
  "Free 30-minute diagnostic for CBSE, JEE and NEET students. See the exact concepts costing you marks and get a daily plan ranked by exam weight.";

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
          webPageSchema({
            path: "/",
            name: title,
            description,
            dateModified: CONTENT_LAST_MODIFIED["/"],
          }),
          softwareApplicationSchema(),
          /* Person nodes live here because this is the page that renders the
             founders' note backing them; Organization.founder only references them. */
          ...founderSchemas(),
        ])}
      />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Problem />
        <KeyAnswers />
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
