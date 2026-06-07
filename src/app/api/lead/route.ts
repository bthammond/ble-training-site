import { NextResponse } from "next/server";

import { checkRateLimit, clientIpFromHeaders } from "@/lib/rate-limit";
import { sendNotification } from "@/lib/notify";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const SERVER = process.env.MAILCHIMP_SERVER!;
const NOTIFY_TO = process.env.LEAD_NOTIFY_EMAIL ?? "info@ble.training";

/**
 * POST /api/lead
 *
 * Real server-side lead intake. Replaces the prior LeadForm flow,
 * which depended on the visitor having a working mailto: handler to
 * deliver the inquiry. Two side-effects:
 *
 *   1. Push the lead into Mailchimp as a "Lead" tag with the buyer's
 *      full context as merge fields. Durable record — survives even
 *      if the email notification path fails.
 *   2. Send Brian a notification email via Resend with the lead's
 *      full context. Replaces the mailto: that mobile browsers
 *      routinely fail to launch.
 *
 * Per-IP rate-limited at 4/hr because lead form submissions are
 * low-volume by nature; anything higher is bot abuse.
 *
 * Honeypot check on `website` field — silent success on hit.
 *
 * Failure mode: if Mailchimp returns an error the route returns 400
 * with a friendly message so the client can show inline error. If
 * Resend fails but Mailchimp succeeded, we still return 200 — the
 * lead landed in Mailchimp's record and a missing inbox notification
 * isn't worth losing the user's trust at the form.
 */

const RATE_LIMIT_MAX = 4;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

interface LeadBody {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  interest?: string;
  companySize?: string;
  timeline?: string;
  message?: string;
  website?: string; // honeypot
}

export async function POST(request: Request) {
  const ip = clientIpFromHeaders(request.headers);
  const rl = await checkRateLimit(`lead:${ip}`, {
    max: RATE_LIMIT_MAX,
    windowMs: RATE_LIMIT_WINDOW_MS,
  });
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec) },
      },
    );
  }

  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  // Honeypot. Silent fake-success on hit so bots don't learn they were flagged.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const clean = (s?: string) =>
    (s ?? "").replace(/[\r\n]/g, " ").trim().slice(0, 500);
  const name = clean(body.name);
  const email = clean(body.email);
  const company = clean(body.company);
  const phone = clean(body.phone);
  const interest = clean(body.interest);
  const companySize = clean(body.companySize);
  const timeline = clean(body.timeline);
  const message = (body.message ?? "").trim().slice(0, 2000);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }
  if (!name) {
    return NextResponse.json(
      { error: "Please include your name." },
      { status: 400 },
    );
  }

  const [first, ...rest] = name.split(/\s+/);

  // 1. Push to Mailchimp as a "Lead" tag with full context.
  let mailchimpOk = false;
  try {
    const response = await fetch(
      `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          tags: ["Lead"],
          merge_fields: {
            FNAME: first || "",
            LNAME: rest.join(" "),
            COMPANY: company,
            PHONE: phone,
            INTEREST: interest,
            COMPSIZE: companySize,
            TIMELINE: timeline,
            MESSAGE: message,
          },
        }),
      },
    );
    const data = await response.json();
    if (response.ok || data?.title === "Member Exists") {
      mailchimpOk = true;
    } else {
      console.error("[lead] Mailchimp error:", data?.detail ?? data);
    }
  } catch (err) {
    console.error("[lead] Mailchimp request failed:", err);
  }

  if (!mailchimpOk) {
    return NextResponse.json(
      {
        error:
          "We hit an issue saving your inquiry. Please email info@ble.training directly — we'll get back to you within one business day.",
      },
      { status: 502 },
    );
  }

  // 2. Notify Brian via Resend (best-effort — Mailchimp record is
  // already saved at this point, so a Resend miss isn't fatal).
  const subjectLine = `New Lead — ${interest || "Inquiry"} — ${name}`;
  const lines = [
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Primary Need: ${interest || "Not provided"}`,
    `Company Size: ${companySize || "Not provided"}`,
    `Timeline: ${timeline || "Not provided"}`,
    `Message: ${message || "(none)"}`,
    "",
    `Submitted: ${new Date().toISOString()}`,
    `IP: ${ip}`,
  ];
  const html = `<div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
  <h2 style="margin:0 0 12px;font-size:18px">New lead from www.ble.training</h2>
  <pre style="background:#f5f5f5;border:1px solid #e5e5e5;padding:16px;border-radius:6px;white-space:pre-wrap;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px;line-height:1.5">${lines.join("\n")}</pre>
</div>`;
  const text = lines.join("\n");

  const notifyResult = await sendNotification({
    to: NOTIFY_TO,
    subject: subjectLine,
    html,
    text,
    replyTo: email,
  });
  if (!notifyResult.ok) {
    // Mailchimp landed; just log the notification miss and continue.
    console.warn("[lead] Resend notify failed:", notifyResult.error);
  }

  return NextResponse.json({ ok: true });
}
