# Learnometry — legal & accessibility review

**Reviewed:** 13 September 2026 · **Scope:** the `web/` marketing site (pre-launch, no
accounts, no payments) · **Reviewer:** Claude (engineering review, **not legal advice** —
see "What this review is not" at the end).

---

## 1. Before you take a single rupee — blocking items

These are the only genuinely blocking gaps. Everything else on this page is done or
optional.

### 1.1 Fill in `src/lib/legal.ts`

The file is deliberately blank. I did **not** invent a company name, address or officer,
because a fabricated registered address on a consumer-facing site is a worse compliance
failure than an honest gap. While the fields are empty, every policy page shows a
"Registration in progress" notice instead.

| Field | Why it is required |
|---|---|
| `legalName`, `entityType` | Consumer Protection (E-Commerce) Rules, 2020, Rule 5(3) |
| `registeredAddress` | Same — the address of the headquarters must be displayed |
| `phone` | Same — a working customer-care contact |
| `cin` / `gstin` | Once incorporated / once GST-registered |
| `GRIEVANCE_OFFICER.name` | Rule 4(6) E-Commerce Rules **and** s.13 DPDP Act. A named human being — "the support team" does not satisfy either |
| `JURISDICTION_CITY` | Until set, the Terms say "the competent courts in India" and name no city |

Fill these in and every policy page updates at once.

### 1.2 Have a lawyer read the four policies

I wrote them to be accurate about what the site *actually does* and to cover the clauses
that were entirely missing. That is not the same as a qualified review, and a product
serving minors deserves one. Budget an hour of a consumer/tech lawyer's time.

---

## 2. What I changed

### 2.1 Policy pages

| Page | Status |
|---|---|
| `/privacy` | **Rewritten.** Was missing: who the Data Fiduciary is, the processors who see your data, cross-border transfers, retention periods, security measures, breach notification, the full DPDP rights list, how to withdraw consent, and a changes clause. All added. |
| `/terms` | **Rewritten.** Was missing: governing law and jurisdiction, limitation of liability, disclaimer of warranties, acceptable use, suspension/termination, changes-to-terms, third-party links, auto-renewal disclosure, and — most importantly — a **no-affiliation disclaimer** for CBSE / NTA / NMC. All added. |
| `/refunds` | **Extended** with auto-renewal (RBI e-mandate notice), a no-conditions refund where *we* fail to deliver, and an explicit statement that the policy does not override Consumer Protection Act rights. |
| `/guardian-consent` | **Extended** with a consent-withdrawal section. "Immutable audit record" softened to "a dated record" — you do not have an immutable ledger. |
| `/cookies` | **New page.** |

Every policy page now carries a `<BusinessDetails />` block with entity identity, the
Grievance Officer, the 48-hour acknowledgement / one-month resolution commitment, and
escalation routes (Data Protection Board, National Consumer Helpline 1915, INGRAM).

A single `POLICY_LAST_UPDATED` constant drives the date on all five pages, so they cannot
drift apart.

### 2.2 Cookie consent — you do not need a banner

I checked rather than assumed. The site sets **zero cookies** and writes **nothing** to
local or session storage:

- No Google Analytics, Meta Pixel, Hotjar, Clarity, PostHog, Vercel Analytics — nothing.
- No `document.cookie`, no `localStorage`, no `sessionStorage` anywhere in `src/`.
- No `<iframe>`, no third-party `<script>` tags.
- Fonts are Inter and Space Grotesk via `next/font`, which **self-hosts at build time** —
  no runtime request to Google, which is what makes Google Fonts a cookie/transfer issue
  on other sites.

Because nothing non-essential is stored, no consent banner is required. The Cookie Policy
says exactly that, and states what will change when session cookies arrive with accounts.

**Keep it that way, or update the page the same day you don't.** The moment anyone adds
an analytics snippet, you need a consent banner that refuses as easily as it accepts, and
`/cookies` becomes false.

### 2.3 Data minimisation

Already good. The waitlist collects an email address and nothing else — no name, no phone,
no date of birth. The submission sends email + source + timestamp. I did not add any
collection.

Third parties that see data are now named in both the Privacy and Cookie policies, in one
shared list (`DATA_PROCESSORS` in `src/lib/legal.ts`): Vercel (hosting), Web3Forms (form
delivery), Google (support inbox, Search Console). Add a row there the day you add a
fourth.

