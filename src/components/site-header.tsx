"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { useWaitlistModal } from "@/components/waitlist-modal";

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "What you get", href: "/#what-you-get" },
  { label: "Founders' note", href: "/#founders-note" },
  { label: "Pricing", href: "/#pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { openWaitlistModal } = useWaitlistModal();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") || href.startsWith("/#")) {
      const id = href.replace(/^\/?#/, "");
      const elem = document.getElementById(id);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
        setOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface/95 backdrop-blur-md">
      <Container>
        <div className="flex h-18 sm:h-20 items-center justify-between gap-4 sm:gap-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-sm transition-opacity duration-150 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch:min-h-11"
            aria-label="Learnometry home"
          >
            <Image
              src="/primary-logo.png"
              alt="Learnometry"
              width={611}
              height={133}
              priority
              /* Rendered no wider than ~220px, so without `sizes` Next serves the
                 1920px candidate to phones for no visible gain. */
              sizes="220px"
              className="h-9 w-auto sm:h-11 md:h-12 object-contain"
            />
          </Link>

          {/* Modern Pill Capsule Navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-ink/15 bg-slate-100/90 p-1 shadow-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="inline-flex items-center rounded-full border border-transparent px-3.5 py-1.5 text-[14px] font-semibold text-slate-600 transition-all duration-150 hover:border-ink hover:bg-surface hover:text-ink hover:shadow-brutal-sm active:translate-y-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openWaitlistModal}
              className={`${buttonClasses("primary", "md")} px-3.5 sm:px-5`}
            >
              Join Waitlist
            </button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-11 items-center justify-center rounded-btn border-2 border-ink bg-surface text-ink transition-colors duration-150 hover:bg-slate-100 lg:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/*
        Kept mounted and animated open rather than swapped in, so the panel has
        something to transition from. Same idiom as the FAQ accordion: the row
        track carries the height animation, and `invisible` (visibility:hidden,
        which is inherited and cancels focusability) keeps the collapsed links
        out of the tab order and away from screen readers — a zero-height panel
        alone is still focusable and still read aloud.
      */}
      <div
        id="mobile-nav"
        className={`grid overflow-hidden border-t border-border-subtle bg-surface transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] border-t-0 opacity-0"
        }`}
      >
        <div className="min-h-0">
          <Container>
            <nav aria-label="Mobile" className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex min-h-11 items-center rounded-btn px-3 text-base font-medium text-ink transition-colors duration-150 hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openWaitlistModal();
                }}
                className={`${buttonClasses("primary", "md")} w-full mt-2`}
              >
                Join Waitlist
              </button>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
