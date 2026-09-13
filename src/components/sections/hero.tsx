"use client";

import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock,
  GraduationCap,
  Loader2,
  Mail,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Kicker } from "@/components/ui/badge";
import { Container, sectionShell } from "@/components/ui/section";
import { submitWaitlist } from "@/lib/waitlist";
import { WaitlistConsent } from "@/components/waitlist-consent";

const trustBadges: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "Built to CBSE, NTA & NMC Exam Patterns" },
  { icon: Calculator, label: "Deterministic Scoring, Not AI Guesswork" },
  { icon: Sparkles, label: "30 Free Credits Every Month at Launch" },
];

export function Hero() {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isLoading) return;

    setIsLoading(true);
    setErrorMessage(null);

    const result = await submitWaitlist({
      email,
      source: "Hero Section",
    });

    setIsLoading(false);

    if (result.success) {
      setIsJoined(true);
    } else {
      setErrorMessage(
        result.message || "Unable to join the waitlist. Please try again."
      );
    }
  };

  return (
    <section
      className="relative flex flex-col justify-center border-b-2 border-ink bg-background pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-14 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="flex flex-col items-start gap-4 sm:gap-5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <Kicker icon={GraduationCap}>Built for CBSE, JEE &amp; NEET students</Kicker>
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
                <span className="size-2 rounded-full bg-primary-deep animate-pulse" />
                Early Access Beta
              </span>
            </div>

            <h1 className="font-display text-display-xl text-balance text-ink">
              Find your weak concepts. Fix them in the right order.
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
              Take a quick diagnostic test to find the exact concepts pulling
              your marks down. Get a day-by-day revision plan based on your
              available study hours, then retest to confirm you&apos;ve closed the gap.
            </p>

            <div id="waitlist" className="w-full scroll-mt-28">
              {isJoined ? (
                <div
                  role="status"
                  className="flex w-full max-w-lg flex-col gap-3 rounded-card-sm border-2 border-ink bg-emerald-50 p-4 text-ink shadow-brutal"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="size-6 shrink-0 text-success" />
                    <div>
                      <p className="font-semibold text-[15px]">You&apos;re on the early access waitlist!</p>
                      <p className="text-xs text-slate-600">We will notify <strong className="text-ink">{email}</strong> as soon as early access opens.</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsJoined(false);
                      setEmail("");
                      setErrorMessage(null);
                    }}
                    className="self-start text-xs font-semibold text-primary-text underline hover:text-ink transition-colors"
                  >
                    Enter a different email
                  </button>
                </div>
              ) : (
                <div className="w-full max-w-xl">
                  <form
                    onSubmit={handleWaitlistSubmit}
                    className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
                  >
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <div className="relative flex-1">
                      <label htmlFor="hero-waitlist-email" className="sr-only">
                        Your email address
                      </label>
                      <Mail
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-500"
                      />
                      <input
                        id="hero-waitlist-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        disabled={isLoading}
                        value={email}
                        aria-describedby={
                          errorMessage
                            ? "hero-waitlist-error hero-waitlist-consent"
                            : "hero-waitlist-consent"
                        }
                        aria-invalid={errorMessage ? true : undefined}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="Enter your email to join waitlist"
                        className="h-12 sm:h-13 w-full rounded-btn border-2 border-ink bg-surface pl-12 pr-4 text-[15px] font-medium text-ink placeholder:text-slate-500 shadow-brutal-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="h-12 sm:h-13 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn border-2 border-ink bg-primary px-6 text-base font-semibold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-0.5 active:shadow-none disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="size-4.5 animate-spin" />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          <span>Join Waitlist</span>
                          <ArrowRight aria-hidden="true" className="size-4.5" />
                        </>
                      )}
                    </button>
                  </form>
                  {errorMessage ? (
                    <div
                      id="hero-waitlist-error"
                      role="alert"
                      className="mt-2.5 rounded-card-xs border border-danger/40 bg-danger/10 px-3 py-2 text-xs font-medium text-danger-text"
                    >
                      {errorMessage}
                    </div>
                  ) : null}
                  <WaitlistConsent id="hero-waitlist-consent" />
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="size-3.5 text-primary-text" /> 30 free monthly credits on launch
              </span>
              <span aria-hidden="true" className="hidden text-border-subtle sm:inline">·</span>
              <a
                href="#how-it-works"
                className="font-semibold text-ink underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary-text touch:inline-flex touch:min-h-11 touch:items-center"
              >
                See how it works ↓
              </a>
            </div>

            <ul className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {trustBadges.map((badge) => (
                <li
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-surface px-3 py-1 text-xs font-semibold text-ink shadow-brutal-sm"
                >
                  <badge.icon
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-primary-text"
                  />
                  {badge.label}
                </li>
              ))}
            </ul>

            <p className="max-w-xl text-[11px] leading-normal text-slate-500 mt-0.5">
              Learnometry is an independent product. It is not affiliated with, endorsed
              by or connected to CBSE, the NTA, the NMC or any examination authority or
              coaching institute.
            </p>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

