import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TrustSection } from "@/components/TrustSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="security">
          <TrustSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <FinalCTASection />
      </main>
    </div>
  );
};

export default Index;
