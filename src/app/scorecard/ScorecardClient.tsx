"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Send,
  Loader2,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

import HoneypotField from "@/components/HoneypotField";

/* Map each scorecard category to a recommended BLE commercial offer
   and next step, surfaced when the score is below 70%. */
const RECOMMENDATIONS: Record<
  string,
  {
    headline: string;
    diagnosis: string;
    whyItMatters: string;
    nextSteps: string[];
    offer: string;
    offerHref: string;
    offerCta: string;
    learnMoreHref?: string;
  }
> = {
  Succession: {
    headline: "Your score suggests a succession risk.",
    diagnosis: "The business relies on key individuals without a documented path forward. Leadership and ownership transitions are one of the most common causes of value loss in growing businesses.",
    whyItMatters: "Without a plan, leadership transitions become crises. The earlier you build a succession roadmap, the more options you have.",
    nextSteps: [
      "Document what the business depends on you for, specifically.",
      "Identify potential successors and their readiness gaps.",
      "Begin a confidential succession readiness review.",
    ],
    offer: "Family Business Succession Readiness Assessment",
    offerHref: "/consulting",
    offerCta: "Start Succession Assessment",
    learnMoreHref: "/consulting#family",
  },
  Team: {
    headline: "Your score suggests a team performance gap.",
    diagnosis: "Managers were likely promoted from strong individual contributors without formal leadership development. The business is running on personal relationships rather than systems.",
    whyItMatters: "A team that can't lead without direct supervision puts a ceiling on every growth initiative.",
    nextSteps: [
      "Identify which managers need the most development.",
      "Build a role-specific training path for frontline leaders.",
      "Create a coaching rhythm to reinforce new behaviors.",
    ],
    offer: "Custom Team Training Plan",
    offerHref: "/contact",
    offerCta: "Request a Team Training Plan",
    learnMoreHref: "/how-we-work",
  },
  Operations: {
    headline: "Your score suggests operational drag.",
    diagnosis: "Key processes live in people's heads. Decisions escalate to the owner. The business can't scale because it can't operate consistently without the people who built it.",
    whyItMatters: "Operational drag compounds — it's the hidden tax on every growth initiative.",
    nextSteps: [
      "Document your three most critical business processes.",
      "Identify where decisions regularly get stuck.",
      "Clarify accountability for recurring operational problems.",
    ],
    offer: "Business Health Diagnostic",
    offerHref: "/contact",
    offerCta: "Request a Diagnostic",
  },
  Growth: {
    headline: "Your score suggests a growth readiness gap.",
    diagnosis: "The business may have goals but lacks the leadership systems and operating discipline to execute them consistently. Growth without structure usually creates more chaos.",
    whyItMatters: "Unmanaged growth can damage the culture and margins you've already built.",
    nextSteps: [
      "Write a one-page growth plan with owners for each major goal.",
      "Review whether your current team has the capacity to execute.",
      "Identify the one constraint most holding back your growth.",
    ],
    offer: "Business Health Diagnostic",
    offerHref: "/contact",
    offerCta: "Request a Diagnostic",
  },
  "Family/Ownership": {
    headline: "Your score suggests a leadership bottleneck.",
    diagnosis: "The business is relying on a few key people to make too many decisions, while managers lack the structure or training to lead consistently.",
    whyItMatters: "Owner dependency is the most common growth ceiling in mid-market companies.",
    nextSteps: [
      "Clarify which decisions can be delegated immediately.",
      "Define roles and meeting rhythms that support independent management.",
      "Build a leadership system your team can run.",
    ],
    offer: "Leadership Operating System Sprint",
    offerHref: "/consulting",
    offerCta: "Build Your Leadership System",
    learnMoreHref: "/consulting",
  },
};

