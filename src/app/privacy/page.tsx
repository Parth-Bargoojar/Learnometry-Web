import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/section";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/site";
import { RelatedPolicies } from "@/components/related-policies";
import { BusinessDetails } from "@/components/business-details";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { DATA_PROCESSORS, POLICY_LAST_UPDATED } from "@/lib/legal";
import { OFFICIAL_EMAIL } from "@/lib/constants";

const title = "Privacy Policy";
const description =
  "How Learnometry collects, stores and protects student data under India's DPDP Act 2023: what we hold, who processes it, how long we keep it, and how to exercise your rights.";

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
                <Lock aria-hidden="true" className="size-3.5 text-primary-text" />
                DPDP Act 2023 Aligned
              </span>
              <span className="text-xs font-medium text-slate-500">
                Last updated: {POLICY_LAST_UPDATED}
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Learnometry (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) treats
              student and guardian privacy as a first-class product principle. This policy
              explains what personal data we collect, why, who else handles it, how long we
              keep it, and the rights you have over it under India&apos;s Digital Personal
              Data Protection Act, 2023 (the &ldquo;DPDP Act&rdquo;).
            </p>

            <div className="mt-6 rounded-card-sm border-2 border-ink bg-emerald-50 p-4">
              <div className="flex items-center gap-2 font-semibold text-emerald-900">
                <ShieldCheck aria-hidden="true" className="size-5 text-success-text" />
                <span>Our core privacy commitments</span>
              </div>
              <ul className="mt-2 space-y-1 text-sm text-emerald-900">
                <li>
                  Your test answers and assessment data are{" "}
                  <strong>never sold</strong> to advertisers or data brokers.
                </li>
                <li>We collect only what is needed to diagnose knowledge gaps.</li>
                <li>
                  We do not run behavioural advertising, and we do not track children for
                  advertising purposes.
                </li>
                <li>
                  Verifiable guardian consent is required for every learner under 18.
                </li>
              </ul>
            </div>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
              <section>
                <h2 className="font-display text-xl text-ink">
                  1. Who is responsible for your data
                </h2>
                <p className="mt-2">
                  Learnometry is the <strong>Data Fiduciary</strong> for the personal data
                  described in this policy, meaning we decide why and how it is processed,
                  and we are accountable for it. Our full business identity, registered
                  address and the contact details of our Grievance Officer are published at
                  the foot of this page.
                </p>
                <p className="mt-2">
                  This policy covers the Learnometry website and, once it launches, the
                  Learnometry product. It does not cover any third-party website you reach
                  by following a link from ours.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  2. What we collect, and when
                </h2>
                <p className="mt-2">
                  Learnometry has not launched yet. Today, the only personal data this
                  website collects is the email address you voluntarily submit to the
                  waitlist. The remaining categories below describe what the product will
                  process once accounts open, and are published now so there are no
                  surprises later.
                </p>
                <div className="mt-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-ink">
                      Waitlist information (collected today):
                    </h3>
                    <p className="mt-0.5 text-slate-600">
                      Your email address, and a record of which page you submitted it from
                      and when. Nothing else. There is no name field, no phone field and
                      no payment field on this website.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">
                      Account information (after launch):
                    </h3>
                    <p className="mt-0.5 text-slate-600">
                      Learner grade, target exam track (CBSE, JEE or NEET), and, where the
                      learner is under 18, the parent or legal guardian&apos;s contact
                      details for the purpose of obtaining and recording consent.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">
                      Academic assessment data (after launch):
                    </h3>
                    <p className="mt-0.5 text-slate-600">
                      Test responses, time spent per question, concept error
                      classifications, study task completion, and retest results.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Technical data:</h3>
                    <p className="mt-0.5 text-slate-600">
                      Standard server logs generated by our hosting provider, including IP
                      address, browser type and request time. These are used for security,
                      abuse prevention and debugging, and are not combined into a
                      behavioural profile of you.
                    </p>
                  </div>
                </div>
                <p className="mt-3">
                  We do not use cookies or any tracking technology on this website. See our{" "}
                  <Link href="/cookies" className="text-primary-text underline">
                    Cookie Policy
                  </Link>{" "}
                  for the detail.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  3. Why we process it, and on what basis
                </h2>
                <p className="mt-2">
                  Under the DPDP Act we process personal data on the basis of your{" "}
                  <strong>consent</strong>, given freely and for the specific purposes
                  below. You are not required to give it, and you can withdraw it at any
                  time (see section 8).
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>
                    To notify waitlist members when early access opens, and to send
                    essential service messages about your account.
                  </li>
                  <li>
                    To pinpoint root-cause weaknesses in prerequisite concept trees.
                  </li>
                  <li>To sequence your personalised study tasks around your hours.</li>
                  <li>
                    To measure whether a targeted retest closed the concept gap.
                  </li>
                  <li>
                    To keep the platform secure, prevent abuse, and meet our legal
                    obligations.
                  </li>
                </ul>
                <p className="mt-3">
                  We do <strong>not</strong> use your data for advertising, we do not sell
                  or rent it, and we do not share it with data brokers.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  4. Who else handles your data
                </h2>
                <p className="mt-2">
                  We use a small number of service providers (Data Processors) to run the
                  service. They may only process your data on our written instructions, for
                  the purpose stated, and may not use it for their own purposes.
                </p>
                <div
                  role="region"
                  aria-label="Service providers who process personal data"
                  tabIndex={0}
                  className="mt-4 overflow-x-auto rounded-card-sm border-2 border-ink"
                >
                  <table className="w-full border-collapse text-left text-sm">
                    <caption className="sr-only">
                      Service providers who process personal data on our behalf, what they
                      are used for, what data they handle, and where they are located.
                    </caption>
                    <thead>
                      <tr className="border-b-2 border-ink bg-slate-100 text-xs font-bold uppercase text-ink">
                        <th scope="col" className="p-3">
                          Provider
                        </th>
                        <th scope="col" className="p-3">
                          Used for
                        </th>
                        <th scope="col" className="p-3">
                          What it handles
                        </th>
                        <th scope="col" className="p-3">
                          Location
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                      {DATA_PROCESSORS.map((processor) => (
                        <tr key={processor.name}>
                          <th
                            scope="row"
                            className="p-3 text-left align-top font-semibold text-ink"
                          >
                            <a
                              href={processor.policy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-text underline"
                            >
                              {processor.name}
                            </a>
                          </th>
                          <td className="p-3 align-top text-slate-700">
                            {processor.purpose}
                          </td>
                          <td className="p-3 align-top text-slate-700">
                            {processor.data}
                          </td>
                          <td className="p-3 align-top text-slate-700">
                            {processor.location}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3">
                  We will also disclose personal data where we are legally required to, for
                  example in response to a valid order from a court or a competent
                  authority. If the business is ever sold or merged, we disclose it to the acquirer
                  under equivalent confidentiality obligations.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  5. Transfers outside India
                </h2>
                <p className="mt-2">
                  Some of the providers listed above operate servers outside India. The
                  DPDP Act permits transfers of personal data outside India except to
                  countries that the Central Government restricts by notification; we will
                  stop transferring data to any such country if one is notified. Wherever
                  data is held, our contractual protections and this policy continue to
                  apply to it.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  6. AI processing and model privacy
                </h2>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>
                    We minimise the information sent to AI models. A prompt carries the
                    academic content needed to answer it and nothing more.
                  </li>
                  <li>
                    Prompts use anonymous internal identifiers rather than real names,
                    email addresses or guardian contact details.
                  </li>
                  <li>
                    Passwords, passkeys and payment information are never passed to AI
                    providers.
                  </li>
                  <li>
                    Your marks are calculated by fixed server-side scoring rules, not
                    estimated by a model.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  7. Children&apos;s data and guardian rights (under 18)
                </h2>
                <p className="mt-2">
                  Under the DPDP Act, processing the data of anyone under 18 requires
                  verifiable consent from a parent or lawful guardian. The Act also
                  prohibits tracking or behavioural monitoring of children and advertising
                  directed at them. We do neither, for any user, of any age. How consent
                  is obtained and recorded is set out in our{" "}
                  <Link href="/guardian-consent" className="text-primary-text underline">
                    Guardian Consent Policy
                  </Link>
                  .
                </p>
                <p className="mt-2">Parents and guardians have the right to:</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>Review all personal and academic data stored for their child.</li>
                  <li>
                    Request correction, or complete deletion, of their ward&apos;s profile.
                  </li>
                  <li>Withdraw consent at any time, without penalty.</li>
                </ul>
                <p className="mt-2">
                  This website is not directed at children under 13 and we do not knowingly
                  collect data from them. If you believe a child has given us data without
                  guardian consent, write to us and we will delete it.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">8. Your rights</h2>
                <p className="mt-2">
                  As a Data Principal under the DPDP Act you have the right to:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>
                    <strong>Access</strong> a summary of the personal data we hold about
                    you and how it is processed.
                  </li>
                  <li>
                    <strong>Correct, complete, update or erase</strong> your personal data.
                  </li>
                  <li>
                    <strong>Withdraw consent</strong> at any time, as easily as you gave
                    it. For waitlist emails, the unsubscribe link in any email, or a single
                    message to us, is enough. Withdrawal does not affect processing already
                    carried out.
                  </li>
                  <li>
                    <strong>Nominate</strong> another individual to exercise these rights
                    on your behalf in the event of death or incapacity.
                  </li>
                  <li>
                    <strong>Grievance redressal</strong>, meaning a first response from us before
                    escalating to the Data Protection Board of India.
                  </li>
                </ul>
                <p className="mt-3">
                  To exercise any of these, email{" "}
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    className="text-primary-text underline"
                  >
                    {OFFICIAL_EMAIL}
                  </a>{" "}
                  from the address on your account. We respond to access and correction
                  requests, and complete erasure requests, within{" "}
                  <strong>7 business days</strong>. There is no charge. We may ask you to
                  confirm your identity before acting, so that nobody else can make a
                  request in your name.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  9. How long we keep it
                </h2>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>
                    <strong>Waitlist email addresses:</strong> until early access opens and
                    you either create an account or tell us to remove you, and in any
                    case, we delete waitlist addresses that have not become accounts within
                    24 months.
                  </li>
                  <li>
                    <strong>Account and diagnostic history:</strong> for as long as your
                    account is active, and then deleted or anonymised within 90 days of
                    account closure.
                  </li>
                  <li>
                    <strong>Server logs:</strong> retained by our hosting provider on a
                    short rolling window for security and debugging.
                  </li>
                  <li>
                    <strong>Records we must keep by law</strong> (for example tax and
                    payment records) are kept for the period the law requires, and no
                    longer.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">10. Security</h2>
                <p className="mt-2">
                  We take reasonable security safeguards to protect personal data,
                  including encryption in transit (HTTPS with HSTS across the whole site),
                  access controls limiting staff access to what their role requires, and
                  keeping payment credentials off our systems entirely by using a regulated
                  payment gateway when payments go live.
                </p>
                <p className="mt-2">
                  No system is perfectly secure. If a personal data breach occurs, we will
                  notify the Data Protection Board of India and every affected user as
                  required by the DPDP Act, describing what happened and what you should do
                  about it.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  11. Changes to this policy
                </h2>
                <p className="mt-2">
                  We will update this page when our practices change, and revise the
                  &ldquo;last updated&rdquo; date above. If a change materially affects how
                  we use data you have already given us, we will tell you by email before it
                  takes effect, and where the law requires it, ask for fresh consent.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">12. Contact us</h2>
                <p className="mt-2">
                  Questions, requests and complaints about privacy all go to{" "}
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    className="text-primary-text underline"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                  , or to our Grievance Officer using the details below.
                </p>
              </section>
            </div>
          </article>

          <BusinessDetails />
          <RelatedPolicies currentPath="/privacy" />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
