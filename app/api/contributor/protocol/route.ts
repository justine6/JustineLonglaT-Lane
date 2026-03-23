import { getSessionAccessContext } from "@/lib/authz/session-context";
import { requireEntitlement } from "@/lib/authz/require-entitlement";

export async function GET() {
  const context = await getSessionAccessContext();

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