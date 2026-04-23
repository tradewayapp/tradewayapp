import { useEffect } from "react";
import SiteHeader from "@/components/marketing/SiteHeader";
import SiteFooter from "@/components/marketing/SiteFooter";
import Hero from "@/components/marketing/Hero";
import TrustStrip from "@/components/marketing/TrustStrip";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import HowItWorks from "@/components/marketing/HowItWorks";
import ReferralPanel from "@/components/marketing/ReferralPanel";
import PricingBlock from "@/components/marketing/PricingBlock";
import SecuritySection from "@/components/marketing/SecuritySection";
import Testimonials from "@/components/marketing/Testimonials";
import FAQSection from "@/components/marketing/FAQSection";
import CTABanner from "@/components/marketing/CTABanner";

export default function MarketingHome() {
  useEffect(() => {
    document.title = "TradeWay — Autonomous AI Forex Trading in USD & INR";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "TradeWay runs an autonomous AI engine that trades global forex 24/7 and settles profits daily in USD or INR. Start with just ₹125.");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <FeatureGrid />
        <HowItWorks />
        <ReferralPanel />
        <PricingBlock />
        <SecuritySection />
        <Testimonials />
        <FAQSection />
        <CTABanner />
      </main>
      <SiteFooter />
    </div>
  );
}
