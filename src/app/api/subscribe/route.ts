import { NextResponse } from "next/server";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const SERVER = process.env.MAILCHIMP_SERVER!; // e.g. "us22"

export async function POST(request: Request) {
  try {
    const { email, firstName, phone } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Subscribe to Mailchimp with "pending" status (double opt-in)
    // Mailchimp will automatically send the confirmation email
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
          status: "pending", // This triggers double opt-in confirmation email
          merge_fields: {
            FNAME: firstName || "",
            PHONE: phone || "",
          },
          tags: ["Catalog Lead"],
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Check your email to confirm your subscription.",
      });
    }

    // Handle "already subscribed" case
    if (data.title === "Member Exists") {
      return NextResponse.json({
        success: true,
        alreadySubscribed: true,
        message: "You're already subscribed. Access granted.",
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
