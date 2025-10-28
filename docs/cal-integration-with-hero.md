# 🤝 Cal.com Integration – Jutellane Solutions

## Overview
This document explains how to integrate the **IntroCall (30 min)** event from Cal.com into the Jutellane Solutions website, aligning it with brand colors, tagline, and the animated Hero section.  
It also covers embedding the scheduler on your **Contact page** for easy booking.

---

## 🧩 Prerequisites

Install Framer Motion for animations:

```bash
npm install framer-motion

---

## Branding
- **Tagline:** Cloud Confidence. Delivered.
- **CTA Label:** Book IntroCall
- **Primary Color:** #1E90FF (Jutellane blue)
- **Booking Link:** [https://cal.jutellane.com/intro-call](https://cal.jutellane.com/intro-call)
- **DNS Record:** `cal.jutellane.com → 76.76.21.21` (Verified)
- **Logo:** `/brand/justine-banner.png`

---

## Cal.com Steps

1. **Branding Setup**
   - Upload the Jutellane logo.
   - Set primary color to `#1E90FF`.
   - Add tagline: *Cloud Confidence. Delivered.*

2. **Create Event Type**
   - **Name:** Intro Call (30 min)
   - **Slug:** `/intro-call` (creates `https://cal.jutellane.com/intro-call`)
   - **Location:** Cal Video / Google Meet / Zoom
   - **Availability:** Choose hours and enable timezone detection.
   - **Confirmation Page:** Optional redirect → `https://jutellane.com/thank-you`.

3. **Verify Event**
   - Open [https://cal.jutellane.com/intro-call](https://cal.jutellane.com/intro-call) in an incognito browser window.
   - Confirm branding and availability appear as expected.

---

## 🌤️ Hero Section Integration (with Framer Motion)

Below is the production-ready **HeroSection.tsx** code used in Jutellane Solutions, with a smooth fade-in animation for the “Book IntroCall” button and hero text.

```tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#0047a1] to-[#00a8a8] py-20 text-center text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cloud Confidence. Delivered.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Secure, scalable AWS services with certified DevSecOps expertise.  
          Helping startups and growing teams achieve cloud automation with confidence.
        </motion.p>

        {/* ✨ CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {/* 🌟 IntroCall (Primary) */}
          <Link
            href="https://cal.jutellane.com/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book IntroCall"
            className="inline-flex items-center justify-center rounded-lg bg-white text-blue-700 font-semibold px-8 py-3 shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform duration-300"
          >
            Book IntroCall
          </Link>

          {/* Secondary CTAs */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white px-8 py-3 font-medium hover:bg-white/10 transition-all duration-300"
          >
            Book a Free Assessment
          </a>

          <a
            href="/brochure.pdf"
            className="inline-flex items-center justify-center rounded-lg border border-white px-8 py-3 font-medium hover:bg-white/10 transition-all duration-300"
          >
            Download Brochure
          </a>
        </motion.div>
      </div>

      {/* Banner Image */}
      <motion.div
        className="mt-12 flex justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.0 }}
      >
        <Image
          src="/brand/justine-banner.png"
          alt="Justine Longla T Banner"
          width={900}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
