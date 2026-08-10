import type { ComponentType, ReactNode } from "react";

type MDXComponentProps = {
  children?: ReactNode;
  [key: string]: unknown;
};

type MDXComponents = Record<
  string,
  ComponentType<MDXComponentProps>
>;

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="mb-4 mt-6 text-3xl font-bold"
        {...props}
      >
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2
        className="mb-3 mt-6 text-2xl font-semibold"
        {...props}
      >
        {children}
      </h2>
    ),

    p: ({ children, ...props }) => (
      <p
        className="my-3 leading-7 text-slate-700"
        {...props}
      >
        {children}
      </p>
    ),

    ul: ({ children, ...props }) => (
      <ul
        className="my-3 list-disc pl-6"
        {...props}
      >
        {children}
      </ul>
    ),

    code: ({ children, ...props }) => (
      <code
        className="rounded bg-slate-100 px-1 py-0.5"
        {...props}
      >
        {children}
      </code>
    ),

    ...components,
  };
}