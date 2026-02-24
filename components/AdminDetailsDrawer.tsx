"use client";

type RecordItem = {
  id: string;
  intent: string;
  service: string;
  tier: string;
  name: string;
  email: string;
  phone?: string;
  paid?: boolean; // ✅ optional — matches Proposal lifecycle
};

export default function AdminDetailsDrawer({
  record,
  onClose,
}: {
  record: RecordItem | null;
  onClose: () => void;
}) {
  if (!record) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-md bg-white p-6 shadow-xl dark:bg-slate-950">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
          Proposal Details
        </h2>

        <div className="mt-6 space-y-3 text-sm">
          <Info label="Intent" value={record.intent} />
          <Info label="Service" value={record.service} />
          <Info label="Tier" value={record.tier} />
          <Info label="Client" value={record.name} />
          <Info label="Email" value={record.email} />
          <Info label="Phone" value={record.phone || "—"} />
          <Info
            label="Payment"
            value={record.paid ? "Paid" : "Pending"}
          />
        </div>

        <button
          onClick={onClose}
          className="mt-8 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </div>
      <div className="mt-1 font-semibold text-slate-900 dark:text-slate-50">
        {value}
      </div>
    </div>
  );
}