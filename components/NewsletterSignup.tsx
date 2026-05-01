"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("🟡 Newsletter submit fired:", email);

    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      console.log("📥 Newsletter response status:", res.status);
      console.log("📥 Newsletter response body:", data);

      if (!res.ok) {
        throw new Error(data?.error || "Newsletter signup failed");
      }

      setStatus("success");
      setEmail("");
      setMessage(
        data?.duplicate
          ? "You are already subscribed."
          : "You’re subscribed 🎉"
      );
    } catch (error) {
      console.error("❌ Newsletter submit error:", error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
      <div className="w-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950"
        />

        {message && (
          <p
            className={`mt-3 text-center text-xs ${
              status === "success" ? "text-emerald-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe TEST"}
      </button>
    </form>
  );
}