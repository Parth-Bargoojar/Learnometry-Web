import type { MetadataRoute } from "next";
import { CONTENT_LAST_MODIFIED, ROUTES, SITE_PUBLISHED, absoluteUrl } from "@/lib/site";

/** Served at /sitemap.xml — referenced from robots.txt and submitted to Search Console. */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    /*
      Read from the hand-maintained table rather than `new Date()`. A lastmod that moves
      on every deploy is indistinguishable from noise, and Google drops the field entirely
      once it decides a site reports it dishonestly. SITE_PUBLISHED is the fallback so a
      route added to ROUTES without a date still emits a valid, non-moving value.
    */
    lastModified: new Date(CONTENT_LAST_MODIFIED[route.path] ?? SITE_PUBLISHED),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
