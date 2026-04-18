"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X, Send, Loader2, ArrowRight } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ACTION_MAP: Record<string, { label: string; href: string }> = {
  scorecard: { label: "Take the Free Scorecard", href: "/scorecard" },
  catalog: { label: "Browse the Catalog", href: "/catalog" },
  contact: { label: "Talk to the Team", href: "/contact" },
  register: { label: "Register for an Exam", href: "/register" },
  careers: { label: "Apply to Be a Proctor", href: "/careers" },
};

function extractAction(text: string): { cleanText: string; action: string | null } {
  const match = text.match(/\[ACTION:([a-z]+)\]/i);
  if (!match) return { cleanText: text, action: null };
  const action = match[1].toLowerCase();
  const cleanText = text.replace(/\[ACTION:[a-z]+\]/i, "").trim();
  return { cleanText, action };
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the BLE assistant. Ask me anything about our training, consulting, testing centers, or career openings — or tell me what you're trying to solve and I'll point you in the right direction.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage || loading) return;

    setInput("");
    setError("");
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      if (data.message) {
        setMessages([...newMessages, { role: "assistant", content: data.message }]);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat assistant"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-white shadow-2xl hover:bg-crimson-soft transition-all hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-40 w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] max-h-[calc(100vh-3rem)] bg-white shadow-2xl border border-slate-200 rounded-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-crimson">
                <MessageCircle className="h-4 w-4 text-crimson" />
              </div>
              <div>
                <p className="text-sm font-bold">BLE Assistant</p>
                <p className="text-[11px] text-white/60">Usually replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F7F7F7]">
            {messages.map((msg, i) => {
              const { cleanText, action } = msg.role === "assistant"
                ? extractAction(msg.content)
                : { cleanText: msg.content, action: null };
              const actionInfo = action ? ACTION_MAP[action] : null;

              return (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-crimson text-white"
                        : "bg-white text-black border border-slate-200"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{cleanText}</p>
                    {actionInfo && (
                      <Link
                        href={actionInfo.href}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson hover:text-crimson-soft"
                      >
                        {actionInfo.label}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-black border border-slate-200 rounded-lg px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-crimson" />
                </div>
              </div>
            )}

            {error && (
              <div className="text-center text-xs text-red-600">{error}</div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                disabled={loading}
                className="flex-1 border border-slate-300 px-3 py-2 text-sm focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson/20 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="shrink-0 flex items-center justify-center h-10 w-10 bg-crimson text-white hover:bg-crimson-soft transition-colors disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-[10px] text-black/40 text-center">
              Powered by AI. For urgent matters, call 1-877-879-2531.
            </p>
          </form>
        </div>
      )}
    </>
  );
}
