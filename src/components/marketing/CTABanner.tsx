import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import { APK_DOWNLOAD_URL } from "@/lib/appDownload";

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
              <Link to={APK_DOWNLOAD_URL} className="inline-block mt-8">
                <Button size="lg" className="gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12 px-7 inline-flex items-center justify-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" aria-hidden="true">
                    <path d="M64 40v432c0 14 8 24 20 28 12 4 24 0 34-6l324-188c20-12 20-40 0-52L118 18C108 12 96 8 84 12 72 16 64 26 64 40z"/>
                    <path d="M64 40l280 220L64 472"/>
                  </svg>
                  <span>Download App</span>
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
