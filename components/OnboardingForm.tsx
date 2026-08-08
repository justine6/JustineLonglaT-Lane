"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OnboardingForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErr(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload: Record<string, string> = {};

    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));

        throw new Error(
          result?.error || "Failed to submit onboarding form."
        );
      }

      router.push("/onboarding/thanks");
    } catch (error: unknown) {
      setErr(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot anti-bot */}
      <input
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="onboarding-name"
            className="block text-sm font-medium"
          >
            Your name
          </label>

          <input
            id="onboarding-name"
            name="name"
            required
            className="mt-1 w-full rounded-xl border bg-white px-3 py-2 dark:bg-slate-900"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label
            htmlFor="onboarding-email"
            className="block text-sm font-medium"
          >
            Email
          </label>

          <input
            id="onboarding-email"
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-xl border bg-white px-3 py-2 dark:bg-slate-900"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="onboarding-goals"
          className="block text-sm font-medium"
        >
          Your goals (1–2 sentences)
        </label>

        <textarea
          id="onboarding-goals"
          name="goals"
          required
          rows={3}
          className="mt-1 w-full rounded-xl border bg-white px-3 py-2 dark:bg-slate-900"
          placeholder="E.g., stabilize CI/CD, reduce costs 20%, complete EKS migration..."
        />
      </div>

      <div>
        <label
          htmlFor="onboarding-stack"
          className="block text-sm font-medium"
        >
          Tech stack &amp; environments
        </label>

        <input
          id="onboarding-stack"
          name="stack"
          className="mt-1 w-full rounded-xl border bg-white px-3 py-2 dark:bg-slate-900"
          placeholder="AWS, Terraform, Kubernetes, GitHub Actions, Prometheus..."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="onboarding-comms"
            className="block text-sm font-medium"
          >
            Preferred communication
          </label>

          <select
            id="onboarding-comms"
            name="comms"
            className="mt-1 w-full rounded-xl border bg-white px-3 py-2 dark:bg-slate-900"
          >
            <option value="Email">Email</option>
            <option value="Slack">Slack</option>
            <option value="Teams">Teams</option>
            <option value="Google Meet">Google Meet</option>
            <option value="Zoom">Zoom</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="onboarding-deadline"
            className="block text-sm font-medium"
          >
            Deadline or constraints
          </label>

          <input
            id="onboarding-deadline"
            name="deadline"
            className="mt-1 w-full rounded-xl border bg-white px-3 py-2 dark:bg-slate-900"
            placeholder="e.g., Production freeze by Dec 15"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="onboarding-notes"
          className="block text-sm font-medium"
        >
          Extra context (optional)
        </label>

        <textarea
          id="onboarding-notes"
          name="notes"
          rows={4}
          className="mt-1 w-full rounded-xl border bg-white px-3 py-2 dark:bg-slate-900"
          placeholder="Links to repos, dashboards, known issues, architecture notes..."
        />
      </div>

      {err ? (
        <p role="alert" className="text-sm text-red-600">
          {err}
        </p>
      ) : null}

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