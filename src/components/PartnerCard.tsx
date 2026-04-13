"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ExternalLink, X, ShieldCheck, AlertCircle } from "lucide-react";
import type { Partner } from "@/lib/partners";

type LogoStage = "local" | "cdn" | "fallback";

export default function PartnerCard({ partner }: { partner: Partner }) {
  const [stage, setStage] = useState<LogoStage>("local");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModalOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const placeholderText = encodeURIComponent(partner.name);
  const logoSrc =
    stage === "local"
      ? partner.logoSrc
      : stage === "cdn"
      ? `https://via.placeholder.com/220x70/e5e7eb/000000?text=${placeholderText}`
      : null;

  return (
    <>
      <article className="group h-full flex flex-col bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="px-6 pt-8 pb-6 flex flex-col flex-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson">
            Authorized Partner
          </span>

          <div className="mt-4 flex items-center justify-center h-24">
            {logoSrc ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={logoSrc}
                alt={`${partner.name} logo`}
                onError={() =>
                  setStage((s) => (s === "local" ? "cdn" : "fallback"))
                }
                className="max-h-16 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            ) : (
              <span
                aria-hidden
                className="flex h-16 w-16 items-center justify-center border-2 border-black text-black font-serif text-xl font-bold"
              >
                {partner.initials}
              </span>
            )}
          </div>

          {/* Partner name — black, underlined */}
          <h3 className="mt-4 font-serif text-xl text-black text-center leading-tight">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setModalOpen(true)}
              className="underline underline-offset-4 decoration-2 hover:text-crimson hover:decoration-crimson transition-colors"
            >
              {partner.name}
            </a>
          </h3>
          <p className="mt-2 text-sm text-black/70 text-center leading-relaxed flex-1">
            {partner.tagline}
          </p>

          {/* CTA — white / black border / black text → crimson fill on hover */}
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setModalOpen(true)}
            className="btn-outline mt-6 w-full"
          >
            Register for Exam
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </article>

      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`partner-modal-${partner.slug}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <button
            aria-label="Close overlay"
            onClick={() => setModalOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-lg bg-white border-t-4 border-crimson shadow-2xl">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 p-1.5 text-black/60 hover:text-black transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="px-8 pt-8 pb-8">
              <div className="flex items-center gap-2 text-crimson">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                  Authorized Partner Registration
                </span>
              </div>
              <h2
                id={`partner-modal-${partner.slug}`}
                className="mt-3 font-serif text-3xl text-black leading-tight"
              >
                You are currently registering with{" "}
                <span className="text-crimson">{partner.name}</span>.
              </h2>
              <div className="mt-6 h-px bg-slate-200" />
              <div className="mt-6 flex gap-3">
                <AlertCircle className="h-5 w-5 shrink-0 text-crimson mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-crimson">
                    BLE Training Center Reminder
                  </p>
                  <p className="mt-2 text-sm text-black leading-relaxed">
                    Bring <strong>2 forms of valid ID</strong> and arrive{" "}
                    <strong>15 minutes early</strong>. Registration has been
                    opened in a new tab — complete it there, then return here
                    when you&apos;re ready.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/register/checklist"
                  onClick={() => setModalOpen(false)}
                  className="btn-outline flex-1"
                >
                  View full checklist
                </Link>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="inline-flex items-center justify-center flex-1 border-2 border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-slate-50 transition-colors"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
