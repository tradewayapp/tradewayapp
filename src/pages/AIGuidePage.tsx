import { motion } from "framer-motion";
import { ArrowLeft, Brain, Activity, Clock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sections = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Trading Engine", content: "Our proprietary AI monitors 50+ currency pairs 24 hours a day, 5 days a week. It uses machine learning models trained on years of market data to identify profitable patterns and execute trades in milliseconds." },
  { icon: <Activity className="w-5 h-5" />, title: "Trade Execution", content: "When the AI identifies a high-probability setup, it automatically opens a position with calculated lot sizing based on your capital. Each trade has a pre-set stop-loss and take-profit to manage risk effectively." },
  { icon: <Clock className="w-5 h-5" />, title: "Daily Settlement", content: "All profits and losses are calculated and settled daily at 12:00 AM IST. A 20% platform fee is deducted from gross profits. Net profits are added to your account balance automatically." },
  { icon: <Target className="w-5 h-5" />, title: "Performance Tracking", content: "Track every trade the AI executes in your Trade History. You can see buy/exit prices, profit/loss, and currency pairs. All amounts are shown in both USD and INR for transparency." },
];

export default function AIGuidePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-10">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Resources</p>
          <h1 className="text-xl font-display font-extrabold">AI Guide</h1>
        </div>
      </div>

      <div className="px-5 space-y-3">
        {sections.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="panel rounded-[1.5rem] p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">{s.icon}</div>
              <h2 className="text-sm font-display font-bold">{s.title}</h2>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