/* ── Questions ────────────────────────────────────────────── */
const QUESTIONS = [
  {
    id: 1,
    category: "Succession",
    question: "Do you have a written succession or transition plan for the business?",
    options: [
      { label: "Yes — documented and shared with key stakeholders", score: 10 },
      { label: "We've discussed it but nothing is written down", score: 5 },
      { label: "No — we haven't started this conversation", score: 0 },
    ],
  },
  {
    id: 2,
    category: "Succession",
    question: "If you stepped away from the business for 90 days, would it run without you?",
    options: [
      { label: "Yes — leadership is in place and systems are documented", score: 10 },
      { label: "Partially — some things would stall", score: 5 },
      { label: "No — the business depends on me for most decisions", score: 0 },
    ],
  },
  {
    id: 3,
    category: "Team",
    question: "How confident are you in your current management team?",
    options: [
      { label: "Very confident — they operate independently", score: 10 },
      { label: "Somewhat confident — they need coaching", score: 5 },
      { label: "Not confident — I'm doing most of the leading", score: 0 },
    ],
  },
  {
    id: 4,
    category: "Team",
    question: "Do you have a structured onboarding and training process for new hires?",
    options: [
      { label: "Yes — documented and consistent", score: 10 },
      { label: "Informal — it depends on who's training them", score: 5 },
      { label: "No — people figure it out as they go", score: 0 },
    ],
  },
  {
    id: 5,
    category: "Operations",
    question: "Are your key business processes documented and repeatable?",
    options: [
      { label: "Yes — SOPs exist for most critical functions", score: 10 },
      { label: "Some are — but knowledge lives in people's heads", score: 5 },
      { label: "No — most processes are ad hoc", score: 0 },
    ],
  },
  {
    id: 6,
    category: "Operations",
    question: "How would you describe your team's ability to handle conflict or difficult decisions?",
    options: [
      { label: "Strong — we have frameworks for decision-making", score: 10 },
      { label: "Average — we get through it but it's messy", score: 5 },
      { label: "Weak — conflict is avoided or escalates to me", score: 0 },
    ],
  },
  {
    id: 7,
    category: "Growth",
    question: "Do you have a written growth plan for the next 3-5 years?",
    options: [
      { label: "Yes — with specific goals, timelines, and owners", score: 10 },
      { label: "We have goals but no formal plan", score: 5 },
      { label: "No — we're focused on day-to-day", score: 0 },
    ],
  },
  {
    id: 8,
    category: "Growth",
    question: "Are you actively investing in leadership development for your team?",
    options: [
      { label: "Yes — regular training and coaching programs", score: 10 },
      { label: "Occasionally — when budget allows", score: 5 },
      { label: "No — training isn't a priority right now", score: 0 },
    ],
  },
  {
    id: 9,
    category: "Family/Ownership",
    question: "If family is involved in the business, are roles and responsibilities clearly defined?",
    options: [
      { label: "Yes — governance structure is in place", score: 10 },
      { label: "Somewhat — but boundaries blur", score: 5 },
      { label: "No — family dynamics complicate decisions", score: 0 },
      { label: "N/A — no family involvement", score: 10 },
    ],
  },
  {
    id: 10,
    category: "Overall",
    question: "On a scale, how prepared do you feel for the next major transition in your business?",
    options: [
      { label: "Very prepared — we've planned for it", score: 10 },
      { label: "Somewhat prepared — we know what's coming but haven't acted", score: 5 },
      { label: "Not prepared — we'll deal with it when it happens", score: 0 },
    ],
  },
];

/* ── Score interpretation ─────────────────────────────────── */
function getStage(score: number) {
  if (score >= 80)
    return {
      label: "Growth-Ready",
      color: "text-green-600",
      bg: "bg-green-50 border-green-200",
      icon: TrendingUp,
      summary:
        "Your business has strong fundamentals. You've built systems, developed leadership, and planned ahead. The next step is acceleration — scaling what works and preparing for what's next.",
      cta: "Let's talk about taking your business to the next level.",
    };
  if (score >= 50)
    return {
      label: "Building Momentum",
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
      icon: CheckCircle2,
      summary:
        "You've made progress, but there are gaps — in documentation, team capability, or transition planning — that could slow you down or create risk. The foundation is there, but it needs reinforcement.",
      cta: "A focused conversation could help you prioritize the right next moves.",
    };
  return {
    label: "Leader-Dependent",
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
    icon: AlertTriangle,
    summary:
      "Your business depends heavily on you. Key processes aren't documented, succession hasn't been addressed, and the team may not be equipped to operate without your direct involvement. This is common — but it's also a risk.",
    cta: "We've helped hundreds of businesses move past this stage. Let's talk.",
  };
}