/*
  Ultra-minimalist "Before & After" Transformation Widget.
  Tells the complete Learnometry story in one single, high-contrast glance:
  Initial Diagnostic (34% Critical Gap) → 35-min targeted fix → Parallel Retest (78% Gap Closed).
*/
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <article className="rounded-card-lg border-2 border-ink bg-surface p-6 sm:p-7 shadow-brutal-lg">
        {/* Header metadata */}
        <div className="flex items-center justify-between border-b border-border-subtle pb-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">
          <span className="flex items-center gap-2 font-semibold text-ink">
            <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
            Quadratic Equations · Math
          </span>
          <span className="rounded-full border border-ink/20 bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
            Illustrative example
          </span>
        </div>

        {/* Transformation Grid */}
        <div className="mt-5 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
          {/* Before: Initial Diagnostic */}
          <div className="flex flex-col gap-2 rounded-card border-2 border-dashed border-danger/30 bg-danger/[0.03] p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Diagnostic
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl font-bold text-ink">
                34%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[34%] rounded-full bg-danger" />
            </div>
            <div className="mt-0.5 flex items-center gap-1.5 text-xs font-bold text-danger">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-danger opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-danger" />
              </span>
              Critical Gap
            </div>
            <p className="text-[11px] text-slate-500">
              Prerequisite sign slip
            </p>
          </div>

          {/* Transformation Bridge */}
          <div className="flex flex-col items-center justify-center gap-1 py-1 sm:py-0">
            <span className="rounded-full border-2 border-ink bg-primary px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-ink shadow-brutal-sm whitespace-nowrap">
              35 min fix
            </span>
            <ArrowRight aria-hidden="true" className="size-5 text-ink hidden sm:block mt-1 animate-pulse" />
            <span aria-hidden="true" className="sm:hidden text-ink font-bold text-base">↓</span>
          </div>

          {/* After: Parallel Retest */}
          <div className="flex flex-col gap-2 rounded-card border-2 border-ink bg-success/[0.05] p-4 shadow-brutal-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-success-text">
              Retest
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl font-bold text-success">
                78%
              </span>
              <span className="text-xs font-extrabold text-success-text">
                +44 pts
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[78%] rounded-full bg-success" />
            </div>
            <div className="mt-0.5 flex items-center gap-1.5 text-xs font-bold text-success-text">
              <CheckCircle2 className="size-3.5 text-success" />
              Gap Closed
            </div>
            <p className="text-[11px] text-slate-600 font-medium">
              Zero mistakes on retest
            </p>
          </div>
        </div>

        {/* Bottom Proof Strip */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-btn border border-ink/20 bg-slate-50 px-3.5 py-2.5 text-xs">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <Clock className="size-3.5 text-primary-deep shrink-0" />
            <span>Sample report — not a real student&apos;s result</span>
          </span>
          <span className="font-bold text-primary-text flex items-center gap-1">
            <Sparkles aria-hidden="true" className="size-3.5 text-primary-deep" />
            Deterministic scoring
          </span>
        </div>
      </article>
    </div>
  );
}
