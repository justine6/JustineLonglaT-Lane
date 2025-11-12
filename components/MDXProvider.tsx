"use client";
import { MDXProvider as Base } from "@mdx-js/react";
import type { ReactNode } from "react";

export default function MDXProvider({ children }: { children: ReactNode }) {
  return <Base>{children}</Base>;
}
