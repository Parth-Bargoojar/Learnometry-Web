/**
 * Single source of truth for the legal identity of the business.
 *
 * India's Consumer Protection (E-Commerce) Rules, 2020 (Rule 4(2), 5(3)) require any
 * entity selling goods or services online to display its legal name, the address of its
 * registered office / headquarters, working contact details, and the name and contact
 * of a Grievance Officer. The DPDP Act, 2023 (s.13) separately requires the contact of
 * the person able to answer questions about personal data processing to be published.
 *
 * ⚠️  THESE VALUES ARE DELIBERATELY BLANK. Do not invent them.
 *     Fill each one in with the real registered details before taking payments.
 *     Any field left as an empty string is simply not rendered, and the
 *     <BusinessDetails /> block shows a "pending" notice instead of a fake address.
 */

export interface LegalEntity {
  /** Registered legal name, e.g. "Learnometry Technologies Private Limited" or, for a
   *  sole proprietorship, "<Proprietor name>, trading as Learnometry". */
  legalName: string;
  /** "Private Limited Company", "LLP", "Registered Partnership", "Sole Proprietorship". */
  entityType: string;
  /** MCA Corporate Identity Number (companies/LLPs only). Leave blank if not incorporated. */
  cin: string;
  /** GSTIN, once registered. Mandatory to display on invoices once you cross the threshold. */
  gstin: string;
  /** Full registered/principal place of business address, including PIN code. */
  registeredAddress: string;
  /** A working telephone number. Rule 5(3) of the E-Commerce Rules expects a contact number. */
  phone: string;
  /** Customer support email. */
  supportEmail: string;
}

export interface GrievanceOfficer {
  name: string;
  designation: string;
  email: string;
  phone: string;
  address: string;
}

/**
 * ⚠️ TO BE COMPLETED — see the file header. Blank fields are hidden, never guessed.
 */
export const LEGAL_ENTITY: LegalEntity = {
  legalName: "",
  entityType: "",
  cin: "",
  gstin: "",
  registeredAddress: "",
  phone: "",
  supportEmail: "learnometry.official@gmail.com",
};

/**
 * ⚠️ TO BE COMPLETED. A named human being is required — "the support team" does not
 * satisfy Rule 4(6) of the E-Commerce Rules or s.13 of the DPDP Act.
 */
export const GRIEVANCE_OFFICER: GrievanceOfficer = {
  name: "",
  designation: "Grievance Officer & Data Protection Contact",
  email: "learnometry.official@gmail.com",
  phone: "",
  address: "",
};

/** True once the minimum set of legally required identity fields is filled in. */
export const BUSINESS_DETAILS_COMPLETE =
  Boolean(LEGAL_ENTITY.legalName) &&
  Boolean(LEGAL_ENTITY.registeredAddress) &&
  Boolean(GRIEVANCE_OFFICER.name);

/**
 * The single date shown on every policy page, so they can never drift apart.
 * Update it whenever any policy text changes.
 */
export const POLICY_LAST_UPDATED = "13 September 2026";

/**
 * The city whose courts have exclusive jurisdiction under the Terms. This should normally
 * be the city of the registered office. ⚠️ TO BE COMPLETED — while blank, the Terms say
 * "the courts of India" and name no city, rather than naming a city you never agreed to.
 */
export const JURISDICTION_CITY = "";

/**
 * Every third party that receives data, named so the privacy and cookie policies stay
 * accurate and auditable. Add a row the moment a new script, SDK or API is introduced.
 */
export const DATA_PROCESSORS = [
  {
    name: "Vercel Inc.",
    purpose: "Website hosting and content delivery",
    data: "IP address and standard request logs, for security and availability",
    location: "United States and global edge locations",
    policy: "https://vercel.com/legal/privacy-policy",
  },
  {
    name: "Web3Forms",
    purpose: "Delivering waitlist sign-ups to our inbox",
    data: "The email address you type into the waitlist form, plus which form you used",
    location: "European Union",
    policy: "https://web3forms.com/privacy",
  },
  {
    name: "Google LLC (Gmail, Search Console)",
    purpose: "Our support inbox and search-performance reporting",
    data: "Emails you send us; aggregated, non-identifying search statistics",
    location: "United States",
    policy: "https://policies.google.com/privacy",
  },
] as const;
