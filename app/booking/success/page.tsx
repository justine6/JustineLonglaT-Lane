// app/booking/success/page.tsx
import OnboardingPremium from "@/components/OnboardingPremium"; // use your actual path/name

export default function BookingSuccessPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const initialName =
    (Array.isArray(searchParams.name) ? searchParams.name[0] : searchParams.name) ?? "";
  const initialEmail =
    (Array.isArray(searchParams.email) ? searchParams.email[0] : searchParams.email) ?? "";

  return (
    <main className="...">
      {/* your success card … */}
      <OnboardingPremium initialName={initialName} initialEmail={initialEmail} />
    </main>
  );
}
