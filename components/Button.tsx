// components/Button.tsx
import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * Tiny helper instead of `clsx`
 */
function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-sky-600 text-white hover:bg-sky-500 shadow-sm " +
    "dark:bg-sky-500 dark:hover:bg-sky-400",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 " +
    "dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700",
  ghost:
    "bg-transparent text-slate-900 hover:bg-slate-100 " +
    "dark:text-slate-50 dark:hover:bg-slate-800",
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  // If href is provided → render as <Link>
  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  // Otherwise render a plain <button>
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
