import type { ComponentType } from "react";

// Inline MDXComponents to avoid needing "mdx/types"
type MDXComponents = Record<string, ComponentType<any>>;

/** Map MDX tags to styled components (server-safe; no React context) */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (p) => <h1 className="text-3xl font-bold mt-6 mb-4" {...p} />,
    h2: (p) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...p} />,
    p:  (p) => <p className="leading-7 my-3 text-slate-700" {...p} />,
    ul: (p) => <ul className="list-disc pl-6 my-3" {...p} />,
    code: (p) => <code className="px-1 py-0.5 rounded bg-slate-100" {...p} />,
    ...components,
  };
}
