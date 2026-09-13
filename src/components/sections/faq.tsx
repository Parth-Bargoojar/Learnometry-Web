"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const faqs = [
  {
    question: "Does Learnometry replace my coaching classes or books?",
    answer:
      "No. Learnometry acts as your diagnostic copilot. It tells you which concepts from your coaching material to study first so you never waste hours revising topics you already know.",
  },
  {
    question: "Is the first diagnostic test really free?",
    answer:
      "Yes. Every student gets 30 free credits every month. You can take a complete diagnostic and generate your personalized study plan without adding a credit card.",
  },
  {
    question: "How does the diagnostic find the root cause of a mistake?",
    answer:
      "Our engine maps questions to prerequisite dependency trees. If you miss a quadratic equation question, it isolates whether you struggled with algebraic signs, formula recall, or arithmetic slips.",
  },
  {
    question: "How do I know if my weak concept actually improved?",
    answer:
      "After completing your recommended 35-minute study task, you take a targeted parallel retest. Your mastery status only flips to 'Gap Closed' once the retest proves you have mastered it.",
  },
];

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
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
    </Section>
  );
}
