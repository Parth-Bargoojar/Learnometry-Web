"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // If the URL has an anchor hash, browser handles scroll to target.
    // Otherwise, smoothly animate the slide back to the very top.
    if (!window.location.hash) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
