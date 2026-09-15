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
    question: "Is the first diagnostic really free?",
    answer:
      "Yes. Every student gets 30 free credits a month at launch. That covers a full diagnostic, your root-cause report and your first study plan, with no card added.",
  },
  {
    question: "Does this replace my coaching classes or books?",
    answer:
      "No. Learnometry tells you which concepts from the material you already have to study first, so your revision hours stop going to topics you have already cleared.",
  },
  {
    question: "Are my marks or diagnoses guessed by AI?",
    answer:
      "No. Scoring, question checking and prerequisite calculations run on deterministic server-side code. Generative models are barred from producing marks or performance claims. Where there is too little evidence to call a concept weak, your report says “Insufficient evidence” instead of guessing.",
  },
  {
    question: "How do I know a weak concept actually improved?",
    answer:
      "You take a parallel retest on fresh questions covering the same concept. The status flips to “Gap Closed” only when that retest confirms it, so finishing a video or a set of notes does not count as mastery.",
  },
  {
    question: "What happens if I miss a day or coaching eats my week?",
    answer:
      "Your plan re-prioritises instead of piling up a backlog. It is built around the daily study hours you report, so a lost day moves the lowest-yield task rather than adding to tomorrow.",
  },
  {
    question: "Which exams, subjects and boards are covered?",
    answer:
      "CBSE Class 11 and 12 boards, JEE Main and Advanced, and NEET. Questions and concept trees are mapped to the CBSE, NTA and NMC syllabi, with high-weightage chapters first.",
  },
  {
    question: "Can a parent or guardian see the reports?",
    answer:
      "Yes. Under India's DPDP Act 2023, a parent or guardian can hold the account for a student under 18, review diagnostic reports and check score movement. No third-party ads, no invasive tracking.",
  },
];
