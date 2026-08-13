"use client";

import { useEffect } from "react";

type RecordItem = {
  id: string;
  intent: string;
  service: string;
  tier: string;
  name: string;
  email: string;
  phone?: string;
  paid?: boolean;
};

export default function AdminDetailsDrawer({
  record,
  onClose,
}: {
  record: RecordItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!record) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [record, onClose]);

  if (!record) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close proposal details"
        className="absolute inset-0 cursor-default bg-black/50"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-proposal-details-title"
        className="relative z-10 ml-auto h-full w-full max-w-md bg-white p-6 shadow-xl dark:bg-slate-950"
      >
        <div className="flex items-center justify-between">
          <h2
            id="admin-proposal-details-title"
            className="text-xl font-bold text-slate-900 dark:text-slate-50"
          >
            Proposal Details
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close proposal details"
            className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="mt-6 space-y-3 text-sm">
          <Info label="Intent" value={record.intent} />
          <Info label="Service" value={record.service} />
          <Info label="Tier" value={record.tier} />
          <Info label="Client" value={record.name} />
          <Info label="Email" value={record.email} />
          <Info label="Phone" value={record.phone || "—"} />

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Payment
            </div>

            <div
              className={`mt-1 font-semibold ${
                record.paid
                  ? "text-green-600 dark:text-green-400"
                  : "text-amber-600 dark:text-amber-400"
              }`}
            >
              {record.paid ? "Paid" : "Pending"}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
      <div className="text-slate-900 dark:text-slate-100">{value}</div>
    </div>
  );
}