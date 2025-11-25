// app/about/page.tsx
export const metadata = {
  title: "About Justine | Justine Longla T.",
  description: "DevSecOps Engineer & Cloud Architect — Cloud Confidence. Delivered.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">About Justine</h1>

      <p className="mb-4">
        I’m <strong>Fnu Longla Justine Tekang</strong>, a DevSecOps Engineer and Cloud Architect
        with over seven years of experience designing secure, scalable, and resilient systems
        across AWS and Azure. My work lives at the intersection of automation, observability,
        and impact—whether I’m building infrastructure for healthcare systems, optimizing cloud
        costs, or enabling multilingual, mission-driven web platforms.
      </p>

      <p className="mb-4">
        I’m certified in both <strong>AWS</strong> and <strong>Microsoft</strong> ecosystems,
        and I believe DevSecOps isn’t just about pipelines—it’s about creating trust in every
        deployment. Each project I build is guided by that principle, from the technical rigor
        of <em>Justine Longla T.</em> to the vision-driven purpose of <em>Nouvo Ayiti 2075</em>.
      </p>

      <p className="mb-4">
        Beyond engineering, I’m passionate about sustainability and knowledge sharing—empowering
        communities through technology that connects, secures, and inspires. My goal in every
        environment is the same: <strong>deliver automation with integrity, and technology with purpose.</strong>
      </p>
    </main>
  );
}
