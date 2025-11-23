import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 text-gray-900 dark:bg-gray-950 dark:text-gray-100 sm:px-6 sm:py-24">
      <AnimatedSection>
        <section className="mx-auto max-w-2xl px-2 text-center">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Get In Touch</h1>
          <p className="mb-6 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
            Reach out for project inquiries, collaboration, or speaking opportunities.
          </p>
          <div className="space-y-3 text-sm sm:text-base">
            <p>
              Email:{" "}
              <a
                href="mailto:info@justinelonglat-lane.com"
                className="break-all text-blue-600 hover:underline dark:text-blue-400"
              >
                info@justinelonglat-lane.com
              </a>
            </p>
            <p>Phone: +1 405.934.5864</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/longlatjustine"
                className="text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                longlatjustine
              </a>
            </p>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
