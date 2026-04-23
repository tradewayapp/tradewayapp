import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { name: "Rohan M.", initials: "RM", role: "Trader · Pune", quote: "Started with ₹2,000 just to test. Three months in, daily settlements have been consistent. The dashboard is dead simple.", earn: "+18.4% / 90d" },
  { name: "Priya S.", initials: "PS", role: "Engineer · Bengaluru", quote: "I don't have time to chart all day. TradeWay handles execution and I just watch the wallet grow. Withdrawals hit instantly.", earn: "+22.1% / 6mo" },
  { name: "Arjun V.", initials: "AV", role: "Founder · Delhi", quote: "The 3-tier referral system is genuinely passive. My network earns, I earn, daily — no chasing payouts.", earn: "₹14k/mo passive" },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-card/30 border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3">Testimonials</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Traders who stopped staring at charts.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="panel rounded-2xl p-6 h-full flex flex-col">
                <Quote size={22} className="text-primary opacity-60" />
                <p className="mt-4 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-signal flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {t.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-success/15 text-success font-semibold">{t.earn}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
