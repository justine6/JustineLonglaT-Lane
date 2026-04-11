import { requireRole } from "@/lib/auth/requireRole";

export default async function PremiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireRole("premium");

  return <>{children}</>;
}