declare module "*.mdx" {
  import type { ComponentType } from "react";
import { LINKS } from '@/config/links';
  export const meta: { title: string; summary?: string };
  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}

