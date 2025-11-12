"use client";

import { useState } from "react";

type Props = {
  adminEmail?: string;           // optional display
  maxSizeMB?: number;            // default 10
};

export default function OnboardingLite({ adminEmail, maxSizeMB = 10 }: Props) {
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState<null | "success" | "error">(null);
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setOk(null);
    setMsg("");

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Size guard on client (extra safety; server also checks)
      const f = fd.get("attachment") as File | null;
      if (f && f.size > maxSizeMB * 1024 * 1024) {
        setBusy(false);
        setOk("error");
        setMsg(`File too large. Max ${maxSizeMB}MB.`);
        return;
      }

      const res = await fetch("/api/onboarding", {
        method: "POST",
        body: fd,
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setOk("error");
        setMsg(json?.error || "Something went wrong.");
      } else {
        setOk("success");
        setMsg("Thanks! I’ve received your details and will prepare accordingly.");
        form.reset();
      }
    } catch (err: any) {
      setOk("error");
      setMsg(err?.message || "Network error.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="mt-10">
      <div className="rounded-2xl bg-white/70 shadow ring-1 ring-slate-200 dark:bg-slate-900/50 dark:ring-slate-700 p-6">
        <h3 className="text-xl font-semibold">Help me prepare for our call — optional onboarding</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Share a bit of context so I can tailor the session. You’ll also receive a confirmation email.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          {/* Honeypot */}
          <input name="company_site" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Name *</span>
              <input name="name" required className="rounded-md border px-3 py-2" />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium">Email *</span>
              <input type="email" name="email" required className="rounded-md border px-3 py-2" />
            </label>
          </div>

          <label className="grid gap-1">
            <span className="text-sm font-medium">What are your goals for this session? *</span>
            <textarea name="goals" required rows={3} className="rounded-md border px-3 py-2" />
          </label>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Preferred comms (Slack, Teams, Email)</span>
              <input name="comms" className="rounded-md border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Tech stack / environment</span>
              <input name="stack" className="rounded-md border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Deadline / constraints</span>
              <input name="deadline" className="rounded-md border px-3 py-2" />
            </label>
          </div>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Notes / context</span>
            <textarea name="notes" rows={3} className="rounded-md border px-3 py-2" />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">
              Attach a file (diagram, PDF, screenshot) — optional (max {maxSizeMB}MB)
            </span>
            <input
              type="file"
              name="attachment"
              accept=".pdf,.png,.jpg,.jpeg,.webp,.svg"
              className="rounded-md border px-3 py-2"
            />
          </label>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={busy}
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {busy ? "Sending…" : "Send onboarding"}
            </button>
            {adminEmail ? (
              <span className="text-xs text-slate-500">
                Sent privately to <strong>{adminEmail}</strong>
              </span>
            ) : null}
          </div>

          {ok === "success" && (
            <p className="text-sm text-emerald-700 dark:text-emerald-400">{msg}</p>
          )}
          {ok === "error" && <p className="text-sm text-rose-700 dark:text-rose-400">{msg}</p>}
        </form>
      </div>
    </section>
  );
}
