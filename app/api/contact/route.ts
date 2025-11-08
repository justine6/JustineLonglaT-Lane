import { NextResponse } from "next/server";
import { LINKS } from '@/config/links';
import { Resend } from "resend";
import { LINKS } from '@/config/links';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  // Basic server-side validation
  if (!name || !email || !message || !EMAIL_RE.test(String(email))) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    // Let the client do mailto fallback
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO_EMAIL!;
  const from = process.env.CONTACT_FROM_EMAIL || "no-reply@jutellane.com";

  const html = `
    <h2>New contact request</h2>
    <p><b>Name:</b> ${escapeHtml(name)}</p>
    <p><b>Email:</b> ${escapeHtml(email)}</p>
    <p><b>Phone:</b> ${escapeHtml(phone || "")}</p>
    <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
  `;

  try {
    await resend.emails.send({ from, to, subject: `New message from ${name}`, html, replyTo: email || undefined });
    if (email) {
      await resend.emails.send({
        from, to: email, subject: "Thanks for reaching out to Jutellane Solutions",
        html: `<p>Hi ${escapeHtml(name)},</p><p>Thanks for your message. I’ll get back to you shortly.</p><p>— Justine</p>`
      });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}

function escapeHtml(s: string = "") {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

