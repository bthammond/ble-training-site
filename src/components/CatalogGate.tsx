"use client";

import { useState } from "react";
import { BookOpen, Send, Loader2 } from "lucide-react";

interface Props {
  onRegistered: () => void;
  previewsRemaining: number;
}

export default function CatalogGate({ onRegistered, previewsRemaining }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sanitize inputs — strip newlines to prevent mailto header injection
    const clean = (v: string) => v.replace(/[\r\n]/g, " ").trim();
    const cleanName = clean(name);
    const cleanEmail = clean(email);
    const cleanPhone = clean(phone);

    if (!cleanName || !cleanEmail || !cleanPhone) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);
    setError("");

    // Send lead via mailto (opens email client)
    const subject = encodeURIComponent("New Course Catalog Lead");
    const body = encodeURIComponent(
      `New lead from the Course Catalog:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone}\nDate: ${new Date().toLocaleString()}\n`
    );
    window.open(`mailto:info@ble.training?subject=${subject}&body=${body}`, "_blank");

    // Set 30-day cookie
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `ble_catalog_access=granted; expires=${expires}; path=/; SameSite=Lax`;

    // Also store in localStorage as backup
    localStorage.setItem("ble_catalog_lead", JSON.stringify({ name: cleanName, email: cleanEmail, phone: cleanPhone, date: new Date().toISOString() }));

    setTimeout(() => {
      setSending(false);
      onRegistered();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-black p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-crimson">
            <BookOpen className="h-8 w-8 text-crimson" />
          </div>
          <h2 className="mt-4 font-serif text-2xl text-white">
            Unlock the Full Catalog
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Create your free account to browse all 153 courses, save favorites, and request training.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-black/50 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Smith"
              className="w-full border border-slate-300 px-4 py-3 text-sm text-black focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-black/50 mb-1">
              Work Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              className="w-full border border-slate-300 px-4 py-3 text-sm text-black focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-black/50 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full border border-slate-300 px-4 py-3 text-sm text-black focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
            />
          </div>

          {error && (
            <p className="text-xs text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-2 bg-crimson px-6 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors disabled:opacity-60"
          >
            {sending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Send className="h-4 w-4" />
                Get Full Access
              </>
            )}
          </button>

          <p className="text-center text-[11px] text-black/40">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>
    </div>
  );
}
