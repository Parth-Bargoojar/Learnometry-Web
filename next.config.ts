import type { NextConfig } from "next";

/*
  The canonical host, derived from the same env var the metadata layer uses so the
  redirect below and the <link rel="canonical"> tags can never disagree.
*/
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://learnometry-ai.vercel.app"
).replace(/\/+$/, "");
const CANONICAL_HOST = new URL(SITE_URL).host;

const isDev = process.env.NODE_ENV === "development";

/*
  Content-Security-Policy.

  Honest note on `script-src 'unsafe-inline'`: the App Router emits inline bootstrap and
  streaming-payload scripts on every page. Locking those down needs a per-request nonce,
  which requires middleware and forces every page out of static generation — a real cost
  for a fully static marketing site with no authenticated surface and no user-generated
  content. The directives below therefore harden what is cheap and absolute — no plugins,
  no base-tag hijack, no off-site form posts, a closed connect/img/font allowlist — and
  accept inline script. Revisit the nonce approach if this site ever renders user input
  or gains a logged-in area.

  `connect-src` lists api.web3forms.com because the waitlist form POSTs there via fetch.
  Dev additionally needs 'unsafe-eval' and a websocket origin for hot reload.
*/
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  /* Matches the X-Frame-Options: SAMEORIGIN below; keep the two in step. */
  "frame-ancestors 'self'",
  /* No form may post anywhere but back to this origin. */
  "form-action 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  /* Tailwind and next/font inject style tags at runtime. */
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  /* next/font/google self-hosts the files at build time — no external font origin. */
  "font-src 'self' data:",
  `connect-src 'self' https://api.web3forms.com${isDev ? " ws: wss:" : ""}`,
  "manifest-src 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

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
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          /* Keep the browser from leaking this origin's documents into other agents'
             resource pools; both are free on a site that embeds nothing cross-origin. */
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
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
