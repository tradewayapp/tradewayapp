import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

const incl = [
  "Zero subscription fees",
  "Zero deposit charges",
  "Zero withdrawal fees",
  "20% platform fee on profits only",
  "Settled daily at 12 AM IST",
  "Minimum capital $100 / ₹10,000",
];

export default function PricingBlock() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-card/30 border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3">Pricing</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Pay only when you profit.
            </h2>
            <p className="mt-4 text-muted-foreground">
              No subscriptions. No surprises. We win when you win.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-xl mx-auto panel-strong rounded-3xl p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Performance fee</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display font-extrabold text-6xl text-signal">20%</span>
              <span className="text-muted-foreground">on profits only</span>
            </div>
            <div className="mt-7 h-px bg-border" />
            <ul className="mt-7 space-y-3">
              {incl.map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center">
                    <Check size={12} className="text-success" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <Link to="/onboarding" className="block mt-8">
              <Button size="lg" className="w-full gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12">
                Start trading now
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
