"use client";

import Image from "next/image";
import Link from "next/link";
import { FileLock, ShieldCheck, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/section";
import { useWaitlistModal } from "@/components/waitlist-modal";
import { useEmailSupportModal } from "@/components/email-support-modal";
import { INSTAGRAM_URL, OFFICIAL_EMAIL } from "@/lib/constants";
import { LEGAL_ENTITY } from "@/lib/legal";
import { InstagramIcon } from "@/components/ui/icons";

const SUPPORT_EMAIL = OFFICIAL_EMAIL;

/* Folded in from its own strip: too short to justify a screen, and it is trust
   and legal content, which is what the footer is for. */
const assurances = [
  { icon: ShieldCheck, label: "DPDP Act 2023 Aligned" },
  { icon: UserCheck, label: "Guardian Consent (Under 18)" },
  { icon: FileLock, label: "Assessment Data Never Sold" },
];

const columns = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "What you get", href: "/#what-you-get" },
      { label: "Founders' note", href: "/#founders-note" },
      { label: "Pricing & plans", href: "/pricing" },
      { label: "Questions & FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Legal & Trust",
    links: [
      { label: "Terms of service", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Guardian consent", href: "/guardian-consent" },
      { label: "Refund & cancellation", href: "/refunds" },
      { label: "Cookie policy", href: "/cookies" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Email support", href: "#email-support" },
      { label: "Contact & help desk", href: "/contact" },
      { label: "Join waitlist", href: "#waitlist" },
      { label: "Instagram (@learnometry)", href: INSTAGRAM_URL },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { openWaitlistModal } = useWaitlistModal();
  const { openEmailModal } = useEmailSupportModal();

  return (
    <footer className="snap-section-end bg-ink text-slate-300">
      <Container>
        <ul className="flex flex-col items-center justify-center gap-3 border-b border-white/15 py-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-2">
          {assurances.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-sm font-medium text-slate-300"
            >
              <item.icon
                aria-hidden="true"
                className="size-4 shrink-0 text-primary"
              />
              {item.label}
            </li>
          ))}
        </ul>

        <div className="grid gap-10 py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-4 items-start">
            <Link
              href="/"
              className="inline-flex items-center rounded-sm transition-opacity duration-150 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch:min-h-11"
              aria-label="Learnometry home"
            >
              <Image
                src="/primary-logo-dark.png"
                alt="Learnometry"
                width={611}
                height={133}
                sizes="240px"
                className="h-10 sm:h-12 lg:h-[52px] w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-[15px] leading-relaxed text-slate-400">
              Find the concepts costing you marks, then fix them in the order that
              returns the most.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-btn border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-primary hover:bg-primary/20 hover:text-white touch:min-h-11"
              aria-label="Follow Learnometry on Instagram"
            >
              <InstagramIcon className="size-4 text-primary" />
              <span>Follow on Instagram (@learnometry)</span>
            </a>
          </div>

          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                {/* Not a heading: this is the label of a <nav> that already carries
                    aria-label={column.heading}. As an <h2> it injected three extra
                    entries into the heading outline of every single page, which is
                    what both screen readers and AI extractors use to segment content. */}
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                  {column.heading}
                </p>
                <ul className="mt-3 flex flex-col gap-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href === "#waitlist" || link.label === "Join waitlist" ? (
                        <button
                          type="button"
                          onClick={openWaitlistModal}
                          className="cursor-pointer text-left inline-block py-1.5 text-[15px] text-slate-400 transition-colors duration-150 hover:text-primary touch:inline-flex touch:min-h-11 touch:items-center"
                        >
                          {link.label}
                        </button>
                      ) : link.href === "#email-support" || link.label === "Email support" ? (
                        <button
                          type="button"
                          onClick={() => openEmailModal("general")}
                          className="cursor-pointer text-left inline-block py-1.5 text-[15px] text-slate-400 transition-colors duration-150 hover:text-primary touch:inline-flex touch:min-h-11 touch:items-center"
                        >
                          {link.label}
                        </button>
                      ) : link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block py-1.5 text-[15px] text-slate-400 transition-colors duration-150 hover:text-primary touch:inline-flex touch:min-h-11 touch:items-center"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          /* Hash targets must keep Next's scroll behaviour or the
                             anchor is ignored when arriving from another route. */
                          scroll={link.href.includes("#")}
                          className="inline-block py-1.5 text-[15px] text-slate-400 transition-colors duration-150 hover:text-primary touch:inline-flex touch:min-h-11 touch:items-center"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Displayed on every page: exam boards are named throughout the site, and
            the Consumer Protection (E-Commerce) Rules expect the operating entity to
            be identifiable from anywhere on it. */}
        <p className="border-t border-white/15 py-4 text-xs leading-relaxed text-slate-400">
          Learnometry is an independent study tool. It is{" "}
          <strong className="font-semibold text-slate-300">
            not affiliated with, endorsed by or connected to
          </strong>{" "}
          the Central Board of Secondary Education (CBSE), the National Testing Agency
          (NTA), the National Medical Commission (NMC) or any examination authority,
          board or coaching institute. CBSE, JEE and NEET are used descriptively to
          identify the syllabus and exam patterns our content is modelled on, and remain
          the property of their respective owners. Learnometry does not guarantee any
          particular mark, percentile, rank or admission.
        </p>

        <div className="flex flex-col gap-4 border-t border-white/15 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {year} {LEGAL_ENTITY.legalName || "Learnometry"}. Built for CBSE, JEE &amp;
            NEET students.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 touch:gap-x-5">
            <Link
              href="/terms"
              scroll={false}
              className="inline-block py-1.5 text-sm text-slate-400 transition-colors duration-150 hover:text-primary touch:inline-flex touch:min-h-11 touch:items-center"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              scroll={false}
              className="inline-block py-1.5 text-sm text-slate-400 transition-colors duration-150 hover:text-primary touch:inline-flex touch:min-h-11 touch:items-center"
            >
              Privacy
            </Link>
            <Link
              href="/guardian-consent"
              scroll={false}
              className="inline-block py-1.5 text-sm text-slate-400 transition-colors duration-150 hover:text-primary touch:inline-flex touch:min-h-11 touch:items-center"
            >
              Guardian Consent
            </Link>
            <Link
              href="/refunds"
              scroll={false}
              className="inline-block py-1.5 text-sm text-slate-400 transition-colors duration-150 hover:text-primary touch:inline-flex touch:min-h-11 touch:items-center"
            >
              Refunds
            </Link>
            <Link
              href="/cookies"
              scroll={false}
              className="inline-block py-1.5 text-sm text-slate-400 transition-colors duration-150 hover:text-primary touch:inline-flex touch:min-h-11 touch:items-center"
            >
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
