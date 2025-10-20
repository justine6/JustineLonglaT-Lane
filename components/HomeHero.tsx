import AnimatedSection from "@/components/AnimatedSection";

export default function HomeHero() {
  return (
    <AnimatedSection>
      <section
        id="home-hero"
        className="relative isolate bg-gradient-to-r from-sky-700 via-blue-600 to-teal-600 text-white"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center mb-4">
            Cloud Confidence. Delivered.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-8">
            Secure, scalable AWS services with certified DevSecOps expertise.
            Helping startups and growing teams achieve cloud automation with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white text-blue-700 px-5 py-2.5 font-medium hover:bg-blue-50 shadow transition"
            >
              Book a Free Assessment
            </a>

            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/70 px-5 py-2.5 font-medium hover:bg-white/10 transition"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
