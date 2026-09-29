/*
  Server component on purpose.

  The <h1> here is the page's LCP element. Keeping it (and the static HeroVisual below)
  out of a client boundary means the largest paint is plain server-rendered HTML with no
  hydration queued behind it. Only <HeroWaitlist /> — the form — ships JavaScript.
*/
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock,
  GraduationCap,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Kicker } from "@/components/ui/badge";
import { Container } from "@/components/ui/section";
import { HeroWaitlist } from "@/components/sections/hero-waitlist";

const trustBadges: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "Modelled on CBSE, NTA & NMC exam patterns" },
  { icon: Calculator, label: "Fixed marking rules, negative marking included" },
  { icon: ScanSearch, label: "Every weakness links to the questions behind it" },
];

export function Hero() {
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
              <Kicker icon={GraduationCap}>For Class 11 &amp; 12 JEE, NEET and CBSE students</Kicker>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                <span className="size-2 rounded-full bg-primary-deep" />
                Early access beta
              </span>
            </div>

            <h1 className="font-display text-display-xl text-balance text-ink">
              Know which concept to fix first tomorrow morning.
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
              One 30-minute diagnostic names the exact concepts behind your wrong
              answers. You get a daily plan ranked by exam weight, sized to the
              hours you actually have, and a retest that proves the gap closed.
            </p>

            <HeroWaitlist />

            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium text-slate-600">
              <span>Free to join.</span>
              <span aria-hidden="true" className="text-border-subtle">&middot;</span>
              <span>No card required.</span>
              <span aria-hidden="true" className="text-border-subtle">&middot;</span>
              <span>Free diagnostic and study plan on launch day.</span>
            </p>

            <ul className="flex flex-wrap items-center gap-2 sm:gap-x-4 sm:gap-y-2">
              {trustBadges.map((badge) => (
                <li
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 sm:text-sm"
                >
                  <badge.icon
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-primary-text"
                  />
                  {badge.label}
                </li>
              ))}
            </ul>

            <p className="max-w-xl text-xs leading-normal text-slate-500 mt-0.5">
              Learnometry is an independent product, not affiliated with or endorsed by
              CBSE, the NTA, the NMC or any coaching institute.
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
              <span aria-hidden="true" className="size-2 rounded-full bg-danger" />
              Critical Gap
            </div>
            <p className="text-xs text-slate-500">
              Prerequisite sign slip
            </p>
          </div>

          {/* Transformation Bridge */}
          <div className="flex flex-col items-center justify-center gap-1 py-1 sm:py-0">
            <span className="rounded-full border-2 border-ink bg-surface px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink whitespace-nowrap">
              35 min fix
            </span>
            <ArrowRight aria-hidden="true" className="size-5 text-ink hidden sm:block mt-1" />
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
            <p className="text-xs text-slate-600 font-medium">
              Sign slip resolved on retest
            </p>
          </div>
        </div>

        {/* Bottom Proof Strip */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-btn border border-ink/20 bg-slate-50 px-3.5 py-2.5 text-xs">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <Clock className="size-3.5 text-primary-deep shrink-0" />
            <span>Sample report, not a real student&apos;s result</span>
          </span>
          <span className="font-bold text-primary-text flex items-center gap-1">
            Marked by fixed rules
          </span>
        </div>
      </article>
    </div>
  );
}
