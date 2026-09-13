import { Compass, Hourglass, Wallet, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const audiences: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Compass,
    title: "You know your score, not your next move.",
    body: "You finish a mock test, read the analytics, and still open your books wondering where to start. You need a sequence, not another dashboard.",
  },
  {
    icon: Wallet,
    title: "You can't afford another wasted month.",
    body: "Revision time spent on the wrong chapter is the most expensive mistake in exam prep. Fixing the right concept first is what protects the months you have left.",
  },
  {
    icon: Hourglass,
    title: "You want the most out of every study hour.",
    body: "You already study hard. The question is allocation — which concept returns the most marks per hour, and in what order to take them.",
  },
];

export function WhoItsFor() {
  return (
    <Section className="border-b-2 border-ink bg-background">
      <SectionHeading
        eyebrow="Who it's for"
        title="Built for students who are already working hard."
        description="Learnometry doesn't add more to study. It decides what to study first."
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
