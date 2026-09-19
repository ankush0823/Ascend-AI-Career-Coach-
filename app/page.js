import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeatureGrid />
      <HowItWorks />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
