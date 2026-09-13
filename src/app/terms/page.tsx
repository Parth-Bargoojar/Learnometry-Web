import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/section";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/site";
import { RelatedPolicies } from "@/components/related-policies";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const title = "Terms of Service";
const description =
  "Learnometry Terms of Service: how diagnostic assessments, study credits, subscriptions and eligibility for learners under 18 work for CBSE, JEE and NEET students.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/terms",
    images: [OG_IMAGE],
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/terms",
            name: `${title} | Learnometry`,
            description,
          }),
          breadcrumbSchema([{ name: "Terms", path: "/terms" }]),
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
                <FileText className="size-3.5 text-primary-deep" />
                Legal Document
              </span>
              <span className="text-xs font-medium text-slate-500">
                Last updated: September 2026
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Welcome to Learnometry. These Terms govern your use of our diagnostic assessment, study planning, and prescriptive prep platform for CBSE, JEE, and NEET.
            </p>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
              <section>
                <h2 className="font-display text-xl text-ink">1. Acceptance of Terms</h2>
                <p className="mt-2">
                  By joining our early access waitlist, creating an account, or taking a diagnostic assessment on Learnometry (&ldquo;Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the platform.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">2. Eligibility &amp; Minor Learners (Under 18)</h2>
                <p className="mt-2">
                  Learnometry is designed for students preparing for CBSE board examinations, JEE, and NEET. A significant portion of our learners are secondary or higher secondary students under 18 years of age.
                </p>
                <div className="mt-3 rounded-card-sm border-2 border-ink bg-slate-50 p-4">
                  <p className="font-semibold text-ink">Minor Consent Requirement:</p>
                  <p className="mt-1 text-sm text-slate-600">
                    If you are under 18 years old, you confirm that your parent or legal guardian has reviewed and agreed to these Terms and consented to your use of Learnometry in compliance with India&apos;s Digital Personal Data Protection (DPDP) Act 2023.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">3. Nature of Diagnostic Services</h2>
                <p className="mt-2">
                  Learnometry acts as an intelligent diagnostic copilot. We provide:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>Calibrated timed diagnostic assessments.</li>
                  <li>Root-cause weakness breakdown mapping missed questions to concept prerequisite trees.</li>
                  <li>Time-sequenced revision action plans.</li>
                  <li>Targeted retests to measure concept gap closure.</li>
                </ul>
                <p className="mt-2 text-sm text-slate-500">
                  Disclaimer: Learnometry does not replace formal school education or coaching classes. Assessment diagnostics and predictions represent calibrated estimates based on test responses and do not guarantee specific ranks or exam selections.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">4. Deterministic Scoring Integrity</h2>
                <p className="mt-2">
                  All test responses on Learnometry are scored using strict, deterministic server-side evaluation rules (including official negative marking of -1/+4 where applicable). No artificial intelligence model estimates or hallucinates your assessment score.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">5. Credits &amp; Early Access Waitlist</h2>
                <p className="mt-2">
                  Joining the waitlist is completely free of charge. Every registered student receives 30 free monthly credits on launch day. Credits are consumed transparently when generating AI-assisted diagnostics and personalized multi-week study schedules. You will always see the credit balance required before any operation runs.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">6. Intellectual Property</h2>
                <p className="mt-2">
                  All question banks, diagnostic algorithms, concept graphs, platform software, design trademarks, and mascot illustrations are the intellectual property of Learnometry. Users are granted a personal, non-transferable, non-exclusive license to use the platform solely for personal academic preparation.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">7. Contact Information</h2>
                <p className="mt-2">
                  For legal inquiries or questions regarding these Terms, please contact our team at:
                </p>
                <p className="mt-1 font-semibold text-ink">
                  Email: <a href="mailto:learnometry.official@gmail.com" className="text-primary-text underline">learnometry.official@gmail.com</a>
                </p>
              </section>
            </div>
          </article>

          <RelatedPolicies currentPath="/terms" />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
