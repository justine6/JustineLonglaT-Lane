"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import NewsletterSubscriptionSuccess from "./NewsletterSubscriptionSuccess";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("🔥 SUBMIT CLICKED:", email);

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

      if (!res.ok) {
        throw new Error(data?.error || "Newsletter signup failed");
      }

      setEmail("");
      setStatus("success");
      setMessage(
        data?.duplicate
          ? "You are already subscribed."
          : "You’re subscribed! Please check your email."
      );
    } catch (error) {
      console.error("Newsletter signup error:", error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe LIVE TEST"}
        </button>
      </div>

      <NewsletterSubscriptionSuccess status={status} message={message} />
    </form>
  );
}