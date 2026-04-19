"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  headline?: string;
  subhead?: string;
};

export default function NewsletterForm({
  variant = "light",
  headline = "Insights for business leaders, delivered monthly.",
  subhead = "One email a month. New articles, practical thinking, no noise.",
}: Props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tag: "newsletter", firstName }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setMessage(
        "Check your inbox to confirm your subscription. (You may need to check spam.)"
      );
      setEmail("");
      setFirstName("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const isDark = variant === "dark";

  return (
    <div
      className={`border-t-4 border-crimson p-8 md:p-10 ${
        isDark ? "bg-black text-white" : "bg-white"
      }`}
    >
      <h3
        className={`font-serif text-2xl md:text-3xl leading-tight ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {headline}
      </h3>
      <p className={`mt-2 text-sm ${isDark ? "text-white/70" : "text-black/60"}`}>
        {subhead}
      </p>

      {status === "success" ? (
        <div className="mt-5 flex items-start gap-3 text-sm">
          <CheckCircle2 className="h-5 w-5 text-crimson shrink-0 mt-0.5" />
          <p className={isDark ? "text-white/90" : "text-black/80"}>{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            aria-label="First name"
            className={`flex-1 px-4 py-3 text-sm border focus:outline-none focus:border-crimson ${
              isDark
                ? "bg-white/10 border-white/30 text-white placeholder-white/50"
                : "bg-white border-slate-300 text-black placeholder-black/40"
            }`}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            aria-label="Email address"
            className={`flex-1 px-4 py-3 text-sm border focus:outline-none focus:border-crimson ${
              isDark
                ? "bg-white/10 border-white/30 text-white placeholder-white/50"
                : "bg-white border-slate-300 text-black placeholder-black/40"
            }`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 bg-crimson px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
            {status !== "loading" && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-crimson">{message}</p>
      )}
    </div>
  );
}
