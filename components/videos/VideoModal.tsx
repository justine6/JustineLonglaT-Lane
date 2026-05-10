"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { VideoItem } from "@/lib/videos/video-library";
import {
  getRelatedVideos,
  getYouTubeEmbedUrl,
} from "@/lib/videos/video-library";

type VideoModalProps = {
  video: VideoItem | null;
  onClose: () => void;
  onSelectVideo: (video: VideoItem) => void;
  autoplayNext?: boolean;
};

export default function VideoModal({
  video,
  onClose,
  onSelectVideo,
  autoplayNext = true,
}: VideoModalProps) {
  const relatedVideos = video ? getRelatedVideos(video, 3) : [];

  function playNext() {
    if (!autoplayNext || relatedVideos.length === 0) return;
    onSelectVideo(relatedVideos[0]);
  }

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            layout
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-[min(96vw,1120px)] overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-black"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Close
            </button>

            <div className="grid max-h-[88vh] overflow-y-auto lg:grid-cols-[1fr_320px]">
              <div className="space-y-5 p-4 sm:p-6">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                  {video.videoSrc? (
                    <video
                      key={video.slug}
                      src={video.videoSrc}
                      poster={video.thumbnailSrc}
                      controls
                      autoPlay
                      playsInline
                      onEnded={playNext}
                      className="aspect-video w-full bg-black"
                    />
                  ) : video.youtubeId ? (
                    <iframe
                      key={video.slug}
                      src={getYouTubeEmbedUrl(video.youtubeId, true)}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="aspect-video w-full"
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center text-slate-400">
                      Video source unavailable
                    </div>
                  )}
                </div>

                {video.videoSrc && video.youtubeId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/50 hover:text-white"
                  >
                    Open YouTube fallback
                  </a>
                )}

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {video.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-400">
                    {video.description}
                  </p>
                </div>
              </div>

              <aside className="border-t border-white/10 bg-white/[0.03] p-4 lg:border-l lg:border-t-0 sm:p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Related Videos
                </h3>

                <div className="space-y-3">
                  {relatedVideos.map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => onSelectVideo(item)}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-left transition hover:border-sky-400/40 hover:bg-slate-900"
                    >
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-400">
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}