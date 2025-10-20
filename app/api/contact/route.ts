import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, company, message, reason } = await req.json();

    const subjectMap: Record<string, string> = {
      "request-resume": "Resume request from website",
      "project-inquiry": "Project inquiry from website",
      "general": "New message from website",
    };

    const subject = subjectMap[reason] ?? subjectMap.general;
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO ?? "info@jutellane.com";
    const from = process.env.CONTACT_FROM ?? "no-reply@jutellane.com";

    // Handle case when Resend isn't configured
    if (!apiKey) {
      console.warn("[contact] Missing RESEND_API_KEY. Message logged instead:", {
        name, email, company, message, reason,
      });
      return NextResponse.json({ ok: true, mocked: true });
    }

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        text:
`Name: ${name}
Email: ${email}
Company: ${company ?? ""}
Reason: ${reason}
Message:
${message ?? ""}

— Sent from jutellane.com`,
      }),
    });

    if (!resp.ok) {
      const t = await resp.text();
      console.error("[contact] Resend API error:", t);
      return NextResponse.json({ error: "Email service failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] handler error:", err);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
