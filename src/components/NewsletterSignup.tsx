"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.replace(/[\r\n]/g, "").trim();
    if (!cleanEmail) return;

    // Open mailto with subscription request
    const subject = encodeURIComponent("Newsletter Signup");
    const body = encodeURIComponent(
      `New newsletter subscriber:\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}`
    );
    window.open(`mailto:info@ble.training?subject=${subject}&body=${body}`, "_blank");

    // Store locally
    try {
      const subs = JSON.parse(localStorage.getItem("ble_newsletter") || "[]");
      subs.push({ email, date: new Date().toISOString() });
      localStorage.setItem("ble_newsletter", JSON.stringify(subs));
    } catch { /* silent */ }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm text-green-700">
        <CheckCircle2 className="h-4 w-4" />
        <span>You&apos;re on the list!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Mail className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-black/30" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="w-full border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-black focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson/20"
        />
      </div>
      <button
        type="submit"
        className="shrink-0 bg-crimson px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
