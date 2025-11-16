// app/api/ics/route.ts
import { NextRequest } from "next/server";

/** Format a date string/number into ICS UTC (YYYYMMDDTHHmmssZ). */
function toIcsUtc(input?: string | number | Date) {
  if (!input) return undefined;
  const d = new Date(input);
  // Pad helper
  const p = (n: number) => n.toString().padStart(2, "0");
  return (
    d.getUTCFullYear().toString() +
    p(d.getUTCMonth() + 1) +
    p(d.getUTCDate()) +
    "T" +
    p(d.getUTCHours()) +
    p(d.getUTCMinutes()) +
    p(d.getUTCSeconds()) +
    "Z"
  );
}

/** Basic ICS escaping for commas/semicolons/newlines. */
function esc(s?: string) {
  if (!s) return "";
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const q = url.searchParams;

  const title = q.get("title") || "Intro Call — with Justine Longla T.";
  const description =
    q.get("description") ||
    "Thanks for booking with Jutellane Solutions with Justine.. A confirmation email was sent.";
  const location = q.get("location") || "Online";
  const href = q.get("url") || `${url.origin}`;

  // Prefer explicit start/end, else use now + 30min
  const now = Date.now();
  const start = toIcsUtc(q.get("start") || now);
  const end = toIcsUtc(q.get("end") || now + 30 * 60 * 1000);

  // Unique ID for this file (best-effort).
  const uid = `${Date.now()}@jutellane`;

  // Build ICS (CRLF line endings recommended)
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Jutellane Solutions with Justine.//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${esc(uid)}`,
    `DTSTAMP:${toIcsUtc(Date.now())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${esc(title)}`,
    `DESCRIPTION:${esc(description)}`,
    `LOCATION:${esc(location)}`,
    `URL:${esc(href)}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ];

  const ics = lines.join("\r\n");
  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="booking.ics"',
      "Cache-Control": "no-store",
    },
  });
}
