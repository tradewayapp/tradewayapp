import { UserPlus, Wallet, Bot, ArrowDownToLine } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { icon: UserPlus, title: "Sign up & KYC", desc: "Create an account and verify with Aadhaar (front + back). Under 2 minutes.", tag: "2 min" },
  { icon: Wallet, title: "Add capital", desc: "Fund $100 / ₹10,000 minimum via UPI, net banking, or USDT.", tag: "₹10K min" },
  { icon: Bot, title: "AI trades forex", desc: "Engine handles entries, exits and risk across major FX pairs — fully autonomous.", tag: "24/5" },
  { icon: ArrowDownToLine, title: "Withdraw daily", desc: "Profits settle every midnight. Withdraw to bank or wallet anytime.", tag: "Daily" },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 lg:py-28 bg-card/30 border-y border-border/60 overflow-hidden">
      <div className="absolute inset-0 editorial-grid opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3 font-semibold">How it works</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-[1.05]">
              From sign-up to settlement.
              <br />
              <span className="text-gold">Four steps.</span>
            </h2>
          </div>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-px">
            <div className="h-full signal-line opacity-60" />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Node */}
                  <div className="relative w-14 h-14 rounded-full glass-gold flex items-center justify-center shadow-gold z-10 mb-6">
                    <s.icon size={20} className="text-primary" />
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{ animation: "glow-pulse 2.4s ease-in-out infinite", boxShadow: "0 0 0 4px hsl(var(--primary) / 0.15)" }}
                    />
                  </div>
                  {/* Number */}
                  <p className="font-display font-extrabold text-5xl text-gold opacity-80 leading-none mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display font-bold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[220px] leading-relaxed">{s.desc}</p>
                  <span className="mt-4 inline-flex px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-semibold">
                    {s.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile vertical rail */}
        <div className="lg:hidden relative pl-12">
          {/* Vertical line */}
          <div className="absolute left-7 top-2 bottom-2 w-px signal-line opacity-60" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--primary)), hsl(var(--primary-glow)), transparent)" }} />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative">
                  <div className="absolute -left-12 top-0 w-14 h-14 rounded-full glass-gold flex items-center justify-center shadow-gold">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <div className="panel rounded-2xl p-5 ml-2">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-display font-extrabold text-2xl text-gold leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-semibold">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
