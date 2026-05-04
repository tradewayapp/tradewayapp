import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

const incl = [
  "Zero subscription fees",
  "2% deposit charges",
  "2% withdrawal fees",
  "20% platform fee on profits only",
  "Settled daily at 12 AM IST",
  "Minimum capital $100 / ₹10,000",
];

export default function PricingBlock() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3 font-semibold">Pricing</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-[1.05]">
              Pay only when <span className="text-gold">you profit.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              No subscriptions. No surprises. We win when you win.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-xl mx-auto relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 gradient-signal blur-3xl opacity-30 rounded-[2.5rem]" />

            <div className="relative panel-strong rounded-[1.75rem] p-8 sm:p-10">
              {/* Recommended ribbon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full gradient-signal text-primary-foreground text-[10px] uppercase tracking-widest font-bold shadow-gold">
                  <Sparkles size={10} /> Recommended
                </span>
              </div>

              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-2">Performance fee</p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display font-extrabold text-7xl text-gold leading-none">20%</span>
                <span className="text-muted-foreground">on profits only</span>
              </div>

              <div className="mt-7 hairline" />

              <ul className="mt-7 space-y-3">
                {incl.map((i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full glass-gold flex items-center justify-center">
                      <Check size={11} className="text-primary" />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>

              <Link to="/onboarding" className="block mt-8">
                <Button size="lg" className="w-full gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12 font-semibold shadow-gold">
                  Start trading now
                </Button>
              </Link>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Cancel anytime · Funds withdrawable instantly
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
