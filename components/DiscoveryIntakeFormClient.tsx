"use client";

import { useMemo, useState } from "react";

import type { DiscoveryContext } from "@/lib/discovery-context";

type FormState = {
  name: string;
  email: string;
  org: string;
  role: string;
  website: string;
  budget: string;
  timeline: string;
  cloud: string;
  stack: string;
  goals: string;
  notes: string;
  honey: string; // spam trap
};

export default function DiscoveryIntakeFormClient({
  context,
}: {
  context: DiscoveryContext;
}) {
  const [busy, setBusy] = useState(false);

  const defaults = useMemo<FormState>(
    () => ({
      name: "",
      email: "",
      org: "",
      role: "",
      website: "",

      budget: "unsure",
      timeline: "2-4 weeks",
      cloud: "AWS",
      stack: "",
      goals: "",
      notes: "",
      honey: "",
    }),
    []
  );

  const [f, setF] = useState<FormState>(defaults);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setF((prev) => ({ ...prev, [key]: value }));
  }

  function buildMessage() {
    return (
      `Discovery Intake — ${context.offeringName}\n\n` +
      `Name: ${f.name}\n` +
      `Email: ${f.email}\n` +
      `Org: ${f.org}\n` +
      `Role: ${f.role}\n` +
      `Website: ${f.website}\n\n` +
      `Budget: ${f.budget}\n` +
      `Timeline: ${f.timeline}\n` +
      `Cloud: ${f.cloud}\n` +
      `Current stack: ${f.stack}\n\n` +
      `Goals:\n${f.goals}\n\n` +
      `Additional notes:\n${f.notes}\n`
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;

    // Honeypot: if filled, silently drop.
    if (f.honey.trim()) return;

    setBusy(true);

    const message = buildMessage();

    const qs = new URLSearchParams({
      discovery: "1",
      message,
    });

    if (context.offeringKey) {
      qs.set("service", context.offeringKey);
    }

    // Redirect to Contact page to submit using your existing pipeline
    window.location.href = `/contact?${qs.toString()}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Spam trap */}
      <input
        value={f.honey}
        onChange={(e) => update("honey", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name">
          <input
            value={f.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls}
            placeholder="Your name"
            required
          />
        </Field>

        <Field label="Email">
          <input
            value={f.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
            placeholder="you@company.com"
            type="email"
            required
          />
        </Field>

        <Field label="Organization">
          <input
            value={f.org}
            onChange={(e) => update("org", e.target.value)}
            className={inputCls}
            placeholder="Company / Team"
          />
        </Field>

        <Field label="Role">
          <input
            value={f.role}
            onChange={(e) => update("role", e.target.value)}
            className={inputCls}
            placeholder="CTO / Engineer / PM / Founder"
          />
        </Field>

        <Field label="Website (optional)">
          <input
            value={f.website}
            onChange={(e) => update("website", e.target.value)}
            className={inputCls}
            placeholder="https://"
          />
        </Field>

        <Field label="Discovery context">
          <div
            className={inputCls}
            data-testid="governed-discovery-context"
          >
            {context.offeringName}
          </div>
        </Field>

        <Field label="Budget range">
          <select
            value={f.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={inputCls}
          >
            <option value="unsure">Not sure yet</option>
            <option value="under-1k">Under $1k</option>
            <option value="1k-5k">$1k–$5k</option>
            <option value="5k-15k">$5k–$15k</option>
            <option value="15k-plus">$15k+</option>
          </select>
        </Field>

        <Field label="Timeline">
          <select
            value={f.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className={inputCls}
          >
            <option value="asap">ASAP</option>
            <option value="1-2 weeks">1–2 weeks</option>
            <option value="2-4 weeks">2–4 weeks</option>
            <option value="1-3 months">1–3 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </Field>

        <Field label="Primary cloud">
          <select
            value={f.cloud}
            onChange={(e) => update("cloud", e.target.value)}
            className={inputCls}
          >
            <option value="AWS">AWS</option>
            <option value="Azure">Azure</option>
            <option value="GCP">GCP</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Not sure">Not sure</option>
          </select>
        </Field>

        <Field label="Current stack (short)">
          <input
            value={f.stack}
            onChange={(e) => update("stack", e.target.value)}
            className={inputCls}
            placeholder="K8s, Terraform, GitHub Actions, etc."
          />
        </Field>
      </div>

      <Field label="Primary goals">
        <textarea
          value={f.goals}
          onChange={(e) => update("goals", e.target.value)}
          className={textareaCls}
          placeholder="What are you trying to achieve? What’s broken / risky / slow?"
          rows={5}
          required
        />
      </Field>

      <Field label="Additional notes (optional)">
        <textarea
          value={f.notes}
          onChange={(e) => update("notes", e.target.value)}
          className={textareaCls}
          placeholder="Constraints, deadlines, compliance requirements, links, etc."
          rows={4}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Next: I’ll review this and respond with discovery + proposal steps.
        </p>

        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60"
        >
          {busy ? "Sending…" : "Continue to contact"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50";

const textareaCls =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50";
