import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

/*
  Served at /manifest.webmanifest.

  next.config.ts already allows `manifest-src 'self'` in the CSP, but no manifest
  existed to serve — so installability and the Android splash/theme treatment were
  both unavailable, and Lighthouse's PWA checks had nothing to read.

  Deliberately minimal: `display: "browser"` rather than "standalone", because this is
  a marketing site and there is no app shell to launch into. Claiming standalone would
  strip the URL bar from something that is, honestly, a website.
*/
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME}: JEE, NEET & CBSE Diagnostic Test and Study Plan`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "browser",
    /* Matches the light-scheme themeColor in the root layout's viewport export. */
    background_color: "#f1f5f9",
    theme_color: "#f1f5f9",
    lang: "en-IN",
    dir: "ltr",
    categories: ["education", "productivity"],
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
