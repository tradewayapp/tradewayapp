import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Shield, BarChart3, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const topics = [
  { icon: <TrendingUp className="w-5 h-5" />, title: "What is Forex Trading?", content: "Forex (Foreign Exchange) is the world's largest financial market where currencies are traded 24/5. Daily trading volume exceeds $6.6 trillion. Traders profit from fluctuations in exchange rates between currency pairs like EUR/USD, GBP/JPY etc." },
  { icon: <Zap className="w-5 h-5" />, title: "How TradeWay AI Works", content: "TradeWay's AI engine analyses 50+ currency pairs simultaneously using advanced algorithms, technical indicators, and sentiment analysis. It identifies high-probability trade setups and executes them automatically — no manual intervention needed from you." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Understanding Your Profits", content: "Profits are generated from successful trades executed by our AI. A 20% platform fee is deducted from gross profits as our service charge. Net profits are settled and credited to your account daily at 12:00 AM IST." },
  { icon: <Shield className="w-5 h-5" />, title: "Risk Management", content: "Our AI uses institutional-grade risk management with stop-losses, position sizing, and diversification across multiple pairs. Maximum drawdown limits are enforced to protect your capital. However, all trading involves risk and past performance doesn't guarantee future results." },
];

export default function LearnPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-10">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Resources</p>
          <h1 className="text-xl font-display font-extrabold">Learn</h1>
        </div>
      </div>

      <div className="px-5 space-y-3">
        {topics.map((topic, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="panel rounded-[1.5rem] p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">{topic.icon}</div>
              <h2 className="text-sm font-display font-bold">{topic.title}</h2>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{topic.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
