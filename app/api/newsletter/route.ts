import { NextResponse } from "next/server";
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
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const from =
      process.env.NEWSLETTER_FROM_EMAIL ||
      "JLT-Lane <onboarding@resend.dev>";

    const adminEmail =
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
      <p>You’ll receive practical insights on platform engineering, DevSecOps, cloud security, automation, and observability.</p>
      <p>— Justine</p>
    `,
    text: "Welcome to JLT-Lane. Thanks for subscribing to JLT Platform Notes.",
  });

    await resend.emails.send({
      from,
      to: adminEmail,
      subject: "New Newsletter Subscriber",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Page:</strong> ${page}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Subscription successful.",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}