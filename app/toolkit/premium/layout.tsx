export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default function PremiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}