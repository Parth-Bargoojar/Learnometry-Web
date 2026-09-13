"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/section";
import { submitWaitlist } from "@/lib/waitlist";
import { WaitlistConsent } from "@/components/waitlist-consent";

/*
  The teal field is the brand moment; the content sits on a white bento card.
  Body text directly on #168B9E tops out at 4.02:1, short of the AA bar in §26,
  so the card carries the text rather than the field.
*/
export function FinalCta() {
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
      source: "Final CTA Section",
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
    <section className="final-screen snap-section flex flex-col justify-center bg-primary-deep py-10">
      <Container>
        <div className="cta-card mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-card-lg border-2 border-ink bg-surface p-6 text-center shadow-brutal-lg sm:p-9">
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
            <Sparkles aria-hidden="true" className="size-3.5 text-primary-deep" />
            Early Access
          </span>

          <h2 className="font-display text-display-lg text-balance text-ink">
            Find out what&apos;s actually holding your score back.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            Join the waitlist today. Get 30 free monthly credits and be the first to diagnose your weak concepts on launch.
          </p>

          <div className="w-full max-w-md">
            {isJoined ? (
              <div
                role="status"
                className="flex flex-col gap-3 rounded-card-sm border-2 border-ink bg-emerald-50 p-4 text-ink shadow-brutal"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-6 shrink-0 text-success" />
                  <div className="text-left">
                    <p className="font-semibold text-[15px]">You&apos;re on the early access waitlist!</p>
                    <p className="text-xs text-slate-600">We will email <strong className="text-ink">{email}</strong> as soon as early access opens.</p>
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
              <div className="w-full">
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
                    <label htmlFor="cta-waitlist-email" className="sr-only">
                      Your email address
                    </label>
                    <Mail
                      aria-hidden="true"
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-500"
                    />
                    <input
                      id="cta-waitlist-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      disabled={isLoading}
                      value={email}
                      aria-describedby={
                        errorMessage
                          ? "cta-waitlist-error cta-waitlist-consent"
                          : "cta-waitlist-consent"
                      }
                      aria-invalid={errorMessage ? true : undefined}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder="Enter your email"
                      className="h-13 w-full rounded-btn border-2 border-ink bg-surface pl-12 pr-4 text-[15px] font-medium text-ink placeholder:text-slate-500 shadow-brutal-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="h-13 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn border-2 border-ink bg-primary px-6 text-base font-semibold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-0.5 active:shadow-none disabled:opacity-75 disabled:cursor-not-allowed"
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
                    id="cta-waitlist-error"
                    role="alert"
                    className="mt-2.5 rounded-card-xs border border-danger/40 bg-danger/10 px-3 py-2 text-xs font-medium text-danger-text text-left"
                  >
                    {errorMessage}
                  </div>
                ) : null}
                <WaitlistConsent id="cta-waitlist-consent" align="center" />
              </div>
            )}
          </div>

          <p className="text-sm font-medium text-slate-600">
            Free to join
            <span aria-hidden="true" className="mx-2 text-border-subtle">
              ·
            </span>
            No card required
            <span aria-hidden="true" className="mx-2 text-border-subtle">
              ·
            </span>
            30 launch credits included
          </p>
        </div>
      </Container>
    </section>
  );
}
