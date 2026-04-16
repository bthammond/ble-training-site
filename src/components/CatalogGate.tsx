"use client";

import { useState } from "react";
import { BookOpen, Send, Loader2, Mail, CheckCircle2 } from "lucide-react";

interface Props {
  onRegistered: () => void;
  previewsRemaining: number;
}

export default function CatalogGate({ onRegistered, previewsRemaining }: Props) {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [stage, setStage] = useState<"form" | "check-email" | "granted">("form");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.replace(/[\r\n]/g, "").trim();

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const data = await res.json();

      if (data.success && data.alreadySubscribed) {
        // Already confirmed subscriber — grant access immediately
        const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `ble_catalog_access=granted; expires=${expires}; path=/; SameSite=Lax`;
        setStage("granted");
        setTimeout(() => onRegistered(), 1500);
      } else if (data.success) {
        // New subscriber — needs to confirm email first
        setStage("check-email");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleConfirmed = () => {
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `ble_catalog_access=granted; expires=${expires}; path=/; SameSite=Lax`;
    onRegistered();
  };

  // STAGE: Check your email
  if (stage === "check-email") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-black p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-crimson">
              <Mail className="h-8 w-8 text-crimson" />
            </div>
            <h2 className="mt-4 font-serif text-2xl text-white">
              Check Your Email
            </h2>
            <p className="mt-3 text-sm text-white/70">
              We sent a confirmation link to <strong className="text-white">{email}</strong>.
              Click the link in the email to unlock the full catalog.
            </p>
          </div>
          <div className="p-8 space-y-4">
            <p className="text-sm text-black/60 text-center">
              After you&apos;ve confirmed your email, click the button below.
            </p>
            <button
              onClick={handleConfirmed}
              className="w-full flex items-center justify-center gap-2 bg-crimson px-6 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              I&apos;ve Confirmed My Email
            </button>
            <p className="text-center text-[11px] text-black/40">
              Didn&apos;t get the email? Check your spam folder.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // STAGE: Access granted
  if (stage === "granted") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-10 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
          <h2 className="mt-4 font-serif text-2xl text-black">
            You&apos;re in.
          </h2>
          <p className="mt-2 text-sm text-black/60">
            Loading the full catalog...
          </p>
        </div>
      </div>
    );
  }

  // STAGE: Email form
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
            Enter your email to access all 153 courses. We&apos;ll send a
            quick confirmation — one click and you&apos;re in.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-black/50 mb-1">
              Work Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full border border-slate-300 px-4 py-3 text-sm text-black focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
              required
            />
          </div>

          {error && <p className="text-xs text-red-600">{error}</p>}

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
                Get Access
              </>
            )}
          </button>

          <p className="text-center text-[11px] text-black/40">
            We&apos;ll send one confirmation email. No spam, ever.
          </p>
        </form>
      </div>
    </div>
  );
}
