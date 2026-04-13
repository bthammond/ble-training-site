"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const INTERESTS = [
  "Family Business Consulting",
  "Entrepreneurship Advisory",
  "Corporate Training",
  "Proctored Testing",
  "Other",
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-crimson/40 bg-[color:var(--cream)] p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-crimson" />
        <h3 className="mt-4 font-serif text-2xl text-black">
          Thank you — we&apos;ll be in touch.
        </h3>
        <p className="mt-2 text-black/70">
          A member of our team will reach out within one business day to
          schedule your consultation.
        </p>
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
