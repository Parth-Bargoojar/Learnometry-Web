/**
 * Single source of truth for everything SEO needs an absolute origin for:
 * canonical tags, sitemap.xml, robots.txt, OG/Twitter image URLs and JSON-LD @id values.
 *
 * Override per environment with NEXT_PUBLIC_SITE_URL (no trailing slash) — e.g. when the
 * site moves off the Vercel subdomain onto a custom domain, that is the only value to change.
 */
const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://learnometry-ai.vercel.app";

/** Normalised origin, guaranteed to have no trailing slash. */
export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, "");

export const SITE_NAME = "Learnometry";
export const SITE_LOCALE = "en_IN";

/** Used as the org/brand description in JSON-LD and as the fallback meta description. */
export const SITE_DESCRIPTION =
  "Learnometry is a diagnostic assessment platform for CBSE, JEE and NEET students. Find the exact concepts pulling your marks down, get a sequenced study plan built around your available hours, and retest to confirm the gap closed.";

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
  "Learnometry — find your weak concepts and fix them in the right order";

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
