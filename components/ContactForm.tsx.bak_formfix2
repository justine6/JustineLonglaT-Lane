"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Reason = "general" | "project-inquiry" | "request-resume";

export default function ContactForm() {
  const sp = useSearchParams();
  const [reason, setReason] = useState<Reason>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<null | "ok" | "err">(null);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const r = sp.get("reason");
    if (r === "request-resume") setReason("request-resume");
  }, [sp]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setDone(null); setErrMsg("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, company, message, reason }),
    });

    if (res.ok) {
      setDone("ok");
      setName(""); setEmail(""); setCompany(""); setMessage("");
    } else {
      setDone("err");
      const j = await res.json().catch(() => ({} as any));
      setErrMsg(j?.error ?? "Something went wrong. Please try again.");
    }
    setBusy(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            className="w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-900"
            value={name} onChange={(e) => setName(e.target.value)} required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-900"
            value={email} onChange={(e) => setEmail(e.target.value)} required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Company (optional)</label>
          <input
            className="w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-900"
            value={company} onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Reason</label>
          <select
            className="w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-900"
            value={reason} onChange={(e) => setReason(e.target.value as Reason)}
          >
            <option value="general">General</option>
            <option value="project-inquiry">Project inquiry</option>
            <option value="request-resume">Request résumé</option
# Ensure the folder exists
New-Item -ItemType Directory -Force -Path "components" | Out-Null

# Force-write the full file, overwriting any hidden or virtual entry
@'
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Reason = "general" | "project-inquiry" | "request-resume";

export default function ContactForm() {
  const sp = useSearchParams();
  const [reason, setReason] = useState<Reason>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<null | "ok" | "err">(null);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const r = sp.get("reason");
    if (r === "request-resume") setReason("request-resume");
  }, [sp]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setDone(null); setErrMsg("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, company, message, reason }),
    });

    if (res.ok) {
      setDone("ok");
      setName(""); setEmail(""); setCompany(""); setMessage("");
    } else {
      setDone("err");
      const j = await res.json().catch(() => ({} as any));
      setErrMsg(j?.error ?? "Something went wrong. Please try again.");
    }
    setBusy(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className="w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-900"
                 value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email"
                 className="w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-900"
                 value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Company (optional)</label>
          <input className="w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-900"
                 value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Reason</label>
          <select className="w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-900"
                  value={reason} onChange={(e) => setReason(e.target.value as Reason)}>
            <option value="general">General</option>
            <option value="project-inquiry">Project inquiry</option>
            <option value="request-resume">Request résumé</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          className="w-full rounded-lg border px-3 py-2 min-h-[120px] bg-white dark:bg-gray-900"
          placeholder={reason === "request-resume"
            ? "Tell me a bit about the role; I’ll send the most relevant version."
            : "How can I help?"}
          value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>

      <button type="submit" disabled={busy}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 disabled:opacity-60">
        {busy ? "Sending..." : reason === "request-resume" ? "Request Résumé" : "Send Message"}
      </button>

      {done === "ok" && (
        <p className="text-green-600 text-sm mt-2">Thanks! I’ll get back to you shortly.</p>
      )}
      {done === "err" && (
        <p className="text-red-600 text-sm mt-2">Oops: {errMsg}</p>
      )}
    </form>
  );
}
