import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

export function Problem() {
  return (
    <Section className="border-b-2 border-ink bg-surface">
      <SectionHeading
        eyebrow="The gap"
        title="Your mock report ends at the percentile."
        description="It flags Quadratic Equations as weak and stops there. You are left deciding which concept inside that chapter broke, how long to spend on it, and how to tell whether the fix held. You make that call alone, at 11pm, with a syllabus still to finish."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <article className="rounded-card-lg border border-rose-200 bg-rose-50/40 p-5 sm:p-7">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full border-2 border-rose-300 bg-white">
              <X aria-hidden="true" className="size-4 text-danger" />
            </span>
            <h3 className="text-lg font-semibold text-slate-600">
              A standard test report
            </h3>
          </div>
          <ul className="mt-5 flex flex-col gap-3 text-[15px] text-slate-600">
            <li>A percentile and a rank.</li>
            <li>Accuracy averaged across a whole chapter.</li>
            <li>Topics labelled &ldquo;revise more&rdquo;.</li>
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
              Your Learnometry report
            </h3>
          </div>
          <ul className="mt-5 flex flex-col gap-3 text-[15px] font-medium text-ink">
            <li className="flex items-start gap-2.5">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4.5 shrink-0 text-success"
              />
              The exact concept behind each wrong answer.
            </li>
            <li className="flex items-start gap-2.5">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4.5 shrink-0 text-success"
              />
              Tomorrow&apos;s 35-minute task, ranked by exam weight.
            </li>
            <li className="flex items-start gap-2.5">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4.5 shrink-0 text-success"
              />
              A retest that confirms the gap closed.
            </li>
          </ul>
        </article>
      </div>
    </Section>
  );
}
