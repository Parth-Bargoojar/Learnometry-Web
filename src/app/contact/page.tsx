import type { Metadata } from "next";
import { ContactView } from "./contact-view";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const title = "Contact & Support";
const description =
  "Contact the Learnometry team about diagnostic assessments, study plans, guardian questions, billing or refunds. Every email is answered within 24 business hours.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/contact",
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
