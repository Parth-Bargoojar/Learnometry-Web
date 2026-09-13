import type { NextConfig } from "next";

/*
  The canonical host, derived from the same env var the metadata layer uses so the
  redirect below and the <link rel="canonical"> tags can never disagree.
*/
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://learnometry-ai.vercel.app"
).replace(/\/+$/, "");
const CANONICAL_HOST = new URL(SITE_URL).host;

const nextConfig: NextConfig = {
  /* Don't advertise the framework version to scanners. */
  poweredByHeader: false,

  /* Serve a trailing-slash-free URL shape consistently — /pricing, never /pricing/.
     Mixing the two forms creates duplicate URLs for the same page. */
  trailingSlash: false,

  images: {
    /* Modern formats first; Next falls back automatically for older browsers.
       Smaller images are a direct Core Web Vitals (LCP) win. */
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            /*
              HTTPS enforcement. Vercel already terminates TLS and redirects http->https,
              but without HSTS the *first* request of a session can still go out in the
              clear. Two years, subdomains included, and preload-eligible.
            */
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        /* The sitemap and robots file should not be cached stale for long. */
        source: "/:path(sitemap.xml|robots.txt)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, s-maxage=3600, must-revalidate" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        /* The old slug was renamed to a self-describing one; keep the old URL alive. */
        source: "/consent",
        destination: "/guardian-consent",
        permanent: true,
      },
      {
        /*
          Collapse the www host onto the canonical one with a 301. Inert on a
          *.vercel.app domain (no www variant exists); it starts doing real work the
          moment a custom domain is attached, preventing two indexable copies of
          every page.
        */
        source: "/:path*",
        has: [{ type: "host", value: `www.${CANONICAL_HOST}` }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
