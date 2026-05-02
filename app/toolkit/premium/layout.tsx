import { requireRole } from "@/lib/auth/requireRole";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function PremiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireRole("premium");

  return <>{children}</>;
}