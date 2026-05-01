"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import NewsletterSubscriptionSuccess from "./NewsletterSubscriptionSuccess";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("🔥 FORM SUBMITTED:", email); // DEBUG

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
          source: "newsletter-section",
          page: window.location.pathname,
        }),
      });

      console.log("📡 API RESPONSE STATUS:", res.status); // DEBUG

      const data = await res.json();

      console.log("📦 API RESPONSE DATA:", data); // DEBUG

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Subscription failed.");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("❌ SUBMISSION ERROR:", error); // DEBUG

      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return <NewsletterSubscriptionSuccess />;
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
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-300">{message}</p>
      )}
    </form>
  );
}