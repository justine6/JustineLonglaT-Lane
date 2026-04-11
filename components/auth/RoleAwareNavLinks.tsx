import Link from "next/link";
import RoleGate from "@/components/auth/RoleGate";

export default async function RoleAwareNavLinks() {
  return (
    <>
      <RoleGate minimumRole="premium">
        <Link
          href="/toolkit/premium"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white"
        >
          Premium Toolkit
        </Link>
      </RoleGate>

      <RoleGate allow={["admin"]}>
        <Link
          href="/admin"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
        >
          Admin
        </Link>
      </RoleGate>
    </>
  );
}
