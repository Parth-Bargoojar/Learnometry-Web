/**
 * Single source of truth for everything SEO needs an absolute origin for:
 * canonical tags, sitemap.xml, robots.txt, OG/Twitter image URLs and JSON-LD @id values.
 *
 * Override per environment with NEXT_PUBLIC_SITE_URL (no trailing slash), e.g. when the
 * site moves off the Vercel subdomain onto a custom domain, that is the only value to change.
 */
const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://learnometry-ai.vercel.app";

/** Normalised origin, guaranteed to have no trailing slash. */
export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, "");

export const SITE_NAME = "Learnometry AI";
export const SITE_LOCALE = "en_IN";

/** Used as the org/brand description in JSON-LD and as the fallback meta description. */
export const SITE_DESCRIPTION =
  "Learnometry is a diagnostic assessment platform for CBSE, JEE and NEET students. See the exact concepts costing you marks, get a study plan ordered by exam weight and built around your available hours, and retest to confirm the gap closed.";

/** Absolute URL for a site-relative path. `absoluteUrl("/pricing")` → "https://…/pricing". */
export function absoluteUrl(path = "/"): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Google Search Console verification token.
 * Set GOOGLE_SITE_VERIFICATION in the environment to emit the meta tag; when unset the
 * tag is omitted entirely rather than rendered empty.
 */
export const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION || undefined;

export const OG_IMAGE_ALT =
  "Learnometry: find the concepts costing you marks and fix them in order";

/*
  Next merges `metadata` per top-level key, so a page that declares its own `openGraph`
  REPLACES the parent's — including the image injected by the app/opengraph-image.png
  file convention. Every page that sets openGraph must therefore spread this in, or it
  ships with no og:image at all.
*/
export const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: OG_IMAGE_ALT,
} as const;

/**
 * ISO-8601 dates fed to <lastmod> in sitemap.xml.
 *
 * These are hand-maintained on purpose. Deriving lastmod from the build (`new Date()`)
 * republishes every URL as "changed today" on every deploy, including deploys that only
 * touched CSS. Google treats a lastmod that always equals build time as noise and stops
 * using the field for crawl scheduling, which forfeits the only real benefit a sitemap
 * has on a site this small. Bump the date for a page only when its *content* changes.
 */
export const CONTENT_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-09-17",
  "/pricing": "2026-09-17",
  "/contact": "2026-09-17",
  "/terms": "2026-09-13",
  "/privacy": "2026-09-13",
  "/guardian-consent": "2026-09-13",
  "/refunds": "2026-09-13",
  "/cookies": "2026-09-13",
};

/** When the marketing pages were first published. Used as datePublished in JSON-LD. */
export const SITE_PUBLISHED = "2026-09-12";

/** Company formation date, surfaced as Organization.foundingDate. */
export const FOUNDING_DATE = "2026";

/** Short positioning line, surfaced as Organization.slogan. */
export const SITE_SLOGAN = "Know which concept to fix first tomorrow morning.";

/**
 * Topical scope of the brand, surfaced as Organization.knowsAbout.
 *
 * These are the entities an AI search engine uses to decide what Learnometry is *about*
 * when it has no backlink graph to lean on. Each one must be a subject the site actually
 * covers in visible copy — padding this list with unearned topics is a quality signal in
 * the wrong direction.
 */
export const KNOWS_ABOUT = [
  "Diagnostic assessment",
  "JEE Main preparation",
  "JEE Advanced preparation",
  "NEET preparation",
  "CBSE Class 11 and 12 board exams",
  "Concept prerequisite mapping",
  "Adaptive study planning",
  "Exam weightage analysis",
  "Spaced retesting",
] as const;

/**
 * Every indexable route, in one list. Consumed by sitemap.ts so a new page cannot be
 * added to the sitemap and forgotten in navigation (or vice versa).
 */
export const ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/guardian-consent", changeFrequency: "yearly", priority: 0.3 },
  { path: "/refunds", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
] as const;