### 2.4 Form consent

All three waitlist forms (hero, closing CTA, modal) now show a notice-at-collection
before submission, wired to the email field via `aria-describedby` so screen reader users
hear it *before* they submit. It covers what is stored, what for, how to withdraw, that
the address is never sold — and asks under-18s to have a guardian sign up instead.

See §4.1 for the one thing I'd still tighten here.

### 2.5 Marketing claims

No fake reviews, testimonials, star ratings or user counts existed anywhere on the site —
**nothing to remove.** That is genuinely unusual and worth protecting. The unsupported
claims I did find and fix:

| Was | Now | Why |
|---|---|---|
| "30 Free Monthly Credits **Forever**" | "30 Free Credits Every Month at Launch" | A perpetual commitment nobody can honour |
| "**Most Popular** for Students" (×2) | "Recommended for most students" | Zero customers exist; popularity cannot be claimed |
| Hero widget: 34% → 78%, "Saved **4.2 hours**" | Labelled "Illustrative example" / "Sample report — not a real student's result" | Presented as a real outcome with no qualifier |
| "+44%" | "+44 pts" | 78 − 34 is 44 percentage points, not 44 percent |
| "**Unlimited** Daily Retests" (Pro) | "Highest daily retest volume" | Contradicted the 500-credit daily cap sold on the same page — *and* the Trust section's own promise of no "unlimited AI" wording |
| "**Guaranteed** response within 24 business hours" (×3) | "We aim to reply within 24 business hours" | A three-person pre-launch team cannot guarantee an SLA |
| "**Zero risk**" | "No card needed to start" | |
| "Nightly Reset **Guarantee**" | "Nightly reset" | |
| "hassle-free 7-day refund **guarantee**" | Stated with its actual conditions | The 20% condition was hidden behind the word "hassle-free" |
| "**Limited** Early Access" | "Early Access" | Manufactured scarcity with no stated limit |
| "Highest priority **VIP** AI queue" | "Highest priority generation queue" | |
| "top-tier reasoning models for **flawless** analysis" | "deeper reasoning models" | |
| "**Real educators** & founders answer" | "A founder replies to you" | You have not said anyone is a qualified educator |
| "Join students from across CBSE, JEE, NEET" (×2) | "Join the early access waitlist" | Implies an existing student body |
| Credit estimates ("~20 per day") | Prefixed with an explicit estimate caveat | |
| Retest "**proves** you have mastered it" | "shows you can answer that concept reliably" | |

Two disclaimers were added because the site names exam boards throughout:

- **In the hero**, under the "Built to CBSE, NTA & NMC Exam Patterns" badge.
- **In the footer**, on every page: not affiliated with or endorsed by CBSE / NTA / NMC,
  the marks belong to their owners, and no guarantee of any mark, percentile, rank or
  admission.

That last sentence matters more than it looks — see §3.3.

### 2.6 Accessibility

Fixed:

- **Skip link** moved from the home page to the root layout, so all 8 routes have one.
  Every page now renders `<main id="main">`.
- **Focus trap** (`src/lib/use-focus-trap.ts`) on both modals: focus moves in on open,
  Tab cycles inside, Escape closes, and focus returns to the button that opened it.
  Verified in a browser.
- **Dialog role moved off the backdrop onto the panel** — a backdrop carrying
  `role="dialog"` makes screen readers announce the overlay instead of the content.
- **Email inputs** got real `<label>`s (they had placeholders only), plus `name`,
  `autoComplete="email"`, `aria-describedby`, and `aria-invalid` on error.
- **Errors** announce via `role="alert"`; success states via `role="status"`.
- **FAQ accordion**: a collapsed panel was `grid-rows-[0fr] opacity-0` — still read aloud
  and still tabbable. Now `invisible`, so it leaves the accessibility tree and tab order.
- **Contact / email-modal topic pickers**: `<label>` elements that labelled no form
  control, replaced with `role="group"` + `aria-labelledby`, and each toggle now reports
  `aria-pressed`.
- **Tables** on `/pricing` and the new policy tables: `scope` on every header, `<th>` for
  row headers, `sr-only` captions, and the scroll containers are keyboard-focusable.
