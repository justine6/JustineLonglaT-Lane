import Hero from "@/components/services-solutions/Hero";
import HowJLTLaneHelps from "@/components/services-solutions/HowJLTLaneHelps";
import CommonEngagementPatterns from "@/components/services-solutions/CommonEngagementPatterns";
import OfferingsGrid from "@/components/services-solutions/OfferingsGrid";
import Capabilities from "@/components/services-solutions/Capabilities";
import EngagementModel from "@/components/services-solutions/EngagementModel";
import WhyJLT from "@/components/services-solutions/WhyJLT";
import CTASection from "@/components/services-solutions/CTASection";
export default function ServicesSolutionsPage() {
  return (
    <main className="bg-slate-950 text-white">
      <Hero />
      <HowJLTLaneHelps />
      <CommonEngagementPatterns />
      <OfferingsGrid />
      <Capabilities />
      <EngagementModel />
      <WhyJLT />
      <CTASection />
    </main>
  );
}