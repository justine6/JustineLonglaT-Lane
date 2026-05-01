import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = String(body.email || "").trim().toLowerCase();
    const source = String(body.source || "website");
    const page = String(body.page || "/");

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    await sql`
      insert into newsletter_subscribers (email, source, page)
      values (${email}, ${source}, ${page})
      on conflict (email)
      do update set last_seen_at = now()
    `;

    console.log("✅ Subscriber stored:", email);

    const from =
      process.env.NEWSLETTER_FROM_EMAIL ||
      "JLT Platform Notes <newsletter@justinelonglat-lane.com>";

    const admin =
      process.env.NEWSLETTER_ADMIN_EMAIL ||
      "info@justinelonglat-lane.com";

    await resend.emails.send({
      from,
      to: email,
      subject: "Welcome to JLT-Lane",
      html: `
        <h2>Welcome to JLT-Lane</h2>
        <p>Hi there,</p>
        <p>Thanks for subscribing to JLT Platform Notes.</p>
        <p>You’ll receive insights on platform engineering, DevSecOps, and cloud systems.</p>
        <p>— Justine</p>
      `,
      text: "Welcome to JLT-Lane. Thanks for subscribing.",
    });

    await resend.emails.send({
      from,
      to: admin,
      subject: "New Newsletter Subscriber",
      html: `<p>${email} just subscribed.</p>`,
      text: `${email} just subscribed.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Newsletter error:", error);

    const message =
      error instanceof Error ? error.message : "Unknown newsletter error";

    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}