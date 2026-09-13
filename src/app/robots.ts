import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Served at /robots.txt. Everything is crawlable; only Next's internal build output
 * and the API surface are excluded, since neither is useful in an index.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
