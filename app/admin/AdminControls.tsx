"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function AdminControls() {
  const router = useRouter();
  const sp = useSearchParams();

  const initialStatus = sp.get("status") ?? "all";
  const initialQ = sp.get("q") ?? "";

  const [status, setStatus] = useState(initialStatus);
  const [q, setQ] = useState(initialQ);

  const href = useMemo(() => {
    const qs = new URLSearchParams();

    if (status && status !== "all") {
      qs.set("status", status);
    }

    if (q.trim()) {
      qs.set("q", q.trim());
    }

    const queryString = qs.toString();

    return queryString ? `/admin?${queryString}` : "/admin";
  }, [status, q]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-end">
        <div className="w-full sm:w-auto">
          <label
            htmlFor="admin-status"
            className="mb-1 block text-sm font-medium"
          >
            Status
          </label>

          <select
            id="admin-status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm dark:border-slate-800 dark:bg-slate-950 sm:w-[180px]"
          >
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>
        </div>

        <div className="relative w-full sm:w-[360px]">
          <label htmlFor="admin-search" className="sr-only">
            Search memberships
          </label>

          <Search
            aria-hidden="true"
            className="absolute left-3 top-2.5 h-4 w-4 text-slate-400"
          />

          <input
            id="admin-search"
            value={q}
            onChange={(event) => setQ(event.target.value)}
            placeholder="Search (email, name, intent, tier...)"
            className="w-full rounded-2xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm dark:border-slate-800 dark:bg-slate-950"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => router.replace(href)}
          className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Apply
        </button>

        <button
          type="button"
          onClick={() => router.replace("/admin")}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
        >
          Reset
        </button>
      </div>
    </div>
  );
}