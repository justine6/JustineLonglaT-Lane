"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { VideoItem } from "@/lib/videos/video-library";

type VideoCardProps = {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
};

export default function VideoCard({ video, onSelect }: VideoCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(video)}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 text-left shadow-2xl shadow-black/30 transition"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-emerald-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-sky-400/30 via-transparent to-emerald-400/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

      <div className="relative aspect-video overflow-hidden bg-slate-900">
        {video.thumbnailSrc ? (
          <Image
            src={video.thumbnailSrc}
            alt={video.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-900 text-slate-400">
            JLT Video
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            Watch
          </span>

          {video.duration && (
            <span className="rounded-full bg-black/50 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              {video.duration}
            </span>
          )}
        </div>
      </div>

      <div className="relative space-y-3 p-5">
        <h3 className="text-lg font-semibold text-white">{video.title}</h3>

        <p className="line-clamp-2 text-sm leading-6 text-slate-400">
          {video.description}
        </p>

        {video.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {video.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </motion.button>
  );
}