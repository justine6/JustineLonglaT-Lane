import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import postgres from 'postgres';

const resend = new Resend(process.env.RESEND_API_KEY);

// Connect using Vercel/Neon env
const connectionString =
  process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("Missing database connection string");
}

const sql = postgres(connectionString);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    // ✅ Save to database (prevent duplicates)
    try {
      await sql`
        insert into newsletter_subscribers (email)
        values (${email})
      `;
    } catch (err: any) {
      if (err.code === '23505') {
        // duplicate email
        return NextResponse.json({ success: true, duplicate: true });
      }
      throw err;
    }

    // ✅ STAGE safety (no real emails)
    if (process.env.NEXT_PUBLIC_APP_ENV !== "production") {
      console.log("STAGE: Skipping email send", email);
      return NextResponse.json({ success: true, stage: true });
    }

    // ✅ Send email (PROD only)
    await resend.emails.send({
      from: process.env.NEWSLETTER_FROM_EMAIL!,
      to: email,
      subject: 'Welcome to JLT Platform Notes',
      html: `<p>You're now subscribed.</p>`,
    });

    await resend.emails.send({
      from: process.env.NEWSLETTER_FROM_EMAIL!,
      to: process.env.NEWSLETTER_ADMIN_EMAIL!,
      subject: 'New Subscriber',
      html: `<p>${email}</p>`,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}