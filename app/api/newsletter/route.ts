import { NextResponse } from "next/server";
import { Resend } from "resend";
import postgres from "postgres";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const connectionString =
      process.env.DATABASE_URL || process.env.POSTGRES_URL;

    if (!connectionString) {
      console.error("Missing database connection string");
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    const sql = postgres(connectionString);

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    try {
      await sql`
        insert into newsletter_subscribers (email, source, status)
        values (${email}, 'website', 'active')
      `;
    } catch (err: any) {
      if (err.code === "23505") {
        return NextResponse.json({ success: true, duplicate: true });
      }

      console.error("Newsletter DB insert failed:", err);
      throw err;
    }

    if (process.env.NEXT_PUBLIC_APP_ENV !== "production") {
      console.log("STAGE: Skipping email send", email);
      return NextResponse.json({ success: true, stage: true });
    }

    await resend.emails.send({
      from: process.env.NEWSLETTER_FROM_EMAIL!,
      to: email,
      subject: "Welcome to JLT Platform Notes",
      html: `<p>You're now subscribed.</p>`,
    });

    await resend.emails.send({
      from: process.env.NEWSLETTER_FROM_EMAIL!,
      to: process.env.NEWSLETTER_ADMIN_EMAIL!,
      subject: "New Subscriber",
      html: `<p>${email}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter route error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}