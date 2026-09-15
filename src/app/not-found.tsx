import Link from "next/link";
import { Compass, HelpCircle, IndianRupee, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

/*
  Root not-found also catches every unmatched URL for the whole app, so this is
  the page a mistyped link lands on. No `metadata` export: that is only honoured
  by `global-not-found`, and Next injects `noindex` on 404 responses anyway.
*/

const destinations = [
  {
    href: "/#how-it-works",
    icon: Compass,
    title: "How it works",
    description: "The diagnose → plan → retest loop, in three steps.",
  },
  {
    href: "/pricing",
    icon: IndianRupee,
    title: "Pricing",
    description: "What the monthly credit plans include.",
  },
  {
    href: "/#faq",
    icon: HelpCircle,
    title: "FAQ",
    description: "The questions students actually ask us.",
  },
  {
    href: "/contact",
    icon: Mail,
    title: "Contact",
    description: "Reach a founder directly. We answer.",
  },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-background py-14 sm:py-20">
        <Container className="max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-brutal-sm">
              Error 404
            </span>

            {/* Decorative: "404" on its own is a useless heading to land on in a
                screen reader's heading list, and the badge above already says it. */}
            <p
              aria-hidden="true"
              className="mt-5 font-display text-[clamp(4rem,18vw,8rem)] leading-none tracking-tight text-ink"
            >
              404
            </p>

            <h1 className="mt-4 max-w-xl font-display text-display-lg text-ink">
              This page isn&apos;t in the syllabus.
            </h1>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate-600">
              The link is broken, the page moved, or the address has a typo in
              it. Nothing is wrong with your account. We don&apos;t have
              accounts yet.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/" size="lg">
                Back to home
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Report a broken link
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-center text-xs font-bold uppercase tracking-[0.18em] text-primary-text">
              Or pick up where you meant to
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {destinations.map(({ href, icon: Icon, title, description }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex h-full items-start gap-4 rounded-card-lg border-2 border-ink bg-surface p-5 shadow-brutal-sm transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-0.5 active:shadow-none"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-btn border-2 border-ink bg-primary/20 text-primary-text">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-[17px] font-semibold text-ink">
                        {title}
                      </span>
                      <span className="text-[15px] leading-relaxed text-slate-600">
                        {description}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
