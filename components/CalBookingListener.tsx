"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Listens for Cal.com (or Calendly) booking messages and redirects with start/end. */
export default function CalBookingListener({
  redirect = "/booking/success",
}: { redirect?: string }) {
  const router = useRouter();

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      const origin = (e.origin || "").toLowerCase();
      const fromCal =
        origin.includes("cal.com") ||
        origin.includes("localhost") ||
        origin.includes("127.0.0.1");

      const data: any = e.data;
      const ev: string | undefined = data?.event || data?.name || data?.type;

      // Cal.com signals (various embeds) + Calendly shim
      const looksSuccessful =
        typeof ev === "string" &&
        (ev === "cal:bookingSuccessful" ||
          ev === "cal:booked" ||
          ev === "cal:event_scheduled" ||
          ev.startsWith("cal:booking"));

      const calendlySuccess = data?.event === "calendly.event_scheduled";
      if (!(fromCal && (looksSuccessful || calendlySuccess))) return;

      // Try to extract start/end (UTC ISO) from common payload shapes
      const payload = data?.payload || data?.data || data?.booking || data;
      const start =
        payload?.startTime ||
        payload?.start ||
        payload?.when?.start_time ||
        payload?.event_start_time ||
        payload?.slot?.start ||
        undefined;

      const end =
        payload?.endTime ||
        payload?.end ||
        payload?.when?.end_time ||
        payload?.event_end_time ||
        payload?.slot?.end ||
        undefined;

      const url = new URL(redirect, window.location.origin);
      // keep any existing params (e.g., v=marketing)
      const sp = url.searchParams;
      if (start) sp.set("start", new Date(start).toISOString());
      if (end) sp.set("end", new Date(end).toISOString());
      url.search = sp.toString();

      router.push(url.pathname + (url.search ? `?${sp}` : ""));
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [router, redirect]);

  return null;
}
