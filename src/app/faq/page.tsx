import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/json-ld";
import { CONTENT_LAST_MODIFIED, OG_IMAGE } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const title = "Questions About Learnometry";
const description =
  "Answers for CBSE, JEE and NEET students and parents: the free diagnostic, how marks are scored, coaching, data privacy and how retests work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/faq",
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

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/faq",
            dateModified: CONTENT_LAST_MODIFIED["/faq"],
            name: `${title} | Learnometry`,
            description,
          }),
          breadcrumbSchema([{ name: "FAQ", path: "/faq" }]),
        ])}
      />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title="Questions students and parents ask us."
          description={
            <>
              Can&apos;t find yours?{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary-text underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-ink"
              >
                Ask us directly
              </Link>
              .
            </>
          }
        />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
