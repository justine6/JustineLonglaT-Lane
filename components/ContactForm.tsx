"use client";
import { useState } from "react";
import { LINKS } from '@/config/links';

export default function ContactForm() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (res.status === 503) {
        const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@jutellane.com";
        const subject = encodeURIComponent(`New message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      }
      alert("Thanks! Your message has been sent.");
      setName(""); setEmail(""); setPhone(""); setMessage("");
    } catch {
      const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@jutellane.com";
      const subject = encodeURIComponent(`New message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left bg-white/70 dark:bg-gray-900/60 p-6 rounded-2xl border">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-900" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-900" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Phone (optional)</label>
        <input className="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-900" value={phone} onChange={e=>setPhone(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea className="w-full border rounded-md px-3 py-2 min-h-[140px] bg-white dark:bg-gray-900" value={message} onChange={e=>setMessage(e.target.value)} required />
      </div>
      <button type="submit" className="px-4 py-2 rounded-md border hover:shadow">Send</button>
    </form>
  );
}

