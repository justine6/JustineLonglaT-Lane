"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";


import VideoCard from "@/components/videos/VideoCard";
import VideoModal from "@/components/videos/VideoModal";
import {
  VIDEO_LIBRARY,
  type VideoItem,
} from "@/lib/videos/video-library";

export default function VideosTeaser() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            JLT Video Library
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Platform thinking, explained cinematically.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A curated video system for architecture, DevSecOps, governance,
            automation, and the operating models behind reliable platforms.
          </p>

          <div className="mt-8">
            <Link
              href="/videos"
              className="inline-flex rounded-full border border-sky-300 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-700 transition hover:border-sky-400 hover:bg-sky-100 dark:border-sky-400/40 dark:bg-sky-500/10 dark:text-sky-200 dark:hover:border-sky-300 dark:hover:bg-sky-500/20 dark:hover:text-white"
            >
              View full video library →
            </Link>
          </div>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {VIDEO_LIBRARY.map((video) => (
            <motion.div
              key={video.slug}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <VideoCard video={video} onSelect={setActiveVideo} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onSelectVideo={setActiveVideo}
        autoplayNext
      />
    </section>
  );
}