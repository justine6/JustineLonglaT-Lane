import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [{ count }] = await sql<{ count: number }[]>`
      select count(*)::int as count
      from newsletter_subscribers
      where coalesce(status, 'active') = 'active'
    `;

    return NextResponse.json({
      success: true,
      count,
    });
  } catch (error) {
    console.error("❌ Newsletter count error:", error);

    return NextResponse.json(
      {
        success: false,
        count: 0,
        message: "Unable to load subscriber count",
      },
      { status: 500 }
    );
  }
}