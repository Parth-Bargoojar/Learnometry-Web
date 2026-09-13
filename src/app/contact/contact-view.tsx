"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Clock,
  Copy,
  ExternalLink,
  HelpCircle,
  Mail,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/section";
import { buttonClasses } from "@/components/ui/button";
import { useWaitlistModal } from "@/components/waitlist-modal";
import {
  INDIVIDUAL_FOUNDER_EMAILS,
  INSTAGRAM_URL,
  OFFICIAL_EMAIL,
  SUPPORT_TOPICS,
  buildSupportMailLinks,
  type SupportTopicKey,
} from "@/lib/constants";
import { InstagramIcon } from "@/components/ui/icons";

const supportFaqs = [
  {
    q: "How fast will the Learnometry team respond?",
    a: "We read every email ourselves and aim to reply within 24 business hours on working days. Complaints raised with our Grievance Officer are acknowledged within 48 hours and we aim to resolve them within one month.",
  },
  {
    q: "Can parents reach out directly regarding student progress?",
    a: "Yes! Parents and guardians are welcome to contact us. If you have questions about your child's data privacy, guardian consent, or how to interpret their root-cause diagnostic report, write to us with 'Parent / Guardian' as the subject.",
  },
  {
    q: "How do I request a refund under the 7-Day Guarantee?",
    a: "Email us with your account email and transaction ID within 7 days of purchase, provided you have used under 20% of your allowance. We acknowledge billing emails within 48 hours and process approved refunds to the original payment method within 5-7 business days.",
  },
  {
    q: "Can I report a question error or ask for specific chapters?",
    a: "Absolutely. If you spot an issue in a diagnostic question or want to request support for a specific CBSE, JEE, or NEET topic tree, shoot us an email with the question ID or chapter name.",
  },
];

