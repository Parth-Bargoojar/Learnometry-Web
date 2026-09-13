import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

export function Problem() {
  return (
    <Section className="border-b-2 border-ink bg-surface">
      <SectionHeading
        eyebrow="The gap"
        title="Most tools grade you. Almost none tell you what to do next."
        description="You already know which chapter is weak — your test analytics said so. What you don't have is the order to fix it in: which concept first, for how long, and how to know it actually worked. That part has always required a mentor."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <article className="rounded-card-lg border border-rose-200 bg-rose-50/40 p-5 sm:p-7">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full border-2 border-rose-300 bg-white">
              <X aria-hidden="true" className="size-4 text-danger" />
            </span>
            <h3 className="text-lg font-semibold text-slate-600">
              What regular test analytics give you
            </h3>
          </div>
          <ul className="mt-5 flex flex-col gap-3 text-[15px] text-slate-600">
            <li>A generic percentile and a rank, nothing more.</li>
            <li>Chapter-level accuracy, averaged across everything.</li>
            <li>A list of topics vaguely labelled &ldquo;revise more&rdquo;.</li>
          </ul>
        </article>

        <article className="relative rounded-card-lg border-2 border-ink bg-surface p-5 sm:p-7 shadow-brutal-lg">
          <span className="absolute -top-3.5 left-5 sm:left-7 inline-flex items-center rounded-full border-2 border-ink bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
            The Learnometry difference
          </span>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full border-2 border-ink bg-primary">
              <Check aria-hidden="true" className="size-4 text-ink" />
            </span>
            <h3 className="text-lg font-semibold text-ink">
              What Learnometry gives you
            </h3>
          </div>
          <ul className="mt-5 flex flex-col gap-3 text-[15px] font-medium text-ink">
            <li className="flex items-start gap-2.5">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4.5 shrink-0 text-success"
              />
              The exact concept behind the wrong answer.
            </li>
            <li className="flex items-start gap-2.5">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4.5 shrink-0 text-success"
              />
              A 35-minute action plan, ranked by impact.
            </li>
            <li className="flex items-start gap-2.5">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4.5 shrink-0 text-success"
              />
              A retest that verifies the gap actually closed.
            </li>
          </ul>
        </article>
      </div>
    </Section>
  );
}
