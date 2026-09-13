import type { LucideIcon } from "lucide-react";

/*
  §11 / §26 — status is never carried by color alone. Every badge renders an
  icon and a text label alongside its tone.
*/
type Tone = "critical" | "success" | "neutral";

const tones: Record<Tone, string> = {
  critical: "bg-danger/10 text-danger border-danger/35",
  success: "bg-success/10 text-success-text border-success/35",
  neutral: "bg-slate-100 text-slate-600 border-border-subtle",
};

export function StatusBadge({
  tone = "neutral",
  icon: Icon,
  children,
}: {
  tone?: Tone;
  icon?: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]}`}
    >
      {Icon ? <Icon aria-hidden="true" className="size-3.5" /> : null}
      {children}
    </span>
  );
}

export function Kicker({
  icon: Icon,
  children,
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-surface px-4 py-1.5 text-[13px] font-semibold text-ink shadow-brutal-sm">
      {Icon ? (
        <Icon aria-hidden="true" className="size-4 text-primary-text" />
      ) : null}
      {children}
    </span>
  );
}