export function ContactView() {
  const [selectedTopic, setSelectedTopic] = useState<SupportTopicKey>("general");
  const [copied, setCopied] = useState(false);
  const [copiedFounderEmail, setCopiedFounderEmail] = useState<string | null>(null);
  const { openWaitlistModal } = useWaitlistModal();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = OFFICIAL_EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopyFounderEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedFounderEmail(email);
      setTimeout(() => setCopiedFounderEmail(null), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedFounderEmail(email);
      setTimeout(() => setCopiedFounderEmail(null), 2500);
    }
  };

  const { topic, mailtoUri, gmailWebUri } = buildSupportMailLinks(selectedTopic);

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-background py-10 sm:py-16">
        <Container className="max-w-4xl">
          {/* Back to home */}
          <Link
            href="/"
            scroll={false}
            className="inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-primary-text transition-colors hover:text-ink touch:min-h-11"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          {/* Hero Header */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-brutal-sm">
              <Sparkles className="size-3.5 text-primary-deep" />
              Direct Support &amp; Help Desk
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-5xl text-ink">
              We&apos;re here to support your prep.
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
              Have questions about your diagnostic, study plans, accounts, or privacy? Every email is read and answered by our core team.
            </p>
          </div>

          {/* Main Interactive Contact Hub Card */}
          <div className="mt-10 rounded-card-lg border-2 border-ink bg-surface p-6 sm:p-10 shadow-brutal-lg">
            {/* Direct Email Address Bar */}
            <div className="rounded-card border-2 border-ink bg-slate-50 p-4 sm:p-5 shadow-brutal-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-card-sm border-2 border-ink bg-primary text-ink shadow-brutal-xs">
                    <Mail className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Official Learnometry Email
                    </h2>
                    <div className="break-all font-mono text-sm sm:text-lg font-bold text-ink">
                      {OFFICIAL_EMAIL}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center justify-center gap-2 rounded-btn border-2 border-ink px-4 py-2.5 text-sm font-bold shadow-brutal-sm transition-all active:translate-y-0.5 active:shadow-none cursor-pointer ${
                    copied
                      ? "bg-success-text text-white"
                      : "bg-surface text-ink hover:bg-slate-100"
                  }`}
                  aria-label="Copy official email address"
                >
                  {copied ? (
                    <>
                      <Check aria-hidden="true" className="size-4 stroke-[3]" />
                      <span role="status">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Founders Email Strip */}
            <div className="mt-6 rounded-card border-2 border-ink bg-primary/10 p-4 shadow-brutal-sm">
              <div className="flex items-center gap-2 mb-3">
                <UserCheck className="size-4 text-primary-deep" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-ink">
                  Direct Founder Contact Inboxes
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {INDIVIDUAL_FOUNDER_EMAILS.map((f) => (
                  <div
                    key={f.email}
                    className="flex flex-col justify-between rounded-btn border-2 border-ink bg-surface p-3 text-xs shadow-brutal-xs"
                  >
                    <div>
                      <div className="font-bold text-ink">{f.name}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{f.role}</div>
                      <div className="mt-1 break-all font-mono text-[11px] text-primary-text font-bold">
                        {f.email}
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center gap-2">
                      <a
                        href={`mailto:${f.email}?subject=${encodeURIComponent("Message for " + f.name + " — Learnometry")}`}
                        className="flex-1 rounded border border-ink/20 bg-slate-100 py-1 text-center font-bold text-ink hover:bg-slate-200 transition-colors touch:flex touch:min-h-11 touch:items-center touch:justify-center"
                      >
                        Email
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopyFounderEmail(f.email)}
                        className="rounded border border-ink/20 bg-slate-100 p-1 font-bold text-ink hover:bg-slate-200 transition-colors cursor-pointer touch:flex touch:size-11 touch:shrink-0 touch:items-center touch:justify-center"
                        aria-label={`Copy ${f.name}'s email`}
                      >
                        {copiedFounderEmail === f.email ? (
                          <Check className="size-3.5 text-success-text stroke-[3]" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram Social Strip */}
            <div className="mt-4 rounded-card border-2 border-ink bg-gradient-to-r from-primary/20 via-primary/5 to-slate-50 p-4 shadow-brutal-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-btn border-2 border-ink bg-surface text-ink shadow-brutal-xs">
                  <InstagramIcon className="size-5 text-primary-deep" />
                </span>
                <div>
                  <div className="text-xs font-bold text-ink">
                    Follow Learnometry on Instagram
                  </div>
                  <div className="text-xs text-slate-600">
                    Exam strategy tips, concept breakdowns, and community updates.
                  </div>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-btn border-2 border-ink bg-surface px-4 py-2 touch:min-h-11 max-sm:w-full text-xs font-bold text-ink shadow-brutal-xs transition-all hover:bg-slate-100 active:translate-y-0.5 active:shadow-none"
              >
                <span>Check Instagram (@learnometry)</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>

            {/* Topic Selection */}
            <div className="mt-8">
              {/* A <label> with no form control labels nothing. These are toggle
                  buttons, so the group gets a heading and each button reports its
                  own pressed state. */}
              <h2
                id="contact-topic-label"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700"
              >
                1. Choose your reason for contacting:
              </h2>
              <div
                role="group"
                aria-labelledby="contact-topic-label"
                className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"
              >
                {(Object.keys(SUPPORT_TOPICS) as SupportTopicKey[]).map((key) => {
                  const t = SUPPORT_TOPICS[key];
                  const isSelected = selectedTopic === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedTopic(key)}
                      className={`flex flex-col items-start rounded-card border-2 p-3 text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-ink bg-primary/25 shadow-brutal-xs -translate-y-0.5"
                          : "border-ink/20 bg-slate-50 hover:border-ink hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {t.badge}
                      </span>
                      <span className="mt-1 text-sm font-bold text-ink">
                        {t.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 1-Click Launch Actions */}
            <div className="mt-8">
              <h2 className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Send email via your preferred method:
              </h2>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Gmail Web Option */}
                <a
                  href={gmailWebUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-card border-2 border-ink bg-surface p-4 text-left shadow-brutal-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-brutal hover:bg-primary/10 active:translate-y-0.5 active:shadow-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-slate-100 font-bold text-sm text-ink group-hover:bg-primary">
                      G
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-sm text-ink group-hover:text-primary-text">
                        <span>Open in Gmail Web</span>
                        <ExternalLink className="size-3.5 opacity-60" />
                      </div>
                      <div className="text-xs text-slate-500">
                        Opens a ready-to-send draft in your browser
                      </div>
                    </div>
                  </div>
                </a>

                {/* Default Mail App Option */}
                <a
                  href={mailtoUri}
                  className="group flex items-center justify-between rounded-card border-2 border-ink bg-surface p-4 text-left shadow-brutal-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-brutal hover:bg-primary/10 active:translate-y-0.5 active:shadow-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-slate-100 font-bold text-sm text-ink group-hover:bg-primary">
                      @
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-sm text-ink group-hover:text-primary-text">
                        <span>Open Default Mail App</span>
                        <Mail className="size-3.5 opacity-60" />
                      </div>
                      <div className="text-xs text-slate-500">
                        Opens Outlook, Apple Mail, or phone app
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Email Preview Snippet */}
            <div className="mt-6 rounded-card border border-ink/20 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Pre-configured Subject &amp; Starter Template
                </span>
                <span className="text-[11px] font-semibold text-primary-text">
                  {topic.label}
                </span>
              </div>
              <p className="mt-2 text-xs font-bold text-ink">
                Subject: <span className="font-medium text-slate-700">{topic.subject}</span>
              </p>
              <pre className="mt-2 whitespace-pre-wrap rounded-btn border border-ink/10 bg-white p-3 font-mono text-[12px] leading-relaxed text-slate-600">
                {topic.template}
              </pre>
            </div>

            {/* Response Commitments */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t-2 border-ink/10 pt-6 sm:grid-cols-3">
              <div className="flex items-start gap-2.5">
                <Clock className="size-5 text-primary-deep shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
                    Fast replies
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We aim to reply within 24 business hours on working days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <UserCheck className="size-5 text-primary-deep shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
                    Direct Core Team
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    A founder replies to you, not an automated bot.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="size-5 text-success shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
                    DPDP Aligned
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Your queries and data are held in strict confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-12 rounded-card-lg border-2 border-ink bg-surface p-6 sm:p-10 shadow-brutal">
            <div className="flex items-center gap-2">
              <HelpCircle className="size-5 text-primary-deep" />
              <h2 className="font-display text-2xl sm:text-3xl text-ink">
                Common Support Questions
              </h2>
            </div>
            <div className="mt-6 divide-y divide-border-subtle">
              {supportFaqs.map((faq) => (
                <div key={faq.q} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-base text-ink">{faq.q}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Refund Notice Strip */}
          <div className="mt-8 rounded-card border-2 border-ink bg-slate-50 p-5 shadow-brutal-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <RotateCcw className="size-6 text-primary-deep shrink-0" />
              <div>
                <h2 className="font-bold text-sm text-ink">
                  Billing or Refund Request?
                </h2>
                <p className="text-xs text-slate-600 mt-0.5">
                  You can request a refund within 7 days of your first payment, provided you have used under 20% of the allowance for the cycle.
                </p>
              </div>
            </div>
            <Link
              href="/refunds"
              className="inline-block py-1.5 text-xs font-bold text-primary-text underline hover:text-ink shrink-0 touch:inline-flex touch:min-h-11 touch:items-center"
            >
              Read Refund Policy →
            </Link>
          </div>

          {/* Bottom Waitlist CTA */}
          <div className="mt-12 rounded-card-lg border-2 border-ink bg-primary p-8 text-center text-ink shadow-brutal-lg">
            <h2 className="font-display text-2xl sm:text-3xl">
              Ready to find your weak concepts?
            </h2>
            <p className="mt-2 text-sm sm:text-base font-medium max-w-xl mx-auto">
              Join our free early access waitlist for CBSE, JEE and NEET preparation.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={openWaitlistModal}
                className={`${buttonClasses("secondary", "lg")} font-bold shadow-brutal cursor-pointer`}
              >
                Join Free Early Access Waitlist
              </button>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
