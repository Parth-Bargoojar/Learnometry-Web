import type { Metadata } from "next";
import { ContactView } from "./contact-view";
import { JsonLd } from "@/components/json-ld";
import { CONTENT_LAST_MODIFIED, OG_IMAGE } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const title = "Contact & Student Support";
const description =
  "Have questions about diagnostic assessments, study plans, or billing? Contact the Learnometry team and we aim to reply within 24 business hours.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/contact",
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

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/contact",
            dateModified: CONTENT_LAST_MODIFIED["/contact"],
            name: `${title} | Learnometry`,
            description,
            type: "ContactPage",
          }),
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
        ])}
      />
      <ContactView />
    </>
  );
}
