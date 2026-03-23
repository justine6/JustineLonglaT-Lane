import { NextResponse } from "next/server";
import { requireEntitlement } from "@/lib/authz/require-entitlement";
import { requireSessionAccessContext } from "@/lib/authz/session-context";

export async function GET() {
  const context = await requireSessionAccessContext();

  const denied = requireEntitlement(
    context,
    "contributor.protocols",
    ["contributor.protocol.read"]
  );

  if (denied) return denied;

  return NextResponse.json({
    ok: true,
    data: {
      title: "Guest Contributor Protocol",
      classification: "allowed",
    },
  });
}