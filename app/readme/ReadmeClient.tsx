'use client';

import MDXProvider from '@/components/MDXProvider';
import Content from './content.mdx';

export default function ReadmeClient() {
  return (
    <MDXProvider>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <Content />
      </article>
    </MDXProvider>
  );
}
