import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import MarketingHome from "./pages/marketing/Home";
import About from "./pages/marketing/About";
import Contact from "./pages/marketing/Contact";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import ProfileSetup from "./pages/ProfileSetup";
import Dashboard from "./pages/Dashboard";
import WalletPage from "./pages/WalletPage";
import ReferPage from "./pages/ReferPage";
import MorePage from "./pages/MorePage";
import KYCPage from "./pages/KYCPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import FAQPage from "./pages/FAQPage";
import SupportPage from "./pages/SupportPage";
import LearnPage from "./pages/LearnPage";
import AIGuidePage from "./pages/AIGuidePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotificationsPage from "./pages/NotificationsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MarketingHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/app" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/refer" element={<ReferPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/kyc" element={<KYCPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/ai-guide" element={<AIGuidePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
