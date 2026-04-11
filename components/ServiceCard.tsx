import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-900">
        <Icon className="h-6 w-6 text-slate-700 dark:text-slate-200" />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}