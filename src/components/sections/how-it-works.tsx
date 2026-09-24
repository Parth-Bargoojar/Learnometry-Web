import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ListOrdered,
  RefreshCw,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

/* §45 — the seven-stage internal loop, condensed to the three a visitor needs. */
const steps: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Search,
    title: "Diagnose",
    body: "A 30-minute timed test. Every wrong answer maps to the concept it came from and the error that caused it, with the questions shown as evidence.",
  },
  {
    icon: ListOrdered,
    title: "Prescribe",
    body: "Your gaps ordered by exam weight and prerequisite depth, then cut into daily sessions that fit the study hours you report.",
  },
  {
    icon: RefreshCw,
    title: "Retest",
    body: "A fresh parallel test on the same concept. Your status flips to Gap Closed only when that test says so.",
  },
];

/* `compact` is the home-page cut: same three steps, plus a link to the full page. */
export function HowItWorks({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="how-it-works" className="border-b-2 border-ink bg-background">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps, and the last one checks the other two."
        description="Every recommendation traces back to a question you answered. Nothing is marked fixed until a fresh retest confirms it."
      />

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="relative h-full">
            <div className="flex h-full flex-col gap-3 rounded-card-lg border-2 border-ink bg-surface p-5 transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-card-sm border-2 border-ink bg-primary/15">
                  <step.icon aria-hidden="true" className="size-5 text-ink" />
                </span>
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-full bg-primary/20 font-display text-base text-ink"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-lg text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
            </div>

            {/* Desktop-only connector proving the loop is continuous, not a checklist. */}
            {index < steps.length - 1 ? (
              <div
                aria-hidden="true"
                className="absolute top-1/2 -right-4 z-10 hidden size-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-2 border-ink bg-primary lg:flex"
              >
                <ChevronRight aria-hidden="true" className="size-4 text-ink" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      {/*
        §13 — the mascot's single appearance on this page: first-use guidance,
        contained inside a bordered surface rather than floating over the layout.
      */}
      <div className="mt-6 flex flex-row items-center gap-3.5 sm:gap-5 rounded-card-lg border-2 border-ink bg-gradient-to-r from-primary/[0.12] via-primary/[0.04] to-surface p-3.5 sm:p-5 shadow-brutal transition-transform hover:-translate-y-0.5">
        <div className="relative shrink-0">
          <div className="size-16 sm:size-20 overflow-hidden rounded-full border-2 border-ink bg-surface shadow-brutal-sm ring-4 ring-primary/25">
            <Image
              src="/mascot.jpeg"
              alt="The Learnometry mascot"
              width={160}
              height={160}
              sizes="(max-width: 640px) 64px, 80px"
              className="size-full scale-110 object-contain"
            />
          </div>
        </div>

        <div className="relative min-w-0 flex-1 rounded-card border-2 border-ink bg-surface p-3.5 sm:p-4 shadow-brutal-sm">
          {/* Speech bubble pointer pointing directly left towards the mascot avatar */}
          <span
            aria-hidden="true"
            className="absolute -left-2 top-1/2 size-3.5 -translate-y-1/2 rotate-45 border-b-2 border-l-2 border-ink bg-surface"
          />
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border-2 border-ink bg-primary px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
              <Sparkles aria-hidden="true" className="size-3" />
              Starter Pack
            </span>
            <p className="text-xs sm:text-[15px] font-semibold leading-relaxed text-ink">
              Your first diagnostic takes 30 minutes and costs nothing.{" "}
              <span className="text-primary-deep font-bold">No card required.</span>
            </p>
          </div>
        </div>
      </div>

      {compact ? (
        <div className="mt-8 flex justify-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary-text underline transition-colors hover:text-ink touch:min-h-11"
          >
            See what you get after the diagnostic
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      ) : null}
    </Section>
  );
}
