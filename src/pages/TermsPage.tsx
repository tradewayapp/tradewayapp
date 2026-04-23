import { motion } from "framer-motion";
import { ArrowLeft, FileText, Percent, AlertCircle, Banknote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sections = [
  { icon: <Banknote className="w-5 h-5" />, title: "Minimum Capital", content: "The minimum capital required to start trading on TradeWay is ₹50,000 (approximately $500 USD). Users can add capital via bank transfer or USDT TRC20 cryptocurrency." },
  { icon: <Percent className="w-5 h-5" />, title: "Platform Fee", content: "TradeWay charges a platform fee of 20% on gross profits. This fee is deducted automatically during daily settlement at 12:00 AM IST. There are no hidden charges, subscription fees, or withdrawal fees." },
  { icon: <FileText className="w-5 h-5" />, title: "Referral Program", content: "Users can earn referral income on the capital added by referred users. Step A (Direct): 1% monthly, Step B (Second level): 0.50% monthly, Step C (Third level): 0.25% monthly. Referral earnings are credited daily (monthly rate ÷ 30)." },
  { icon: <AlertCircle className="w-5 h-5" />, title: "Risk Disclaimer", content: "Forex trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. By using TradeWay, you acknowledge that you understand the risks involved and agree to bear all responsibility for your investment decisions." },
];

export default function TermsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-10">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/more")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Legal</p>
          <h1 className="text-xl font-display font-extrabold">Terms & Conditions</h1>
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
