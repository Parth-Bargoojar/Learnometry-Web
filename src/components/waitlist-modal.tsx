"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, Sparkles, X } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { submitWaitlist } from "@/lib/waitlist";
import { WaitlistConsent } from "@/components/waitlist-consent";
import { useFocusTrap } from "@/lib/use-focus-trap";

interface WaitlistContextType {
  openWaitlistModal: () => void;
  closeWaitlistModal: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | null>(null);

export function useWaitlistModal() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlistModal must be used within a WaitlistProvider");
  }
  return context;
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useFocusTrap(panelRef, isOpen);

  const openWaitlistModal = () => {
    setErrorMessage(null);
    setIsOpen(true);
  };
  const closeWaitlistModal = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    // Store previous overflow and padding styles
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    // Prevent content jump when scrollbar disappears
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Disable scrolling on background page
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isLoading) return;

    setIsLoading(true);
    setErrorMessage(null);

    const result = await submitWaitlist({
      email,
      source: "Waitlist Modal",
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
    <WaitlistContext.Provider value={{ openWaitlistModal, closeWaitlistModal }}>
      {children}
      {isOpen ? (
        /*
          The overlay is the scroll container and the centring happens on the
          wrapper inside it. Centring directly on a scrolling flex container
          looks right only while the panel fits: once it is taller than the
          viewport, the overflow is split above and below the centre line and
          the part above it sits at a negative offset that no amount of
          scrolling can reach — scrollTop is already 0. On a landscape phone
          that put the heading and the close button permanently off-screen.
          `min-h-full` on the wrapper keeps the panel centred whenever there is
          room and lets it scroll from its true top when there is not.
        */
        <div
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-ink/60 backdrop-blur-xs transition-opacity"
          onClick={closeWaitlistModal}
        >
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The dialog is the panel, not the backdrop — a backdrop carrying
                role="dialog" makes screen readers announce the overlay itself. */}
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              tabIndex={-1}
              className="relative w-full max-w-md rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal-lg sm:p-8 focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeWaitlistModal}
                aria-label="Close waitlist popup"
                className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-btn border-2 border-ink bg-slate-100 text-ink shadow-brutal-sm transition-colors hover:bg-slate-200"
              >
                <X className="size-4.5" />
              </button>

              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
                <Sparkles className="size-3.5 text-primary-deep" />
                Early Access Waitlist
              </span>

              <h2 id="modal-headline" className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-[26px]">
                Get your first diagnostic free.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Leave your email and we&apos;ll open your diagnostic on launch day, with 30 credits to build the study plan that follows.
              </p>

              {isJoined ? (
                <div className="mt-6 flex flex-col gap-4">
                  <div
                    role="status"
                    className="flex items-center gap-3 rounded-card-sm border-2 border-ink bg-emerald-50 p-4 text-ink shadow-brutal"
                  >
                    <CheckCircle2 className="size-6 shrink-0 text-success" />
                    <div>
                      <p className="font-semibold text-[15px]">You&apos;re in.</p>
                      <p className="text-xs text-slate-600">
                        We&apos;ll email <strong className="text-ink">{email}</strong> the moment your diagnostic is ready.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={closeWaitlistModal}
                      className={`${buttonClasses("secondary", "md")} w-full cursor-pointer`}
                    >
                      Done
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsJoined(false);
                        setEmail("");
                        setErrorMessage(null);
                      }}
                      className="text-center text-xs font-semibold text-primary-text underline hover:text-ink transition-colors cursor-pointer"
                    >
                      Enter a different email
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-6 flex flex-col">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <div className="relative">
                      <label htmlFor="modal-waitlist-email" className="sr-only">
                        Your email address
                      </label>
                      <Mail
                        aria-hidden="true"
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-slate-500"
                      />
                      <input
                        id="modal-waitlist-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        disabled={isLoading}
                        value={email}
                        aria-describedby={
                          errorMessage
                            ? "modal-waitlist-error modal-waitlist-consent"
                            : "modal-waitlist-consent"
                        }
                        aria-invalid={errorMessage ? true : undefined}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="Your email address"
                        className="h-12 w-full rounded-btn border-2 border-ink bg-surface pl-11 pr-4 text-[15px] font-medium text-ink placeholder:text-slate-500 shadow-brutal-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="h-12 inline-flex items-center justify-center gap-2 rounded-btn border-2 border-ink bg-primary px-5 text-base font-semibold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-0.5 active:shadow-none disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="size-4.5 animate-spin" />
                          <span>Reserving...</span>
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
                      id="modal-waitlist-error"
                      role="alert"
                      className="mt-2.5 rounded-card-xs border border-danger/40 bg-danger/10 px-3 py-2 text-xs font-medium text-danger-text"
                    >
                      {errorMessage}
                    </div>
                  ) : null}
                  <WaitlistConsent id="modal-waitlist-consent" />
                </div>
              )}

              <p className="mt-4 text-center text-xs font-medium text-slate-500">
                No spam · Free to join · No card required
              </p>
              </div>
          </div>
        </div>
      ) : null}
    </WaitlistContext.Provider>
  );
}
