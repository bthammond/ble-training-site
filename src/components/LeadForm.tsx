"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const INTERESTS = [
  "Corporate Training",
  "Business Consulting",
  "Proctored Testing",
  "Leadership Coaching",
  "Family Business / Succession",
  "Other",
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    // Strip newlines/carriage returns to prevent mailto header injection
    const clean = (v: string) => v.replace(/[\r\n]/g, " ").trim();
    const name = clean(data.get("name") as string);
    const company = clean(data.get("company") as string);
    const email = clean(data.get("email") as string);
    const phone = clean(data.get("phone") as string);
    const interest = clean(data.get("interest") as string);
    const message = (data.get("message") as string || "").trim();

    const subject = encodeURIComponent(`New Lead — ${interest} — ${name}`);
    const body = encodeURIComponent(
      `New inquiry from bletraining.com:\n\n` +
      `Name: ${name}\n` +
      `Company: ${company || "Not provided"}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "Not provided"}\n` +
      `Interest: ${interest}\n` +
      `Message: ${message || "None"}\n\n` +
      `Submitted: ${new Date().toLocaleString()}`
    );

    // Open mailto
    window.open(`mailto:info@ble.training?subject=${subject}&body=${body}`, "_blank");

    // Store lead locally as backup
    try {
      const leads = JSON.parse(localStorage.getItem("ble_leads") || "[]");
      leads.push({ name, company, email, phone, interest, message, date: new Date().toISOString() });
      localStorage.setItem("ble_leads", JSON.stringify(leads));
    } catch { /* silent */ }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-crimson/40 bg-[color:var(--cream)] p-10">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-crimson" />
          <h3 className="mt-4 font-serif text-2xl text-black">
            Thank you — we&apos;ll be in touch.
          </h3>
        </div>
        <div className="mt-6 space-y-4 text-sm text-black/80">
          <p className="font-semibold text-black">Here&apos;s what happens next:</p>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson text-white text-xs font-bold">1</span>
            <p>A member of our team will review your inquiry within one business day.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson text-white text-xs font-bold">2</span>
            <p>We&apos;ll reach out by phone or email to learn more about your needs.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson text-white text-xs font-bold">3</span>
            <p>If there&apos;s a fit, we&apos;ll send you a clear proposal — no obligation.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-[color:var(--border)] bg-white p-8 md:p-10 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-black mb-2">
          I&apos;m interested in
        </label>
        <select
          name="interest"
          className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          {INTERESTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-black mb-2">
          Tell us about your situation
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
          placeholder="What challenges are you facing? What outcomes matter most?"
        />
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-crimson px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors disabled:opacity-60"
      >
        {loading ? "Sending..." : (<>Send inquiry <Send className="h-4 w-4" /></>)}
      </button>
      <p className="mt-3 text-xs text-black/70 text-center">
        We reply within one business day. Your information is never shared.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-black mb-2">
        {label} {required && <span className="text-crimson">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
      />
    </div>
  );
}
