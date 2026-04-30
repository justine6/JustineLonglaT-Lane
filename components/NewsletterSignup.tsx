'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("🟡 submit fired");

    if (!email) {
      console.log("⛔ no email provided");
      return;
    }

    setStatus("loading");

    try {
      console.log("📤 sending request to /api/newsletter", email);

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      console.log("📥 response status:", res.status);
      console.log("📥 response body:", data);

      if (!res.ok) {
        throw new Error(data?.error || "Newsletter signup failed");
      }

      console.log("✅ success");
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("❌ submit error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:opacity-60"
        >
          {status === "loading"
            ? "Subscribing..."
            : status === "success"
            ? "Subscribed ✓"
            : "Subscribe TEST"}
        </button>
      </div>

      {status === "success" && (
        <p className="text-sm text-emerald-300 text-center">
          You’re subscribed 🎉
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-300 text-center">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}