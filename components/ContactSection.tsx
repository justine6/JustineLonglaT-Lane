"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0047a1] to-[#00a8a8] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* 🌟 Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Schedule Your IntroCall
        </motion.h2>

        {/* 💬 Description */}
        <motion.p
          className="text-lg md:text-xl text-white/90 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Let’s discuss your goals and explore how Jutellane Solutions can help
          you build cloud confidence through secure and scalable automation.
        </motion.p>

        {/* 📅 Cal.com Embed */}
        <motion.div
          className="w-full overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          <iframe
            src="https://cal.jutellane.com/intro-call?embed=true"
            width="100%"
            height="650"
            frameBorder="0"
            style={{ border: "none" }}
            title="IntroCall Scheduler"
          ></iframe>
        </motion.div>

        {/* Optional Divider */}
        <div className="mt-16 border-t border-white/20 pt-10">
          <motion.p
            className="text-sm text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            💡 Need something custom?{" "}
            <a
              href="mailto:info@jutellane.com"
              className="underline hover:text-white transition"
            >
              Contact us directly
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
