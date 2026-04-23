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
                  <svg width="18" height="18" viewBox="0 0 512 512" fill="none" aria-hidden="true">
                    <path d="M99.4 32.6C90.5 37.7 85 47.4 85 60.5v391c0 13.1 5.5 22.8 14.4 27.9l203.4-223.7L99.4 32.6z" fill="#34A853"/>
                    <path d="M362.1 188.3 287.4 145l-15.2-8.8L99.4 32.6c-3.1-1.8-6.4-2.7-9.7-2.6L271.4 235l90.7-46.7z" fill="#EA4335"/>
                    <path d="M362.1 323.7 271.4 277l-181.7 207c3.3.1 6.6-.8 9.7-2.6l172.8-103.6 90-54.1z" fill="#FBBC04"/>
                    <path d="M464.6 234.7 386.1 189l-23.9 13.7-90.8 53.3 90.8 53.3 23.9 13.7 78.5-45.7c20.1-11.7 20.1-31.6 0-43.6z" fill="#4285F4"/>
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
