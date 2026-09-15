"use client";

import { ArrowRight, Check, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { useWaitlistModal } from "@/components/waitlist-modal";

/* Updated pricing tiers matching product decisions: ₹199, ₹299, ₹349 with daily quotas */
const plans = [
  {
    code: "starter",
    name: "Starter",
    price: "₹199",
    cadence: "per month",
    validity: "1 month validity",
    dailyAllowance: "200 credits / day",
    dailyResetNotice: "Refills at midnight, every day",
    modelAccess: "1 model (your choice)",
    summary: "Enough for one diagnostic and a daily concept session.",
    features: [
      "200 credits a day on one model you pick",
      "Full diagnostic, ranked plan and retests",
      "Cancel any month, no lock-in",
    ],
    cta: "Reserve Starter at ₹199",
    recommended: false,
  },
  {
    code: "plus",
    name: "Plus",
    price: "₹299",
    cadence: "per month",
    validity: "1 month validity",
    dailyAllowance: "350 credits / day",
    dailyResetNotice: "Refills at midnight, every day",
    modelAccess: "All models",
    summary: "75% more credits a day than Starter, on every model.",
    features: [
      "350 credits a day across all models",
      "Multi-week plan with scheduled retests",
      "Step-by-step breakdowns of hard problems",
    ],
    cta: "Reserve Plus at ₹299",
    recommended: true,
  },
  {
    code: "pro",
    name: "Pro",
    price: "₹349",
    cadence: "per month",
    validity: "1 month validity",
    dailyAllowance: "500 credits / day",
    dailyResetNotice: "Refills at midnight, every day",
    modelAccess: "All models, deepest reasoning",
    summary: "For the final-months sprint, retesting several concepts a day.",
    features: [
      "500 credits a day, including the slower reasoning models",
      "Multi-chapter diagnostics and high-frequency retests",
      "Priority queue at peak hours",
    ],
    cta: "Reserve Pro at ₹349",
    recommended: false,
  },
];

export function Pricing() {
  const { openWaitlistModal } = useWaitlistModal();

  return (
    <Section id="pricing" className="border-b-2 border-ink bg-background">
      <SectionHeading
        align="center"
        eyebrow="Pricing"
        title="₹199 to ₹349 a month. Cancel any month."
        description="Your credits refill at midnight, so one heavy revision day never locks you out of the next."
      />

      {/* Zero-assumption free trial banner */}
      <div className="mx-auto mt-6 max-w-2xl rounded-btn border-2 border-ink bg-primary/15 px-4 py-2.5 text-center text-sm font-semibold text-ink shadow-brutal-sm">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="size-4 text-primary-deep" />
          <span><strong>Not ready to pay?</strong> Everyone on the waitlist gets a full diagnostic free on launch day, no card required.</span>
        </span>
      </div>

      <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.code}
            className={`flex flex-col justify-between rounded-card-lg border-2 border-ink bg-surface p-5 transition-transform ${
              plan.recommended
                ? "shadow-brutal-lg lg:-translate-y-2 ring-2 ring-primary"
                : "shadow-brutal"
            }`}
          >
            <div>
              {plan.recommended ? (
                <div className="-mx-5 -mt-5 mb-4 rounded-t-[14px] border-b-2 border-ink bg-primary px-5 py-2 text-center text-xs font-bold uppercase tracking-wide text-ink">
                  Recommended for most students
                </div>
              ) : null}

              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl text-ink">{plan.name}</h3>
                <span className="rounded-full border border-ink bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-ink">
                  {plan.validity}
                </span>
              </div>

              <p className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-4xl text-ink">{plan.price}</span>
                <span className="text-sm font-medium text-slate-600">
                  {plan.cadence}
                </span>
              </p>

              {/* Model access badge */}
              <div className="mt-3 rounded-btn border border-ink/20 bg-slate-50 px-3 py-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Model access
                </p>
                <p className="text-sm font-bold text-ink flex items-center gap-1.5 mt-0.5">
                  <Zap className="size-4 text-primary-deep" />
                  {plan.modelAccess}
                </p>
              </div>

              {/* Daily allowance callout */}
              <div className="mt-2.5 rounded-btn border-2 border-ink bg-primary/10 px-3 py-2">
                <p className="text-xs font-bold uppercase tracking-wider text-primary-text">
                  Daily allowance
                </p>
                <p className="text-sm font-extrabold text-ink">
                  {plan.dailyAllowance}
                </p>
                <p className="text-[11px] font-medium text-slate-600">
                  {plan.dailyResetNotice}
                </p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {plan.summary}
              </p>

              <ul className="mt-4 flex flex-col gap-2.5 border-t border-border-subtle pt-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4.5 shrink-0 text-success"
                    />
                    <span className="text-sm text-ink">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={openWaitlistModal}
                className={`${buttonClasses(plan.recommended ? "primary" : "secondary", "md")} w-full cursor-pointer`}
              >
                {plan.cta}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm font-medium text-slate-600">
          Prices in INR, valid 30 days, credits reset at 00:00. No hidden charges.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary-text underline hover:text-ink transition-colors touch:min-h-11"
        >
          Compare the full plan breakdown
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
