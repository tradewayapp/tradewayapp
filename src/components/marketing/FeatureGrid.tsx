import { Brain, Wallet, Clock, ShieldCheck, Users, Sparkles, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3 font-semibold">Features</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-[1.05]">
              Built for traders who'd rather <span className="text-gold">not trade.</span>
            </h2>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4 sm:gap-5">
          {/* Big tile: AI on XAU/USD */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <div className="panel-strong rounded-3xl p-6 sm:p-8 hover-lift relative overflow-hidden h-full">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-signal flex items-center justify-center shadow-gold">
                    <Brain size={18} className="text-primary-foreground" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-primary font-semibold">Core engine</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-tight">
                  AI specialized in <span className="text-gold">XAU/USD gold pairs.</span>
                </h3>
                <p className="mt-3 text-muted-foreground max-w-md">
                  Trained exclusively on gold price action — entries, exits, and risk management refined for one job.
                </p>

                {/* Mini chart */}
                <div className="mt-7 panel-muted rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">XAU/USD · 1M</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-success/15 text-success font-bold">+14.2%</span>
                  </div>
                  <svg viewBox="0 0 400 90" className="w-full h-20">
                    <defs>
                      <linearGradient id="cf" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 70 L40 60 L80 65 L120 45 L160 50 L200 30 L240 38 L280 22 L320 28 L360 12 L400 18"
                      stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0 70 L40 60 L80 65 L120 45 L160 50 L200 30 L240 38 L280 22 L320 28 L360 12 L400 18 L400 90 L0 90 Z"
                      fill="url(#cf)" />
                    <circle cx="400" cy="18" r="4" fill="hsl(var(--primary))" />
                    <circle cx="400" cy="18" r="8" fill="hsl(var(--primary))" opacity="0.3" style={{ animation: "glow-pulse 2s ease-in-out infinite" }} />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Daily settlement */}
          <Reveal delay={0.05} className="md:col-span-2">
            <div className="panel rounded-3xl p-6 hover-lift h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 blur-2xl rounded-full" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl glass-purple flex items-center justify-center mb-4">
                  <Clock size={18} className="text-accent-glow" />
                </div>
                <p className="font-display font-extrabold text-4xl text-royal leading-none">12:00</p>
                <p className="text-xs text-muted-foreground mt-1">AM IST · daily</p>
                <h3 className="font-display font-bold text-base mt-4">Daily settlement</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Profits credited every midnight. No lock-ins.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Dual currency */}
          <Reveal delay={0.1}>
            <div className="md:col-span-2 panel rounded-3xl p-6 hover-lift h-full relative overflow-hidden">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center mb-4">
                  <Wallet size={18} className="text-primary" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-extrabold text-3xl">$</span>
                  <span className="font-display font-extrabold text-2xl text-muted-foreground">/</span>
                  <span className="font-display font-extrabold text-3xl text-gold">₹</span>
                </div>
                <h3 className="font-display font-bold text-base mt-3">Dual-currency wallet</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Deposit & withdraw in INR or USD with real-time conversion.
                </p>
              </div>
            </div>
          </Reveal>

          {/* KYC */}
          <Reveal delay={0.15}>
            <div className="md:col-span-2 panel rounded-3xl p-6 hover-lift h-full relative overflow-hidden">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center mb-4">
                  <ShieldCheck size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-base">Aadhaar-secured</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  UIDAI-verified accounts only. Bank-grade encryption end-to-end.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-success">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  Verified in &lt; 60 seconds
                </div>
              </div>
            </div>
          </Reveal>

          {/* Referral — wider */}
          <Reveal delay={0.2}>
            <div className="md:col-span-4 panel-strong rounded-3xl p-6 sm:p-8 hover-lift h-full relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-accent/15 blur-3xl rounded-full" />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div>
                  <div className="w-10 h-10 rounded-xl gradient-royal flex items-center justify-center shadow-royal mb-4">
                    <Users size={18} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl">3-tier referral network</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">
                    Earn passively from friends, their friends, and three levels deep.
                  </p>
                </div>
                <div className="flex gap-2 sm:ml-auto">
                  {[
                    { l: "L1", v: "1.0%" },
                    { l: "L2", v: "0.5%" },
                    { l: "L3", v: "0.25%" },
                  ].map((t) => (
                    <div key={t.l} className="panel-muted rounded-xl px-4 py-3 text-center min-w-[72px]">
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground">{t.l}</p>
                      <p className="font-display font-extrabold text-lg text-gold mt-0.5">{t.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hands-free wide */}
          <Reveal delay={0.25}>
            <div className="md:col-span-6 panel rounded-3xl p-6 sm:p-8 hover-lift h-full relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-30" />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl gradient-signal flex items-center justify-center shadow-gold">
                    <Sparkles size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl">100% hands-free trading.</h3>
                    <p className="mt-1 text-sm text-muted-foreground max-w-xl">
                      No charts to read, no buttons to press, no second-guessing. The AI runs the whole loop — you just check your wallet.
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Watch demo <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
