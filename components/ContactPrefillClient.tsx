"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

function setValue(selectors: string[], value: string) {
  for (const sel of selectors) {
    const el = document.querySelector(sel) as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | null;

    if (!el) continue;

    // Set value in a way that works with controlled/uncontrolled inputs
    (el as any).value = value;

    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  }
  return false;
}

export default function ContactPrefillClient() {
  const sp = useSearchParams();

  useEffect(() => {
    // Funnel context
    const intent = sp.get("intent") ?? "";
    const service = sp.get("service") ?? "";

    // Optional direct prefill from /discovery
    const subjectFromQs = sp.get("subject") ?? "";
    const messageFromQs = sp.get("message") ?? "";

    if (!intent && !service && !subjectFromQs && !messageFromQs) return;

    const subject =
      subjectFromQs ||
      (intent ? `Consultation request: ${intent}` : "Consultation request");

    const message =
      messageFromQs ||
      `Hi Justine,\n\nI’d like to request a consultation${
        intent ? ` for ${intent}` : ""
      }.\n\nGoals:\n- \n\nEnvironment:\n- Cloud provider:\n- Current stack:\n\nTimeline:\n- \n\nNotes:\n- \n`;

    // ✅ Update these selectors to match your ContactForm fields once you confirm their names/ids
    // Common patterns supported:
    // - name="subject" / id="subject"
    // - name="message" / id="message"
    // - name="service" / select for service
    setValue(
      [
        'input[name="subject"]',
        "input#subject",
        'input[name="title"]',
        'input[placeholder*="subject" i]',
      ],
      subject
    );

    if (service) {
      setValue(
        ['select[name="service"]', "select#service", 'input[name="service"]', "input#service"],
        service
      );
    }

    setValue(
      [
        'textarea[name="message"]',
        "textarea#message",
        'textarea[name="body"]',
        'textarea[placeholder*="message" i]',
        'textarea[placeholder*="tell" i]',
      ],
      message
    );
  }, [sp]);

  return null;
}
