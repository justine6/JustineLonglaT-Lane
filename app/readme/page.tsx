'use client'

import type { Metadata } from "next";
import Content from "./content.mdx";

export default function ReadmePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <article className="prose prose-slate max-w-none">
        <Content />
      </article>
    </main>
  );
}



