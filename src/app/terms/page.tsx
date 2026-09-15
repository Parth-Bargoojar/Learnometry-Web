import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, FileText } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/section";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/site";
import { RelatedPolicies } from "@/components/related-policies";
import { BusinessDetails } from "@/components/business-details";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JURISDICTION_CITY, POLICY_LAST_UPDATED } from "@/lib/legal";
import { OFFICIAL_EMAIL } from "@/lib/constants";

const title = "Terms of Service";
const description =
  "Learnometry Terms of Service: how diagnostic assessments, study credits, subscriptions, eligibility for learners under 18, liability and governing law work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/terms",
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
      <main id="main" className="flex-1 bg-background py-10 sm:py-16">
        <Container className="max-w-4xl">
          <Link
            href="/"
            scroll={false}
            className="inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-primary-text transition-colors hover:text-ink touch:min-h-11"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to Home
          </Link>

          <article className="mt-6 rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal-lg sm:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
                <FileText aria-hidden="true" className="size-3.5 text-primary-text" />
                Legal Document
              </span>
              <span className="text-xs font-medium text-slate-500">
                Last updated: {POLICY_LAST_UPDATED}
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Welcome to Learnometry. These Terms govern your use of our website and of our
              diagnostic assessment, study planning and prescriptive prep platform for
              CBSE, JEE and NEET. Please read them. They are a binding agreement between
              you and us.
            </p>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
              <section>
                <h2 className="font-display text-xl text-ink">1. Acceptance of terms</h2>
                <p className="mt-2">
                  By joining our early access waitlist, creating an account, or taking a
                  diagnostic assessment on Learnometry (the &ldquo;Platform&rdquo;), you
                  agree to be bound by these Terms and by our{" "}
                  <Link href="/privacy" className="text-primary-text underline">
                    Privacy Policy
                  </Link>
                  ,{" "}
                  <Link href="/cookies" className="text-primary-text underline">
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/refunds" className="text-primary-text underline">
                    Refund &amp; Cancellation Policy
                  </Link>
                  , each of which forms part of this agreement. If you do not agree with
                  any part of them, please do not use the Platform.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  2. Eligibility and minor learners (under 18)
                </h2>
                <p className="mt-2">
                  Learnometry is designed for students preparing for CBSE board
                  examinations, JEE and NEET. A significant proportion of our learners are
                  secondary or higher secondary students under 18 years of age.
                </p>
                <div className="mt-3 rounded-card-sm border-2 border-ink bg-slate-50 p-4">
                  <p className="font-semibold text-ink">Minor consent requirement</p>
                  <p className="mt-1 text-sm text-slate-600">
                    If you are under 18, you confirm that your parent or legal guardian has
                    reviewed and agreed to these Terms and has consented to your use of
                    Learnometry, as required by the Digital Personal Data Protection Act,
                    2023. A parent or guardian who provides that consent accepts these
                    Terms on the learner&apos;s behalf and is responsible for any payment
                    made from the account. See our{" "}
                    <Link
                      href="/guardian-consent"
                      className="text-primary-text underline"
                    >
                      Guardian Consent Policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  3. What the service is, and what it is not
                </h2>
                <p className="mt-2">Learnometry provides:</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>Calibrated, timed diagnostic assessments.</li>
                  <li>
                    A root-cause weakness breakdown mapping missed questions to concept
                    prerequisite trees.
                  </li>
                  <li>Time-sequenced revision action plans.</li>
                  <li>Targeted retests to measure concept gap closure.</li>
                </ul>
                <div className="mt-4 flex items-start gap-2.5 rounded-card-sm border-2 border-amber-500 bg-amber-50 p-4">
                  <AlertTriangle
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-amber-700"
                  />
                  <p className="text-sm text-amber-900">
                    <strong>No guarantee of results.</strong> Learnometry is a study aid. It
                    does not replace formal school education, coaching classes or your own
                    effort. We make no promise, express or implied, of any particular
                    mark, percentile, rank, admission or exam selection, and nothing on this
                    website should be read as one. Diagnostic outputs are calibrated
                    estimates derived from your test responses and can be wrong.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  4. Independence from examination boards
                </h2>
                <p className="mt-2">
                  Learnometry is an independent product. We are{" "}
                  <strong>
                    not affiliated with, endorsed by, sponsored by or otherwise connected to
                  </strong>{" "}
                  the Central Board of Secondary Education (CBSE), the National Testing
                  Agency (NTA), the National Medical Commission (NMC), or any examination
                  authority, board, university or coaching institute.
                </p>
                <p className="mt-2">
                  References to CBSE, JEE, NEET or any exam pattern describe the syllabus
                  and question format our content is modelled on. All such names, marks and
                  logos are the property of their respective owners and are used only for
                  identification and descriptive purposes. We are not an official source
                  for exam notifications, syllabi or results. Always check the relevant
                  authority&apos;s own website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  5. Deterministic scoring integrity
                </h2>
                <p className="mt-2">
                  Test responses are scored using strict, deterministic server-side
                  evaluation rules, including negative marking where the exam pattern
                  applies it. No AI model estimates or generates your assessment score.
                  Explanations, study plans and concept diagnoses are, by contrast,
                  AI-assisted and may occasionally contain errors. If you spot one, tell
                  us and we will correct it.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  6. Accounts and acceptable use
                </h2>
                <p className="mt-2">
                  You are responsible for the accuracy of the information on your account
                  and for keeping your login credentials confidential. One account is for
                  one learner; accounts may not be shared, sold or transferred.
                </p>
                <p className="mt-2">You agree not to:</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>
                    Copy, scrape, resell, republish or redistribute our questions,
                    explanations or study plans, including to train another model.
                  </li>
                  <li>
                    Reverse engineer the Platform, or attempt to access accounts, data or
                    systems that are not yours.
                  </li>
                  <li>
                    Interfere with the Platform&apos;s operation or security, or use
                    automated means to place load on it.
                  </li>
                  <li>
                    Use the Platform for anything unlawful, or upload unlawful, infringing
                    or abusive content.
                  </li>
                  <li>
                    Misrepresent your age, or provide guardian contact details that are not
                    genuinely your parent&apos;s or guardian&apos;s.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  7. Credits, plans and payment
                </h2>
                <p className="mt-2">
                  Joining the waitlist is free. Every registered student receives 30 free
                  credits per month at launch. Credits are consumed when generating
                  AI-assisted diagnostics and personalised study schedules, and you will
                  always see the credit cost before an operation runs. Credits have no cash
                  value, cannot be exchanged for money and are not transferable between
                  accounts.
                </p>
                <p className="mt-2">
                  Paid plans are billed in Indian Rupees on a one-month cycle. Prices are
                  inclusive of applicable taxes unless stated otherwise at checkout. If a
                  plan renews automatically, we will say so clearly before you pay, you will
                  receive advance notice of each renewal charge as required by Reserve Bank
                  of India rules on recurring payments, and you can cancel renewal at any
                  time from your account. Cancellation, refunds and the 7-day refund window
                  are set out in our{" "}
                  <Link href="/refunds" className="text-primary-text underline">
                    Refund &amp; Cancellation Policy
                  </Link>
                  . We may change prices for future billing cycles with at least 30
                  days&apos; notice; the price you have already paid for a cycle never
                  changes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  8. Intellectual property
                </h2>
                <p className="mt-2">
                  All question banks, diagnostic algorithms, concept graphs, platform
                  software, brand names, logos and mascot illustrations are the
                  intellectual property of Learnometry or its licensors. You are granted a
                  personal, non-exclusive, non-transferable, revocable licence to use the
                  Platform for your own academic preparation only.
                </p>
                <p className="mt-2">
                  Anything you submit (feedback, reported errors, suggestions) may be
                  used by us to improve the Platform without obligation to you, but it
                  remains yours and we claim no ownership of your personal study data.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  9. Availability and changes to the service
                </h2>
                <p className="mt-2">
                  The Platform is provided on an &ldquo;as available&rdquo; basis. We may
                  add, change, suspend or withdraw features, and we may carry out
                  maintenance that makes the Platform temporarily unavailable. Where a
                  change materially reduces what a paid plan offers, you may cancel and we
                  will refund the unused portion of your current cycle.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  10. Suspension and termination
                </h2>
                <p className="mt-2">
                  You may stop using the Platform and close your account at any time. We may
                  suspend or terminate an account that breaches these Terms, that is used
                  fraudulently, or where we are required to do so by law, normally after
                  notice and a chance to put it right, and immediately where the breach is
                  serious. If we terminate an account without cause, we will refund the
                  unused portion of the current billing cycle.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  11. Disclaimers and liability
                </h2>
                <p className="mt-2">
                  To the maximum extent permitted by law, and other than as expressly stated
                  in these Terms, the Platform is provided without warranties of any kind,
                  including as to uninterrupted availability or the accuracy of AI-generated
                  explanations.
                </p>
                <p className="mt-2">
                  We are not liable for indirect or consequential loss, or for loss of
                  marks, rank, admission or opportunity arising from your use of the
                  Platform. Where we are found liable, our total liability to you in
                  connection with the Platform is limited to the amount you paid us in the
                  three months immediately before the event giving rise to the claim.
                </p>
                <p className="mt-2">
                  <strong>
                    Nothing in these Terms excludes or limits any liability that cannot
                    lawfully be excluded or limited
                  </strong>{" "}
                  including liability for fraud, for death or personal injury caused by
                  negligence, or any right you have as a consumer under the Consumer
                  Protection Act, 2019.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">12. Third-party links</h2>
                <p className="mt-2">
                  The Platform may link to websites we do not control, such as our Instagram
                  page. We are not responsible for their content or their privacy practices,
                  and a link is not an endorsement.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">13. Changes to these terms</h2>
                <p className="mt-2">
                  We may update these Terms as the product develops. The &ldquo;last
                  updated&rdquo; date above always reflects the current version. If a change
                  materially affects your rights, we will give you reasonable notice by
                  email or in the Platform before it takes effect. Continuing to use the
                  Platform after that point means you accept the updated Terms; if you do
                  not, you may cancel and we will refund the unused portion of your cycle.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  14. Governing law and disputes
                </h2>
                <p className="mt-2">
                  These Terms are governed by the laws of India.{" "}
                  {JURISDICTION_CITY
                    ? `Subject to the paragraph below, the courts at ${JURISDICTION_CITY}, India shall have exclusive jurisdiction over any dispute arising out of them.`
                    : "Subject to the paragraph below, the competent courts in India shall have jurisdiction over any dispute arising out of them."}
                </p>
                <p className="mt-2">
                  Please contact our Grievance Officer first. Most issues are resolved
                  quickly that way. Nothing here prevents you as a consumer from bringing a
                  complaint before the consumer forum with jurisdiction over the place where
                  you live or work, as the Consumer Protection Act, 2019 allows.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">15. General</h2>
                <p className="mt-2">
                  If any provision of these Terms is held unenforceable, the rest continues
                  in force. Our not enforcing a provision on one occasion does not waive it.
                  Neither party is liable for failure to perform caused by events beyond
                  reasonable control. These Terms, together with the policies they
                  reference, are the entire agreement between us.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">16. Contact</h2>
                <p className="mt-2">
                  For questions about these Terms, write to{" "}
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    className="text-primary-text underline"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                  , or use the Grievance Officer details below.
                </p>
              </section>
            </div>
          </article>

          <BusinessDetails />
          <RelatedPolicies currentPath="/terms" />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
