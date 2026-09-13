"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  Check,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  INSTAGRAM_URL,
  OFFICIAL_EMAIL,
  SUPPORT_TOPICS,
  buildSupportMailLinks,
  type SupportTopicKey,
} from "@/lib/constants";
import { InstagramIcon } from "@/components/ui/icons";

interface EmailSupportContextType {
  openEmailModal: (topic?: SupportTopicKey) => void;
  closeEmailModal: () => void;
}

const EmailSupportContext = createContext<EmailSupportContextType | null>(null);

export function useEmailSupportModal() {
  const context = useContext(EmailSupportContext);
  if (!context) {
    throw new Error(
      "useEmailSupportModal must be used within an EmailSupportProvider"
    );
  }
  return context;
}

export function EmailSupportProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [topicKey, setTopicKey] = useState<SupportTopicKey>("general");
  const [copied, setCopied] = useState(false);

  const openEmailModal = (topic?: SupportTopicKey) => {
    if (topic && SUPPORT_TOPICS[topic]) {
      setTopicKey(topic);
    }
    setCopied(false);
    setIsOpen(true);
  };

  const closeEmailModal = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent content jump when scrollbar disappears
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [isOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
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

  const { topic, mailtoUri, gmailWebUri } = buildSupportMailLinks(topicKey);

  return (
    <EmailSupportContext.Provider value={{ openEmailModal, closeEmailModal }}>
      {children}
      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="email-support-title"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overscroll-contain bg-ink/60 p-4 backdrop-blur-xs transition-opacity"
          onClick={closeEmailModal}
        >
          <div
            className="relative w-full max-w-lg rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal-lg sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeEmailModal}
              aria-label="Close email support window"
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-btn border-2 border-ink bg-slate-100 text-ink shadow-brutal-sm transition-colors hover:bg-slate-200"
            >
              <X className="size-4.5" />
            </button>

            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm">
                <Sparkles className="size-3.5 text-primary-deep" />
                Direct Email Support
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                <Clock className="size-3.5 text-primary-deep" />
                Under 24hr reply
              </span>
            </div>

            {/* Heading */}
            <h2
              id="email-support-title"
              className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-[26px]"
            >
              Get in touch with Learnometry
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Students, parents, and educators — every email is read and answered
              directly by our core team.
            </p>

            {/* Topic selector */}
            <div className="mt-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Select your inquiry topic:
              </label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {(Object.keys(SUPPORT_TOPICS) as SupportTopicKey[]).map((key) => {
                  const t = SUPPORT_TOPICS[key];
                  const isSelected = topicKey === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTopicKey(key)}
                      className={`rounded-full border-2 px-3 py-1 text-xs font-bold transition-all ${
                        isSelected
                          ? "border-ink bg-primary text-ink shadow-brutal-xs -translate-y-0.5"
                          : "border-ink/30 bg-slate-100 text-slate-700 hover:border-ink hover:bg-slate-200"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-slate-500 italic">
                {topic.description}
              </p>
            </div>

            {/* Email Display & 1-Click Copy Box */}
            <div className="mt-5 rounded-card border-2 border-ink bg-slate-50 p-3.5 shadow-brutal-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-btn border border-ink bg-primary text-ink">
                    <Mail className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Official Email Address
                    </div>
                    <div className="truncate font-mono text-sm font-bold text-ink sm:text-[15px]">
                      {OFFICIAL_EMAIL}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`shrink-0 inline-flex items-center gap-1.5 rounded-btn border-2 border-ink px-3 py-1.5 text-xs font-bold transition-all shadow-brutal-xs active:translate-y-0.5 active:shadow-none ${
                    copied
                      ? "bg-success text-white"
                      : "bg-surface text-ink hover:bg-slate-100"
                  }`}
                  aria-label="Copy official email address"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 stroke-[3]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Pre-filled Send Options */}
            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {/* Option A: Gmail in browser */}
              <a
                href={gmailWebUri}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-card border-2 border-ink bg-surface p-3.5 text-left shadow-brutal-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-brutal hover:bg-primary/5 active:translate-y-0.5 active:shadow-none"
              >
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-ink group-hover:text-primary-deep">
                    <span>Open in Gmail</span>
                    <ExternalLink className="size-3.5 opacity-60" />
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Opens compose window in new tab
                  </div>
                </div>
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-ink bg-slate-100 font-bold text-xs text-ink group-hover:bg-primary">
                  G
                </div>
              </a>

              {/* Option B: Default Mail App */}
              <a
                href={mailtoUri}
                className="group flex items-center justify-between rounded-card border-2 border-ink bg-surface p-3.5 text-left shadow-brutal-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-brutal hover:bg-primary/5 active:translate-y-0.5 active:shadow-none"
              >
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-ink group-hover:text-primary-deep">
                    <span>Default Mail App</span>
                    <Mail className="size-3.5 opacity-60" />
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Apple Mail, Outlook, phone app
                  </div>
                </div>
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-ink bg-slate-100 font-bold text-xs text-ink group-hover:bg-primary">
                  @
                </div>
              </a>
            </div>

            {/* Subject Preview */}
            <div className="mt-4 rounded-btn border border-ink/15 bg-slate-50 px-3 py-2 text-[12px] text-slate-600">
              <span className="font-bold text-ink">Subject line:</span>{" "}
              <span className="font-medium text-slate-700">{topic.subject}</span>
            </div>

            {/* Guarantees & Socials */}
            <div className="mt-5 flex flex-col gap-2 border-t border-border-subtle pt-4 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="size-4 text-success shrink-0" />
                <span>Zero spam. Direct core team inbox.</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-ink hover:text-primary-deep transition-colors"
                >
                  <InstagramIcon className="size-3.5 text-primary-deep shrink-0" />
                  <span>Instagram (@learnometry)</span>
                </a>
                <span className="text-slate-300">·</span>
                <span className="font-medium text-slate-500">SLA: &lt; 24h</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </EmailSupportContext.Provider>
  );
}
