import type { Metadata } from "next";
import { ContactView } from "./contact-view";

export const metadata: Metadata = {
  title: "Contact & Email Support — Learnometry",
  description:
    "Get in touch with the Learnometry team for diagnostic assessment questions, parent inquiries, refunds, and student support at learnometry.official@gmail.com.",
};

export default function ContactPage() {
  return <ContactView />;
}
