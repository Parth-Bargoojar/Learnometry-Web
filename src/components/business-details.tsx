import { AlertTriangle, Building2, Scale } from "lucide-react";
import {
  BUSINESS_DETAILS_COMPLETE,
  GRIEVANCE_OFFICER,
  LEGAL_ENTITY,
} from "@/lib/legal";

/*
  Rendered at the foot of every policy page.

  Consumer Protection (E-Commerce) Rules, 2020 require the legal name, registered
  address, contact details and a named Grievance Officer to be displayed. Those values
  live in src/lib/legal.ts and are intentionally blank until the real ones are supplied —
  a placeholder address would be a worse compliance failure than an honest gap, so while
  the fields are empty this block says so plainly instead of inventing them.
*/

function Row({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <dt className="shrink-0 text-[13px] font-bold uppercase tracking-wide text-slate-500 sm:w-44">
        {label}
      </dt>
      <dd className="whitespace-pre-line text-[15px] text-slate-700">{value}</dd>
    </div>
  );
}

export function BusinessDetails() {
  return (
    <section
      aria-labelledby="business-details-heading"
      className="mt-8 rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal sm:p-8"
    >
      <div className="flex items-center gap-2">
        <Building2 aria-hidden="true" className="size-5 text-primary-text" />
        <h2
          id="business-details-heading"
          className="font-display text-xl text-ink"
        >
          Business &amp; contact details
        </h2>
      </div>

      {BUSINESS_DETAILS_COMPLETE ? null : (
        <p className="mt-4 flex items-start gap-2.5 rounded-card-sm border-2 border-amber-500 bg-amber-50 p-4 text-[15px] text-amber-900">
          <AlertTriangle
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-amber-700"
          />
          <span>
            <strong>Registration in progress.</strong> Learnometry is a pre-launch
            product and is not yet taking payments. Our full registered entity name,
            registered address and Grievance Officer details will be published here
            before any paid plan goes on sale. Until then, every enquiry reaches us at
            the email address below.
          </span>
        </p>
      )}

      <dl className="mt-5 flex flex-col gap-3">
        <Row label="Legal name" value={LEGAL_ENTITY.legalName} />
        <Row label="Entity type" value={LEGAL_ENTITY.entityType} />
        <Row label="CIN" value={LEGAL_ENTITY.cin} />
        <Row label="GSTIN" value={LEGAL_ENTITY.gstin} />
        <Row label="Registered address" value={LEGAL_ENTITY.registeredAddress} />
        <Row label="Telephone" value={LEGAL_ENTITY.phone} />
        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
          <dt className="shrink-0 text-[13px] font-bold uppercase tracking-wide text-slate-500 sm:w-44">
            Email
          </dt>
          <dd className="text-[15px] text-slate-700">
            <a
              href={`mailto:${LEGAL_ENTITY.supportEmail}`}
              className="text-primary-text underline"
            >
              {LEGAL_ENTITY.supportEmail}
            </a>
          </dd>
        </div>
      </dl>

      <div className="mt-6 rounded-card-sm border-2 border-ink bg-slate-50 p-4">
        <div className="flex items-center gap-2">
          <Scale aria-hidden="true" className="size-4 text-primary-text" />
          <h3 className="font-display text-base text-ink">
            Grievance Officer &amp; data protection contact
          </h3>
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
          If something we have done, or failed to do, has gone wrong, you can escalate
          it to our Grievance Officer, who also handles questions and complaints about
          personal data under the Digital Personal Data Protection Act, 2023.
        </p>
        <dl className="mt-3 flex flex-col gap-3">
          <Row label="Name" value={GRIEVANCE_OFFICER.name} />
          <Row label="Designation" value={GRIEVANCE_OFFICER.designation} />
          <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
            <dt className="shrink-0 text-[13px] font-bold uppercase tracking-wide text-slate-500 sm:w-44">
              Email
            </dt>
            <dd className="text-[15px] text-slate-700">
              <a
                href={`mailto:${GRIEVANCE_OFFICER.email}`}
                className="text-primary-text underline"
              >
                {GRIEVANCE_OFFICER.email}
              </a>
            </dd>
          </div>
          <Row label="Telephone" value={GRIEVANCE_OFFICER.phone} />
          <Row label="Address" value={GRIEVANCE_OFFICER.address} />
        </dl>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          We acknowledge every complaint within <strong>48 hours</strong> of receiving it
          and aim to resolve it within <strong>one month</strong>. If you are not
          satisfied with the outcome of a personal-data complaint, you may escalate it to
          the Data Protection Board of India. Consumer complaints can be raised with the
          National Consumer Helpline (1915) or on the{" "}
          <a
            href="https://consumerhelpline.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-text underline"
          >
            INGRAM portal
          </a>
          .
        </p>
      </div>
    </section>
  );
}
