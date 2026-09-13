"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/*
  Distinct from <ScrollToTop />, which silently restores scroll position on route
  change. This is the visible control, for the ten-section home page.
*/

/* Roughly one viewport of scrolling — far enough that "back to top" is a real
   saving, and the button never appears over the hero. */
const REVEAL_AT = 600;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setVisible(window.scrollY > REVEAL_AT);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const handleClick = () => {
    /* No `behavior` — this inherits `scroll-behavior` from <html>, which the
       prefers-reduced-motion block in globals.css already switches to `auto`. */
    window.scrollTo({ top: 0, left: 0 });

    /*
      The button hides itself once we reach the top, which would drop keyboard
      focus to <body>. Hand focus to the skip link instead: it is the first
      focusable element, so Tab continues from the top of the document — which
      is exactly where the user just asked to be.
    */
    const mainElement = document.querySelector<HTMLElement>("main");
    mainElement?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      /* Kept mounted so the transition can run, but taken out of the tab order
         and hidden from assistive tech while it is invisible. */
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
      title="Back to top"
      className={`no-print fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-btn border-2 border-ink bg-surface text-ink shadow-brutal-sm transition-[opacity,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-brutal active:translate-y-0.5 active:shadow-none sm:bottom-8 sm:right-8 ${
        visible
          ? "opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" className="size-5" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
