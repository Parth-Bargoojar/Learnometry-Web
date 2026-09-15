import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/section";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/site";
import { RelatedPolicies } from "@/components/related-policies";
import { BusinessDetails } from "@/components/business-details";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { POLICY_LAST_UPDATED } from "@/lib/legal";
import { OFFICIAL_EMAIL } from "@/lib/constants";

const title = "Guardian Consent Policy";
const description =
  "How Learnometry obtains verifiable parent or guardian consent for students under 18, in line with India's DPDP Act 2023, and what guardians can access and control.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guardian-consent" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/guardian-consent",
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

export default function GuardianConsentPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/guardian-consent",
            name: `${title} | Learnometry`,
            description,
          }),
          breadcrumbSchema([{ name: "Guardian Consent", path: "/guardian-consent" }]),
        ])}
      />
      <SiteHeader />
      <main id="main" className="flex-1 bg-background py-10 sm:py-16">
        <Container className="max-w-4xl">
          <Link
            href="/"
            scroll={false}
            className="inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-primary-text transition-colors hover:text-ink touch:min-h-11"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <article className="mt-6 rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal-lg sm:p-10">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
                <UserCheck className="size-3.5 text-primary-deep" />
                Minor Protection Framework
              </span>
              <span className="text-xs font-medium text-slate-500">
                DPDP Act 2023 · Last updated: {POLICY_LAST_UPDATED}
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              Guardian Consent Policy
            </h1>
            <p className="mt-2 text-base text-slate-600">
              A substantial number of CBSE, JEE, and NEET aspirants are secondary school students under the age of 18. This document outlines how Learnometry protects minor students and involves parents or legal guardians in their educational journey.
            </p>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
              <section>
                <h2 className="font-display text-xl text-ink">1. Why We Require Guardian Consent</h2>
                <p className="mt-2">
                  Under India&apos;s Digital Personal Data Protection (DPDP) Act, 2023, platforms processing data of individuals below 18 years of age must obtain verifiable consent from the parent or lawful guardian. We view this legal standard not as a formality, but as a critical safety commitment to student welfare.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">2. The Consent Verification Workflow</h2>
                <p className="mt-2">
                  As specified in Section 6.9 of our product requirements:
                </p>
                <ol className="mt-3 space-y-2.5 pl-2 text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-primary font-display text-xs font-bold text-ink">
                      1
                    </span>
                    <span><strong>Age Verification:</strong> During onboarding, learners indicate their grade and date of birth.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-primary font-display text-xs font-bold text-ink">
                      2
                    </span>
                    <span><strong>Guardian Contact:</strong> Learners under 18 provide their parent or legal guardian&apos;s verified email or mobile number.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-primary font-display text-xs font-bold text-ink">
                      3
                    </span>
                    <span><strong>Verifiable Approval:</strong> The guardian receives a direct link to review platform policies and grant permission.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-primary font-display text-xs font-bold text-ink">
                      4
                    </span>
                    <span><strong>Transparent Access:</strong> Full learning and diagnostic access is enabled, and we keep a dated record of who consented, when, and to what.</span>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">3. Guardian Rights &amp; Oversight</h2>
                <p className="mt-2">
                  Parents and guardians retain complete visibility over their ward&apos;s activity:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li><strong>Progress Inspection:</strong> Guardians can view their ward&apos;s diagnostic scores, identified weak concepts, and study completion rates.</li>
                  <li><strong>Billing Control:</strong> Any optional subscription or credit pack upgrades require guardian authorization.</li>
                  <li><strong>Data Erasure:</strong> Guardians can request the permanent deletion of their child&apos;s diagnostic record at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">4. Child Safety Safeguards</h2>
                <div className="mt-3 rounded-card-sm border-2 border-ink bg-slate-50 p-4">
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-success mt-0.5" />
                      <span><strong>No Targeted Advertising:</strong> Learnometry does not serve ads or track student behaviors for third-party commercial profiling.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Zero Social Exposure:</strong> Student diagnostic tests and weakness profiles are strictly private and never publicly shared.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Controlled AI Guardrails:</strong> AI diagnostic summaries are restricted to academic explanations without conversational chit-chat.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">5. Withdrawing Consent</h2>
                <p className="mt-2">
                  Consent can be withdrawn at any time, and withdrawing it must be as easy
                  as giving it was. A single email from the guardian address on record is
                  enough. No form, no phone call, no reason required, and no penalty.
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>We stop processing the learner&apos;s personal data as soon as the withdrawal is verified.</li>
                  <li>The learner&apos;s profile and diagnostic history are deleted within 7 business days, unless a law requires us to keep a specific record.</li>
                  <li>Withdrawal does not undo processing that already, lawfully, took place.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">6. Contact Our Data Protection Contact</h2>
                <p className="mt-2">
                  Parents and guardians with questions about consent, student privacy, or
                  account deletion can write directly to our student safety desk. Our
                  Grievance Officer, who handles data protection questions and complaints,
                  is named at the foot of this page.
                </p>
                <p className="mt-1 font-semibold text-ink">
                  Email: <a href={`mailto:${OFFICIAL_EMAIL}`} className="text-primary-text underline">{OFFICIAL_EMAIL}</a>
                </p>
              </section>
            </div>
          </article>

          <BusinessDetails />
          <RelatedPolicies currentPath="/guardian-consent" />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
