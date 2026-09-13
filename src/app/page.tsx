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

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn focus:border-2 focus:border-ink focus:bg-surface focus:px-4 focus:py-2 focus:font-semibold"
      >
        Skip to content
      </a>
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
