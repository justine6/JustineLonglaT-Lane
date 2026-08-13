import Link from "next/link";
import { requireAdmin } from "@/lib/auth/requireAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAdmin();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="border-b bg-white px-6 py-3 flex items-center justify-between dark:bg-slate-900 dark:border-slate-800">
        <div className="font-semibold text-slate-800 dark:text-slate-100">
          JLT Admin
        </div>

        <div className="text-sm text-slate-500">
          {user?.emailAddresses?.[0]?.emailAddress}
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b bg-white px-6 py-3 flex gap-6 text-sm dark:bg-slate-900 dark:border-slate-800">
        <Link href="/admin" className="hover:text-sky-600">
          Overview
        </Link>

        <Link href="/admin/subscribers" className="hover:text-sky-600">
          Subscribers
        </Link>

        <Link href="/admin/warnings" className="hover:text-sky-600">
          Warnings
        </Link>

        <Link href="/admin/metrics" className="hover:text-sky-600">
          Metrics
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">{children}</div>
    </div>
  );
}