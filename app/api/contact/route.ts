// app/api/contact/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { z } from "zod";
import { createHash } from "crypto";
import { appendFile, stat, writeFile } from "fs/promises";
import os from "os";
import path from "path";

import { sendContactEmail, sendAutoReply } from "@/lib/emails";

// NOTE: your file is lib/email-template.ts (singular)
import {
  subjectForReason,
  renderContactHtml,
  renderContactText,
  renderAutoReplyHtml,
  renderAutoReplyText,
} from "@/lib/email-templates";

import {
  ipLimiter,
  emailLimiter,
  hashLimiter,
  getIdentity,
  rateHeaders,
} from "@/lib/rate-limit";
import { isLikelySpam } from "@/lib/spam-filter";

// ---------- config ----------
const LOG_PATH = path.join(os.tmpdir(), "contact-submissions.jsonl");
const MAX_LOG_SIZE = 1024 * 1024 * 2; // ~2 MB

// ---------- schema ----------
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
  reason: z.enum(["general", "project-inquiry", "request-resume"]).default("general"),
  website: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  // 1) IP limiter
  const ip = getIdentity(req.headers);
  const ipRes = await ipLimiter.limit(`ip:${ip}`);
  if (!ipRes.success) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429, headers: rateHeaders(ipRes.limit, ipRes.remaining, ipRes.reset) }
    );
  }

  try {
    // 2) Parse & validate
    const raw = await req.json().catch(() => ({}));
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, company, message, reason, website } = parsed.data;

    // 3) Honeypot
    if (website && website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 204 });
    }

    // 4) Spam filter
    if (isLikelySpam({ name, email, company, message })) {
      return NextResponse.json(
        { ok: false, error: "Blocked by content filter." },
        { status: 400 }
      );
    }

    // 5) Per-email limiter
    const emailKey = email.toLowerCase();
    const emRes = await emailLimiter.limit(`email:${emailKey}`);
    if (!emRes.success) {
      return NextResponse.json(
        { ok: false, error: "Too many requests from this email. Please try later." },
        { status: 429, headers: rateHeaders(emRes.limit, emRes.remaining, emRes.reset) }
      );
    }

    // 6) Duplicate-content limiter
    const signature = contentSignature({ name, email, company, message, reason });
    const hashRes = await hashLimiter.limit(`hash:${signature}`);
    if (!hashRes.success) {
      return NextResponse.json(
        { ok: false, error: "Duplicate message detected. Please modify and try again." },
        { status: 429, headers: rateHeaders(hashRes.limit, hashRes.remaining, hashRes.reset) }
      );
    }

    // 7) Owner email
    const ownerSubject = subjectForReason(reason);
    const ownerHtml = renderContactHtml({ name, email, company, message, reason });
    const ownerText = renderContactText({ name, email, company, message, reason });

    const ownerSend = await sendContactEmail(ownerSubject, ownerHtml, ownerText, {
      replyTo: email,
    });

    // 8) Auto-reply (best effort)
    try {
      const arHtml = renderAutoReplyHtml(name, reason);
      const arText = renderAutoReplyText(name, reason);
      await sendAutoReply(
        email,
        "Thanks for reaching out — Jutellane Solutions",
        arHtml,
        arText
      );
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      console.warn("Auto-reply failed:", msg);
    }

    // 9) Append audit log (non-blocking)
    void appendAuditLog({
      timestamp: new Date().toISOString(),
      ip,
      name,
      email,
      company,
      reason,
      message: message.slice(0, 250),
      provider: ownerSend.provider,
    });

    return NextResponse.json({
      ok: true,
      provider: ownerSend.provider,
      id: ownerSend.id,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Contact API error:", msg);
    return NextResponse.json(
      { ok: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}

// ---------- helpers ----------
function contentSignature(input: {
  name: string;
  email: string;
  company?: string;
  message: string;
  reason: string;
}) {
  const base = [
    input.email.trim().toLowerCase(),
    input.reason,
    input.message.replace(/\s+/g, " ").trim().toLowerCase(),
  ].join("|");
  return createHash("sha256").update(base).digest("hex");
}

async function appendAuditLog(entry: Record<string, unknown>) {
  try {
    // rotate if too large
    try {
      const info = await stat(LOG_PATH);
      if (info.size > MAX_LOG_SIZE) {
        const backup = LOG_PATH.replace(".jsonl", `-${Date.now()}.bak.jsonl`);
        await writeFile(backup, "");
        await writeFile(LOG_PATH, "");
      }
    } catch {
      // file probably doesn't exist yet
    }

    await appendFile(LOG_PATH, JSON.stringify(entry) + "\n", "utf8");
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    console.warn("Audit log append failed:", msg);
  }
}
