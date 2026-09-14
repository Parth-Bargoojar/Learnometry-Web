import Image from "next/image";
import {
  ChevronRight,
  ClipboardList,
  ListOrdered,
  RefreshCw,
  Search,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

/* §45 — the seven-stage internal loop, condensed to the five a visitor needs. */
const steps: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ClipboardList,
    title: "Assess",
    body: "A timed diagnostic built from calibrated questions.",
  },
  {
    icon: Search,
    title: "Diagnose",
    body: "Each wrong answer maps to a concept and a likely cause.",
  },
  {
    icon: ListOrdered,
    title: "Prescribe",
    body: "Weaknesses ranked by impact, fitted to your hours.",
  },
  {
    icon: Target,
    title: "Study",
    body: "Targeted practice tied to the exact gap you're closing.",
  },
  {
    icon: RefreshCw,
    title: "Retest",
    body: "A parallel test measures whether it actually worked.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-b-2 border-ink bg-background">
      <SectionHeading
        eyebrow="How it works"
        title="A closed loop, not a report you file away."
        description="Each step feeds the next. Nothing is recommended without evidence, and nothing is marked fixed until a retest says so."
      />

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
              Take 30 minutes for your first diagnostic —{" "}
              <span className="text-primary-deep font-bold">free, no card required.</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
