/**
 * JSON-LD builders.
 *
 * Every node is given a stable `@id` anchored to the site origin so separate blocks on
 * different pages resolve to the same Organization/WebSite entity rather than creating
 * duplicates in Google's knowledge graph.
 */
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { INSTAGRAM_URL, OFFICIAL_EMAIL } from "@/lib/constants";
import { HOME_FAQS } from "@/lib/faq";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** The publisher entity. Emitted once, in the root layout. */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    email: OFFICIAL_EMAIL,
    description: SITE_DESCRIPTION,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/primary-logo.png"),
      /* Must match the real file — it was resized during image compression. */
      width: 611,
      height: 133,
    },
    image: absoluteUrl("/opengraph-image.png"),
    sameAs: [INSTAGRAM_URL],
    areaServed: { "@type": "Country", name: "India" },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: OFFICIAL_EMAIL,
        availableLanguage: ["en", "hi"],
      },
    ],
  };
}

/** The site entity, linked to its publisher. */
export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

/**
 * The product itself. `EducationalApplication` is the correct schema.org subtype for a
 * study/assessment tool — more specific than a bare SoftwareApplication.
 */
export function softwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web browser",
    description: SITE_DESCRIPTION,
    publisher: { "@id": ORG_ID },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "CBSE, JEE and NEET aspirants",
    },
    offers: PRICING_PLANS.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} plan`,
      price: plan.price,
      priceCurrency: "INR",
      category: "subscription",
      url: absoluteUrl("/pricing"),
      availability: "https://schema.org/PreOrder",
      description: plan.summary,
    })),
  };
}

/**
 * Prices mirrored from the pricing UI. Kept as plain numbers because Offer.price must be
 * a bare numeric value — "₹199" is invalid and will be rejected by the Rich Results test.
 */
export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "199",
    summary:
      "200 credits per day on one AI model of your choice, with full diagnostics and an adaptive study plan.",
  },
  {
    name: "Plus",
    price: "299",
    summary:
      "350 credits per day with all AI models unlocked, deep root-cause diagnostics and scheduled retests.",
  },
  {
    name: "Pro",
    price: "349",
    summary:
      "500 credits per day with maximum reasoning depth, high-frequency retesting and priority generation.",
  },
] as const;

/** FAQPage built from the same list the accordion renders. */
export function faqPageSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: HOME_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** A trail always rooted at the home page. Pass the trailing crumbs only. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** A page node tied to the WebSite entity. `type` narrows it (AboutPage, ContactPage…). */
export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
}) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/** Wraps nodes into a single @graph document — one script tag per page. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
