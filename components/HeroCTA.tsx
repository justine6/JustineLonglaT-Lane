"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroCTA() {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20 overflow-hidden">
      {/* Background subtle styling */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/grid.svg')] bg-repeat pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/logo.png"
            alt="Jutellane Solutions Logo"
            width={120}
            height={120}
            className="drop-shadow-lg"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Cloud Confidence. Delivered.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          Secure, scalable, and performance-tuned cloud solutions — built the right way.
          Transform your infrastructure with DevSecOps, automation, resilience,
          and industry-grade best practices.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/intro-call"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105"
          >
            Book Intro Call
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/docs/brochure.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium px-6 py-3 rounded-xl shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  );
}
