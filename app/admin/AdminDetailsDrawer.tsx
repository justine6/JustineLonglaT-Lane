"use client";

import { X, Copy, CheckCircle } from "lucide-react";

type RecordItem = {
  id: string;
  approvedAt: string;
  intent: string;
  service: string;
  tier: string;
  name?: string;
  email?: string;
  phone?: string;
  paid: boolean;
  amountCents?: number | null;
  currency?: string | null;
  stripeSessionId?: string | null;
};

export default function AdminDetailsDrawer({
  record,
  onClose,
}: {
  record: RecordItem | null;
  onClose: () => void;
}) {
  if (!record) return null;

  const copy = (text?: string | null) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* panel */}
      <div className="ml-auto h-full w-full max-w-md bg-white p-6 shadow-2xl dark:bg-slate-950">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Proposal Details</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="mt-6 space-y-4 text-sm">
          <Field label="Intent" value={record.intent} />
          <Field label="Service" value={record.service} />
          <Field label="Tier" value={record.tier} />
          <Field label="Client" value={record.name || "—"} />
          <Field label="Email" value={record.email || "—"} />
          <Field label="Phone" value={record.phone || "—"} />

          <div>
            <div className="text-xs text-slate-500">Stripe Session</div>
            <div className="flex items-center gap-2">
              <code className="text-xs">
                {record.stripeSessionId || "—"}
              </code>
              {record.stripeSessionId && (
                <button onClick={() => copy(record.stripeSessionId)}>
                  <Copy size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="pt-4">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                record.paid
                  ? "bg-green-600/10 text-green-700"
                  : "bg-amber-600/10 text-amber-700"
              }`}
            >
              {record.paid ? "Paid" : "Unpaid"}
            </span>
          </div>

          <div className="pt-6">
            <button
              onClick={() =>
                alert("Manual override coming in v3 😎")
              }
              className="w-full rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              <CheckCircle className="inline mr-2" size={16} />
              Mark as paid (manual)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-slate-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
