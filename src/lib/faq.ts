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
    question: "Is Learnometry an AI chatbot or a generic question generator?",
    answer:
      "No. Learnometry is an intelligent diagnostic decision engine, not a conversational chatbot or infinite question spammer. We do not generate random questions on the fly. Instead, we map your assessment answers against structured prerequisite trees to isolate your exact error patterns, tell you the next best study action, and verify improvement through retests.",
  },
  {
    question: "Are my test marks or diagnoses guessed by generative AI?",
    answer:
      "Never. All scoring, question verification, and prerequisite dependency calculations are 100% deterministic code logic. AI models are strictly barred from fabricating marks, calculating scores, or hallucinating student performance. If there is not enough evidence to confirm a diagnosis, our system explicitly displays 'Insufficient evidence' rather than guessing.",
  },
  {
    question: "Is the first diagnostic test really free?",
    answer:
      "Yes. Every student receives 30 free credits every month upon launch. You can take a complete diagnostic test, receive your root-cause analysis, and generate your personalized study plan without adding a credit card.",
  },
  {
    question: "How does the diagnostic find the root cause of a mistake?",
    answer:
      "Our engine maps questions to prerequisite dependency trees. If you miss a quadratic equation question, it isolates whether you struggled with algebraic signs, formula recall, or arithmetic slips.",
  },
  {
    question: "Why doesn't Learnometry mark a concept 'Mastered' as soon as I finish reading notes?",
    answer:
      "Because completion alone does not equal mastery. Merely reading notes or watching a video creates the illusion of understanding. Learnometry requires a targeted, parallel retest on fresh questions testing the exact same concept before confirming that your gap is closed.",
  },
  {
    question: "What happens if I miss a day or have a heavy coaching schedule?",
    answer:
      "Your plan adapts rather than piling up unmanageable backlog. Learnometry is calibrated around your real, reported daily available study hours. If coaching tests or school assignments take up your time, the engine re-prioritizes your schedule so your limited revision time is always spent on the highest-yield concept gaps.",
  },
  {
    question: "How do I know if my weak concept actually improved?",
    answer:
      "After completing your recommended 35-minute study task, you take a targeted parallel retest. Your mastery status only flips to 'Gap Closed' once the retest shows you can answer that concept reliably — and where there is too little evidence either way, we say so instead of guessing.",
  },
  {
    question: "Which exams, subjects, and boards are supported?",
    answer:
      "Learnometry is built specifically for Indian students preparing for CBSE Class 11 & 12 Board exams, JEE (Main & Advanced), and NEET. Our questions and concept trees are calibrated to official NTA, NMC, and CBSE syllabi, focusing on high-weightage chapters where prerequisite gaps most heavily drag down scores.",
  },
  {
    question: "Can parents or guardians view student diagnostic reports?",
    answer:
      "Yes. In compliance with India's DPDP Act 2023, parents and guardians can monitor accounts for students under 18, review verified diagnostic reports, and directly verify score improvement without invasive tracking or third-party ads.",
  },
];

