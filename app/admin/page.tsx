import AdminControls from "./AdminControls";
import AdminClient from "./AdminClient";
import { readProposals } from "@/lib/proposal-store";

export const runtime = "nodejs";

function includesCI(haystack: string, needle: string) {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

export default async function AdminPage({
  searchParams,
}: {
  // ✅ Next.js 16: searchParams is a Promise
  searchParams?: Promise<{ status?: string; q?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const status = sp.status ?? "all";
  const q = (sp.q ?? "").trim();

  const all = readProposals();

  const approvedCount = all.length;
  const paidCount = all.filter((r) => r.paid).length;
  const unpaidCount = approvedCount - paidCount;

  let rows = all;

  if (status === "paid") rows = rows.filter((r) => r.paid);
  if (status === "unpaid") rows = rows.filter((r) => !r.paid);

  if (q) {
    rows = rows.filter((r) => {
      const blob = [
        r.id,
        r.intent,
        r.service,
        r.tier,
        r.name ?? "",
        r.email ?? "",
        r.phone ?? "",
        r.stripeSessionId ?? "",
      ].join(" | ");
      return includesCI(blob, q);
    });
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            Admin Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Proposal approvals + Stripe payment status (file-backed storage).
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <Stat label="Approved" value={approvedCount} />
            <Stat label="Paid" value={paidCount} />
            <Stat label="Unpaid" value={unpaidCount} />
          </div>
        </header>

        <AdminControls />

        {/* ✅ v2: table + drawer live in client wrapper */}
        <AdminClient rows={rows as any} />

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Security note: protect <code>/admin</code> before deploying publicly.
        </p>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-50">
        {value}
      </div>
    </div>
  );
}
