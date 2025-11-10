import CalPopupButton from "@/components/CalPopupButton";
import CalPopupButton from "@/components/CalPopupButton";
import Panel from "@/components/Panel";

export default function HireMePage() {
  return (
    <Panel
      title="Schedule an Intro Call"
      subtitle="15-minute discovery call to understand your goals and timelines."
      cal={{
        link: "https://cal.com/justine/intro-call", // <-- update to your real link
        height: 820,
        layout: "month_view",
        theme: "system",
        // params: { name: "Justine", email: "info@nouvoayiti2075.com" } // optional prefill
      }}
      footerSlot={
        <p className="text-xs text-slate-500">
          Powered by Cal.com — your time stays in your timezone.
        </p>
      }
    />
  <CalPopupButton link="https://cal.com/justine/intro-call" />
<CalPopupButton link="https://cal.com/justine/intro-call" />
);
}
