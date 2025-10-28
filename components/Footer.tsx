'use client';

import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Github, Mail, Linkedin, Calendar } from 'lucide-react';
import { CONTACT, LIVE_BADGE_URL } from "@/config/links";  

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 mt-16">
      <motion.div
        className="mx-auto max-w-5xl px-4 py-8 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Copyright */}
        <p className="text-sm">
          &copy; {year}{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            Jutellane Solutions
          </span>
          . All rights reserved.
        </p>

        {/* Contact */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-sm">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <Mail size={16} /> {CONTACT.email}
          </a>

          <span className="text-gray-300 dark:text-gray-600">·</span>

          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <Linkedin size={16} /> LinkedIn
          </a>

          <span className="text-gray-300 dark:text-gray-600">·</span>

          {/* Hire Me / Schedule a Call */}
          <a
            href={CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700"
          >
            <Calendar size={14} /> Hire Me
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto my-5 h-px w-24 bg-gray-200 dark:bg-gray-800" />

        {/* Site + security badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href={LIVE_BADGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 transition-colors hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50"
          >
            <Globe size={14} /> Live: jutellane.com
          </a>

          <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <ShieldCheck size={14} /> HTTPS Secured
          </span>

          <a
            href="https://github.com/justine6/Jutellane-Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
