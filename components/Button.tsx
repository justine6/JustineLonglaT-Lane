// components/Button.tsx
import Link from "next/link";
import type {
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

/**
 * Link-style button props
 *  - must have `href`
 *  - explicitly cannot have `type`
 */
type LinkButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "type"> & {
    href: string;
    type?: never;
  };

/**
 * Native <button> props
 *  - no `href`
 *  - `type` is the normal HTML button union
 */
type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href"> & {
    href?: undefined;
    type?: "button" | "submit" | "reset";
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/** Tiny helper instead of `clsx` */
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

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  // 🔗 Link-style button
  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  // 🧩 Plain <button> (now safely narrowed to NativeButtonProps)
  const { type = "button", ...buttonRest } = rest as NativeButtonProps;

  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
