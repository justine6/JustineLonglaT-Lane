// components/PublicationsGrid.tsx
"use client";

import Image from "next/image";
import { LINKS } from '@/config/links';
import Link from "next/link";

export type Post = {
  slug: string;
  title: string;
  summary?: string;
  cover?: string;
  date?: string;
  tags?: string[];
};

type Props = {
  posts: Post[];
  limit?: number;
};

export default function PublicationsGrid({ posts, limit }: Props) {
  const items = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((p) => (
        <article
          key={p.slug}
          className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white/70 dark:bg-gray-900/40"
        >
          {/* Cover (optional) */}
          {p.cover ? (
            <div className="relative w-full aspect-[16/9]">
            <Image
              src="/brand/justine-logo.png"
              alt="Justine Longla T — DevSecOps, Cloud, Sustainability"
              width={420}
              height={420}
              priority
              className="w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] h-auto mx-auto"
            />

            </div>
          ) : (
            <div className="w-full aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
          )}

          <div className="p-4">
            <Link
              href={`/posts/${p.slug}`}
              className="font-semibold hover:underline block"
            >
              {p.title}
            </Link>

            {p.summary ? (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {p.summary}
              </p>
            ) : null}

            <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              {p.date ? <span>{new Date(p.date).toLocaleDateString()}</span> : <span />}
              <div className="flex gap-2">
                {p.tags?.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}


