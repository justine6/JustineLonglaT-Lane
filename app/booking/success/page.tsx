// app/booking/success/page.tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import BookingSuccessClient from "@/components/BookingSuccessClient";

export const metadata: Metadata = {
  title: "Booking Confirmed | Jutellane Solutions",
  description:
    "Your meeting is confirmed. Add it to your calendar or contact us if you need to reschedule.",
};

// Ensure this route is rendered on the client (no prerender)
export const dynamic = "force-dynamic";
export const revalidate = 0;
// If you had set edge runtime anywhere for this page, switch it off:
// export const runtime = "nodejs";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading…</div>}>
      <BookingSuccessClient />
    </Suspense>
  );
}
