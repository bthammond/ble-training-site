import { NextResponse } from "next/server";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const SERVER = process.env.MAILCHIMP_SERVER!;

export async function POST(request: Request) {
  try {
    const { email, tag } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const tagMap: Record<string, string> = {
      pdf: "PDF Request",
      scorecard: "Scorecard Lead",
    };
    const tagName = tagMap[tag] || "Catalog Lead";

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
      // Already subscribed — add the new tag via the tags endpoint
      const subscriberHash = await getSubscriberHash(email);
      if (subscriberHash) {
        await fetch(
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
