import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { KeyAnswers } from "@/components/sections/key-answers";
import { Pricing } from "@/components/sections/pricing";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/json-ld";
import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { CONTENT_LAST_MODIFIED, OG_IMAGE } from "@/lib/site";
import { graph, softwareApplicationSchema, webPageSchema } from "@/lib/schema";

const title = "Learnometry: JEE, NEET & CBSE Diagnostic Test and Study Plan";
const description =
  "Free 30-minute diagnostic for CBSE, JEE and NEET students. See the exact concepts costing you marks and get a daily plan ranked by exam weight.";

export const metadata: Metadata = {
  /* Absolute title: the home page is the one page that should not carry the "| Learnometry" suffix twice. */
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Learnometry AI",
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
        ])}
      />
      <LegacyHashRedirect />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Problem />
        <KeyAnswers />
        {/* The home page is the short pitch. The deep dives (what you get, the
            founders' note, trust, FAQ) live on /how-it-works, /about and /faq. */}
        <HowItWorks compact />
        <WhoItsFor />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
