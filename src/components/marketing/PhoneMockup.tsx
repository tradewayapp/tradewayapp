import { motion } from "framer-motion";
import { Activity, ArrowRight, LayoutGrid, Wallet, Send, Menu } from "lucide-react";

const Dashboard = () => (
  <div className="relative h-full flex flex-col">
    {/* Status bar */}
    <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[9px] text-foreground/80 font-semibold">
      <span>11:00</span>
      <span className="tabular-nums">●●● 5G</span>
    </div>

    {/* Header */}
    <div className="px-4 pt-2 pb-3 flex items-start justify-between">
      <div>
        <p className="font-display font-extrabold text-lg leading-tight">TradeWay</p>
        <p className="text-[10px] text-muted-foreground leading-tight">Your trading partner</p>
      </div>
      <div className="flex items-center gap-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-6 h-6 rounded-full bg-secondary/80 border border-border/60" />
        ))}
      </div>
    </div>

    {/* Main scrollable area */}
    <div className="flex-1 px-3 space-y-3 overflow-hidden">
      {/* AI ENGINE ACTIVE card */}
      <div className="rounded-2xl border border-primary/30 bg-card/80 p-3.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
              <Activity size={12} className="text-primary" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-primary tracking-widest">AI ENGINE ACTIVE</p>
              <p className="text-[8px] text-muted-foreground">Settlement at 12:00 AM</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-success" />
            <div className="absolute inset-0 rounded-full bg-success/50 animate-ping" />
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2">Total Capital</p>
        <p className="font-display font-extrabold text-2xl leading-none mt-0.5">$228.06</p>
        <p className="text-[10px] text-muted-foreground mt-1">≈ ₹20,525.40</p>
        <button className="mt-3 w-full rounded-full py-2.5 flex items-center justify-center gap-2 text-xs font-bold text-primary-foreground gradient-signal shadow-gold">
          Add capital <ArrowRight size={12} />
        </button>
      </div>

      {/* Today's Breakdown */}
      <div className="rounded-2xl border border-border/60 bg-card/60 p-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="font-display font-bold text-xs leading-tight">Today's Breakdown</p>
            <p className="text-[8px] text-muted-foreground">29 Apr 2026</p>
          </div>
          <span className="text-[8px] font-bold text-success tracking-widest">PROFITABLE</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "TRADES TAKEN", value: "1", sub: "1 Win • 0 Loss", tone: "default" },
            { label: "NET PROFIT", value: "+$1.95", sub: "₹175.50", tone: "success" },
            { label: "PLATFORM FEE", value: "-$0.49", sub: "20% of gross", tone: "destructive" },
            { label: "WIN / LOSS RATE", value: "100%", sub: "Today's accuracy", tone: "default" },
          ].map((c) => (
            <div key={c.label} className="rounded-xl border border-border/50 bg-secondary/30 p-2">
              <p className="text-[7px] font-bold text-muted-foreground tracking-widest">{c.label}</p>
              <p
                className={`font-display font-extrabold text-base leading-tight mt-1 ${
                  c.tone === "success" ? "text-success" : c.tone === "destructive" ? "text-destructive" : "text-foreground"
                }`}
              >
                {c.value}
              </p>
              <p className="text-[7px] text-muted-foreground mt-0.5">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom nav */}
    <div className="px-3 pb-3 pt-2">
      <div className="flex items-center gap-1.5">
        <button className="flex-1 rounded-full py-2 px-3 flex items-center justify-center gap-1.5 gradient-signal shadow-gold">
          <LayoutGrid size={11} className="text-primary-foreground" />
          <span className="text-[10px] font-bold text-primary-foreground tracking-wider">DASHBOARD</span>
        </button>
        {[Wallet, Send, Menu].map((Icon, i) => (
          <button key={i} className="w-9 h-9 rounded-full bg-secondary/60 border border-border/50 flex items-center justify-center">
            <Icon size={12} className="text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto w-[280px] h-[560px]"
    >
      <div className="absolute -inset-12 bg-primary/25 blur-3xl rounded-full" />
      <div className="absolute -inset-12 bg-accent/15 blur-3xl rounded-full" />
      <div className="relative w-full h-full rounded-[2.5rem] panel-strong p-3 shadow-gold">
        <div className="w-full h-full rounded-[2rem] bg-background overflow-hidden relative">
          <div className="absolute inset-0 editorial-grid opacity-30" />
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-background rounded-full z-20 border border-border/60" />
          <div className="relative h-full overflow-hidden">
            <Dashboard />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
