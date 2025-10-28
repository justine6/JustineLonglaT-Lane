"use client"; // important to use hooks

import { useState } from "react";
import dynamic from "next/dynamic";

// Load the iframe section client-side (framer-motion needs it)
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    // Simple honeypot: real users won't see/fill this
    const honey = String(formData.get("website") || "");
    if (honey) {
      setStatus("❌ Spam detected.");
      return;
    }

    const body = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      reason: String(formData.get("reason") || "general"),
      company: String(formData.get("company") || "").trim(),
    };

    if (!body.name || !body.email || !body.message) {
      setStatus("❗ Please fill out name, email, and message.");
      return;
    }

    setStatus("Sending...");
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        formEl.reset();
      } else {
        const text = await res.text().catch(() => "");
        setStatus(`❌ Failed to send message. ${text || ""}`.trim());
      }
    } catch {
      setStatus("❌ Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot (hidden) */}
        <label className="hidden" aria-hidden="true">
          <span className="sr-only">Website</span>
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>

        <label className="block">
          <span className="sr-only">Your name</span>
          <input
            name="name"
            placeholder="Your name"
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </label>

        <label className="block">
          <span className="sr-only">Email</span>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="sr-only">Company</span>
            <input
              name="company"
              placeholder="Company (optional)"
              className="w-full border px-4 py-2 rounded-md"
            />
          </label>

          <label className="block">
            <span className="sr-only">Reason</span>
            <select
              name="reason"
              defaultValue="general"
              className="w-full border px-4 py-2 rounded-md"
            >
              <option value="general">General question</option>
              <option value="project-inquiry">Project inquiry</option>
              <option value="request-resume">Request résumé</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={sending}
            className="bg-[#0047a1] text-white px-6 py-2 rounded-md hover:bg-[#003a84] disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {sending ? "Sending..." : "Send"}
          </button>

          {/* Quick IntroCall button */}
          <a
            href="https://cal.jutellane.com/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Book IntroCall
          </a>
        </div>

        {status && (
          <p
            className={`mt-2 text-sm ${
              status.startsWith("✅")
                ? "text-green-600"
                : status.startsWith("❌")
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>

      {/* Divider */}
      <div className="my-12 flex items-center gap-4">
        <div className="h-px bg-gray-200 flex-1" />
        <span className="text-gray-500 text-sm">or book instantly below</span>
        <div className="h-px bg-gray-200 flex-1" />
      </div>

      {/* Cal.com inline embed (animated section) */}
      <ContactSection />
    </main>
  );
}
