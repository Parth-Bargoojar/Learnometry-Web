"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 30);
      return () => clearTimeout(timer);
    }

    /*
      Arriving on a route with a hash (e.g. /#faq from the footer of /pricing): the
      target only exists once this route has rendered, which is after the browser has
      already given up on the fragment. Scroll to it ourselves.
    */
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;

    const timer = setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
