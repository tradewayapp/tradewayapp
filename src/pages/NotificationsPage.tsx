import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Clock, AlertCircle, DollarSign, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const notifications = [
  { type: "success", icon: CheckCircle2, title: "Capital Added Successfully", desc: "₹50,000 ($597.01) has been added to your capital.", time: "2 Apr, 10:30 AM" },
  { type: "profit", icon: TrendingUp, title: "Daily Profit Settled", desc: "Today's profit of $14.81 (₹1,240) has been credited.", time: "1 Apr, 12:00 AM" },
  { type: "referral", icon: DollarSign, title: "Referral Earning", desc: "You earned $2.50 from Rahul's capital. Added to profit at settlement.", time: "1 Apr, 12:00 AM" },
  { type: "pending", icon: Clock, title: "Withdrawal Processing", desc: "Your withdrawal of $100 is being processed. ETA: 24-48 hours.", time: "31 Mar, 4:15 PM" },
  { type: "alert", icon: AlertCircle, title: "KYC Verified", desc: "Your Aadhaar verification is complete. You can now withdraw funds.", time: "28 Mar, 2:00 PM" },
  { type: "success", icon: CheckCircle2, title: "Withdrawal Complete", desc: "$100 (₹8,380) has been sent to your bank account.", time: "27 Mar, 11:00 AM" },
];

const typeStyles: Record<string, string> = {
  success: "bg-success/12 text-success",
  profit: "bg-success/12 text-success",
  referral: "bg-primary/12 text-primary",
  pending: "bg-amber-500/12 text-amber-500",
  alert: "bg-primary/12 text-primary",
};

export default function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-7 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="text-lg font-display font-extrabold">Notifications</h1>
          <p className="text-[10px] text-muted-foreground">{notifications.length} updates</p>
        </div>
      </div>

      <div className="px-5 space-y-2">
        {notifications.map((n, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="panel rounded-2xl p-4 flex gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${typeStyles[n.type]}`}>
              <n.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold">{n.title}</p>
              <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{n.desc}</p>
              <p className="text-[10px] text-muted-foreground/60 mt-2">{n.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
