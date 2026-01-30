// app/mesh/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Engineering Mesh | Justine Longla T-Lane",
  description:
    "The Engineering Mesh: practical platform engineering patterns, delivery guardrails, and secure automation.",
};

export default function MeshPage() {
  return (
    <main className="container page">
      <h1>Engineering Mesh</h1>
      <p className="lead">
        A living system of platform patterns: guardrails, CI/CD reliability, automation assets,
        and operational maturity.
      </p>

      {/* Optional: sections so #contact works */}
      <section id="contact" style={{ marginTop: 48 }}>
        <h2>Contact</h2>
        <p>
          Use the <Link href="/contact">Contact</Link> page, or schedule an intro call from the homepage.
        </p>
      </section>
    </main>
  );
}
