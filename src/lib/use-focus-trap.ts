"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

/**
 * Keeps keyboard focus inside an open dialog and hands it back when the dialog closes.
 *
 * WCAG 2.2 requires that opening a modal moves focus into it (2.4.3 Focus Order), that
 * Tab cannot wander behind the overlay (2.1.2 No Keyboard Trap, read the other way
 * round: the *page* behind must not be reachable while a modal is open), and that focus
 * returns to whatever opened the dialog once it closes.
 *
 * The container element must be focusable as a fallback — give it `tabIndex={-1}` — for
 * the case where the dialog contains nothing focusable at all.
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  isOpen: boolean
) {
  useEffect(() => {
    if (!isOpen) return;

    const container = containerRef.current;
    if (!container) return;

    /* Captured before focus moves, so it can be restored on close. */
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const focusableItems = () =>
      Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter(
        (element) =>
          /* Skip anything visually hidden — offsetParent is null for display:none. */
          element.offsetParent !== null || element === document.activeElement
      );

    (focusableItems()[0] ?? container).focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const items = focusableItems();
      if (items.length === 0) {
        event.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === container)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    container.addEventListener("keydown", onKeyDown);
    return () => {
      container.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [containerRef, isOpen]);
}