- **Heading order**: `h2 → h4` jump on `/pricing` corrected.
- **Alt text**: the mascot had `alt=""`; now described.
- **Contrast**: `#16A34A` green and `#168B9E` teal fail AA as small text (3.30:1 and
  4.02:1 on white). Replaced with the existing `success-text` / `primary-text` tokens
  everywhere they carried small text (they remain in use for icons, where 3:1 applies).
  Added `--color-danger-text: #b91c1c` — the form error text measured 4.41:1, just under
  the 4.5 bar.

**Verified in a real browser** (Playwright, all 8 routes, desktop 1280px and mobile
390px, with modals open, the FAQ expanded, the mobile menu open and a form in its error
state): one `<h1>` per page, skip link present, `main` landmark, no image without alt, no
unlabelled input, no duplicate DOM ids, no button or link without an accessible name, no
heading-order skips, **no WCAG AA contrast failures in any state**, and no JS errors.

Already good before I touched it, and left alone: `lang="en-IN"`, a global
`:focus-visible` treatment, `prefers-reduced-motion` handling, no zoom cap, and the
design system's own note about the teal failing AA at small sizes.

---

## 3. Applicable law, and what each one asks of you

### 3.1 Digital Personal Data Protection Act, 2023

The main one, because your users are minors.

- ✅ Notice at collection, purpose limitation, consent as the basis — in the forms and the
  policy.
- ✅ Data Principal rights: access, correction, erasure, **nomination** (frequently
  missed), grievance redressal, withdrawal "as easy as giving".
- ✅ s.9(3) — no tracking, behavioural monitoring, or advertising directed at children.
  You do none of this, and the policy says so.
- ✅ Breach notification to the Board and to affected users.
- ⚠️ **s.9(1) verifiable guardian consent is described but not yet built.** The
  `/guardian-consent` workflow is written in the present tense. Ship it before accounts
  open, or reword the page.
- ⚠️ **The waitlist has no age gate.** See §4.1.

### 3.2 Consumer Protection (E-Commerce) Rules, 2020

- ✅ Grievance Officer block, 48-hour acknowledgement, one-month resolution.
- ✅ No misleading advertisement (§2.5 above).
- ❌ **Legal name, address, contact number** — blocked on §1.1.

### 3.3 CCPA Guidelines — misleading advertisements (2022) and the **coaching sector** (2024)

This is the one an ed-tech company aimed at JEE/NEET students most often trips over. The
2024 guidelines specifically target claims about **exam success, ranks, selections and
selection rates**, and the use of successful candidates' names or images without written
consent.

You currently make no such claims. Before you ever do:

- Never state or imply a rank, selection or score improvement you cannot substantiate
  with records.
- If you publish a student's result, name or photo, get **written consent** and keep it —
  and state the course they actually took, its duration and whether it was paid.
- Disclaimers must be as prominent as the claim, not in 9px grey at the bottom.

The footer disclaimer added in §2.5 is your baseline protection here.

### 3.4 Indian Contract Act, 1872 (s.11)

A contract with a minor is void. This is *why* the guardian-consent clause matters
commercially, not just for privacy: **the paying party must be the parent or guardian.**
The Terms now say guardians accept on the learner's behalf and are responsible for
payments from the account.

### 3.5 Payments (when you switch them on)

- RBI rules on recurring e-mandates: pre-debit notification, additional factor of
  authentication, easy cancellation. The Terms and Refund policy now promise this — make
  sure the gateway you pick actually delivers it.
- GST registration once you cross the ₹20 lakh services threshold; display the GSTIN and
  issue compliant invoices. `LEGAL_ENTITY.gstin` renders automatically once set.
- Never store card details yourself — use a PCI-compliant gateway (Razorpay, Cashfree,
  PayU).

### 3.6 IT Act, 2000 and the SPDI Rules, 2011

Reasonable security practices, which the Privacy Policy now describes (HTTPS + HSTS,
access control, no payment credentials on your systems). Keep that description true.

### 3.7 GDPR / UK GDPR

Almost certainly **not** applicable: the site is India-targeted (`en_IN`, INR pricing,
Indian exam boards) and does not monitor EU users. If you ever market to Indian students
studying abroad, revisit this — and note that having no cookies already puts you most of
the way there.

---

## 4. Open risks I could not close

### 4.1 The waitlist has no age gate — highest residual risk

