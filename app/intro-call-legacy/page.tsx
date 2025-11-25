// app/intro-call/page.tsx
import Panel from "@/components/Panel";
import CalBookingListener from "@/components/CalBookingListener";

export const metadata = { title: "Intro Call | Justine Longla T." };

export default function IntroCallPage() {
  // 1) Use the exact link Cal.com gives you (Scheduling → your “Intro Call” → Embed/Share → copy link)
  const base = process.env.NEXT_PUBLIC_CAL_INTRO
    ?? "https://cal.com/<your-username>/<intro-call-slug>";

  // 2) Force embed params so Cal renders correctly inside an iframe
  const u = new URL(base);
  u.searchParams.set("embed", "inline");
  u.searchParams.set("layout", "month_view");
  u.searchParams.set("theme", "system");
  // Optional niceties:
  // u.searchParams.set("hide_event_type_details", "true");
  // u.searchParams.set("primary_color", "1d4ed8"); // brand blue (hex without #)

  return (
    <>
      <Panel
        title="Schedule an Intro Call"
        subtitle="Pick a 15-minute slot that works for you."
        cal={{
          link: u.toString(),
          height: 820,
          layout: "month_view",
          theme: "system",
        }}
      />
      <CalBookingListener redirect="/booking/success" />
    </>
  );
}
