import { useEffect } from "react";
import SiteHeader from "@/components/marketing/SiteHeader";
import SiteFooter from "@/components/marketing/SiteFooter";
import Hero from "@/components/marketing/Hero";
import FloatingShowcase from "@/components/marketing/FloatingShowcase";
import LivePerformance from "@/components/marketing/LivePerformance";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import HowItWorks from "@/components/marketing/HowItWorks";
import ReferralPanel from "@/components/marketing/ReferralPanel";
import PricingBlock from "@/components/marketing/PricingBlock";
import SecuritySection from "@/components/marketing/SecuritySection";
import FAQSection from "@/components/marketing/FAQSection";
import CTABanner from "@/components/marketing/CTABanner";
import StickyDownloadCTA from "@/components/marketing/StickyDownloadCTA";

export default function MarketingHome() {
  useEffect(() => {
    document.title = "TradeWay — AI Gold (XAU/USD) Trading on Autopilot";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "TradeWay is an AI trading platform specialized in XAU/USD gold pairs. Sit back — our engine trades 24/7 and pays you daily in USD or INR. Start with $100 / ₹10,000.");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <FloatingShowcase />
        <LivePerformance />
        <FeatureGrid />
        <HowItWorks />
        <ReferralPanel />
        <PricingBlock />
        <SecuritySection />
        <FAQSection />
        <CTABanner />
      </main>
      <SiteFooter />
      <StickyDownloadCTA />
    </div>
  );
}
