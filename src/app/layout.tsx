import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ScrollToTop } from "@/components/scroll-to-top";
import { BackToTop } from "@/components/back-to-top";
import { WaitlistProvider } from "@/components/waitlist-modal";
import { EmailSupportProvider } from "@/components/email-support-modal";
import { JsonLd } from "@/components/json-ld";
import { graph, organizationSchema, webSiteSchema } from "@/lib/schema";
import {
  GOOGLE_SITE_VERIFICATION,
  OG_IMAGE_ALT,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  /* Lets every child segment express canonical/OG URLs as relative paths. */
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Learnometry — Diagnostic Test & Study Plan for JEE, NEET & CBSE",
    /* Child pages set only their own name; the brand suffix is appended here. */
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free diagnostic test for CBSE, JEE & NEET students. Find the exact concepts pulling your marks down, get a day-by-day study plan, and retest to confirm the fix.",
  applicationName: SITE_NAME,
  keywords: [
    "diagnostic test",
    "JEE preparation",
    "NEET preparation",
    "CBSE board exam",
    "study plan",
    "concept gaps",
    "weak topics",
    "adaptive learning",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  /*
    Stated explicitly rather than left to defaults: this is the directive that decides
    whether the site is eligible to appear in Google at all.
  */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  /* Emits the Search Console meta tag only once GOOGLE_SITE_VERIFICATION is set. */
  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    /* og:image comes from app/opengraph-image.png via the file convention. */
    siteName: SITE_NAME,
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Learnometry — Diagnostic Test & Study Plan for JEE, NEET & CBSE",
    description:
      "Find the exact concepts pulling your marks down, get a day-by-day study plan, and retest to confirm the fix.",
    images: { url: "/twitter-image.png", alt: OG_IMAGE_ALT },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

/*
  Declared explicitly so the mobile layout is never rendered at a desktop width.
  `userScalable` is left on and no maximumScale is set — capping zoom is an
  accessibility failure and Lighthouse flags it.
*/
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f5f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      /* Consumed by the print stylesheet, which spells out the destination of
         every internal link. CSS `content` needs it pre-quoted as a string. */
      style={{ "--print-origin": JSON.stringify(SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "")) } as CSSProperties}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Publisher + site entities, emitted once and referenced by @id elsewhere. */}
        <JsonLd data={graph([organizationSchema(), webSiteSchema()])} />
        <ScrollToTop />
        <WaitlistProvider>
          <EmailSupportProvider>{children}</EmailSupportProvider>
        </WaitlistProvider>
        <BackToTop />
      </body>
    </html>
  );
}
