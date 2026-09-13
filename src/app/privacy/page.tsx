import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/section";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/site";
import { RelatedPolicies } from "@/components/related-policies";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const title = "Privacy Policy";
const description =
  "How Learnometry collects, stores and protects student data under India's DPDP Act 2023. Your assessment data is never sold to advertisers or third parties.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/privacy",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Learnometry`,
    description,
    images: [OG_IMAGE],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/privacy",
            name: `${title} | Learnometry`,
            description,
          }),
          breadcrumbSchema([{ name: "Privacy", path: "/privacy" }]),
        ])}
      />
      <SiteHeader />
      <main className="flex-1 bg-background py-10 sm:py-16">
        <Container className="max-w-4xl">
          <Link
            href="/"
            scroll={false}
            className="inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-primary-text transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <article className="mt-6 rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal-lg sm:p-10">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
                <Lock className="size-3.5 text-primary-deep" />
                DPDP Act 2023 Aligned
              </span>
              <span className="text-xs font-medium text-slate-500">
                Last updated: September 2026
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Learnometry (&ldquo;we&rdquo;, &ldquo;our&rdquo;) treats student and guardian privacy as a first-class product principle. This policy explains how we collect, store, and protect your digital personal data in compliance with India&apos;s Digital Personal Data Protection (DPDP) Act 2023.
            </p>

            <div className="mt-6 rounded-card-sm border-2 border-ink bg-emerald-50 p-4">
              <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                <ShieldCheck className="size-5 text-success" />
                <span>Our Core Privacy Commitments</span>
              </div>
              <ul className="mt-2 space-y-1 text-sm text-emerald-800">
                <li>• Your test answers and assessment data are <strong>never sold</strong> to advertisers or third parties.</li>
                <li>• We collect only the minimum data required to diagnose knowledge gaps.</li>
                <li>• Verifiable guardian consent is collected for all learners under the age of 18.</li>
              </ul>
            </div>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
              <section>
                <h2 className="font-display text-xl text-ink">1. Data We Collect</h2>
                <div className="mt-3 space-y-3">
                  <div>
                    <h3 className="font-semibold text-ink">Waitlist &amp; Account Information:</h3>
                    <p className="mt-0.5 text-slate-600">
                      Your email address, learner grade, target exam track (CBSE, JEE, or NEET), and guardian contact details where applicable.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Academic Assessment Data:</h3>
                    <p className="mt-0.5 text-slate-600">
                      Test responses, time spent per question, concept error classifications, study task completion, and diagnostic retest results.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Technical Metadata:</h3>
                    <p className="mt-0.5 text-slate-600">
                      Standard server logs, browser type, and device information solely for platform security and debugging.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">2. How We Use Student Data</h2>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>To pinpoint root-cause weaknesses in prerequisite concept trees.</li>
                  <li>To sequence your personalized 35-minute study action tasks.</li>
                  <li>To measure whether targeted retests successfully closed the concept gap.</li>
                  <li>To notify waitlist members when early access opens and send essential account alerts.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">3. AI Data Handling &amp; Model Privacy</h2>
                <p className="mt-2">
                  In alignment with Section 10.3 of our technical specifications:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>We strictly minimize the information sent to artificial intelligence models.</li>
                  <li>Prompts use anonymous internal identifiers rather than real names or personal contact info.</li>
                  <li>Passkeys, passwords, and payment information are never passed to AI providers.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">4. Children&apos;s Data &amp; Guardian Rights (Under 18)</h2>
                <p className="mt-2">
                  Under the DPDP Act 2023, data processing for minors requires verifiable consent from parents or legal guardians. Parents and guardians have the legal right to:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>Review all personal and academic data stored for their child.</li>
                  <li>Request the immediate correction or complete deletion of their ward&apos;s profile.</li>
                  <li>Withdraw consent at any time without penalty.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">5. Data Retention &amp; Erasure</h2>
                <p className="mt-2">
                  We retain your diagnostic history only as long as your account remains active. You may request the export or complete deletion of all your stored data at any time by emailing us at <a href="mailto:learnometry.official@gmail.com" className="text-primary-text underline">learnometry.official@gmail.com</a>. All erasure requests are processed within 7 business days.
                </p>
              </section>
            </div>
          </article>

          <RelatedPolicies currentPath="/privacy" />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
