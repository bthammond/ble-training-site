"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface Props {
  locations: string[];
}

export default function ProctorApplicationForm({ locations }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const clean = (v: string) => v.replace(/[\r\n]/g, " ").trim();
    const name = clean(data.get("name") as string);
    const email = clean(data.get("email") as string);
    const phone = clean(data.get("phone") as string);
    const location = clean(data.get("location") as string);
    const message = (data.get("message") as string || "").trim();

    const subject = encodeURIComponent(`Proctor Application — ${name} — ${location}`);
    const body = encodeURIComponent(
      `New proctor application from bletraining.com/careers:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Preferred Location: ${location}\n` +
      `Message: ${message || "None"}\n\n` +
      `Submitted: ${new Date().toLocaleString()}`
    );

    window.open(`mailto:info@ble.training?subject=${subject}&body=${body}`, "_blank");

    // Also subscribe to Mailchimp with "Applicant" tag
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, tag: "applicant" }),
    }).catch(() => { /* silent */ });

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-crimson/40 bg-white p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-crimson" />
        <h3 className="mt-4 font-serif text-2xl text-black">
          Application received.
        </h3>
        <p className="mt-3 text-black/70">
          Thanks for your interest! We&apos;ll review your information and
          reach out within a few business days.
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
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
            Full Name <span className="text-crimson">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Email <span className="text-crimson">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
            Phone <span className="text-crimson">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-black mb-2">
            Preferred Location <span className="text-crimson">*</span>
          </label>
          <select
            id="location"
            name="location"
            required
            defaultValue=""
            className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
          >
            <option value="" disabled>Select a location</option>
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
            <option>Any location</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
          Tell us about yourself
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition"
          placeholder="Brief background, relevant experience, and your availability."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-crimson px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Send className="h-4 w-4" /> Submit Application</>}
      </button>
      <p className="mt-3 text-xs text-black/50 text-center">
        We respond within a few business days. Your information is kept confidential.
      </p>
    </form>
  );
}
