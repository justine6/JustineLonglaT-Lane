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
    const environment =
      process.env.VERCEL_ENV || process.env.NODE_ENV || "local";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    await sql`
      insert into newsletter_subscribers (email, source, page, environment)
      values (${email}, ${source}, ${page}, ${environment})
      on conflict (email)
      do update set
        last_seen_at = now(),
        source = excluded.source,
        page = excluded.page,
        environment = excluded.environment
    `;

    const from =
      process.env.NEWSLETTER_FROM_EMAIL ||
      "JLT Platform Notes <newsletter@justinelonglat-lane.com>";

    const admin =
      process.env.NEWSLETTER_ADMIN_EMAIL ||
      "info@justinelonglat-lane.com";

    const subscriberEmail = await resend.emails.send({
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

    if (subscriberEmail.error) {
      console.error("❌ Subscriber email failed:", subscriberEmail.error);
      throw new Error(subscriberEmail.error.message);
    }

    const adminEmail = await resend.emails.send({
      from,
      to: admin,
      subject: "New Newsletter Subscriber",
      html: `<p>${email} just subscribed from ${environment}.</p>`,
      text: `${email} just subscribed from ${environment}.`,
    });

    if (adminEmail.error) {
      console.error("❌ Admin email failed:", adminEmail.error);
    }

    console.log("✅ Newsletter email sent:", {
      email,
      resendId: subscriberEmail.data?.id,
      environment,
    });

    return NextResponse.json({
      success: true,
      message:
        "Welcome to JLT Platform Notes 🎉 Please check your inbox or spam folder.",
      data: {
        email,
        source,
        page,
        environment,
        emailId: subscriberEmail.data?.id,
      },
    });
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