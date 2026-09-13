import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ScrollToTop } from "@/components/scroll-to-top";
import { WaitlistProvider } from "@/components/waitlist-modal";
import { EmailSupportProvider } from "@/components/email-support-modal";
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
  title: "Learnometry — Find your weak concepts. Fix them in the right order.",
  description:
    "A diagnostic assessment for CBSE, JEE, and NEET students. See which concepts are weak and why, get a sequenced study plan built around your available hours, and retest to confirm the gap closed.",
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
    title: "Learnometry — Find your weak concepts. Fix them in the right order.",
    description:
      "Take a quick diagnostic test to find the exact concepts pulling your marks down. Get a day-by-day revision plan based on your available study hours, and retest to confirm you've closed the gap.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ScrollToTop />
        <WaitlistProvider>
          <EmailSupportProvider>{children}</EmailSupportProvider>
        </WaitlistProvider>
      </body>
    </html>
  );
}
