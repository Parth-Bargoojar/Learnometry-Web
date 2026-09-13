export const OFFICIAL_EMAIL = "learnometry.official@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/learnometry";
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "8af42d45-faf6-4730-9ec2-97f9cf84e1c8";

export type SupportTopicKey =
  | "general"
  | "diagnostic"
  | "parent"
  | "billing"
  | "founder";

export interface SupportTopic {
  key: SupportTopicKey;
  label: string;
  badge: string;
  subject: string;
  template: string;
  description: string;
}

export const SUPPORT_TOPICS: Record<SupportTopicKey, SupportTopic> = {
  general: {
    key: "general",
    label: "General Question",
    badge: "Quick Inquiry",
    subject: "Learnometry Inquiry — General Question",
    template:
      "Hi Learnometry Team,\n\nI have a question regarding:\n\n[Please describe your question or feedback here]\n\nThanks!\nName: \nGrade / Target Exam (e.g., Class 11, JEE 2026): ",
    description: "Questions about our platform, features, or roadmap.",
  },
  diagnostic: {
    key: "diagnostic",
    label: "Diagnostic & Study Plan",
    badge: "Student Prep",
    subject: "Learnometry Help — Diagnostic Assessment & Study Plan",
    template:
      "Hi Learnometry Team,\n\nI took / want to take the diagnostic test and need help with:\n\n- My target exam (CBSE / JEE / NEET): \n- The chapter or topic: \n- What I need help with: \n\nThanks!\nName: ",
    description: "Guidance on how the root-cause diagnosis or retests work.",
  },
  parent: {
    key: "parent",
    label: "Parent / Guardian",
    badge: "Guardian Desk",
    subject: "Learnometry Inquiry — Parent / Guardian Question",
    template:
      "Hello Learnometry Team,\n\nI am a parent/guardian of a student preparing for [Class / Target Exam].\n\nI would like to inquire about:\n[Your question about child's progress, privacy, consent, or plans]\n\nBest regards,\nParent Name: \nContact Number (optional): ",
    description: "Questions about your child's data privacy, consent, or reports.",
  },
  billing: {
    key: "billing",
    label: "Billing & Refunds",
    badge: "Account Help",
    subject: "Learnometry Support — Billing & Refund Inquiry",
    template:
      "Hi Learnometry Team,\n\nI have a question about billing or refunds for my account.\n\n- Account Email: \n- Plan / Transaction Details: \n- Request Details: \n\nThank you,\nName: ",
    description: "Questions regarding monthly plans, credit top-ups, or 7-day refund.",
  },
  founder: {
    key: "founder",
    label: "Message the Founders",
    badge: "Founder Direct",
    subject: "Learnometry Founder Note — Feedback & Student Journey",
    template:
      "Hi Founders of Learnometry,\n\nI wanted to share some thoughts with you directly about:\n\n[Share your prep challenges, feedback on the product, or suggestions]\n\nCheers,\nName: \nCity: ",
    description: "Direct channel to the creators of Learnometry.",
  },
};

/**
 * Builds direct URLs to open compose windows with pre-populated parameters.
 */
export function buildSupportMailLinks(topicKey: SupportTopicKey = "general") {
  const topic = SUPPORT_TOPICS[topicKey] || SUPPORT_TOPICS.general;
  const encodedSubject = encodeURIComponent(topic.subject);
  const encodedBody = encodeURIComponent(topic.template);

  // Standard mailto: URI
  const mailtoUri = `mailto:${OFFICIAL_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;

  // Direct Gmail Web compose URL (opens compose modal inside browser Gmail)
  const gmailWebUri = `https://mail.google.com/mail/?view=cm&fs=1&to=${OFFICIAL_EMAIL}&su=${encodedSubject}&body=${encodedBody}`;

  return {
    email: OFFICIAL_EMAIL,
    topic,
    mailtoUri,
    gmailWebUri,
  };
}
