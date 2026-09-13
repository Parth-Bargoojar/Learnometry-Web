import type { MetadataRoute } from "next";
import { ROUTES, absoluteUrl } from "@/lib/site";

/** Served at /sitemap.xml — referenced from robots.txt and submitted to Search Console. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
