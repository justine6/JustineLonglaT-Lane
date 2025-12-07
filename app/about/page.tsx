// app/about/page.tsx

import AboutSection from "@/components/AboutSection";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "About Justine | Justine Longla T.",
  description: "DevSecOps Engineer & Cloud Architect — Cloud Confidence. Delivered.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <AboutSection />
    </main>
  );
}
