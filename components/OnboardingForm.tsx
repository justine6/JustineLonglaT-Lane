"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    fd.forEach((v, k) => (payload[k] = String(v)));

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Failed to submit onboarding form.");
      }
      router.push("/onboarding/thanks");
    } catch (error: any) {
      setErr(error?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      {/* Honeypot anti-bot */}
      <input type="text" name="company_site" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Your name</label>
          <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-900" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-900" placeholder="jane@example.com" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Your goals (1–2 sentences)</label>
        <textarea name="goals" required rows={3} className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-900" placeholder="E.g., stabilize CI/CD, reduce costs 20%, complete EKS migration..." />
      </div>

      <div>
        <label className="block text-sm font-medium">Tech stack & environments</label>
        <input name="stack" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-900" placeholder="AWS, Terraform, Kubernetes, GitHub Actions, Prometheus..." />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Preferred communication</label>
          <select name="comms" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-900">
            <option>Email</option>
            <option>Slack</option>
            <option>Teams</option>
            <option>Google Meet</option>
            <option>Zoom</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Deadline or constraints</label>
          <input name="deadline" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-900" placeholder="e.g., Production freeze by Dec 15" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Extra context (optional)</label>
        <textarea name="notes" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-900" placeholder="Links to repos, dashboards, known issues, architecture notes..." />
      </div>

      {err && <p className="text-sm text-red-600">{err}</p>}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send details"}
      </button>
    </form>
  );
}
