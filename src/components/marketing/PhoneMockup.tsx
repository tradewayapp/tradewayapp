import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, Wallet, ArrowUpRight as Up, ArrowDownRight } from "lucide-react";

const trades = [
  { pair: "XAU/USD", type: "BUY", pnl: "+$142.30", up: true, time: "10:42" },
  { pair: "XAU/USD", type: "SELL", pnl: "+$86.10", up: true, time: "09:18" },
  { pair: "XAG/USD", type: "BUY", pnl: "+$54.40", up: true, time: "08:05" },
  { pair: "XAU/USD", type: "BUY", pnl: "-$22.80", up: false, time: "Yesterday" },
  { pair: "XAU/USD", type: "SELL", pnl: "+$118.60", up: true, time: "Yesterday" },
];

const Dashboard = () => (
  <div className="relative p-5 space-y-4 h-full">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Portfolio</p>
        <p className="font-display font-extrabold text-2xl mt-1">$12,847.20</p>
        <p className="text-[11px] text-success flex items-center gap-1 mt-0.5">
          <ArrowUpRight size={12} /> +4.82% today
        </p>
      </div>
      <div className="w-10 h-10 rounded-full gradient-signal flex items-center justify-center">
        <Wallet size={16} className="text-primary-foreground" />
      </div>
    </div>

    <div className="panel rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">XAU/USD Signal</p>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-success/15 text-success">LIVE</span>
      </div>
      <svg viewBox="0 0 200 60" className="w-full h-14">
        <path d="M0 45 L20 38 L40 42 L60 28 L80 32 L100 18 L120 24 L140 12 L160 18 L180 8 L200 14"
          stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M0 45 L20 38 L40 42 L60 28 L80 32 L100 18 L120 24 L140 12 L160 18 L180 8 L200 14 L200 60 L0 60 Z"
          fill="hsl(var(--primary) / 0.15)" />
      </svg>
    </div>

    <div className="grid grid-cols-2 gap-2.5">
      {[
        { pair: "XAU/USD", val: "+1.84%" },
        { pair: "XAG/USD", val: "+1.12%" },
      ].map((p) => (
        <div key={p.pair} className="panel-muted rounded-xl p-2.5">
          <p className="text-[10px] text-muted-foreground">{p.pair}</p>
          <p className="text-xs font-semibold text-success flex items-center gap-1">
            <TrendingUp size={10} /> {p.val}
          </p>
        </div>
      ))}
    </div>

    <div className="panel rounded-2xl p-3">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Trade history</p>
        <span className="text-[9px] text-muted-foreground">Last 5</span>
      </div>
      <div className="space-y-2">
        {trades.map((t, i) => (
          <div key={i} className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${t.up ? "bg-success/15" : "bg-destructive/15"}`}>
                {t.up ? <Up size={10} className="text-success" /> : <ArrowDownRight size={10} className="text-destructive" />}
              </div>
              <div>
                <p className="font-semibold leading-tight">{t.pair}</p>
                <p className="text-[9px] text-muted-foreground leading-tight">{t.type} · {t.time}</p>
              </div>
            </div>
            <span className={`font-semibold ${t.up ? "text-success" : "text-destructive"}`}>{t.pnl}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -3 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto w-[280px] h-[560px]"
    >
      <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" />
      <div className="relative w-full h-full rounded-[2.5rem] panel-strong p-3 shadow-2xl">
        <div className="w-full h-full rounded-[2rem] bg-background overflow-hidden relative editorial-grid">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/15 to-transparent z-0" />
          <div className="relative h-full overflow-hidden">
            <Dashboard />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
