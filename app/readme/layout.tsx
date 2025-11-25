import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical README | Justine Longla T.",
  description: "Public, code-free overview of the Justine Longla T. project.",
};

export default function ReadmeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
