"use client";

import { Check, Copy, HeartHandshake, Mail } from "lucide-react";
import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/section";
import { useEmailSupportModal } from "@/components/email-support-modal";

/*
  Founders' Note Section
  Opens /about, directly above "Trust", so the accountability claim (real names,
  real inboxes) lands just before the page explains how the numbers are produced.
*/

interface Founder {
  name: string;
  role: string;
  avatarInitials: string;
  avatarBg: string;
  email: string;
}

const founders: Founder[] = [
  {
    name: "Parth Bargoojar",
    role: "Co-Founder",
    avatarInitials: "PB",
    avatarBg: "bg-primary/20 text-primary-text",
    email: "parthbargoojar.official@gmail.com",
  },
  {
    name: "Jaishnav",
    role: "Co-Founder",
    avatarInitials: "J",
    avatarBg: "bg-amber-100 text-amber-900",
    email: "jaishnav.official@gmail.com",
  },
];

export function FoundersNote() {
  const { openEmailModal } = useEmailSupportModal();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2500);
    }
  };

  return (
    <Section id="founders-note" className="border-b-2 border-ink bg-surface">
      <SectionHeading
        eyebrow="From the founders"
        title="We built this because we kept opening the wrong chapter."
        description="Both of us sat the same exams, read the same score reports, and still guessed at what to revise on Monday. That guess is what Learnometry replaces."
      />

      {/* Main manifesto letter card */}
      <div className="mt-10 rounded-card-lg border-2 border-ink bg-background p-6 sm:p-9 shadow-brutal-lg relative overflow-hidden">
        {/* Subtle decorative stamp */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink/10 pb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
            <HeartHandshake className="size-3.5 text-primary-deep" />
            What we promise you
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Signed by both of us
          </span>
        </div>

        {/* Letter body */}
        <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-relaxed text-slate-700">
          <p>
            The standard advice for a bad mock score is <em>&ldquo;study 14 hours&rdquo;</em> or{" "}
            <em>&ldquo;solve 2,000 more questions&rdquo;</em>. With a countdown running, that
            is the fastest route to burning out on chapters you had already cleared.
          </p>
          <p>
            So we built the thing we wanted at the time: a report that names the concept,
            puts it in an order, and then checks its own work. Three rules hold it up.
          </p>
          <ul className="grid gap-2.5 pt-1 pl-1">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-xs font-bold text-ink">
                1
              </span>
              <span>
                <strong>No guessed marks.</strong> Scoring runs on fixed server-side rules.
                A generative model never touches your result.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-xs font-bold text-ink">
                2
              </span>
              <span>
                <strong>Evidence before advice.</strong> Every diagnosis shows you the
                questions that produced it, so you can argue with it.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-xs font-bold text-ink">
                3
              </span>
              <span>
                <strong>Your time is capped.</strong> Daily sessions are sized to the hours
                you report, so the plan stays something you can finish.
              </span>
            </li>
          </ul>
        </div>

        {/* Founders Grid */}
        <div className="mt-9 border-t-2 border-ink/10 pt-7">
          <h3 className="mb-4 font-display text-base font-bold uppercase tracking-wider text-ink">
            Reply to any of us directly
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="flex min-w-0 flex-col justify-between rounded-card-sm border-2 border-ink bg-surface p-5 shadow-brutal-sm transition-transform duration-150 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-ink font-display text-sm font-bold ${founder.avatarBg}`}
                  >
                    {founder.avatarInitials}
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink leading-tight">
                      {founder.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Direct Founder Email Box */}
                <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between gap-2 touch:min-h-11">
                  <a
                    href={`mailto:${founder.email}?subject=${encodeURIComponent("Message for " + founder.name + " | Learnometry")}`}
                    className="min-w-0 truncate font-mono text-[11px] font-bold text-primary-text hover:underline touch:py-3.5"
                    title={`Email ${founder.name}`}
                  >
                    {founder.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(founder.email)}
                    className="shrink-0 rounded p-1 text-slate-600 transition-colors hover:bg-slate-200 hover:text-ink cursor-pointer touch:flex touch:size-11 touch:items-center touch:justify-center touch:-mr-2"
                    aria-label={`Copy email for ${founder.name}`}
                  >
                    {copiedEmail === founder.email ? (
                      <Check className="size-3.5 text-success-text stroke-[3]" />
                    ) : (
                      <Copy className="size-3.5" />
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Direct founder contact strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-card-sm border-2 border-ink bg-primary/10 p-4 shadow-brutal-sm">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-surface text-ink">
              <Mail className="size-4 text-primary-deep" />
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-700">
              Ask us anything before you sign up.
              <br className="hidden sm:inline" />
              {" "}Both of us read and answer these ourselves.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openEmailModal("founder")}
            className="cursor-pointer shrink-0 inline-flex items-center justify-center gap-1.5 rounded-btn border-2 border-ink bg-surface px-4 py-2 text-xs sm:text-sm font-bold text-ink shadow-brutal-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-0.5 active:shadow-none touch:min-h-11 max-sm:w-full"
          >
            <Mail className="size-3.5" />
            Email the founders
          </button>
        </div>
      </div>
    </Section>
  );
}

