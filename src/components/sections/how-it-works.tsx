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
      <div className="mt-4 flex flex-col items-center gap-5 rounded-card-lg border-2 border-ink bg-surface p-5 shadow-brutal sm:flex-row sm:items-start sm:p-6">
        <Image
          src="/mascot.jpeg"
          alt="The Learnometry mascot"
          width={320}
          height={320}
          sizes="80px"
          className="size-20 shrink-0 rounded-card border-2 border-ink object-contain"
        />
        <div className="relative w-full rounded-card-lg border-2 border-ink bg-slate-50 p-4 sm:p-5">
          <span
            aria-hidden="true"
            className="absolute -top-2.5 left-8 size-5 rotate-45 border-t-2 border-l-2 border-ink bg-slate-50 sm:-left-2.5 sm:top-6 sm:border-t-0 sm:border-b-2 sm:border-l-2"
          />
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Starter Pack
          </span>
          <p className="mt-2.5 text-[15px] font-semibold leading-relaxed text-ink">
            Take 30 minutes for your first diagnostic — free, no card required.
          </p>
        </div>
      </div>
    </Section>
  );
}
