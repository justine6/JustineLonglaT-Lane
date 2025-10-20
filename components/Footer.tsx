'use client';

import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Github, Mail, Linkedin } from 'lucide-react';

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
        <div className="mt-2 flex items-center justify-center gap-3 text-sm">
          <a
            href="mailto:justinelongla@yahoo.com"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <Mail size={16} /> justinelongla@yahoo.com
          </a>

          <span className="text-gray-300 dark:text-gray-600">·</span>

          <a
            href="https://www.linkedin.com/in/longlatjustine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto my-5 h-px w-24 bg-gray-200 dark:bg-gray-800" />

        {/* Site + security badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href="https://www.jutellane.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 transition-colors hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50"
          >
            <Globe size={14} /> Live: www.jutellane.com
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
            <Github size={14} /> GitHub Pages
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
