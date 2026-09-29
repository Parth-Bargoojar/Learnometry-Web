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

      {/* A single divided band, not another grid of cards: the reader has just
          scrolled past three card grids. */}
      <div className="mt-12 grid overflow-hidden rounded-card-lg border-2 border-ink bg-surface max-md:divide-y-2 max-md:divide-ink md:grid-cols-3 md:divide-x-2 md:divide-ink">
        {audiences.map((audience) => (
          <article key={audience.title} className="flex flex-col gap-3 p-5 sm:p-7">
            <audience.icon aria-hidden="true" className="size-6 text-ink" />
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
