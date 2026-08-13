import Link from "next/link";

import { resolveDirectCheckoutOffering } from "@/lib/checkout-offering";
import { getStripe } from "@/lib/stripe";

type SearchParams = Promise<{
  session_id?: string;
}>;

type NextStepType = "scheduling" | "general";

type SuccessState =
  | "unverified"
  | "payment-pending"
  | "paid-service"
  | "fulfillment-pending";

type VerifiedSuccessInput = {
  sessionStatus: string | null;
  paymentStatus: string | null;
  offeringKey: string | null;
};

type VerifiedSuccessContent = {
  state: SuccessState;
  eyebrow: string;
  title: string;
  description: string;
  nextStepLabel: string;
  nextStepHref: string;
  nextStepType: NextStepType;
};

const UNVERIFIED_CONTENT: VerifiedSuccessContent = {
  state: "unverified",
  eyebrow: "Payment not verified",
  title: "We could not verify this payment",
  description:
    "No verified Stripe checkout session is available. If you completed payment, please contact us so we can review it safely.",
  nextStepLabel: "Contact us",
  nextStepHref: "/contact",
  nextStepType: "general",
};

export function getVerifiedSuccessContent({
  sessionStatus,
  paymentStatus,
  offeringKey,
}: VerifiedSuccessInput): VerifiedSuccessContent {
  const offering = resolveDirectCheckoutOffering(offeringKey);

  if (!offering) {
    return UNVERIFIED_CONTENT;
  }

  if (
    sessionStatus !== "complete" ||
    paymentStatus !== "paid"
  ) {
    return {
      state: "payment-pending",
      eyebrow: "Payment pending",
      title: "Your payment is not yet confirmed",
      description:
        "Stripe has not reported this checkout as fully paid. Please wait or contact us if you need assistance.",
      nextStepLabel: "Contact us",
      nextStepHref: "/contact",
      nextStepType: "general",
    };
  }

  if (offering.purchaseType === "membership") {
    return {
      state: "fulfillment-pending",
      eyebrow: "Payment verified",
      title: "Your payment has been verified",
      description:
        "Your membership fulfillment is being processed. Access is granted only after the verified webhook completes the authorization update.",
      nextStepLabel: "Return home",
      nextStepHref: "/",
      nextStepType: "general",
    };
  }

  if (offering.offeringKey === "intro-consultation") {
    return {
      state: "paid-service",
      eyebrow: "Payment verified",
      title:
        "Payment verified for your Intro Platform Consultation",
      description:
        "Your purchase has been verified. The next step is to choose a consultation time.",
      nextStepLabel: "Book your intro session",
      nextStepHref: "/availability",
      nextStepType: "scheduling",
    };
  }

  if (offering.offeringKey === "focused-architecture") {
    return {
      state: "paid-service",
      eyebrow: "Payment verified",
      title:
        "Payment verified for your Focused Architecture Consultation",
      description:
        "Your purchase has been verified. The next step is to schedule the architecture consultation.",
      nextStepLabel: "Schedule architecture consultation",
      nextStepHref: "/availability",
      nextStepType: "scheduling",
    };
  }

  return UNVERIFIED_CONTENT;
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
          Use the button below to choose an available time.
        </p>
        <p>
          Scheduling confirmation is separate from payment
          verification.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
      Continue using the safe next step below. Contact us if
      you need help verifying the transaction.
    </div>
  );
}

export const metadata = {
  title: "Payment Status | Justine Longla T.",
  description:
    "Verified payment status and governed next steps for commercial services.",
};

export default async function ConsultingSuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const sessionId =
    typeof params?.session_id === "string"
      ? params.session_id
      : null;

  let content = UNVERIFIED_CONTENT;

  if (sessionId) {
    try {
      const session =
        await getStripe().checkout.sessions.retrieve(sessionId);

      content = getVerifiedSuccessContent({
        sessionStatus: session.status,
        paymentStatus: session.payment_status,
        offeringKey:
          session.metadata?.offeringKey ??
          session.metadata?.plan ??
          null,
      });
    } catch (error: unknown) {
      console.error("checkout success verification failed", {
        message:
          error instanceof Error
            ? error.message
            : "Unknown verification error",
      });
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-20 dark:bg-slate-950">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {content.eyebrow}
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
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}
