"use client";
import ContactForm from "@/components/ContactForm";

type Prefill = Partial<{
  name: string;
  email: string;
  phone: string;
  message: string;
  intent: string;
  service: string;
}>;

export default function ContactSection({ prefill }: { prefill?: Prefill }) {
  return (
    <section id="contact" className="max-w-3xl mx-auto mt-16 mb-10">
      <h2 className="text-3xl font-bold mb-2 text-center">Contact</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
        Send a message and I’ll get back to you shortly.
      </p>
      <ContactForm prefill={prefill} />
    </section>
  );
}
