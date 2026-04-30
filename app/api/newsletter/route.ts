import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    // ✅ Send confirmation email to user
    await resend.emails.send({
      from: process.env.NEWSLETTER_FROM_EMAIL!,
      to: email,
      subject: 'Welcome to JLT Platform Notes',
      html: `
        <h2>Welcome to JLT Platform Notes</h2>
        <p>You're now subscribed.</p>
        <p>Expect insights on platform engineering, access control, and system design.</p>
        <br/>
        <p><strong>Cloud Confidence. Delivered.</strong></p>
      `,
    });

    // ✅ Notify YOU
    await resend.emails.send({
      from: process.env.NEWSLETTER_FROM_EMAIL!,
      to: process.env.NEWSLETTER_ADMIN_EMAIL!,
      subject: 'New Newsletter Subscriber',
      html: `<p>New subscriber: ${email}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}