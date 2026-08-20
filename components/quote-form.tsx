"use client";

import { useState, type FormEvent } from "react";

import { Icon } from "./icons";
import { Button } from "./ui/button";
import { SelectField, TextareaField, TextField } from "./ui/form-controls";

type QuoteFormProps = {
  compact?: boolean;
  heading?: string;
  description?: string;
};

export function QuoteForm({
  compact = false,
  heading = "Get Scheduled Today",
  description = "Tell us what you need and we’ll get back to you quickly.",
}: QuoteFormProps) {
  const [submissionState, setSubmissionState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setSubmissionState("submitting");
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Netlify Forms submission failed");

      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  return (
    <form
      id="schedule-service"
      name="service-request"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={`quote-form${compact ? " quote-form--compact" : ""}`}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="service-request" />
      <p className="quote-form__honeypot"><label>Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="quote-form__heading">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <div className="quote-form__grid">
        <TextField id="first-name" name="firstName" label="First Name" autoComplete="given-name" required />
        <TextField id="last-name" name="lastName" label="Last Name" autoComplete="family-name" required />
        <TextField id="phone" name="phone" label="Phone Number" type="tel" autoComplete="tel" required />
        <TextField id="email" name="email" label="Email Address" type="email" autoComplete="email" />
        <SelectField id="service" name="service" label="Service Needed" defaultValue="" required>
          <option value="" disabled>Select a Service...</option>
          <option value="ac-repair">A/C Repair & Diagnostics</option>
          <option value="maintenance">HVAC Maintenance</option>
          <option value="commercial">Commercial HVAC Service</option>
          <option value="replacement">HVAC Replacement & Installation</option>
          <option value="maintenance-plan">Ferguson&apos;s Maintenance Plan</option>
          <option value="other">Other HVAC Service</option>
        </SelectField>
        <TextField id="city" name="city" label="City" autoComplete="address-level2" required />
        <TextareaField className="quote-form__message" id="message" name="message" label="How can we help?" rows={4} />
      </div>
      <Button className="quote-form__submit" type="submit" disabled={submissionState === "submitting"}>
        <Icon name="send" width={17} height={17} />
        {submissionState === "submitting" ? "Sending Request..." : "Get Scheduled Today"}
      </Button>
      <p className="quote-form__status" aria-live="polite">
        {submissionState === "success" ? "Thanks — your request has been sent. Ferguson & Sons will be in touch." : null}
        {submissionState === "error" ? "We couldn’t send your request. Please call (757) 406-7135." : null}
      </p>
    </form>
  );
}
