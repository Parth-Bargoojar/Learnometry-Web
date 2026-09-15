import Link from "next/link";

/*
  Notice-at-collection for the waitlist forms.

  The DPDP Act, 2023 requires a clear notice — what is collected, what for, and how to
  withdraw — to be given at or before the point consent is taken. Pressing "Join
  Waitlist" is the clear affirmative act; this paragraph is the notice that makes that
  act informed. It is wired to the email field with aria-describedby so it is announced
  to screen reader users before they submit, not after.

  `id` must be unique per form instance, since all three forms can exist on one page.
*/
export function WaitlistConsent({
  id,
  align = "left",
}: {
  id: string;
  align?: "left" | "center";
}) {
  return (
    <p
      id={id}
      className={`mt-3 max-w-xl text-xs leading-relaxed text-slate-600 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      }`}
    >
      By joining, you consent to us storing your email address and emailing you when early
      access opens, as described in our{" "}
      <Link href="/privacy" className="font-semibold text-primary-text underline">
        Privacy Policy
      </Link>
      , and you agree to our{" "}
      <Link href="/terms" className="font-semibold text-primary-text underline">
        Terms
      </Link>
      . We never sell your address or pass it to advertisers, and you can withdraw consent
      at any time by replying to any email from us.{" "}
      <strong className="text-ink">Under 18?</strong> Please ask a parent or guardian to
      join on your behalf.{" "}
      <Link
        href="/guardian-consent"
        className="font-semibold text-primary-text underline"
      >
        Here is why
      </Link>
      .
    </p>
  );
}
