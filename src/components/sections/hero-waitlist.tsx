"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { submitWaitlist } from "@/lib/waitlist";
import { WaitlistConsent } from "@/components/waitlist-consent";

/*
  The only interactive part of the hero, split out so <Hero /> itself can stay a server
  component.

  Before this split the whole hero — the <h1> that is the LCP element, the static trust
  badges and the entire before/after visual — was inside a "use client" boundary purely
  because four fields of form state lived here. All of it shipped as hydration work
  competing with the LCP paint. Now only this form does.
*/
export function HeroWaitlist() {
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
      <div id="waitlist" className="w-full scroll-mt-28">
        {isJoined ? (
          <div
            role="status"
            className="flex w-full max-w-lg flex-col gap-3 rounded-card-sm border-2 border-ink bg-emerald-50 p-4 text-ink shadow-brutal"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-6 shrink-0 text-success" />
              <div>
                <p className="font-semibold text-[15px]">You&apos;re in. Check your inbox on launch day.</p>
                <p className="text-xs text-slate-600">We&apos;ll email <strong className="text-ink">{email}</strong> the moment your diagnostic is ready.</p>
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
                  placeholder="Your email address"
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
                    <span>Get my free diagnostic</span>
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
  );
}
