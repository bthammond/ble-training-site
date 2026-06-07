import { NextResponse } from "next/server";

import { checkRateLimit, clientIpFromHeaders } from "@/lib/rate-limit";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const SERVER = process.env.MAILCHIMP_SERVER!;

// Per-IP cap. Newsletter/lead capture should never need more than a
// handful of submissions per hour from a single IP — anything higher
// is bot abuse or a stuck form.
const SUBSCRIBE_MAX_PER_HOUR = 8;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, tag, mergeFields, website } = body ?? {};

    // Honeypot. The `website` field is rendered invisibly in our forms
    // (tabindex=-1, autocomplete=off). Real humans never fill it; bots
    // do. Silently return a success-shaped 200 so abusers don't learn
    // they were flagged.
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Check your email to confirm." });
    }

    const ip = clientIpFromHeaders(request.headers);
    const rl = await checkRateLimit(`subscribe:${ip}`, {
      max: SUBSCRIBE_MAX_PER_HOUR,
      windowMs: 60 * 60 * 1000,
    });
    if (!rl.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const tagMap: Record<string, string> = {
      pdf: "PDF Request",
      scorecard: "Scorecard Lead",
      applicant: "Proctor Applicant",
      lead: "Lead",
    };
    const tagName = tagMap[tag] || "Catalog Lead";

    // Sanitize merge field values — only forward string values, trim, cap
    // at 255 chars so a pasted novel can't break the Mailchimp payload.
    // Unknown merge-field keys are silently ignored by Mailchimp, so we
    // can send the full set without coordinating with the audience config.
    const cleanMerge: Record<string, string> = {};
    if (mergeFields && typeof mergeFields === "object") {
      for (const [k, v] of Object.entries(mergeFields)) {
        if (typeof v === "string" && v.trim().length > 0) {
          cleanMerge[k] = v.trim().slice(0, 255);
        }
      }
    }

    // Subscribe with "pending" status (triggers double opt-in)
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
          status: "pending",
          tags: [tagName],
          ...(Object.keys(cleanMerge).length > 0 && {
            merge_fields: cleanMerge,
          }),
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Check your email to confirm.",
      });
    }

    if (data.title === "Member Exists") {
      // Already subscribed — add the new tag via the tags endpoint, and
      // patch the member record so the latest LeadForm submission
      // overwrites whatever name/company/phone/etc. we had on file.
      const subscriberHash = await getSubscriberHash(email);
      if (subscriberHash) {
        const tagsCall = fetch(
          `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}/tags`,
          {
            method: "POST",
            headers: {
              Authorization: `apikey ${API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              tags: [{ name: tagName, status: "active" }],
            }),
          }
        );
        const mergeCall =
          Object.keys(cleanMerge).length > 0
            ? fetch(
                `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`,
                {
                  method: "PATCH",
                  headers: {
                    Authorization: `apikey ${API_KEY}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ merge_fields: cleanMerge }),
                }
              )
            : Promise.resolve(null);
        await Promise.all([tagsCall, mergeCall]);
      }

      return NextResponse.json({
        success: true,
        alreadySubscribed: true,
        message: "You're already confirmed. Access granted.",
      });
    }

    return NextResponse.json(
      { error: data.detail || "Something went wrong. Please try again." },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

async function getSubscriberHash(email: string): Promise<string | null> {
  // Mailchimp uses MD5 hash of lowercase email as subscriber ID
  const encoder = new TextEncoder();
  const data = encoder.encode(email.toLowerCase());
  const hashBuffer = await crypto.subtle.digest("MD5", data).catch(() => null);
  if (!hashBuffer) {
    // Fallback: use the email directly (Mailchimp also accepts this)
    return email.toLowerCase();
  }
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
