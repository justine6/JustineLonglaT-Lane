"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

function fmtICS(dt: Date) {
  // UTC in YYYYMMDDTHHMMSSZ
  const pad = (n: number) => String(n).padStart(2, "0");
  const yyyy = dt.getUTCFullYear();
  const mm = pad(dt.getUTCMonth() + 1);
  const dd = pad(dt.getUTCDate());
  const hh = pad(dt.getUTCHours());
  const mi = pad(dt.getUTCMinutes());
  const ss = pad(dt.getUTCSeconds());
  return `${yyyy}${mm}${dd}T${hh}${mi}${ss}Z`;
}

export default function AddToCalendar({
  title = "Intro Call with Jutellane Solutions",
  location = "Online",
  details = "Thanks for booking! You'll receive a confirmation email with the meeting link.",
}: {
  title?: string;
  location?: string;
  details?: string;
}) {
  const params = useSearchParams();
  const startISO = params.get("start");
  const endISO = params.get("end");

  const times = useMemo(() => {
    try {
      if (!startISO || !endISO) return null;
      const start = new Date(startISO);
      const end = new Date(endISO);
      if (isNaN(+start) || isNaN(+end)) return null;
      return { start, end };
    } catch {
      return null;
    }
  }, [startISO, endISO]);

  const googleHref = useMemo(() => {
    const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const text = `&text=${encodeURIComponent(title)}`;
    const det = `&details=${encodeURIComponent(details)}`;
    const loc = `&location=${encodeURIComponent(location)}`;
    if (!times) return `${base}${text}${det}${loc}`;
    const dates = `&dates=${fmtICS(times.start)}/${fmtICS(times.end)}`;
    return `${base}${text}${dates}${det}${loc}`;
  }, [times, title, details, location]);

  const outlookHref = useMemo(() => {
    const base = "https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent";
    const subject = `&subject=${encodeURIComponent(title)}`;
    const body = `&body=${encodeURIComponent(details)}`;
    const loc = `&location=${encodeURIComponent(location)}`;
    if (!times) return `${base}${subject}${body}${loc}`;
    const startdt = `&startdt=${encodeURIComponent(times.start.toISOString())}`;
    const enddt = `&enddt=${encodeURIComponent(times.end.toISOString())}`;
    return `${base}${subject}${body}${loc}${startdt}${enddt}`;
  }, [times, title, details, location]);

  const downloadICS = () => {
    if (!times) return;
    const uid = crypto.randomUUID();
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Jutellane Solutions//Booking//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${fmtICS(new Date())}`,
      `DTSTART:${fmtICS(times.start)}`,
      `DTEND:${fmtICS(times.end)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${details.replace(/\n/g, "\\n")}`,
      `LOCATION:${location}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\\r\\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "intro-call.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const disabled = !times;

  return (
    <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
      <a
        href={googleHref}
        target="_blank"
        rel="noreferrer"
        className={"rounded-xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] " +
          (disabled ? "cursor-not-allowed bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400" : "bg-emerald-600 text-white hover:bg-emerald-700")}
        aria-disabled={disabled}
        onClick={(e) => disabled && e.preventDefault()}
      >
        Add to Google
      </a>
      <a
        href={outlookHref}
        target="_blank"
        rel="noreferrer"
        className={"rounded-xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] " +
          (disabled ? "cursor-not-allowed bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400" : "bg-blue-600 text-white hover:bg-blue-700")}
        aria-disabled={disabled}
        onClick={(e) => disabled && e.preventDefault()}
      >
        Add to Outlook
      </a>
      <button
        type="button"
        onClick={downloadICS}
        className={"rounded-xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] " +
          (disabled ? "cursor-not-allowed bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400" : "border border-slate-300/70 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900")}
        aria-disabled={disabled}
        disabled={disabled}
        title={disabled ? "Calendar file available once start/end are provided by the booking redirect." : "Download .ics (Apple / others)"}
      >
        Add to Apple (.ics)
      </button>
    </div>
  );
}
