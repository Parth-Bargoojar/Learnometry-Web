import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { FoundersNote } from "@/components/sections/founders-note";
import { Trust } from "@/components/sections/trust";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/json-ld";
import { CONTENT_LAST_MODIFIED, OG_IMAGE } from "@/lib/site";
import {
  breadcrumbSchema,
  founderSchemas,
  graph,
  webPageSchema,
} from "@/lib/schema";

const title = "About Learnometry and Its Founders";
const description =
  "Who builds Learnometry, why we built a diagnostic for CBSE, JEE and NEET students, and how to reach the founders directly.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/about",
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

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/about",
            dateModified: CONTENT_LAST_MODIFIED["/about"],
            name: `${title} | Learnometry`,
            description,
          }),
          breadcrumbSchema([{ name: "About", path: "/about" }]),
          /* Person nodes live here because this is the page that renders the
             founders' note backing them; Organization.founder only references them. */
          ...founderSchemas(),
        ])}
      />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="About"
          title="Built by people you can actually email."
          description="Real names, real inboxes, and the rules we hold ourselves to."
        />
        <FoundersNote />
        <Trust />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
