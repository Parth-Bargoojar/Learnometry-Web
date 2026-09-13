import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CreditCard, RotateCcw } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Learnometry",
  description:
    "Learnometry Refund & Cancellation Policy. Transparent 7-day refund window, credit rollover policy, and hassle-free subscription cancellation.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background py-10 sm:py-16">
        <Container className="max-w-4xl">
          <Link
            href="/"
            scroll={false}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-text transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <article className="mt-6 rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal-lg sm:p-10">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
                <RotateCcw className="size-3.5 text-primary-deep" />
                Fair Billing Guarantee
              </span>
              <span className="text-xs font-medium text-slate-500">
                Last updated: September 2026
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="mt-2 text-base text-slate-600">
              We believe pricing should be as transparent as our diagnostic test results. This policy sets out clear rules regarding free access, paid subscriptions, credit rollover, and refund eligibility.
            </p>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
              <section>
                <h2 className="font-display text-xl text-ink">1. Pre-Launch &amp; Waitlist Status (100% Free)</h2>
                <div className="mt-2 rounded-card-sm border-2 border-ink bg-emerald-50 p-4">
                  <p className="font-semibold text-emerald-900">Zero Payment Risk:</p>
                  <p className="mt-1 text-sm text-emerald-800">
                    Joining the waitlist and testing our initial diagnostic assessments is <strong>100% free</strong>. No credit card, debit card, or payment authorization is required to reserve your early spot.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">2. Monthly Subscription Plans (Post-Launch)</h2>
                <p className="mt-2">
                  When our paid tiers go live:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li><strong>Free Diagnostic:</strong> Free assessment and starter study plan upon joining our waitlist, with no credit card required.</li>
                  <li><strong>Starter Plan:</strong> ₹199 per month with 1 AI model of your choice, 200 daily credits/tokens, and 1-month validity.</li>
                  <li><strong>Plus Plan:</strong> ₹299 per month with all AI models unlocked, 350 daily tokens, and 1-month validity.</li>
                  <li><strong>Pro Plan:</strong> ₹349 per month with all AI models + maximum reasoning depth, 500 daily tokens, and 1-month validity.</li>
                </ul>
                <p className="mt-2 text-sm text-slate-500">
                  All paid plans are billed on a 1-month cycle in Indian Rupees (INR) with daily quota resets at midnight IST and no long-term lock-ins.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">3. 7-Day Refund Window</h2>
                <p className="mt-2">
                  If you upgrade to a paid subscription (Starter, Plus, or Pro) and feel Learnometry did not deliver the clarity promised:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>You may request a full refund within <strong>7 calendar days</strong> of your initial billing date.</li>
                  <li>To prevent abuse, refund requests are honored if you have consumed <strong>less than 20%</strong> of the daily allowance issued for your current cycle.</li>
                  <li>Once approved, your payment will be refunded to your original source (UPI, Card, or Net Banking) within 5 to 7 business days.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">4. How to Cancel Your Subscription</h2>
                <p className="mt-2">
                  You can cancel your subscription at any time with a single click from your Account Settings:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>Your cancellation takes effect at the conclusion of your active 1-month validity period.</li>
                  <li>You will retain access to your paid features and daily allowances until that cycle ends.</li>
                  <li>We do not charge cancellation fees or penalty deductions.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">5. Daily Quota &amp; Validity Rules</h2>
                <p className="mt-2">
                  In alignment with our fair usage principles:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  <li>Daily credit quotas refresh every night at <strong>00:00 midnight IST</strong> to maintain a predictable, disciplined daily study routine.</li>
                  <li>Unused daily allowances do not roll over indefinitely, preventing account hoarding and ensuring high server capacity for all active learners.</li>
                  <li>Credits and tokens hold no cash value and cannot be redeemed for fiat currency or transferred between different user accounts.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-ink">6. Requesting a Refund</h2>
                <p className="mt-2">
                  To request a refund or raise a billing inquiry, simply write to our support desk with your registered email and payment reference ID:
                </p>
                <p className="mt-1 font-semibold text-ink">
                  Email: <a href="mailto:learnometry.official@gmail.com" className="text-primary-text underline">learnometry.official@gmail.com</a>
                </p>
              </section>
            </div>
          </article>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
