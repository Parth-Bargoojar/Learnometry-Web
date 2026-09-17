import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * Crawlers that read and cite pages inside AI answers (AI Overviews, ChatGPT Search,
 * Perplexity, Claude). They already fall under the `*` rule below, but naming them
 * explicitly is what makes the permission survive: the moment anyone tightens the
 * wildcard rule, these keep their access instead of silently losing it, and a
 * user-agent with its own block never falls back to `*`.
 *
 * Google-Extended and Applebot-Extended are grant-only tokens — they control AI
 * grounding/training use and have no effect on ordinary Search crawling.
 */
const AI_CRAWLERS = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Applebot",
  "Applebot-Extended",
];

/**
 * Served at /robots.txt. Everything is crawlable; only Next's internal build output
 * and the API surface are excluded, since neither is useful in an index.
 */
export default function robots(): MetadataRoute.Robots {
  const disallow = ["/_next/", "/api/"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: AI_CRAWLERS, allow: "/", disallow },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    /* Bare hostname, no scheme: the (Yandex-only) Host directive is specified as
       `Host: example.com`, and a value carrying https:// is simply discarded. */
    host: new URL(SITE_URL).host,
  };
}
