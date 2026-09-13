/**
 * Shared FAQ content.
 *
 * Both the rendered accordion and the FAQPage JSON-LD read from this list. Google
 * requires FAQ structured data to match content that is visible on the page, so this
 * must stay the single source — never duplicate the copy into the schema builder.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQS: FaqItem[] = [
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
