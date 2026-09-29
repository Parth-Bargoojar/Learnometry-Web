"use client";

import Link from "next/link";
import {
  Check,
  HelpCircle,
  RotateCcw,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/section";
import { buttonClasses } from "@/components/ui/button";
import { useWaitlistModal } from "@/components/waitlist-modal";

const pricingPlans = [
  {
    code: "starter",
    name: "Starter",
    price: "₹199",
    cadence: "per month",
    validity: "30-day pass",
    dailyAllowance: "200 credits / day",
    dailyTokensNotice: "Refills to 200 every night at 00:00 IST",
    modelAccess: "Fast or Standard (you choose)",
    modelBadge: "Your choice",
    idealFor: "One diagnostic and a daily concept session",
    summary:
      "Daily practice and diagnostics on one model you pick.",
    features: [
      "Choose Fast or Standard for explanations (switch any time)",
      "200 credits refilled every night at 00:00 IST",
      "Full diagnostic with root-cause report",
      "Targeted daily practice & adaptive study plan",
      "Evidence-backed explanation of every mistake",
      "Standard generation queue",
      "30-day pass · auto-renews only if you turn it on",
    ],
    cta: "Get early access",
    recommended: false,
  },
  {
    code: "plus",
    name: "Plus",
    price: "₹299",
    cadence: "per month",
    validity: "30-day pass",
    dailyAllowance: "350 credits / day",
    dailyTokensNotice: "Refills to 350 every night at 00:00 IST",
    modelAccess: "Chosen automatically, incl. Deep reasoning",
    modelBadge: "Automatic",
    idealFor: "Revision running across several chapters at once",
    summary:
      "75% more credits a day than Starter, on every model.",
    features: [
      "Engine chosen automatically for every question",
      "350 credits refilled every night at 00:00 IST",
      "Root-cause diagnosis and error classification",
      "Plan adapts after every practice session",
      "Step-by-step reasoning for difficult problems",
      "Priority generation queue",
      "30-day pass · auto-renews only if you turn it on",
    ],
    cta: "Get early access",
    recommended: true,
  },
  {
    code: "pro",
    name: "Pro",
    price: "₹349",
    cadence: "per month",
    validity: "30-day pass",
    dailyAllowance: "500 credits / day",
    dailyTokensNotice: "Refills to 500 every night at 00:00 IST",
    modelAccess: "Automatic, with extra-deep reasoning",
    modelBadge: "Full Power",
    idealFor: "Heavy daily mocks in the final months",
    summary:
      "The most credits a day, for the JEE and NEET sprint.",
    features: [
      "Deep reasoning with extra depth on hard problems",
      "500 credits refilled every night at 00:00 IST",
      "Plan re-optimized every morning",
      "60-minute Deep diagnostic across chapters",
      "Multi-step numerical and derivation breakdowns",
      "Top of the generation queue at peak hours",
      "30-day pass · auto-renews only if you turn it on",
    ],
    cta: "Get early access",
    recommended: false,
  },
];

const dailyBreakdown = [
  {
    metric: "Concept Explanations",
    starter: "~20 per day",
    plus: "~35 per day",
    pro: "~50 per day",
    description: "A breakdown of concepts you missed in coaching or in the book.",
  },
  {
    metric: "Targeted Practice Sets",
    starter: "10 sets / day (50 questions)",
    plus: "17 sets / day (85 questions)",
    pro: "25 sets / day (125 questions)",
    description: "Adaptive question sets focused specifically on weak prerequisites.",
  },
  {
    metric: "Diagnostic Assessments",
    starter: "2 full diagnostics / day",
    plus: "3-4 full diagnostics / day",
    pro: "5+ full diagnostics / day",
    description: "Multi-concept tests that map what you know and what you don't.",
  },
  {
    metric: "Scheduled Retests",
    starter: "Included",
    plus: "Included (Higher Frequency)",
    pro: "Highest daily retest volume",
    description: "Parallel tests that confirm the gap actually closed.",
  },
];

const comparisonTable = [
  { feature: "Monthly Price", starter: "₹199", plus: "₹299", pro: "₹349" },
  { feature: "Validity Period", starter: "30-day pass", plus: "30-day pass", pro: "30-day pass" },
  { feature: "Daily Allowance", starter: "200 credits / day", plus: "350 credits / day", pro: "500 credits / day" },
  { feature: "Quota Reset Schedule", starter: "Daily at 00:00 midnight", plus: "Daily at 00:00 midnight", pro: "Daily at 00:00 midnight" },
  { feature: "Explanation Engine", starter: "Fast or Standard (your choice)", plus: "Automatic, incl. Deep reasoning", pro: "Automatic, extra-deep reasoning" },
  { feature: "Diagnostic Assessment", starter: "Full + root-cause report", plus: "Full + root-cause report", pro: "Full + root-cause + 60-min Deep diagnostic" },
  { feature: "Study Plan Updates", starter: "After each retest", plus: "After every practice session", pro: "Every morning" },
  { feature: "Targeted Practice & Retests", starter: "Yes", plus: "Yes", pro: "Yes (Priority)" },
  { feature: "Renewal", starter: "Only if you turn on auto-renew", plus: "Only if you turn on auto-renew", pro: "Only if you turn on auto-renew" },
  { feature: "7-Day Refund Window", starter: "Yes", plus: "Yes", pro: "Yes" },
];

const pricingFaqs = [
  {
    q: "How does the daily credit allowance work?",
    a: "Every day at 00:00 midnight IST, your study balance resets to your plan's full quota (200, 350, or 500 credits). So a heavy revision day never leaves you rationing credits at the end of the month.",
  },
  {
    q: "What does 'Fast or Standard (you choose)' mean on the ₹199 plan?",
    a: "On Starter you pick the engine used for explanations and hints: Fast for quick answers, or Standard for more detailed ones. You can switch any time in settings. Your diagnosis and study plan always use our most accurate setup, on every plan.",
  },
  {
    q: "What do Plus and Pro add?",
    a: "On Plus and Pro the engine is chosen for you per question: quick checks run on Fast, and hard multi-step physics problems go to Deep reasoning. Plus also adapts your plan after every practice session. Pro adds extra reasoning depth, a plan re-optimized every morning, and a 60-minute Deep diagnostic.",
  },
  {
    q: "Can I try Learnometry before buying a subscription?",
    a: "Yes. Every new student gets 100 welcome credits, enough for a full diagnostic, your root-cause report and your first study plan, plus 30 free credits every month after that. No card needed.",
  },
  {
    q: "Can I cancel my subscription or request a refund?",
    a: "Yes. All paid subscriptions have a 1-month validity with no long-term lock-ins, and you can cancel renewal anytime in your account. We also offer a fair 7-day refund window if you have used less than 20% of your plan's allowance and feel Learnometry didn't suit your prep.",
  },
];

export function PricingView() {
  const { openWaitlistModal } = useWaitlistModal();

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-background py-10 sm:py-16">
        <Container className="max-w-6xl">
          {/* Hero Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-brutal-sm">
              Pricing · No surprise bills
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-5xl text-ink">
              ₹199 to ₹349 a month.
              <br className="hidden sm:inline" /> Cancel any month.
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
              Pick the daily credit volume that matches your prep. Credits refill at midnight, every plan runs a month at a time, and nothing renews without you.
            </p>

            {/* Trial callout */}
            <div className="mx-auto mt-6 max-w-xl rounded-card border-2 border-ink bg-surface p-3 shadow-brutal-sm text-sm font-semibold text-ink flex items-center justify-center gap-2">
              <ShieldCheck className="size-5 text-success shrink-0" />
              <span>
                <strong>No card needed to start.</strong> Join the waitlist, take a full diagnostic free on launch day, and pay only if it was worth it.
              </span>
            </div>
          </div>

          {/* Plan Cards Grid */}
          {/*
            Wrapped in a titled section so the three plans read as one group rather than
            three unrelated top-level topics. The heading is visually hidden because the
            <h1> above already announces the price range on screen — but an outline of
            h1 > h2 > h2 > h2 tells a parser these are three separate subjects, which is
            the wrong shape for a comparison set.
          */}
          <section aria-labelledby="plans-heading">
          <h2 id="plans-heading" className="sr-only">
            Learnometry monthly plans
          </h2>
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.code}
                className={`flex flex-col justify-between rounded-card-lg border-2 border-ink bg-surface p-6 transition-transform ${
                  plan.recommended
                    ? "shadow-brutal-lg lg:-translate-y-2 ring-2 ring-primary"
                    : "shadow-brutal"
                }`}
              >
                <div>
                  {plan.recommended ? (
                    <div className="-mx-6 -mt-6 mb-5 rounded-t-[14px] border-b-2 border-ink bg-primary px-5 py-2 text-center text-xs font-bold uppercase tracking-wide text-ink">
                      Recommended for most students
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl text-ink">{plan.name}</h3>
                    <span className="rounded-full border border-ink bg-slate-100 px-3 py-0.5 text-xs font-semibold text-ink">
                      {plan.validity}
                    </span>
                  </div>

                  <p className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl text-ink">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-slate-600">
                      {plan.cadence}
                    </span>
                  </p>

                  {/* Model access badge */}
                  <div className="mt-4 rounded-btn border border-ink/20 bg-slate-50 px-3.5 py-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        AI Model Access
                      </span>
                      <span className="text-xs font-bold rounded bg-slate-200 px-1.5 py-0.5 text-slate-700">
                        {plan.modelBadge}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-ink flex items-center gap-1.5 mt-1">
                      <Zap className="size-4 text-primary-deep" />
                      {plan.modelAccess}
                    </p>
                  </div>

                  {/* Daily Allowance Block */}
                  <div className="mt-3 rounded-btn border-2 border-ink bg-primary/10 px-3.5 py-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary-text">
                      Daily Study Quota
                    </p>
                    <p className="text-base font-extrabold text-ink">
                      {plan.dailyAllowance}
                    </p>
                    <p className="text-xs font-medium text-slate-600 flex items-center gap-1 mt-0.5">
                      <Clock className="size-3 text-slate-500" />
                      {plan.dailyTokensNotice}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {plan.summary}
                  </p>

                  <ul className="mt-5 flex flex-col gap-3 border-t border-border-subtle pt-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-success"
                        />
                        <span className="text-sm text-ink">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={openWaitlistModal}
                    className={`${buttonClasses(plan.recommended ? "primary" : "secondary", "md")} w-full cursor-pointer`}
                  >
                    {plan.cta}
                  </button>
                  <p className="mt-2 text-center text-xs text-slate-500">
                    {plan.idealFor}
                  </p>
                </div>
              </article>
            ))}
          </div>
          </section>

          {/* What a daily allowance covers */}
          <section className="mt-16 rounded-card-lg border-2 border-ink bg-surface p-6 sm:p-10 shadow-brutal">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                <Layers className="size-3.5 text-primary-deep" />
                No Math Needed
              </span>
            </div>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl text-ink">
              What does your daily allowance mean in practice?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              We never expect students or parents to do credit math. Here is roughly
              what a daily allowance covers. These are estimates: a long multi-step
              derivation consumes more than a short concept check, so your own usage will
              vary.
            </p>

            <div
              role="region"
              aria-label="What each daily allowance covers"
              tabIndex={0}
              className="mt-6 overflow-x-auto"
            >
              <table className="w-full text-left border-collapse border-2 border-ink">
                <caption className="sr-only">
                  Estimated daily study activity included with the Starter, Plus and Pro
                  allowances.
                </caption>
                <thead>
                  <tr className="bg-slate-100 text-xs font-bold uppercase text-ink border-b-2 border-ink">
                    <th scope="col" className="p-3 sm:p-4">Daily Study Activity</th>
                    <th scope="col" className="p-3 sm:p-4">Starter (200 / day)</th>
                    <th scope="col" className="p-3 sm:p-4 bg-primary/15">Plus (350 / day)</th>
                    <th scope="col" className="p-3 sm:p-4">Pro (500 / day)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle text-sm text-ink">
                  {dailyBreakdown.map((row) => (
                    <tr key={row.metric} className="hover:bg-slate-50/80 transition-colors">
                      <th scope="row" className="p-3 sm:p-4 text-left font-semibold">
                        <div>{row.metric}</div>
                        <div className="text-xs font-normal text-slate-500 mt-0.5">
                          {row.description}
                        </div>
                      </th>
                      <td className="p-3 sm:p-4 font-medium text-slate-700">
                        {row.starter}
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-ink bg-primary/5">
                        {row.plus}
                      </td>
                      <td className="p-3 sm:p-4 font-medium text-slate-700">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 rounded-btn border border-ink/20 bg-slate-50 p-3 text-xs text-slate-600 flex items-start gap-2">
              <Clock className="size-4 text-primary-deep shrink-0 mt-0.5" />
              <span>
                <strong>Nightly reset:</strong> unused credits from your daily quota expire at 23:59 IST, and your full 200, 350 or 500 quota is re-issued at 00:00 midnight IST, so every day starts with a fresh budget.
              </span>
            </div>
          </section>

          {/* Model Access Explained Section */}
          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal">
              <div className="inline-flex items-center gap-2 rounded-full border border-ink bg-slate-100 px-3 py-1 text-xs font-bold uppercase text-ink">
                <Cpu className="size-3.5 text-primary-deep" />
                Starter Plan
              </div>
              <h3 className="mt-3 font-display text-xl text-ink">
                Fast or Standard (you choose)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                You pick the engine for explanations and hints: Fast for quick, concise answers or Standard for more detailed ones. Switch any time in settings. Your diagnosis and plan always use our most accurate setup.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Check className="size-4 text-success" />
                Your choice · Same diagnosis quality as every plan
              </div>
            </div>

            <div className="rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal">
              <div className="inline-flex items-center gap-2 rounded-full border border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase text-ink">
                <Zap className="size-3.5 text-primary-deep" />
                Plus &amp; Pro Plans
              </div>
              <h3 className="mt-3 font-display text-xl text-ink">
                Chosen Automatically
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                You never pick an engine. Quick checks run on Fast and tricky multi-step JEE/NEET problems go to Deep reasoning. Pro gets extra reasoning depth on the hardest ones.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Check className="size-4 text-success" />
                Automatic routing · Deep reasoning included
              </div>
            </div>
          </section>

          {/* Full Comparison Table */}
          <section className="mt-12 rounded-card-lg border-2 border-ink bg-surface p-6 sm:p-10 shadow-brutal">
            <h2 className="font-display text-2xl sm:text-3xl text-ink">
              Side-by-Side Plan Comparison
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear breakdown of features across all 3 tiers.
            </p>

            <div
              role="region"
              aria-label="Side-by-side plan comparison"
              tabIndex={0}
              className="mt-6 overflow-x-auto"
            >
              <table className="w-full text-left border-collapse border-2 border-ink">
                <caption className="sr-only">
                  Feature comparison across the Starter, Plus and Pro plans.
                </caption>
                <thead>
                  <tr className="bg-slate-100 text-xs font-bold uppercase text-ink border-b-2 border-ink">
                    <th scope="col" className="p-3 sm:p-4">Feature</th>
                    <th scope="col" className="p-3 sm:p-4">Starter (₹199)</th>
                    <th scope="col" className="p-3 sm:p-4 bg-primary/15">Plus (₹299)</th>
                    <th scope="col" className="p-3 sm:p-4">Pro (₹349)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle text-sm text-ink">
                  {comparisonTable.map((row) => (
                    <tr key={row.feature} className="hover:bg-slate-50 transition-colors">
                      <th scope="row" className="p-3 sm:p-4 text-left font-semibold text-ink">
                        {row.feature}
                      </th>
                      <td className="p-3 sm:p-4 text-slate-700">{row.starter}</td>
                      <td className="p-3 sm:p-4 font-bold text-ink bg-primary/5">{row.plus}</td>
                      <td className="p-3 sm:p-4 text-slate-700">{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="mt-12 rounded-card-lg border-2 border-ink bg-surface p-6 sm:p-10 shadow-brutal">
            <div className="flex items-center gap-2">
              <HelpCircle className="size-5 text-primary-deep" />
              <h2 className="font-display text-2xl sm:text-3xl text-ink">
                Pricing &amp; Billing Questions
              </h2>
            </div>
            <div className="mt-6 divide-y divide-border-subtle">
              {pricingFaqs.map((faq) => (
                <div key={faq.q} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-base text-ink">{faq.q}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Refund Notice & Guarantees */}
          <div className="mt-8 rounded-card border-2 border-ink bg-slate-50 p-5 shadow-brutal-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <RotateCcw className="size-6 text-primary-deep shrink-0" />
              <div>
                <h2 className="font-bold text-sm text-ink">
                  Backed by our 7-day refund window
                </h2>
                <p className="text-xs text-slate-600 mt-0.5">
                  Request a full refund within 7 days of your first payment, provided you have used under 20% of the allowance for the cycle.
                </p>
              </div>
            </div>
            <Link
              href="/refunds"
              className="inline-block py-1.5 text-xs font-bold text-primary-text underline hover:text-ink shrink-0 touch:inline-flex touch:min-h-11 touch:items-center"
            >
              Read Refund Policy →
            </Link>
          </div>

          {/* Bottom Waitlist CTA */}
          <div className="mt-12 rounded-card-lg border-2 border-ink bg-primary p-8 text-center text-ink shadow-brutal-lg">
            <h2 className="font-display text-2xl sm:text-4xl">
              Start with your free diagnostic today
            </h2>
            <p className="mt-2 text-sm sm:text-base font-medium max-w-xl mx-auto">
              Join the early access waitlist and receive your free launch diagnostic test, with no credit card required.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={openWaitlistModal}
                className={`${buttonClasses("secondary", "lg")} font-bold shadow-brutal cursor-pointer`}
              >
                Join Free Early Access Waitlist
              </button>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
