"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#0047a1] to-[#00a8a8] py-20 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Cloud Confidence. Delivered.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Secure, scalable AWS services with certified DevSecOps expertise.  
          Helping startups and growing teams achieve cloud automation with confidence.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow hover:bg-gray-200">Book a Free Assessment</a>
          <a href="/brochure.pdf" className="border border-white px-6 py-3 rounded-lg hover:bg-blue-900">Download Brochure</a>
        </div>
      </div>

      {/* Banner Image */}
      <div className="mt-12 flex justify-center">
        <Image
          src="/brand/justine-banner.png"
          alt="Justine Longla T Banner"
          width={900}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
          priority
        />
      </div>
    </section>
  );
}



