import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative panel-strong rounded-3xl overflow-hidden p-10 sm:p-16 text-center">
            <div className="absolute inset-0 editorial-grid opacity-30" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-primary/20 blur-3xl rounded-full" />
            <div className="relative">
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-[1.05]">
                Let the AI trade gold.
                <br />
                <span className="text-signal">You do nothing.</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md mx-auto">
                Verify Aadhaar, fund $100 / ₹10,000, and our XAU/USD engine takes over. First settlement by tomorrow morning.
              </p>
              <Link to="/onboarding" className="inline-block mt-8">
                <Button size="lg" className="gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12 px-7 gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3.6 2.4c-.4.3-.6.8-.6 1.4v16.4c0 .6.2 1.1.6 1.4l9-9.6-9-9.6z" fill="#34A853"/>
                    <path d="M16.6 8.4 5.9 2.2c-.5-.3-1-.3-1.5-.1l8.8 9.4 3.4-3.1z" fill="#EA4335"/>
                    <path d="m16.6 15.6-3.4-3.1-8.8 9.4c.5.2 1 .2 1.5-.1l10.7-6.2z" fill="#FBBC04"/>
                    <path d="m20.4 10.6-3.8-2.2-3.6 3.6 3.6 3.6 3.8-2.2c1.2-.7 1.2-2.1 0-2.8z" fill="#4285F4"/>
                  </svg>
                  Download App
                </Button>
              </Link>
              <div className="mt-5 h-[3px] w-32 mx-auto rounded-full signal-line animate-pulseLine" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
