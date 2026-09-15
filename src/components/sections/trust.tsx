import {
  Calculator,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

/* §37 — trust is a first-class design requirement, stated plainly, not implied. */
const principles: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Calculator,
    title: "Fixed marking rules, run server-side",
    body: "Negative marking included, identical for every student. No model decides whether your answer was right.",
  },
  {
    icon: ScanSearch,
    title: "Every weakness shows its questions",
    body: "Each diagnosis lists the answers that produced it and how confident it is, so you can check the reasoning instead of trusting it.",
  },
  {
    icon: ShieldCheck,
    title: "Two questions is not proof, so we label it",
    body: "Where a concept has too few answers to judge, your report reads “Insufficient evidence” and the plan leaves it alone.",
  },
];

export function Trust() {
  return (
    <Section className="border-b-2 border-ink bg-surface">
      <SectionHeading
        eyebrow="Why you can act on this"
        title="Where every number on your report comes from."
        description="Learnometry tells you what to do with the months you have left, so you should be able to check its working. Here is how each figure is produced."
      />

      {/* Same bordered-card language as the other sections, not a plain icon list. */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
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
