import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// If you want to force Node runtime (optional but safe for uploads)
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const goals = String(form.get("goals") || "").trim();
    const projectTypes = safeParseArray(form.get("projectTypes"));
    const priorities = safeParseArray(form.get("priorities"));
    const budget = String(form.get("budget") || "").trim();
    const deadline = String(form.get("deadline") || "").trim();
    const comms = String(form.get("comms") || "").trim();
    const stack = String(form.get("stack") || "").trim();
    const notes = String(form.get("notes") || "").trim();

    // basic validation
    if (!name || !email || !goals || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and goals." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.CONTACT_FROM_EMAIL || "no-reply@jutellane.com";

    // Just list files by name/size for now (we’re not attaching them yet)
    const files = form.getAll("files") as File[];
    const fileSummary = files.length
      ? files
          .map(
            (f) => `- ${f.name} (${(f.size / 1024).toFixed(1)} KB)`
          )
          .join("<br/>")
      : "None";

    const html = `
      <h2>New premium onboarding submission</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Company:</b> ${escapeHtml(company)}</p>
      <p><b>Goals:</b><br/>${escapeHtml(goals)}</p>
      <p><b>Project types:</b> ${escapeHtml(projectTypes.join(", "))}</p>
      <p><b>Priorities:</b> ${escapeHtml(priorities.join(", "))}</p>
      <p><b>Budget:</b> ${escapeHtml(budget)}</p>
      <p><b>Deadline:</b> ${escapeHtml(deadline)}</p>
      <p><b>Comms preference:</b> ${escapeHtml(comms)}</p>
      <p><b>Stack / environment:</b> ${escapeHtml(stack)}</p>
      <p><b>Notes:</b><br/>${escapeHtml(notes)}</p>
      <p><b>Files:</b><br/>${fileSummary}</p>
    `;

    // Email to you
    await resend.emails.send({
      from,
      to,
      subject: `New premium onboarding — ${name}`,
      html,
      replyTo: email || undefined,
    });

    // Confirmation to client
    await resend.emails.send({
      from,
      to: email,
      subject: "Thanks for your premium onboarding — Jutellane Solutions",
      html: `
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for sharing these details. I’ll review everything before our session and follow up if I need clarifications.</p>
        <p>— Justine<br/>Jutellane Solutions with Justine</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Onboarding error:", err);
    return NextResponse.json(
      { error: "Failed to submit onboarding" },
      { status: 500 }
    );
  }
}

/* ----------------------------- helpers ----------------------------- */

function safeParseArray(value: FormDataEntryValue | null): string[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(String(value));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function escapeHtml(s: string = "") {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
