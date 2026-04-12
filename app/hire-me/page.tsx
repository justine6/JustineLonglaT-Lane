import CalPopupButton from "@/components/CalPopupButton";
import { runtimeLog } from "@/lib/runtime-log";

export const metadata = { title: "Hire Me | Justine Longla T." };

export default function HireMePage() {
  runtimeLog("info", "hire_me_page_render", {
    page: "/hire-me",
    staticCalLink: "https://cal.com/justine-longla-ptq4no",
  });

  return (
    <main className="min-h-screen px-4 sm:px-6 py-12 pt-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">Schedule an Intro Call</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Pick a 15-minute slot that works for you.
        </p>

        <CalPopupButton link="https://cal.com/justine-longla-ptq4no" />
      </section>
    </main>
  );
}