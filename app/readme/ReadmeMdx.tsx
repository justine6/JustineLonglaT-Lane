// app/readme/ReadmeMdx.tsx
"use client";

import Content from "./content.mdx";

export default function ReadmeMdx() {
  return (
    <article className="prose prose-slate max-w-none dark:prose-invert">
      <Content />
    </article>
  );
}
