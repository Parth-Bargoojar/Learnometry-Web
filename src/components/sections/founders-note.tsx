"use client";

import { HeartHandshake, Mail, Quote, Sparkles, UserCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { useEmailSupportModal } from "@/components/email-support-modal";

/*
  Founders' Note Section
  Placed strategically between "Who It's For" and "Trust (How we avoid guessing)".
  It grounds the mathematical diagnosis in human empathy and founder accountability.
*/

interface Founder {
  name: string;
  role: string;
  badge: string;
  avatarInitials: string;
  avatarBg: string;
  quote: string;
  linkedinUrl?: string;
}

const founders: Founder[] = [
  {
    name: "Parth Br.",
    role: "Co-Founder",
    badge: "Co-Founder",
    avatarInitials: "PB",
    avatarBg: "bg-primary/20 text-primary-deep",
    quote:
      "“What a privilege it is to wake up every day and get to chase your Dreams.”",
    linkedinUrl: "#",
  },
  {
    name: "Jaishnav",
    role: "Co-Founder",
    badge: "Co-Founder",
    avatarInitials: "J",
    avatarBg: "bg-amber-100 text-amber-900",
    quote:
      "“You have One life, There is no second chance. Live it crazy.”",
    linkedinUrl: "#",
  },
  {
    name: "Krishna Gargh",
    role: "Co-Founder",
    badge: "Co-Founder",
    avatarInitials: "KG",
    avatarBg: "bg-emerald-100 text-emerald-900",
    quote:
      "“Discipline and direction beat blind effort every time. We build for the students who refuse to give up on their goals.”",
    linkedinUrl: "#",
  },
];

export function FoundersNote() {
  const { openEmailModal } = useEmailSupportModal();

  return (
    <Section id="founders-note" className="border-b-2 border-ink bg-surface">
      <SectionHeading
        eyebrow="A Note From The Founders"
        title="Why we built Learnometry."
        description="We were once in your shoes — burning midnight oil for competitive exams, feeling the dread of mock test marks, and having no clear guide on what to study next."
      />

      {/* Main manifesto letter card */}
      <div className="mt-10 rounded-card-lg border-2 border-ink bg-background p-6 sm:p-9 shadow-brutal-lg relative overflow-hidden">
        {/* Subtle decorative stamp */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink/10 pb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
            <HeartHandshake className="size-3.5 text-primary-deep" />
            Our Open Letter to Aspirants &amp; Parents
          </span>
          <span className="text-xs font-semibold text-slate-500">
            From the 3 co-founders
          </span>
        </div>

        {/* Letter body */}
        <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-relaxed text-slate-700">
          <p>
            If you are preparing for <strong>JEE, NEET, or CBSE Boards</strong>, you know the exhausting cycle: you sit for a grueling 3-hour test, get your score report filled with numbers and percentiles, and then wake up on Monday morning still asking yourself, <em>“What do I actually open first today?”</em>
          </p>
          <p>
            The mainstream coaching answer has always been brute force: <em>“study 14 hours”</em>, <em>“watch 500 more lecture hours”</em>, or <em>“solve 2,000 more questions”</em>. But when the exam countdown is ticking, blind practice is the fastest way to burn out. What serious students need isn&apos;t more piles of questions — it is knowing the <strong>exact priority order</strong> of which concept returns the most marks per hour.
          </p>
          <p>
            We built <strong>Learnometry</strong> on three uncompromised promises:
          </p>
          <ul className="grid gap-2.5 pt-1 pl-1">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-xs font-bold text-ink">
                1
              </span>
              <span>
                <strong>Zero guesswork:</strong> We never let generative models fabricate or “estimate” your test marks.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-xs font-bold text-ink">
                2
              </span>
              <span>
                <strong>Evidence before advice:</strong> Every diagnosis points directly to the questions that proved it.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-xs font-bold text-ink">
                3
              </span>
              <span>
                <strong>Protection of your time:</strong> Every daily session is capped to targeted, high-impact concept sprints so you stay sharp.
              </span>
            </li>
          </ul>
        </div>

        {/* The 3 Founders Grid */}
        <div className="mt-9 border-t-2 border-ink/10 pt-7">
          <div className="mb-4 flex items-center gap-2">
            <Quote className="size-4 text-primary-deep" />
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-ink">
              Signed by the 3 of us
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="flex flex-col justify-between rounded-card-sm border-2 border-ink bg-surface p-5 shadow-brutal-sm transition-transform duration-150 hover:-translate-y-1"
              >
                <div>
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

                  <span className="mt-3 inline-block rounded-full border border-ink/20 bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                    {founder.badge}
                  </span>

                  <p className="mt-3.5 text-[13px] leading-relaxed italic text-slate-600">
                    {founder.quote}
                  </p>
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
              Have questions, feedback, or want to share your exam journey?
              <br className="hidden sm:inline" />
              {" "}We read and answer every email personally.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openEmailModal("founder")}
            className="cursor-pointer shrink-0 inline-flex items-center gap-1.5 rounded-btn border-2 border-ink bg-surface px-4 py-2 text-xs sm:text-sm font-bold text-ink shadow-brutal-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-0.5 active:shadow-none"
          >
            <Mail className="size-3.5" />
            Email the Founders
          </button>
        </div>
      </div>
    </Section>
  );
}
