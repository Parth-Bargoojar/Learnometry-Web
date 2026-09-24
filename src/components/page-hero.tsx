import type { ReactNode } from "react";
import { Container } from "@/components/ui/section";

/*
  Opening band for the inner marketing pages (/how-it-works, /about, /faq).
  Those pages are assembled from home-page sections whose headings are <h2>, so
  this carries the page's single <h1> and keeps the outline h1 > h2 > h3.
*/
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="border-b-2 border-ink bg-primary/10 py-12 sm:py-16">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full border-2 border-ink bg-surface px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-brutal-sm">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl text-ink sm:text-5xl">{title}</h1>
          {description ? (
            <p className="text-lg leading-relaxed text-slate-600">{description}</p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
