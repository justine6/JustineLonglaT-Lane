import { NextResponse } from "next/server";
import { getMembershipByEmail } from "@/lib/membership";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Missing email query parameter." },
        { status: 400 }
      );
    }

    const membership = await getMembershipByEmail(email);

    return NextResponse.json({
      found: Boolean(membership),
      membership,
    });
  } catch (error) {
    console.error("membership lookup error", error);

    return NextResponse.json(
      { error: "Unable to look up membership." },
      { status: 500 }
    );
  }
}
