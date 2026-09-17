import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cookie, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/section";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/site";
import { RelatedPolicies } from "@/components/related-policies";
import { BusinessDetails } from "@/components/business-details";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { DATA_PROCESSORS, POLICY_LAST_UPDATED, POLICY_LAST_UPDATED_ISO } from "@/lib/legal";
import { OFFICIAL_EMAIL } from "@/lib/constants";

const title = "Cookie Policy";
const description =
  "Learnometry sets no advertising, analytics or tracking cookies. This policy explains what is and is not stored on your device, and what changes at launch.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: `${title} | Learnometry`,
    description,
    url: "/cookies",
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

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/cookies",
            dateModified: POLICY_LAST_UPDATED_ISO,
            name: `${title} | Learnometry`,
            description,
          }),
          breadcrumbSchema([{ name: "Cookies", path: "/cookies" }]),
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
                <Cookie aria-hidden="true" className="size-3.5 text-primary-text" />
                No Tracking Cookies
              </span>
              <span className="text-xs font-medium text-slate-500">
                Last updated: {POLICY_LAST_UPDATED}
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              Cookie Policy
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Most sites open a cookie policy by describing the tracking they do. This one
              is short, because this website currently does none.
            </p>

            <div className="mt-6 rounded-card-sm border-2 border-ink bg-emerald-50 p-4">
              <div className="flex items-center gap-2 font-semibold text-emerald-900">
                <ShieldCheck aria-hidden="true" className="size-5 text-success-text" />
                <span>The short version</span>
              </div>
              <ul className="mt-2 space-y-1 text-sm text-emerald-900">
                <li>
                  This website sets <strong>no cookies of its own</strong>. No analytics,
                  no advertising, no tracking pixels, no session cookies.
                </li>
                <li>
                  We do not embed Google Analytics, Meta Pixel, Hotjar or any similar tool,
                  and we do not load third-party advertising scripts.
                </li>
                <li>
                  Because nothing non-essential is stored on your device, you will not see
                  a cookie consent banner. There is nothing to consent to.
                </li>
              </ul>
            </div>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
              <section>
                <h2 className="font-display text-xl text-ink">1. What a cookie is</h2>
                <p className="mt-2">
                  A cookie is a small text file that a website asks your browser to store
                  and send back on later visits. Related technologies (local storage,
                  session storage and tracking pixels) do much the same job. Where this
                  policy says &ldquo;cookies&rdquo;, it means all of them.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  2. What this website stores today
                </h2>
                <p className="mt-2">
                  Nothing. As of {POLICY_LAST_UPDATED}, the Learnometry marketing website
                  sets no cookies and writes nothing to your browser&apos;s local or
                  session storage. The pages are static, the fonts are served from our own
                  domain rather than fetched from Google, and no measurement script runs.
                </p>
                <p className="mt-2">
                  The one thing that leaves your browser is the email address you choose to
                  type into the waitlist form, and only at the moment you press{" "}
                  <em>Join Waitlist</em>. That is described in our{" "}
                  <Link href="/privacy" className="text-primary-text underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  3. Third parties involved in running this site
                </h2>
                <p className="mt-2">
                  We use a small number of service providers to host the site and deliver
                  your messages to us. None of them places tracking cookies through this
                  website, but they do necessarily handle some technical data, such as an IP
                  address has to be processed for a page to reach you at all.
                </p>
                <div
                  role="region"
                  aria-label="Third-party service providers"
                  tabIndex={0}
                  className="mt-4 overflow-x-auto rounded-card-sm border-2 border-ink"
                >
                  <table className="w-full border-collapse text-left text-sm">
                    <caption className="sr-only">
                      Third-party providers used by this website, what they are used for,
                      what data they handle, and where they are located.
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
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  4. What changes when accounts open
                </h2>
                <p className="mt-2">
                  Once student accounts launch, we will need a{" "}
                  <strong>strictly necessary</strong> cookie to keep you signed in and to
                  protect your account from cross-site request forgery. A cookie of that
                  kind is required to deliver a service you have asked for, so it does not
                  need separate consent, but we will list it here, by name and lifetime,
                  before it is switched on.
                </p>
                <p className="mt-2">
                  If we ever add analytics or any other non-essential cookie, we will ask
                  for your consent first, through a banner that lets you refuse as easily
                  as accept, and we will update this page on the same day. We do not intend
                  to run advertising cookies on a product used by school students.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  5. Controlling cookies in your browser
                </h2>
                <p className="mt-2">
                  You do not need to do anything to block cookies on this site, because
                  there are none. Should you want to manage them generally, every major
                  browser lets you view, block and delete cookies from its privacy or site
                  settings. Blocking strictly necessary cookies on other sites may stop
                  those sites from working.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">
                  6. Questions and changes to this policy
                </h2>
                <p className="mt-2">
                  If any statement on this page ever stops matching what the site actually
                  does, that is a bug and we want to hear about it. Write to{" "}
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    className="text-primary-text underline"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                  . Any change to this policy will be posted here with a new
                  &ldquo;last updated&rdquo; date.
                </p>
              </section>
            </div>
          </article>

          <BusinessDetails />
          <RelatedPolicies currentPath="/cookies" />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
