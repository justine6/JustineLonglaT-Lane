import type { Metadata } from "next";
import BookingSuccessClient from "@/components/BookingSuccessClient";

export const metadata: Metadata = {
  title: "Booking Confirmed | Jutellane Solutions",
  description: "Your meeting is confirmed. Add it to your calendar or contact us if you need to reschedule.",
};

export default function Page() {
  return <BookingSuccessClient />;
}
