"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/*
  These sections used to live on the home page and were linked as /#<id> from posts,
  reels and bios. They now have their own pages. A hash never reaches the server, so
  the redirect has to happen here rather than in next.config redirects.
  /#how-it-works and /#pricing still exist on the home page and need no entry.
*/
const MOVED_SECTIONS: Record<string, string> = {
  "what-you-get": "/how-it-works#what-you-get",
  "founders-note": "/about",
  faq: "/faq",
};

export function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = MOVED_SECTIONS[id];
    if (target) router.replace(target);
  }, [router]);

  return null;
}
