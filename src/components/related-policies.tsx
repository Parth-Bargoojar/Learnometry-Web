import Link from "next/link";
import { ArrowRight } from "lucide-react";

/*
  The legal pages previously only linked back to home, leaving them as crawl dead-ends.
  This block cross-links each policy to its siblings so every one of them is reachable
  in a single hop from any other — and gives readers the document they actually wanted.
*/
const POLICIES = [
  {
    path: "/terms",
    label: "Terms of Service",
    blurb: "Credits, eligibility and platform rules.",
  },
  {
    path: "/privacy",
    label: "Privacy Policy",
    blurb: "What we store and how it is protected.",
  },
  {
    path: "/guardian-consent",
    label: "Guardian Consent",
    blurb: "How consent works for students under 18.",
  },
  {
    path: "/refunds",
    label: "Refund & Cancellation",
    blurb: "The 7-day window and how to cancel.",
  },
  {
    path: "/cookies",
    label: "Cookie Policy",
    blurb: "What this site stores on your device: currently nothing.",
  },
  {
    path: "/pricing",
    label: "Pricing & Plans",
    blurb: "Monthly plans and daily credit allowances.",
  },
  {
    path: "/contact",
    label: "Contact & Support",
    blurb: "Reach the team for anything unresolved.",
  },
];

export function RelatedPolicies({ currentPath }: { currentPath: string }) {
  const related = POLICIES.filter((policy) => policy.path !== currentPath);

  return (
    <nav
      aria-label="Related pages"
      className="mt-8 rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal sm:p-8"
    >
      <h2 className="font-display text-xl text-ink">Related pages</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {related.map((policy) => (
          <li key={policy.path}>
            <Link
              href={policy.path}
              className="group flex items-start gap-3 rounded-card-sm border-2 border-ink/15 bg-slate-50 p-3.5 transition-colors hover:border-ink hover:bg-primary/10"
            >
              <ArrowRight
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-primary-deep transition-transform group-hover:translate-x-0.5"
              />
              <span>
                <span className="block text-[15px] font-semibold text-ink">
                  {policy.label}
                </span>
                <span className="block text-[13px] leading-snug text-slate-600">
                  {policy.blurb}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
