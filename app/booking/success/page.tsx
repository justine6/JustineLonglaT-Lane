// app/booking/success/page.tsx
import BookingSuccess from "@/components/BookingSuccess";

type Search = {
  v?: string;
  start?: string;
  end?: string;
};

export default function Page({ searchParams }: { searchParams: Search }) {
  return <BookingSuccess params={searchParams} />;
}
