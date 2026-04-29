import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import AuroraBackground from "./AuroraBackground";
import MagneticButton from "./MagneticButton";
import { APK_DOWNLOAD_URL } from "@/lib/appDownload";

const PlayStoreIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" aria-hidden="true">
    <path d="M64 40v432c0 14 8 24 20 28 12 4 24 0 34-6l324-188c20-12 20-40 0-52L118 18C108 12 96 8 84 12 72 16 64 26 64 40z" />
    <path d="M64 40l280 220L64 472" />
  </svg>
);

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden p-10 sm:p-16 text-center gradient-mesh border border-primary/20">
            <AuroraBackground variant="intense" />
            <div className="absolute inset-0 dot-grid opacity-20" />

            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground/80 mb-5 font-semibold">
                Final step
              </p>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight leading-[1.0]">
                Your gold engine
                <br />
                <span className="text-gold">is waiting.</span>
              </h2>
              <p className="mt-6 text-base text-foreground/80 max-w-md mx-auto">
                Verify Aadhaar, fund $100 / ₹10,000, and the AI takes over. First settlement by tomorrow morning.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <MagneticButton>
                  <Link to={APK_DOWNLOAD_URL}>
                    <Button size="lg" className="gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12 px-7 inline-flex items-center justify-center gap-2 shadow-gold font-semibold">
                      <PlayStoreIcon size={18} />
                      <span>Download App</span>
                    </Button>
                  </Link>
                </MagneticButton>
                <Link to="/onboarding">
                  <Button size="lg" variant="outline" className="h-12 px-6 border-border bg-background/40 backdrop-blur inline-flex items-center justify-center gap-2">
                    Open an account <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: "ticker-blink 1.4s ease-in-out infinite" }} />
                Engine is live · accepting new traders
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
