type NewsletterSubscriptionSuccessProps = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

export default function NewsletterSubscriptionSuccess({
  status,
  message,
}: NewsletterSubscriptionSuccessProps) {
  if (!message || status === "idle" || status === "loading") {
    return null;
  }

  return (
    <div
      className={`mt-4 rounded-lg px-4 py-3 text-center text-sm font-medium ${
        status === "success"
          ? "border border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
          : "border border-red-300 bg-red-50 text-red-700 dark:border-red-700 dark:bg-red-950/40 dark:text-red-300"
      }`}
    >
      {message}
    </div>
  );
}