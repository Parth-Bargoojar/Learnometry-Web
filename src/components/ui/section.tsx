import type { ReactNode } from "react";

/*
  Sections flow naturally with the page — spacious padding gives each one
  room to breathe without pinning it to the viewport height.
*/
export const sectionShell =
  "snap-section flex flex-col justify-center py-11 sm:py-16 md:py-24";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${sectionShell} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/* §7.2 — one container width for the whole site: 1280px with responsive gutters. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center" ? "text-center mx-auto max-w-3xl items-center" : "max-w-3xl";

  return (
    <div className={`section-heading flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-text">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-display-lg text-ink">{title}</h2>
      {description ? (
        <p className="text-lg leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
