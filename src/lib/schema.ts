/**
 * JSON-LD builders.
 *
 * Every node is given a stable `@id` anchored to the site origin so separate blocks on
 * different pages resolve to the same Organization/WebSite entity rather than creating
 * duplicates in Google's knowledge graph.
 */
import {
  FOUNDING_DATE,
  KNOWS_ABOUT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_PUBLISHED,
  SITE_SLOGAN,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";
import {
  INDIVIDUAL_FOUNDER_EMAILS,
  INSTAGRAM_URL,
  OFFICIAL_EMAIL,
} from "@/lib/constants";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Stable @id for a founder, derived from their name so it never drifts. */
function founderId(name: string) {
  return `${SITE_URL}/#person-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

/**
 * The people behind the product.
 *
 * E-E-A-T's first E is Experience, and an anonymous education brand has none that a
 * parser can see. These names, roles and working inboxes are already rendered in the
 * founders' note; this makes the same claim machine-readable and ties it to the
 * Organization, which is what search and AI engines actually consume.
 */
export function founderSchemas() {
  return INDIVIDUAL_FOUNDER_EMAILS.map((founder) => ({
    "@type": "Person",
    "@id": founderId(founder.name),
    name: founder.name,
    jobTitle: founder.role,
    email: founder.email,
    worksFor: { "@id": ORG_ID },
    url: absoluteUrl("/about"),
  }));
}

/** The publisher entity. Emitted once, in the root layout. */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    /* Helps resolve brand queries that split or extend the compound name. */
    alternateName: "Learnometry",
    url: SITE_URL,
    email: OFFICIAL_EMAIL,
    description: SITE_DESCRIPTION,
    slogan: SITE_SLOGAN,
    foundingDate: FOUNDING_DATE,
    /* Reference-only: the full Person nodes are emitted on /about, where the
       founders' note that substantiates them is actually rendered. */
    founder: INDIVIDUAL_FOUNDER_EMAILS.map((f) => ({ "@id": founderId(f.name) })),
    /* The topic set an AI engine uses to decide what this brand is an authority on.
       Every entry is covered in visible copy somewhere on the site. */
    knowsAbout: [...KNOWS_ABOUT],
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
        url: absoluteUrl("/contact"),
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
    name: "Learnometry AI",
    alternateName: ["Learnometry"],
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    /*
      No `potentialAction`/SearchAction is declared. The sitelinks searchbox needs a real
      endpoint to hand the query to, and this site has no search; pointing the action at a
      URL that 404s is a documented way to get the node ignored rather than honoured.
    */
    publisher: { "@id": ORG_ID },
    copyrightHolder: { "@id": ORG_ID },
  };
}

/**
 * The product itself. `EducationalApplication` is the correct schema.org subtype for a
 * study/assessment tool — more specific than a bare SoftwareApplication.
 */
export function softwareApplicationSchema() {
  const prices = PRICING_PLANS.map((plan) => Number(plan.price));

  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "Diagnostic assessment and study planning",
    operatingSystem: "Web browser",
    description: SITE_DESCRIPTION,
    softwareHelp: { "@id": `${absoluteUrl("/contact")}#webpage` },
    publisher: { "@id": ORG_ID },
    author: { "@id": ORG_ID },
    inLanguage: "en-IN",
    featureList: [...KNOWS_ABOUT],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "CBSE, JEE and NEET aspirants",
    },
    /*
      AggregateOffer summarises the range, so a consumer that reads only the top-level
      offer still sees the real entry price; the individual Offers stay for detail.

      No aggregateRating and no review: there are no verified reviews yet, and
      self-declared ratings are a manual-action risk, not an optimisation.
    */
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: PRICING_PLANS.length,
      url: absoluteUrl("/pricing"),
      availability: "https://schema.org/PreOrder",
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
    },
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

/*
  There is deliberately no FAQPage builder here.

  Google retired FAQ rich results in August 2023 for everything except well-known
  government and health sites, so the markup earns no SERP treatment for a product site.
  The visible FAQ accordion is untouched; the long-form, self-contained answers that AI
  engines actually quote live in the <KeyAnswers /> section instead, which is a stronger
  vehicle than a deprecated type.
*/

/** A trail always rooted at the home page. Pass the trailing crumbs only. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items[items.length - 1].path)}#breadcrumb`,
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
  dateModified,
  primaryImage = "/opengraph-image.png",
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
  /** ISO date the page's content last actually changed. */
  dateModified?: string;
  primaryImage?: string;
}) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    /*
      Freshness is one of the few authority signals an AI engine can read without a link
      graph — stale pages lose citation eligibility. These dates come from the same
      constants that drive the visible "Last updated" line, so the two cannot disagree.
    */
    datePublished: SITE_PUBLISHED,
    ...(dateModified ? { dateModified } : {}),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(primaryImage),
    },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/** Wraps nodes into a single @graph document — one script tag per page. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
