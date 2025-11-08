// lib/emails.ts
import { Resend } from "resend";
import { LINKS } from '@/config/links';
import nodemailer from "nodemailer";

type ProviderSendResult = { provider: "resend" | "smtp"; id?: string };

const resendApiKey = process.env.RESEND_API_KEY;
const emailFrom = process.env.EMAIL_FROM || "no-reply@example.com";
const emailTo = process.env.EMAIL_TO || "owner@example.com";

// Optional SMTP fallback
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpSecure =
  (process.env.SMTP_SECURE || "false").toLowerCase() === "true" ? true : false;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

const hasSmtp = !!smtpHost && !!smtpPort && !!smtpUser && !!smtpPass;

/**
 * Send email to you (site owner). If RESEND_API_KEY is present we use Resend first,
 * otherwise we try SMTP (Nodemailer). We include replyTo so you can reply quickly.
 */
export async function sendContactEmail(
  subject: string,
  html: string,
  text: string,
  opts?: { replyTo?: string }
): Promise<ProviderSendResult> {
  const replyTo = opts?.replyTo;

  // --- Try Resend first if configured ---
  if (resendApiKey) {
    const resend = new Resend(resendApiKey);
    const res = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject,
      html,
      text,
      // ✅ correct property name is camelCase
      ...(replyTo ? { replyTo } : {}),
    });

    if (res.error) {
      // throw to fall back to SMTP (if available)
      throw new Error(`Resend error: ${res.error.message || "Unknown"}`);
    }
    return { provider: "resend", id: res.data?.id };
  }

  // --- Fallback to SMTP if available ---
  if (hasSmtp) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser!, pass: smtpPass! },
    });

    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject,
      html,
      text,
      ...(replyTo ? { replyTo } : {}),
    });

    return { provider: "smtp" };
  }

  throw new Error(
    "No email provider configured. Set RESEND_API_KEY or SMTP_* environment variables."
  );
}

/**
 * Auto-reply to the visitor. Uses Resend if available, else SMTP.
 */
export async function sendAutoReply(
  to: string,
  subject: string,
  html: string,
  text: string
): Promise<ProviderSendResult> {
  if (resendApiKey) {
    const resend = new Resend(resendApiKey);
    const res = await resend.emails.send({
      from: emailFrom,
      to,
      subject,
      html,
      text,
    });
    if (res.error) {
      throw new Error(`Resend error: ${res.error.message || "Unknown"}`);
    }
    return { provider: "resend", id: res.data?.id };
  }

  if (hasSmtp) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser!, pass: smtpPass! },
    });

    await transporter.sendMail({
      from: emailFrom,
      to,
      subject,
      html,
      text,
    });

    return { provider: "smtp" };
  }

  throw new Error(
    "No email provider configured for auto-reply. Set RESEND_API_KEY or SMTP_* env vars."
  );
}


