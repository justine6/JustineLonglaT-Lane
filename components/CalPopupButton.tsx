"use client";

import { useEffect } from "react";

type CalPopupButtonProps = {
  link: string; // e.g. "https://cal.com/justine/intro-call"
  className?: string;
  children?: React.ReactNode;
};

export default function CalPopupButton({
  link,
  className = "px-4 py-2 rounded-xl border font-medium",
  children = "Book a Call",
}: CalPopupButtonProps) {
  useEffect(() => {
    // Load Cal embed script once
    if (document.getElementById("cal-embed-script")) return;
    const s = document.createElement("script");
    s.id = "cal-embed-script";
    s.src = "https://cal.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Cal reads these data-* attributes to open the popup
  const dataAttrs = {
    "data-cal-link": link.replace(/^https?:\/\//, "").replace(/\/+$/, ""),
    "data-cal-config": JSON.stringify({ theme: "system" }),
  } as Record<string, string>;

  return (
    <button type="button" className={className} {...dataAttrs}>
      {children}
    </button>
  );
}