The forms now *ask* under-18s to have a guardian sign up, but nothing verifies it. Under
the DPDP Act you would be processing a child's personal data (their email) without
verifiable guardian consent — and most of your market is 15–18.

Options, in increasing order of safety:

1. **Current state**: a clear notice asking under-18s to have a guardian join instead.
   Defensible for an email-only waitlist; not airtight.
2. **Add a required checkbox**: "I am 18 or older, or my parent/guardian has agreed to
   this." One line of state, costs a little conversion, and gives you a record.
3. **Collect a guardian email alongside** for anyone who says they are under 18.

I did **not** add the checkbox unilaterally — it changes your conversion funnel and that
is your call. I'd recommend option 2. Say the word and it's a ten-minute change.

### 4.2 Image copyright — I cannot verify any of it

I have no way to know where these came from, and this is a real exposure:

| Asset | Question you need to answer |
|---|---|
| `public/mascot.jpeg` | Who made it? If it was AI-generated, note that in India an AI-generated work may have **no human author and therefore no copyright you can enforce** — which also means you cannot stop a competitor using it. If a freelancer made it, do you have a **written assignment of copyright**? A commission invoice alone does not transfer copyright in India. |
| `public/primary-logo*.png`, `logo-mark.png`, `icon.png`, favicons | Same question. Also: run a **TM search on the Learnometry word mark and logo** before you spend on brand, and consider filing in Class 41 (education) and Class 9 / 42 (software). |
| `opengraph-image.png`, `twitter-image.png` | Same. |
| `Logo Varitions/` (project root) | Same. |

**Licences I could verify and that are fine:** Inter and Space Grotesk (SIL Open Font
License, self-hosted by `next/font` — no attribution needed in the UI), and `lucide-react`
icons (ISC licence, no attribution required).

The Terms assert that the mascot and logos are your intellectual property. Make sure that
is true before that sentence is tested.

### 4.3 The 20% refund condition

"Refund only if you have used under 20% of your allowance" is a real condition, honestly
stated — but a consumer forum could view a condition that is easy to breach in a day or
two as making the 7-day promise illusory. Worth a lawyer's eye, and worth considering
whether "20% of the *cycle's* allowance" (which is what the copy now says) is what you
actually mean operationally.

### 4.4 Promises the product must now keep

The policies commit you to things that need to exist by launch:

- Erasure and data-export requests completed in **7 business days**.
- Complaints acknowledged in **48 hours**, resolved within **one month**.
- Cancel-your-subscription "with a single click from Account Settings".
- An **unsubscribe link in every email** you send (Web3Forms just forwards to your inbox;
  whatever you use to email the waitlist at launch must include one).
- A guardian-consent workflow that matches `/guardian-consent`.

A policy you don't follow is worse than one you never published.

### 4.5 Minor code notes

- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` and `GOOGLE_SITE_VERIFICATION` have hard-coded
  fallbacks in `src/lib/constants.ts` and `src/lib/site.ts`. Both are public-by-design
  values (the Web3Forms key is sent from the browser regardless), so this is not a secret
  leak — but the Web3Forms key can be abused to spam your inbox. Their dashboard has
  domain restrictions and a captcha; turn both on.
- `.env.local` is untracked and `.gitignore` covers `.env*` patterns correctly. Verified —
  only `.env.example` is tracked.
- Unused `linkedinUrl: "#"` entries in `founders-note.tsx` are dead data. Harmless, but
  don't ship `#` links if you start rendering them.

---

## 5. What this review is *not*

I am not a lawyer and this is not legal advice. You asked me to "make no mistakes" — so
to be straight with you about what that can and cannot mean here:

**What I verified mechanically, and stand behind:** the cookie/tracker/storage finding
(searched the whole source tree), the absence of fake reviews, the accessibility and
contrast results (measured in a real browser across 8 routes and every interactive state),
and the fact that the site builds, type-checks and lints with no new warnings.

**What is judgement, not fact:** whether each policy clause is *sufficient* for your
situation, whether the 20% refund condition survives a consumer forum, and whether the
age-gate approach in §4.1 is enough. Those need the hour of lawyer time in §1.2.

**What I could not check at all:** anything outside this repo — image provenance, your
entity status, your contracts with the founders, and what you actually do with data once
accounts exist.

The single highest-value thing you can do next is fill in `src/lib/legal.ts` and send
these four policy pages to a consumer/tech lawyer.
