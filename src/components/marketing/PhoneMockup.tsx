import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, Wallet, Users, Gift, ArrowDownToLine } from "lucide-react";

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
        { pair: "Gold M5", val: "+0.62%" },
        { pair: "Gold H1", val: "+1.45%" },
      ].map((p) => (
        <div key={p.pair} className="panel-muted rounded-xl p-2.5">
          <p className="text-[10px] text-muted-foreground">{p.pair}</p>
          <p className="text-xs font-semibold text-success flex items-center gap-1">
            <TrendingUp size={10} /> {p.val}
          </p>
        </div>
      ))}
    </div>

    <div className="panel rounded-2xl p-3 flex items-center justify-between">
      <div>
        <p className="text-[10px] text-muted-foreground">Next settlement</p>
        <p className="text-sm font-semibold">12:00 AM IST</p>
      </div>
      <div className="h-[3px] w-16 rounded-full signal-line animate-pulseLine" />
    </div>
  </div>
);

const WalletScreen = () => (
  <div className="relative p-5 space-y-4 h-full">
    <div>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Wallet balance</p>
      <p className="font-display font-extrabold text-3xl mt-1">₹2,84,210</p>
      <p className="text-[11px] text-muted-foreground mt-0.5">≈ $3,402.50 USD</p>
    </div>

    <div className="grid grid-cols-2 gap-2.5">
      <button className="panel-muted rounded-xl p-3 text-left">
        <ArrowDownToLine size={14} className="text-primary mb-1" />
        <p className="text-xs font-semibold">Withdraw</p>
      </button>
      <button className="panel-muted rounded-xl p-3 text-left">
        <Wallet size={14} className="text-primary mb-1" />
        <p className="text-xs font-semibold">Deposit</p>
      </button>
    </div>

    <div className="panel rounded-2xl p-4 space-y-3">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Recent settlements</p>
      {[
        { d: "Today", v: "+₹4,820" },
        { d: "Yesterday", v: "+₹3,210" },
        { d: "Apr 21", v: "+₹5,140" },
        { d: "Apr 20", v: "+₹2,980" },
      ].map((r) => (
        <div key={r.d} className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{r.d}</span>
          <span className="text-success font-semibold">{r.v}</span>
        </div>
      ))}
    </div>
  </div>
);

const ReferScreen = () => (
  <div className="relative p-5 space-y-4 h-full">
    <div>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Referral earnings</p>
      <p className="font-display font-extrabold text-3xl mt-1 text-signal">₹14,820</p>
      <p className="text-[11px] text-success mt-0.5">+₹420 this month</p>
    </div>

    <div className="panel rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Gift size={14} className="text-primary" />
        <p className="text-xs font-semibold">Your code</p>
      </div>
      <div className="panel-muted rounded-lg p-2.5 text-center font-mono text-sm tracking-widest">
        TRADE-RX42
      </div>
    </div>

    <div className="panel rounded-2xl p-4 space-y-3">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">3-tier network</p>
      {[
        { l: "Level 1", p: "1.0%", n: "24 users" },
        { l: "Level 2", p: "0.5%", n: "108 users" },
        { l: "Level 3", p: "0.25%", n: "342 users" },
      ].map((r) => (
        <div key={r.l} className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Users size={11} className="text-muted-foreground" />
            <span>{r.l}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">{r.n}</span>
            <span className="text-primary font-semibold">{r.p}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const screens = [
  { key: "dash", node: <Dashboard /> },
  { key: "wallet", node: <WalletScreen /> },
  { key: "refer", node: <ReferScreen /> },
];

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
            <motion.div
              className="flex flex-col"
              animate={{ y: ["0%", "-100%", "-200%", "0%"] }}
              transition={{ duration: 12, times: [0, 0.33, 0.66, 1], repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
            >
              {screens.map((s) => (
                <div key={s.key} className="w-full shrink-0" style={{ height: 534 }}>
                  {s.node}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
