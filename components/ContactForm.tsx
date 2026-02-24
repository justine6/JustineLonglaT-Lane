"use client";
import { useEffect, useMemo, useState } from "react";

type Prefill = Partial<{
  name: string;
  email: string;
  phone: string;
  message: string;
  intent: string;
  service: string;
}>;

export default function ContactForm({ prefill }: { prefill?: Prefill }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Build a premium prefilled message block (only if intent/service provided)
  const prefilledMessage = useMemo(() => {
    const intent = prefill?.intent?.trim();
    const service = prefill?.service?.trim();

    if (!intent && !service) return "";

    return (
      `Consultation request\n` +
      `Intent: ${intent || "-"}\n` +
      `Service: ${service || "-"}\n\n` +
      `Goals:\n- \n\n` +
      `Environment:\n- Cloud provider:\n- Current stack:\n\n` +
      `Timeline:\n- \n\n` +
      `Notes:\n- \n`
    );
  }, [prefill?.intent, prefill?.service]);

  // Apply prefill once (and whenever query changes)
  useEffect(() => {
    if (!prefill) return;

    if (prefill.name) setName(prefill.name);
    if (prefill.email) setEmail(prefill.email);
    if (prefill.phone) setPhone(prefill.phone);

    // Prefer explicit message; otherwise use the generated template if available.
    if (prefill.message) {
      setMessage(prefill.message);
    } else if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill?.name, prefill?.email, prefill?.phone, prefill?.message, prefilledMessage]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (res.status === 503) {
        const to =
          process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@justinelonglat-lane.com";
        const subject = encodeURIComponent(`New message from ${name}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
        );
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        return;
      }

      alert("Thanks! Your message has been sent.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      const to =
        process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@justinelonglat-lane.com";
      const subject = encodeURIComponent(`New message from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 text-left bg-white/70 dark:bg-gray-900/60 p-6 rounded-2xl border"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            className="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-900"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="contact-phone">
          Phone (optional)
        </label>
        <input
          id="contact-phone"
          name="phone"
          className="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-900"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
        />
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="w-full border rounded-md px-3 py-2 min-h-[140px] bg-white dark:bg-gray-900"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="px-4 py-2 rounded-md border hover:shadow">
        Send
      </button>
    </form>
  );
}
