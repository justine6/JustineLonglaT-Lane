export default function TrustBadges() {
  const items = ["AWS Certified", "Azure Certified", "DevSecOps", "Performance Tuning"];
  return (
    <div className="rounded-xl border bg-white/60 p-4">
      <p className="mb-3 text-sm font-medium text-slate-700">
        Trusted for secure cloud, automation, and performance engineering
      </p>
      <ul className="flex flex-wrap items-center gap-2">
        {items.map((label) => (
          <li
            key={label}
            className="rounded-full border px-3 py-1 text-xs font-medium text-slate-700"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