/* ── Component ────────────────────────────────────────────── */
export default function ScorecardClient() {
  const [step, setStep] = useState(0); // 0 = intro, 1-10 = questions, 11 = email, 12 = results
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [captureFields, setCaptureFields] = useState({ name: "", company: "", companySize: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = QUESTIONS[step - 1];
  const totalScore = answers.reduce((sum, a) => sum + a, 0);
  const maxScore = totalQuestions * 10;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const stage = getStage(percentage);

  const handleAnswer = (score: number) => {
    setAnswers([...answers, score]);
    if (step < totalQuestions) {
      setStep(step + 1);
    } else {
      setStep(11); // email capture
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setAnswers(answers.slice(0, -1));
      setStep(step - 1);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.replace(/[\r\n]/g, "").trim();
    if (!cleanEmail) return;

    setSending(true);
    setError("");

    const [first, ...rest] = (captureFields.name || "").split(/\s+/);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: cleanEmail,
          tag: "scorecard",
          website,
          mergeFields: {
            FNAME: first || "",
            LNAME: rest.join(" "),
            COMPANY: captureFields.company || "",
            COMPSIZE: captureFields.companySize || "",
          },
        }),
      });
      setStep(12);
    } catch {
      setError("Connection error. Showing results anyway.");
      setStep(12);
    } finally {
      setSending(false);
    }
  };

  /* ── INTRO ─────────────────────────────────────────────── */
  if (step === 0) {
    return (
      <>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24 md:py-32 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Free Assessment
            </span>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl text-white leading-tight">
              Business<br />
              <span className="text-crimson">Health Scorecard</span>
            </h1>
            <div className="mx-auto mt-6 h-1 w-16 bg-crimson" />
            <p className="mt-8 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              10 questions. 2 minutes. Find out where your business stands
              on succession, team performance, operations, and growth — and
              what to focus on next.
            </p>
            <button
              onClick={() => setStep(1)}
              className="mt-10 inline-flex items-center gap-2 bg-crimson px-10 py-5 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
            >
              Start the Assessment <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-6 text-sm text-white/70">
              No cost. No obligation. Your results are private.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { emoji: "🎯", title: "10 Questions", desc: "Covering the areas that matter most for growing businesses." },
                { emoji: "📊", title: "Instant Score", desc: "See where you stand across succession, team, ops, and growth." },
                { emoji: "🗺️", title: "Clear Next Steps", desc: "Know exactly what to focus on — before we ever talk." },
              ].map((item) => (
                <div key={item.title}>
                  <span className="text-3xl">{item.emoji}</span>
                  <h3 className="mt-3 font-serif text-xl text-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-black/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  /* ── QUESTIONS ──────────────────────────────────────────── */
  if (step >= 1 && step <= totalQuestions) {
    return (
      <section className="bg-[#F7F7F7] min-h-[80vh] flex items-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 w-full">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs text-black/50 mb-2">
              <span>Question {step} of {totalQuestions}</span>
              <span className="font-bold uppercase tracking-wider text-crimson">
                {currentQuestion.category}
              </span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-crimson transition-all duration-500"
                style={{ width: `${(step / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="font-serif text-2xl md:text-4xl text-black leading-tight">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="mt-8 space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAnswer(option.score)}
                className="w-full text-left bg-white border-2 border-slate-200 px-6 py-5 hover:border-crimson hover:bg-white transition-all group"
              >
                <span className="text-black group-hover:text-crimson transition-colors">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* Back button */}
          {step > 1 && (
            <button
              onClick={handleBack}
              className="mt-6 inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Previous question
            </button>
          )}
        </div>
      </section>
    );
  }

  /* ── EMAIL CAPTURE ──────────────────────────────────────── */
  if (step === 11) {
    return (
      <section className="bg-black text-white min-h-[80vh] flex items-center">
        <div className="mx-auto max-w-lg px-6 lg:px-8 py-20 w-full">
          <ClipboardCheck className="mx-auto h-12 w-12 text-crimson" />
          <h2 className="mt-6 font-serif text-3xl md:text-4xl text-white text-center">
            Your scorecard is ready.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed text-center">
            Enter your details to see your results and get a personalized
            summary of where your business stands.
          </p>

          <form onSubmit={handleEmailSubmit} className="mt-8 space-y-4">
            <HoneypotField value={website} onChange={setWebsite} />
            <input
              type="text"
              value={captureFields.name}
              onChange={(e) => setCaptureFields({ ...captureFields, name: e.target.value })}
              placeholder="Your name"
              className="w-full border border-white/20 bg-white/10 px-4 py-4 text-sm text-white placeholder-white/40 focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30"
            />
            <input
              type="text"
              value={captureFields.company}
              onChange={(e) => setCaptureFields({ ...captureFields, company: e.target.value })}
              placeholder="Company name"
              className="w-full border border-white/20 bg-white/10 px-4 py-4 text-sm text-white placeholder-white/40 focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              required
              className="w-full border border-white/20 bg-white/10 px-4 py-4 text-sm text-white placeholder-white/40 focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30"
            />
            <select
              value={captureFields.companySize}
              onChange={(e) => setCaptureFields({ ...captureFields, companySize: e.target.value })}
              className="w-full border border-white/20 bg-black/80 px-4 py-4 text-sm text-white placeholder-white/40 focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30"
            >
              <option value="">Company size (optional)</option>
              {["1–24 employees", "25–99 employees", "100–249 employees", "250–500 employees", "500+ employees"].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {error && <p className="text-xs text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 bg-crimson px-6 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors disabled:opacity-60"
            >
              {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Send className="h-4 w-4" /> See My Results</>}
            </button>
          </form>

          <p className="mt-4 text-[11px] text-white/30 text-center">
            No spam. Your results are private.
          </p>
        </div>
      </section>
    );
  }

  /* ── RESULTS ────────────────────────────────────────────── */
  const StageIcon = stage.icon;

  return (
    <>
      <section className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Your Results
          </span>
          <div
            role="status"
            aria-label={`Score ${percentage} percent`}
            className="mt-4 font-serif text-5xl md:text-7xl text-white"
          >
            {percentage}<span className="text-crimson">%</span>
          </div>
          <div className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2 border ${stage.bg}`}>
            <StageIcon className={`h-5 w-5 ${stage.color}`} />
            <span className={`text-sm font-bold uppercase tracking-wider ${stage.color}`}>
              {stage.label}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          {/* Score breakdown */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl text-black">What this means.</h2>
            <div className="mt-4 h-px w-24 bg-crimson" />
            <p className="mt-6 text-lg text-black/80 leading-relaxed">
              {stage.summary}
            </p>
          </div>

          {/* Category scores */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl text-black mb-6">Your scores by area</h3>
            {["Succession", "Team", "Operations", "Growth", "Family/Ownership", "Overall"].map((cat) => {
              const catQuestions = QUESTIONS.filter((q) => q.category === cat);
              if (catQuestions.length === 0) return null;
              const catScore = catQuestions.reduce((sum, q, i) => {
                const qIndex = QUESTIONS.indexOf(q);
                return sum + (answers[qIndex] || 0);
              }, 0);
              const catMax = catQuestions.length * 10;
              const catPct = Math.round((catScore / catMax) * 100);
              return (
                <div key={cat} className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-semibold text-black">{cat}</span>
                    <span className={catPct >= 70 ? "text-green-600" : catPct >= 40 ? "text-amber-600" : "text-red-600"}>
                      {catPct}%
                    </span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        catPct >= 70 ? "bg-green-500" : catPct >= 40 ? "bg-amber-500" : "bg-red-500"
                      }`}
                      style={{ width: `${catPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recommended next steps — only show cards for categories that
              scored below 70%. Route to BLE commercial offers. */}
          {(() => {
            const weakCats = ["Succession", "Team", "Operations", "Growth", "Family/Ownership"]
              .filter((cat) => RECOMMENDATIONS[cat])
              .map((cat) => {
                const catQuestions = QUESTIONS.filter((q) => q.category === cat);
                if (catQuestions.length === 0) return null;
                const catScore = catQuestions.reduce((sum, q) => {
                  const qIndex = QUESTIONS.indexOf(q);
                  return sum + (answers[qIndex] || 0);
                }, 0);
                const catPct = Math.round((catScore / (catQuestions.length * 10)) * 100);
                return catPct < 70 ? { cat, catPct } : null;
              })
              .filter((x): x is { cat: string; catPct: number } => x !== null);

            if (weakCats.length === 0) return null;

            // Show only the lowest-scoring (most critical) recommendation
            const primary = weakCats[0];
            const rec = RECOMMENDATIONS[primary.cat];

            return (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-crimson" />
                  <h3 className="font-serif text-2xl text-black">
                    Recommended next steps
                  </h3>
                </div>

                <div className="bg-slate-50 border-t-4 border-crimson p-6 md:p-8">
                  <h4 className="font-serif text-xl text-black">
                    {rec.headline}
                  </h4>
                  <p className="mt-3 text-base text-black/80 leading-relaxed">
                    {rec.diagnosis}
                  </p>
                  <p className="mt-2 text-sm text-black/60 italic">
                    {rec.whyItMatters}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-crimson mb-2">
                      3 practical next steps
                    </p>
                    <ol className="space-y-2">
                      {rec.nextSteps.map((step, i) => (
                        <li key={step} className="flex items-start gap-3 text-sm text-black/70">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson text-white text-[10px] font-bold">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-black/50 mb-1">
                      Recommended BLE offer
                    </p>
                    <p className="text-base font-serif font-semibold text-black mb-3">
                      {rec.offer}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={rec.offerHref}
                        className="inline-flex items-center gap-2 bg-crimson px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
                      >
                        {rec.offerCta} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {rec.learnMoreHref && (
                        <Link
                          href={rec.learnMoreHref}
                          className="inline-flex items-center gap-2 border border-black/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black hover:border-crimson hover:text-crimson transition-colors"
                        >
                          Learn More <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional weak areas */}
                {weakCats.length > 1 && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {weakCats.slice(1).map(({ cat }) => {
                      const r = RECOMMENDATIONS[cat];
                      return (
                        <div key={cat} className="bg-white border border-slate-200 p-4 flex items-start gap-3">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-black">{r.headline}</p>
                            <p className="mt-1 text-xs text-black/60 leading-relaxed">{r.diagnosis.split(".")[0]}.</p>
                          </div>
                          <Link href={r.offerHref} className="shrink-0 text-xs font-bold text-crimson hover:text-crimson-soft">
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })()}

          {/* CTA */}
          <div className="bg-black text-white p-10 md:p-14 text-center border-t-4 border-crimson">
            <h2 className="font-serif text-3xl text-white">
              {stage.cta}
            </h2>
            <p className="mt-4 text-white/70 max-w-lg mx-auto">
              We&apos;ve helped hundreds of businesses strengthen
              their teams, plan transitions, and grow with confidence.
              It starts with a 30-minute conversation — no pitch deck, no pressure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
              >
                Schedule a 30-Minute Growth Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/consulting"
                className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Request Your Scorecard Report
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
