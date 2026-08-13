"use client";

import { CheckCircle, Copy, X } from "lucide-react";
import { useEffect } from "react";

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

  const copy = (text?: string | null) => {
    if (!text) {
      return;
    }

    void navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close proposal details"
        className="absolute inset-0 cursor-default bg-black/50"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="proposal-details-title"
        className="relative z-10 ml-auto h-full w-full max-w-md bg-white p-6 shadow-2xl dark:bg-slate-950"
      >
        <div className="flex items-center justify-between">
          <h2 id="proposal-details-title" className="text-lg font-bold">
            Proposal Details
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close proposal details"
          >
            <X aria-hidden="true" />
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

              {record.stripeSessionId ? (
                <button
                  type="button"
                  onClick={() => copy(record.stripeSessionId)}
                  aria-label="Copy Stripe session ID"
                >
                  <Copy aria-hidden="true" size={14} />
                </button>
              ) : null}
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
              type="button"
              onClick={() => alert("Manual override coming in v3 😎")}
              className="w-full rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              <CheckCircle
                aria-hidden="true"
                className="mr-2 inline"
                size={16}
              />
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
      <div>{value}</div>
    </div>
  );
}