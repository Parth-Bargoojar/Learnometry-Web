import { WEB3FORMS_ACCESS_KEY } from "./constants";

export interface WaitlistSubmissionParams {
  email: string;
  source?: string;
  botcheck?: string;
}

export interface WaitlistResponse {
  success: boolean;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Submits a waitlist email signup to Web3Forms.
 */
export async function submitWaitlist({
  email,
  source = "Website",
  botcheck = "",
}: WaitlistSubmissionParams): Promise<WaitlistResponse> {
  const cleanEmail = email.trim().toLowerCase();

  // Basic validation
  if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  // Honeypot check: If bot filled this field, silently ignore
  if (botcheck) {
    return {
      success: true,
      message: "Thank you for joining the waitlist!",
    };
  }

  try {
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("email", cleanEmail);
    formData.append("subject", `New Early Access Waitlist Signup [${source}]`);
    formData.append("from_name", "Learnometry Waitlist");
    formData.append("source", source);
    formData.append("botcheck", "");
    formData.append(
      "message",
      `New student waitlist signup from ${source} at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return {
        success: true,
        message: data.message || "You're successfully on the waitlist!",
      };
    }

    return {
      success: false,
      message:
        data.message ||
        "Could not complete signup. Please try again or reach out to us at learnometry.official@gmail.com.",
    };
  } catch (error) {
    console.error("Waitlist submission network error:", error);
    return {
      success: false,
      message:
        "Unable to submit right now due to a network issue. Please check your connection and try again.",
    };
  }
}
