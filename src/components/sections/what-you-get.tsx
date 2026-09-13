import {
  Brain,
  CalendarRange,
  CircleQuestionMark,
  Crosshair,
} from "lucide-react";
import { StatusBadge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/ui/section";

export function WhatYouGet() {
  return (
    <Section id="what-you-get" className="border-b-2 border-ink bg-surface">
      <SectionHeading
        eyebrow="What you get"
        title="Diagnosis is where other tools stop."
        description="Knowing a chapter is weak changes nothing on its own. These four pieces turn a result into work you can start today."
        align="center"
      />

      {/*
        One row of four rather than a 2×2 or asymmetric bento: four shorter
        cards resolve to a single screen where two tall rows cannot.
      */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          icon={Brain}
          title="Diagnosis that names the cause"
          body="The specific concept behind a wrong answer, and the error pattern driving it."
        >
          <div className="flex flex-wrap gap-1.5">
            {[
              "Conceptual gap",
              "Prerequisite gap",
              "Calculation error",
              "Misread question",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border-subtle bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
              >
                {label}
              </span>
            ))}
          </div>
        </Card>

        <Card
          icon={CalendarRange}
          title="A plan ordered by impact"
          body="Ranked by exam weight and prerequisite depth, fitted to the hours you have."
        >
          <ol className="flex flex-col gap-1.5">
            {[
              { p: "P1", task: "Discriminant & roots", time: "35m" },
              { p: "P2", task: "Completing the square", time: "25m" },
              { p: "P3", task: "Graphing parabolas", time: "20m" },
            ].map((row) => (
              <li
                key={row.p}
                className="flex items-center gap-2 rounded-card-sm border border-border-subtle bg-slate-50 px-2.5 py-1.5"
              >
                <span className="rounded-full border border-ink bg-surface px-1.5 text-[11px] font-bold text-ink">
                  {row.p}
                </span>
                <span className="flex-1 truncate text-xs font-medium text-ink">
                  {row.task}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {row.time}
                </span>
              </li>
            ))}
          </ol>
        </Card>

        <Card
          icon={Crosshair}
          title="Practice aimed at one gap"
          body="Question sets for the exact concept you're fixing, at the difficulty that moves mastery."
        >
          <dl className="flex flex-col gap-1.5 rounded-card-sm border border-border-subtle bg-slate-50 px-3 py-2.5">
            {[
              ["Target", "Quadratic Eqns"],
              ["Goal", "Sign accuracy"],
              ["Questions", "10"],
              ["Difficulty", "Medium"],
            ].map(([term, value]) => (
              <div key={term} className="flex items-baseline justify-between gap-2">
                <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">
                  {term}
                </dt>
                <dd className="text-xs font-medium text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Card>

        <Card
          icon={CircleQuestionMark}
          title="Proof it worked — or not yet"
          body="A parallel retest measures the change. Where evidence is thin, we say so."
        >
          <div className="flex flex-col gap-1.5">
            <DeltaRow concept="Quadratic Eqns" from={34} to={71} />
            <DeltaRow concept="Sequences" from={58} to={64} />
            <div className="flex flex-col gap-1.5 rounded-card-sm border border-border-subtle bg-slate-50 px-3 py-2">
              <span className="text-xs font-medium text-ink">Complex Numbers</span>
              <StatusBadge tone="neutral">Insufficient evidence</StatusBadge>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Card({
  icon: Icon,
  title,
  body,
  children,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col rounded-card-lg border-2 border-ink bg-surface p-5 shadow-brutal transition-all duration-200 hover:-translate-y-1.5 hover:shadow-brutal-lg">
      <span className="flex size-10 items-center justify-center rounded-card-sm border-2 border-ink bg-primary/15">
        <Icon aria-hidden className="size-5 text-ink" />
      </span>
      <h3 className="mt-4 font-display text-[17px] leading-snug text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{body}</p>
      <div className="mt-4 border-t border-border-subtle pt-4">{children}</div>
    </article>
  );
}

function DeltaRow({
  concept,
  from,
  to,
}: {
  concept: string;
  from: number;
  to: number;
}) {
  return (
    <div className="rounded-card-sm border border-border-subtle bg-slate-50 px-3 py-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-ink">{concept}</span>
        <span className="text-xs font-semibold text-slate-600">
          {from}%{" "}
          <span aria-hidden="true" className="text-border-subtle">
            →
          </span>{" "}
          <span className="text-success-text">{to}%</span>
        </span>
      </div>
      <div className="relative mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 rounded-full bg-success/30"
          style={{ width: `${from}%` }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-success"
          style={{ width: `${to}%` }}
        />
      </div>
    </div>
  );
}
