import {
  Calculator,
  Receipt,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

/* §37 — trust is a first-class design requirement, stated plainly, not implied. */
const principles: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Calculator,
    title: "Your score is calculated, not estimated",
    body: "Marking follows fixed, server-side rules — including negative marking. No model decides whether your answer was right.",
  },
  {
    icon: ScanSearch,
    title: "Every weakness shows its evidence",
    body: "Each diagnosis names the questions behind it and how confident the conclusion is, so you can judge it rather than take it on faith.",
  },
  {
    icon: ShieldCheck,
    title: "We say “not enough evidence” when it's true",
    body: "Two questions on a concept isn't proof of a weakness. Where the signal is thin, we hold the claim instead of manufacturing certainty.",
  },
  {
    icon: Receipt,
    title: "Credits are shown plainly",
    body: "You always see what you have, what an action costs, and what's left. No “unlimited AI” wording, no countdown pressure to upgrade.",
  },
];

export function Trust() {
  return (
    <Section className="border-b-2 border-ink bg-surface">
      <SectionHeading
        eyebrow="Why you can act on this"
        title="How we avoid guessing."
        description="Learnometry makes claims about your preparation, so those claims have to be checkable. Here's exactly where the certainty comes from — and where it doesn't."
      />

      {/* Same bordered-card language as the other sections, not a plain icon list. */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="flex flex-col gap-3 rounded-card-lg border-2 border-ink bg-surface p-5 sm:p-6 shadow-brutal transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="flex size-11 items-center justify-center rounded-card-sm border-2 border-ink bg-primary/15">
              <principle.icon aria-hidden="true" className="size-5 text-ink" />
            </span>
            <h3 className="font-display text-lg leading-snug text-ink">
              {principle.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-slate-600">
              {principle.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
