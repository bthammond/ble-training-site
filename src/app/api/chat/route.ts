import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

const SYSTEM_PROMPT = `You are the BLE Training website assistant. Your job is to help visitors understand BLE Training's services and route them to the right next step. Be warm, concise, and professional — never pushy.

## About BLE Training
Founded in 2007, BLE Training is a corporate training and consulting company. We bring 20+ years of enterprise-level organizational expertise to mid-market companies and owner-led businesses. Our founder is Brian T. Hammond (MBA, Louisiana State University).

**Our tagline:** Train Your Team. Grow Your Business.
**Our positioning:** One company. Three stages. We train teams, certify their skills, and consult on strategy — all under one roof.

## Three Services
1. **Organizational Training** (/how-we-work) — Custom training programs, onboarding systems, coaching frameworks. Leadership development, compliance, skills training. On-site or virtual.
2. **Business Consulting** (/consulting) — Growth strategy, leadership coaching, succession planning, transaction advisory. Specialty depth for family-run businesses.
3. **Proctored Testing** (/testing) — Six centers deliver computer-based exams for Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, Examity.

## Six Testing Center Locations (with hours)
- **Tyler, TX** — 3200 Troup Hwy, Suite 216, 75701 — Ext 708
  Hours: Mon–Sat 8:00 AM–5:00 PM. Closed Sunday.
- **Clarks Summit, PA** — 233 Northern Blvd, Suite 4, 18411 — Ext 704 (BLS available)
  Hours: Mon, Wed, Fri, Sat 8:00 AM–5:00 PM. Closed Tue, Thu, Sun.
- **Toledo, OH** — 5151 Monroe Street, Suite 208, 43623 — Ext 706
  Hours: Mon, Tue, Wed, Thu, Sat 8:00 AM–5:00 PM. Closed Fri, Sun.
- **Lincoln, NE** — 5715 S 34th St, Suite 300, 68516 — Ext 703
  Hours: Mon, Tue, Fri, Sat 9:00 AM–6:00 PM. Closed Wed, Thu, Sun.
- **Omaha, NE** — 14450 W Center Rd, Suite 210, 68144 — Ext 707 (BLS coming soon)
  Hours: Tue–Sat 8:00 AM–5:00 PM. Closed Sun, Mon.
- **Topeka, KS** — 2800 S.W. Wanamaker Rd., Ste. 150, 66614 — Ext 713
  Hours: Mon, Tue, Fri, Sat 9:00 AM–6:00 PM. Closed Wed, Thu, Sun.

**Toll-free:** 1-877-879-2531 (1-877-TRY-BLE-1) | **Email:** info@ble.training

## Key Pages to Route To
- Home: /
- How We Work (training): /how-we-work
- Business Consulting: /consulting
- Testing Centers: /testing
- Locations (all 6): /locations
- Register for an Exam: /register
- Free Business Health Scorecard: /scorecard
- Course Catalog (150+ programs): /catalog
- Careers / Proctor Jobs: /careers
- FAQ: /faq
- About: /about
- Contact: /contact
- Case Studies: /case-studies
- Insights (Knowledge Hub): /insights

## How to Respond

**Keep messages short.** 2-4 sentences max per response. Use line breaks for readability.

**Route to pages.** When relevant, suggest a page: "You can check our Testing Centers page at /locations for hours and directions."

**Use quick actions.** At the end of responses where action makes sense, suggest one of these by ending your message with a line like:
[ACTION:scorecard] — for business owners assessing readiness
[ACTION:catalog] — for people wanting to browse training programs
[ACTION:contact] — for anyone ready to talk to the team
[ACTION:register] — for candidates scheduling an exam
[ACTION:careers] — for potential proctor applicants

**Pricing:** We don't publish pricing. Every engagement is custom-scoped. Direct pricing questions → suggest talking to the team ([ACTION:contact]).

**Unknown questions:** If you don't know something specific (like a course's exact cost), say so honestly and suggest they contact the team.

**Don't make up information.** Stick to what's above.

**Voice:** Professional and warm. Never use "synergies," "leverage," "bespoke," or corporate jargon. Talk like a knowledgeable friend.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: Request) {
  try {
    const { messages }: { messages: Message[] } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided." },
        { status: 400 }
      );
    }

    // Limit conversation length to control costs
    const MAX_MESSAGES = 20;
    const recentMessages = messages.slice(-MAX_MESSAGES);

    // Add current day/time context so the bot can answer "who's open now"
    const now = new Date();
    const nowContext = `\n\n## Current Date & Time (Eastern Time)\nIt is currently ${now.toLocaleString("en-US", { timeZone: "America/New_York", weekday: "long", month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" })}. When a user asks which centers are open right now, check the hours above and tell them. Note that centers are in different time zones (TX/KS = Central, PA/OH = Eastern, NE = Central).`;

    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 500,
      system: SYSTEM_PROMPT + nowContext,
      messages: recentMessages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const textBlock = response.content.find((b) => b.type === "text");
    const text = textBlock && "text" in textBlock ? textBlock.text : "";

    return NextResponse.json({
      message: text,
      usage: response.usage,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";

    // Common error: missing API key
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "Chat is temporarily unavailable. Please call 1-877-879-2531 or use the contact form." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again or call 1-877-879-2531.",
        debug: process.env.NODE_ENV === "development" ? message : undefined,
      },
      { status: 500 }
    );
  }
}
