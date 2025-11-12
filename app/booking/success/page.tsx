import { Suspense } from "react";
import BookingSuccessClient from "@/components/BookingSuccessClient";

// Prevent static prerendering to keep this purely dynamic
export const dynamic = "force-dynamic"; // (optional but recommended)
export const revalidate = 0;            // (belt & suspenders)

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[40vh] grid place-items-center text-slate-500">Loading…</div>}>
      <BookingSuccessClient />
    </Suspense>
  );
}
