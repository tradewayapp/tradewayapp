import { Activity, Users, TrendingUp, Coins } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";

const stats = [
  { icon: Activity, label: "Trades executed today", value: 18429, prefix: "", suffix: "" },
  { icon: TrendingUp, label: "30-day win rate", value: 94.2, suffix: "%", decimals: 1 },
  { icon: Coins, label: "Avg daily payout", value: 312, prefix: "$" },
  { icon: Users, label: "Active traders", value: 12483, prefix: "" },
];

export default function LivePerformance() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3 font-semibold">Live performance</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Numbers that <span className="text-gold">trade themselves.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="glass-gold rounded-3xl p-6 sm:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="relative">
                  <s.icon size={20} className="text-primary mb-3" />
                  <div className="font-display font-extrabold text-3xl sm:text-4xl tabular-nums leading-none">
                    <AnimatedCounter
                      to={s.value}
                      prefix={s.prefix || ""}
                      suffix={s.suffix || ""}
                      decimals={s.decimals || 0}
                      className="text-gold"
                    />
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: "ticker-blink 1.4s ease-in-out infinite" }} />
                Updated in real-time · Last sync 2s ago
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Powered by TradeWay AI v3.2</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
