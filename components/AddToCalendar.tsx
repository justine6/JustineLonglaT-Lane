"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Button, ButtonLink } from "@/components/ui/Button";

function fmtICS(dt: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${dt.getUTCFullYear()}${pad(dt.getUTCMonth() + 1)}${pad(
    dt.getUTCDate()
  )}T${pad(dt.getUTCHours())}${pad(dt.getUTCMinutes())}${pad(
    dt.getUTCSeconds()
  )}Z`;
}

export default function AddToCalendar({
  title = "Intro Call with Justine Longla T.",
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
    const base =
      "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const text = `&text=${encodeURIComponent(title)}`;
    const det = `&details=${encodeURIComponent(details)}`;
    const loc = `&location=${encodeURIComponent(location)}`;

    if (!times) return `${base}${text}${det}${loc}`;

    const dates = `&dates=${fmtICS(times.start)}/${fmtICS(times.end)}`;
    return `${base}${text}${dates}${det}${loc}`;
  }, [times, title, details, location]);

  const outlookHref = useMemo(() => {
    const base =
      "https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent";
    const subject = `&subject=${encodeURIComponent(title)}`;
    const body = `&body=${encodeURIComponent(details)}`;
    const loc = `&location=${encodeURIComponent(location)}`;

    if (!times) return `${base}${subject}${body}${loc}`;

    const startdt = `&startdt=${encodeURIComponent(
      times.start.toISOString()
    )}`;
    const enddt = `&enddt=${encodeURIComponent(times.end.toISOString())}`;

    return `${base}${subject}${body}${loc}${startdt}${enddt}`;
  }, [times, title, details, location]);

  const downloadICS = () => {
    if (!times) return;

    const uid =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${fmtICS(new Date())}`,
      `DTSTART:${fmtICS(times.start)}`,
      `DTEND:${fmtICS(times.end)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${details.replace(/\n/g, "\\n")}`,
      `LOCATION:${location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "event.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  };

  const disabled = !times;

  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Add this session to your calendar
      </p>

      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
        <ButtonLink
          href={googleHref}
          target="_blank"
          rel="noreferrer"
          variant="success"
          aria-disabled={disabled}
          onClick={(e) => disabled && e.preventDefault()}
          className={disabled ? "opacity-50 cursor-not-allowed" : ""}
        >
          Google
        </ButtonLink>

        <ButtonLink
          href={outlookHref}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          aria-disabled={disabled}
          onClick={(e) => disabled && e.preventDefault()}
          className={disabled ? "opacity-50 cursor-not-allowed" : ""}
        >
          Outlook
        </ButtonLink>

        <Button
          type="button"
          onClick={downloadICS}
          variant="outline"
          disabled={disabled}
        >
          Apple (.ics)
        </Button>
      </div>

      {disabled && (
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Calendar options will be available after booking confirmation.
        </p>
      )}
    </div>
  );
}