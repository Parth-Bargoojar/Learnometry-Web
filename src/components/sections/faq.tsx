"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { HOME_FAQS } from "@/lib/faq";

const faqs = HOME_FAQS;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="border-b-2 border-ink bg-surface">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions students actually ask."
        align="center"
      />

      <div className="mt-8 mx-auto flex w-full max-w-3xl flex-col gap-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="rounded-card-lg border-2 border-ink bg-surface shadow-brutal-sm"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[17px] font-semibold text-ink sm:px-6"
                >
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-5 shrink-0 text-primary-text transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                /* `invisible` (visibility:hidden), not just zero height: a
                   zero-height panel is still read aloud and still focusable. */
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "invisible grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate-600 sm:px-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* The FAQ was a dead end — send readers (and crawlers) to the pages that answer
          the follow-up questions instead. */}
      <p className="mt-7 text-center text-[15px] text-slate-600">
        Still deciding?{" "}
        <Link
          href="/pricing"
          className="font-semibold text-primary-text underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-ink"
        >
          Compare the monthly plans
        </Link>
        , read our{" "}
        <Link
          href="/refunds"
          className="font-semibold text-primary-text underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-ink"
        >
          refund policy
        </Link>
        , or{" "}
        <Link
          href="/contact"
          className="font-semibold text-primary-text underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-ink"
        >
          ask us directly
        </Link>
        . Parents can review the{" "}
        <Link
          href="/guardian-consent"
          className="font-semibold text-primary-text underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-ink"
        >
          guardian consent policy
        </Link>
        .
      </p>
    </Section>
  );
}
