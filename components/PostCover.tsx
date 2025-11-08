"use client";

import Image from "next/image";
import { LINKS } from '@/config/links';
import { useState } from "react";
import { LINKS } from '@/config/links';

type Props = { src?: string; title: string; className?: string };

export default function PostCover({ src, title, className = "" }: Props) {
  const [errored, setErrored] = useState(false);

  // graceful fallback when image is missing or fails
  if (!src || errored) {
    return (
      <div
        className={`w-full aspect-[16/9] mb-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 ${className}`}
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] mx-auto rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
        unoptimized
        sizes="(max-width: 768px) 100vw, 1024px"
        onError={() => setErrored(true)}
        priority
      />
    </div>
  );
}



