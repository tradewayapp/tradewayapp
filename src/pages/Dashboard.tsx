import { motion } from "framer-motion";
import { Activity, ArrowRight, TrendingDown, TrendingUp, Youtube, MessageCircle, Bell, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const INR_RATE = 83.8;

const motionProps = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, delay },
});

const mockTrades = [
  { id: "1", pair: "EUR/USD", type: "BUY", lot_size: "0.50", entry_price: "1.0842", exit_price: "1.0891", pnl_usd: 24.50, pnl_inr: 2053, execution_time: new Date().toISOString() },
  { id: "2", pair: "GBP/JPY", type: "SELL", lot_size: "0.30", entry_price: "191.45", exit_price: "191.12", pnl_usd: 9.90, pnl_inr: 830, execution_time: new Date().toISOString() },
  { id: "3", pair: "USD/CHF", type: "BUY", lot_size: "0.25", entry_price: "0.8821", exit_price: "0.8798", pnl_usd: -5.75, pnl_inr: -482, execution_time: new Date().toISOString() },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const totalCapital = 1250;
  const todayProfit = 28.65;
  const winRate = 67;

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="editorial-grid">
        <div className="px-6 pt-7 pb-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-display font-extrabold">TradeWay</h1>
            <p className="text-[10px] text-muted-foreground mt-0.5">Your trading partner</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-2xl panel-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-2xl panel-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle className="w-4 h-4" />
            </button>
            <button onClick={() => navigate("/support")} className="w-9 h-9 rounded-2xl panel-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
            </button>
            <button onClick={() => navigate("/notifications")} className="w-9 h-9 rounded-2xl panel-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 space-y-4">
        <motion.section {...motionProps(0)} className="panel-strong rounded-[2rem] p-6 overflow-hidden relative">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center">
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">AI Engine active</p>
              <p className="text-[11px] text-muted-foreground">Settlement at 12:00 AM</p>
            </div>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-5xl leading-none font-display font-extrabold">${totalCapital.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-2">Total capital</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-display font-bold">₹{Math.round(totalCapital * INR_RATE).toLocaleString()}</p>
              <p className="text-xs mt-1 text-success">+${todayProfit.toFixed(2)} today</p>
            </div>
          </div>

          <Button onClick={() => navigate("/wallet")} className="w-full mt-5 h-13 rounded-2xl gradient-signal text-primary-foreground font-display font-bold">
            Add capital <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.section>

        <motion.section {...motionProps(0.06)} className="panel rounded-[1.9rem] p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-display font-bold">Today's breakdown</h2>
              <p className="text-[11px] text-muted-foreground mt-1">{new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-success">Profitable</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="panel-muted rounded-2xl p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Trades taken</p>
              <p className="text-2xl font-display font-extrabold mt-2">3</p>
              <p className="text-[11px] text-muted-foreground mt-1">2 win • 1 loss</p>
            </div>
            <div className="panel-muted rounded-2xl p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Net profit</p>
              <p className="text-2xl font-display font-extrabold mt-2 text-success">+${todayProfit.toFixed(2)}</p>
              <p className="text-[11px] text-muted-foreground mt-1">₹{Math.round(todayProfit * INR_RATE).toLocaleString()}</p>
            </div>
            <div className="panel-muted rounded-2xl p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Platform fee</p>
              <p className="text-2xl font-display font-extrabold mt-2 text-destructive">-$5.73</p>
              <p className="text-[11px] text-muted-foreground mt-1">20% of gross</p>
            </div>
            <div className="panel-muted rounded-2xl p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Win rate</p>
              <p className="text-2xl font-display font-extrabold mt-2">{winRate}%</p>
              <p className="text-[11px] text-muted-foreground mt-1">Today's accuracy</p>
            </div>
          </div>
        </motion.section>

        <motion.section {...motionProps(0.1)} className="panel rounded-[1.9rem] p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-display font-bold">Trade history</h2>
              <p className="text-[11px] text-muted-foreground mt-1">Today's AI executions</p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">P&L</span>
          </div>

          <div className="space-y-3">
            {mockTrades.map((trade, idx) => {
              const pnl = trade.pnl_usd;
              const time = new Date(trade.execution_time).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true });
              return (
                <div key={trade.id} className="flex items-start gap-3">
                  <div className="flex flex-col items-center pt-1">
                    <div className={`w-8 h-8 rounded-2xl flex items-center justify-center ${pnl >= 0 ? "bg-success/12" : "bg-destructive/12"}`}>
                      {pnl >= 0 ? <TrendingUp className="w-4 h-4 text-success" /> : <TrendingDown className="w-4 h-4 text-destructive" />}
                    </div>
                    {idx !== mockTrades.length - 1 && <div className="w-px h-10 bg-border mt-2" />}
                  </div>
                  <div className="flex-1 border-b border-border/40 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-display font-bold">{trade.pair}</span>
                          <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${trade.type === "BUY" ? "text-success" : "text-destructive"}`}>
                            {trade.type}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{trade.lot_size} lot • {time}</p>
                        <div className="flex items-center gap-2 mt-1.5 text-[11px]">
                          <span className="text-muted-foreground">Buy <span className="text-foreground font-semibold">${trade.entry_price}</span></span>
                          <span className="text-muted-foreground">→</span>
                          <span className="text-muted-foreground">Exit <span className="text-foreground font-semibold">${trade.exit_price}</span></span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-display font-bold ${pnl >= 0 ? "text-success" : "text-destructive"}`}>
                          {pnl >= 0 ? "+" : ""}${pnl.toFixed(2)}
                        </p>
                        <p className="text-[10px] text-muted-foreground">₹{Math.round(pnl * INR_RATE).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>

      <BottomNav />
    </div>
  );
}
