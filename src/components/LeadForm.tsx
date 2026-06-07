"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

import HoneypotField from "@/components/HoneypotField";

const INTERESTS = [
  "Train managers / leadership team",
  "Improve team performance",
  "Prepare for succession / transition",
  "Fix operations / accountability",
  "Business Health Diagnostic",
  "Schedule certification testing",
  "Not sure yet — I have questions",
];

const COMPANY_SIZES = [
  "1–24 employees",
  "25–99 employees",
  "100–249 employees",
  "250–500 employees",
  "500+ employees",
];

const TIMELINES = [
  "Immediately",
  "30–60 days",
  "This quarter",
  "Exploring options",
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const clean = (v: string) => v.replace(/[\r\n]/g, " ").trim();
    const name = clean(data.get("name") as string);
    const company = clean(data.get("company") as string);
    const email = clean(data.get("email") as string);
    const phone = clean(data.get("phone") as string);
    const interest = clean(data.get("interest") as string);
    const companySize = clean(data.get("companySize") as string);
    const timeline = clean(data.get("timeline") as string);
    const message = (data.get("message") as string || "").trim();
    const website = clean(data.get("website") as string || "");

    // localStorage backup — keeps a local trail even if the network
    // request to /api/lead fails. Cleared once the server confirms
    // the lead landed in Mailchimp.
    try {
      const leads = JSON.parse(localStorage.getItem("ble_leads") || "[]");
      leads.push({ name, company, email, phone, interest, companySize, timeline, message, date: new Date().toISOString() });
      localStorage.setItem("ble_leads", JSON.stringify(leads));
    } catch { /* silent */ }

    // Real server-side intake. Lands in Mailchimp + sends notification
    // email via Resend. Replaces the prior flow which depended on a
    // working mailto: handler — mobile browsers routinely fail to
    // launch the mailto, dropping the lead notification entirely.
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          interest,
          companySize,
          timeline,
          message,
          website,
        }),
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        setError(
          errBody?.error ??
            "We hit an issue saving your inquiry. Please email info@ble.training directly.",
        );
        setLoading(false);
        return;
      }
      setLoading(false);
      setSubmitted(true);
    } catch {
      setError(
        "Couldn't reach the server. Please email info@ble.training directly.",
      );
      setLoading(false);
    }
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
      <HoneypotField controlled={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-black mb-2">
          Primary need <span className="text-crimson">*</span>
        </label>
        <select
          name="interest"
          className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
          defaultValue=""
          required
        >
          <option value="" disabled>
            What are you trying to solve?
          </option>
          {INTERESTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Company size
          </label>
          <select
            name="companySize"
            className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
            defaultValue=""
          >
            <option value="" disabled>
              Select range
            </option>
            {COMPANY_SIZES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Timeline
          </label>
          <select
            name="timeline"
            className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
            defaultValue=""
          >
            <option value="" disabled>
              When are you looking to start?
            </option>
            {TIMELINES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-black mb-2">
          Tell us about your situation
        </label>
        <textarea
          name="message"
          rows={4}
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
