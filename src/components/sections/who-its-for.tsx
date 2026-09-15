import { Compass, Hourglass, Wallet, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const audiences: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Compass,
    title: "You finish a mock and still guess what to open.",
    body: "The analytics load, you read them, and you are back to picking a chapter by feel on Monday morning.",
  },
  {
    icon: Hourglass,
    title: "Your timetable is already full.",
    body: "Between coaching, school and homework, revision gets whatever is left. Those hours have to land on the right concept the first time.",
  },
  {
    icon: Wallet,
    title: "You have months left before the paper.",
    body: "A month spent revising what you already knew is a month you do not get back before the paper.",
  },
];

export function WhoItsFor() {
  return (
    <Section className="border-b-2 border-ink bg-background">
      <SectionHeading
        eyebrow="Who it's for"
        title="For the Class 11 or 12 student with a full coaching timetable."
        description="Learnometry picks what you open first, out of the material you already own."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {audiences.map((audience) => (
          <article
            key={audience.title}
            className="flex flex-col gap-4 rounded-card-lg border-2 border-ink bg-surface p-5 sm:p-7 shadow-brutal transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="flex size-11 items-center justify-center rounded-card-sm border-2 border-ink bg-primary/15">
              <audience.icon aria-hidden="true" className="size-5 text-ink" />
            </span>
            <h3 className="font-display text-xl leading-snug text-ink">
              {audience.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-slate-600">
              {audience.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
