import { requireAdmin } from "@/lib/auth/requireAdmin";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAdmin();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin Header */}
      <div className="border-b bg-white px-6 py-3 flex items-center justify-between">
        <div className="font-semibold text-slate-800">
          Admin Dashboard
        </div>

        <div className="text-sm text-slate-500">
          {user?.emailAddresses?.[0]?.emailAddress}
        </div>
      </div>

      {/* Admin Content */}
      <div className="p-6">{children}</div>
    </div>
  );
}