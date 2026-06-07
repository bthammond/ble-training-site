/**
 * Server-side email notification helper.
 *
 * Wraps Resend with the "graceful no-op if RESEND_API_KEY missing"
 * pattern used across the rest of the BLE infrastructure. Failure
 * to send never fails the calling request — the marketing form's
 * Mailchimp record is the durable lead capture; this is the
 * "ping the inbox so Brian sees it today" path.
 */

import { Resend } from "resend";

type SendArgs = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

export type SendResult =
  | { ok: true; id: string | null }
  | { ok: false; error: string };

let cached: Resend | null | undefined;

function getClient(): Resend | null {
  if (cached !== undefined) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    cached = null;
    return null;
  }
  cached = new Resend(key);
  return cached;
}

export async function sendNotification(args: SendArgs): Promise<SendResult> {
  const client = getClient();
  const from =
    process.env.RESEND_FROM_EMAIL ?? "BLE Training <no-reply@ble.training>";

  if (!client) {
    console.info("[notify skipped — RESEND_API_KEY not set]", {
      to: args.to,
      subject: args.subject,
    });
    return { ok: true, id: null };
  }

  try {
    const result = await client.emails.send({
      from,
      to: args.to,
      subject: args.subject,
      html: args.html,
      text: args.text,
      replyTo: args.replyTo,
    });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return { ok: true, id: result.data?.id ?? null };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown send error",
    };
  }
}
