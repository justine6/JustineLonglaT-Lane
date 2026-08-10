import Link from "next/link";

type SearchParams = Promise<{
  service?: string;
}>;

type NextStepType = "scheduling" | "resource" | "general";

type ServiceContent = {
  title: string;
  description: string;
  nextStepLabel: string;
  nextStepHref: string;
  nextStepType: NextStepType;
};

export function getServiceContent(
  service?: string
): ServiceContent {
  switch (service) {
    case "intro":
    case "intro-consultation":
      return {
        title:
          "Payment received for your Intro Platform Consultation",
        description:
          "Thank you for your purchase. Your consultation is confirmed. The next step is to choose a time that works for you.",
        nextStepLabel: "Book your intro session",
        nextStepHref: "/availability",
        nextStepType: "scheduling",
      };

    case "focused-architecture":
      return {
        title:
          "Payment received for your Focused Architecture Consultation",
        description:
          "Thank you for your purchase. The next step is to schedule your architecture consultation so we can review the defined area and prepare your written recommendations.",
        nextStepLabel:
          "Schedule architecture consultation",
        nextStepHref: "/availability",
        nextStepType: "scheduling",
      };

    case "review":
    case "arch-review":
      return {
        title: "Welcome to Platform Architect",
        description:
          "Your Platform Architect subscription is now active. The next step is to schedule your architecture kickoff so we can align on your platform priorities and begin the engagement.",
        nextStepLabel:
          "Schedule architecture kickoff",
        nextStepHref: "/availability",
        nextStepType: "scheduling",
      };

    case "retainer":
      return {
        title: "Welcome to Platform Access",
        description:
          "Your Platform Access subscription is now active. You can now enter the Premium Toolkit and access the available premium platform resources.",
        nextStepLabel: "Enter the Premium Toolkit",
        nextStepHref: "/toolkit/premium",
        nextStepType: "resource",
      };

    default:
      return {
        title: "Payment received",
        description:
          "Thank you. Your payment was received successfully. Continue below to access the appropriate next step.",
        nextStepLabel: "Continue",
        nextStepHref: "/",
        nextStepType: "general",
      };
  }
}

function NextStepInstructions({
  nextStepType,
}: {
  nextStepType: NextStepType;
}) {
  if (nextStepType === "scheduling") {
    return (
      <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        <p>
          1. Use the button below to choose a time on the
          calendar.
        </p>
        <p>
          2. You will receive confirmation after booking.
        </p>
        <p>
          3. If scheduling does not work, contact{" "}
          <a
            href="mailto:justine@justinelonglat-lane.com"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            justine@justinelonglat-lane.com
          </a>
          .
        </p>
      </div>
    );
  }

  if (nextStepType === "resource") {
    return (
      <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        <p>
          1. Use the button below to enter the Premium
          Toolkit.
        </p>
        <p>
          2. Sign in with the account associated with your
          purchase if prompted.
        </p>
        <p>
          3. If access is unavailable, contact{" "}
          <a
            href="mailto:justine@justinelonglat-lane.com"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            justine@justinelonglat-lane.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
      <p>
        Use the button below to continue, or contact us if
        you need assistance identifying the appropriate
        next step.
      </p>
    </div>
  );
}

export const metadata = {
  title: "Consulting Success | Justine Longla T.",
  description:
    "Payment confirmation and next steps for consulting services.",
};

export default async function ConsultingSuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const content = getServiceContent(params?.service);

  return (
    <main className="min-h-screen bg-white px-6 py-20 dark:bg-slate-950">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Payment confirmed
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {content.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          {content.description}
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Next steps
          </h2>

          <NextStepInstructions
            nextStepType={content.nextStepType}
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={content.nextStepHref}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            {content.nextStepLabel}
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Contact directly
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-transparent px-5 py-3 text-sm font-semibold text-slate-500 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}
