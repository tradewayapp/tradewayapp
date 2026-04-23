import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
                Start trading in
                <br />
                <span className="text-signal">under 3 minutes.</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md mx-auto">
                Verify Aadhaar, add ₹125, let the AI take over. Withdraw your first profit by tomorrow morning.
              </p>
              <Link to="/onboarding" className="inline-block mt-8">
                <Button size="lg" className="gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12 px-7">
                  Launch the app <ArrowRight className="ml-1" size={16} />
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
