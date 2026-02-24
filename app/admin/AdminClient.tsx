"use client";

import { useState } from "react";
import AdminDetailsDrawer from "./AdminDetailsDrawer";

type Proposal = {
  id: string;
  approvedAt: string;
  intent: string;
  service: string;
  tier: string;
  name?: string;
  email?: string;
  phone?: string;
  stripeSessionId?: string | null;
  paid?: boolean;
  amountCents?: number | null;
  currency?: string | null;
};

function fmtMoney(amountCents?: number | null, currency?: string | null) {
  if (!amountCents || !currency) return "—";
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amountCents / 100);
  } catch {
    return `${amountCents / 100} ${currency}`;
  }
}

export default function AdminClient({ rows }: { rows: Proposal[] }) {
  const [selected, setSelected] = useState<Proposal | null>(null);

  return (
    <>
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="border-b border-slate-200 px-6 py-4 text-sm font-semibold text-slate-900 dark:border-slate-800 dark:text-slate-50">
          Records ({rows.length})
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              <tr>
                <th className="px-6 py-3">Approved</th>
                <th className="px-6 py-3">Client</th>
                <th className="px-6 py-3">Intent</th>
                <th className="px-6 py-3">Service</th>
                <th className="px-6 py-3">Tier</th>
                <th className="px-6 py-3">Paid</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Session</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {rows.map((r) => (
                <tr
                  key={r.id}
                  onClick={() => setSelected({ ...r, paid: !!r.paid })}
                  className="cursor-pointer align-top transition hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-slate-700 dark:text-slate-200">
                    {new Date(r.approvedAt).toLocaleString()}
                  </td>

                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900 dark:text-slate-50">
                      {r.name || "—"}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {r.email || "—"} {r.phone ? `• ${r.phone}` : ""}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-700 dark:text-slate-200">
                    {r.intent}
                  </td>

                  <td className="px-6 py-4 text-slate-700 dark:text-slate-200">
                    {r.service}
                  </td>

                  <td className="px-6 py-4 text-slate-700 dark:text-slate-200">
                    {r.tier}
                  </td>

                  <td className="px-6 py-4">
                    {r.paid ? (
                      <span className="inline-flex rounded-full bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-300">
                        Paid
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-amber-600/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                        Unpaid
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4 text-slate-700 dark:text-slate-200">
                    {fmtMoney(r.amountCents ?? null, r.currency ?? null)}
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-600 dark:text-slate-300">
                      {r.stripeSessionId || "—"}
                    </div>
                    <div className="text-[11px] text-slate-400">ID: {r.id}</div>
                  </td>
                </tr>
              ))}

              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-10 text-center text-slate-500 dark:text-slate-400"
                  >
                    No records match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <AdminDetailsDrawer
        record={selected ? { ...selected, paid: !!selected.paid } : null}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
