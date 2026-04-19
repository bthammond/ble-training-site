"use client";

import { useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string; // Mailchimp tag
};

export default function ResourceCard({ icon, title, description, tag }: Props) {
  const [email, setEmail] = useState("");
  const [expanded, setExpanded] = useState(false);
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
        body: JSON.stringify({ email, tag }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setMessage(
        "Check your inbox to confirm — we'll email the resource as soon as it's available."
      );
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <article className="h-full bg-white border-t-4 border-crimson shadow-sm p-8 flex flex-col">
      <div className="text-crimson">{icon}</div>
      <h3 className="mt-5 font-serif text-xl text-black leading-snug">{title}</h3>
      <p className="mt-3 text-sm text-black/70 leading-relaxed flex-1">
        {description}
      </p>

      {status === "success" ? (
        <div className="mt-6 flex items-start gap-2 text-sm">
          <CheckCircle2 className="h-5 w-5 text-crimson shrink-0 mt-0.5" />
          <p className="text-black/80">{message}</p>
        </div>
      ) : expanded ? (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            aria-label="Email address"
            className="w-full px-3 py-2.5 text-sm border border-slate-300 focus:outline-none focus:border-crimson"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 bg-crimson px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Requesting..." : "Send Me the Resource"}
          </button>
          {status === "error" && (
            <p className="text-xs text-crimson">{message}</p>
          )}
        </form>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="mt-6 inline-flex items-center gap-2 bg-crimson px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
        >
          <Download className="h-4 w-4" /> Download Free
        </button>
      )}
    </article>
  );
}
