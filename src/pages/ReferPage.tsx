import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Share2 } from "lucide-react";
import { toast } from "sonner";
import BottomNav from "@/components/BottomNav";

const INR_RATE = 83.8;

const steps = [
  { level: "A", title: "Direct", monthly: "1%", daily: "1% / 30", width: "w-full" },
  { level: "B", title: "Second", monthly: "0.50%", daily: "0.50% / 30", width: "w-[86%]" },
  { level: "C", title: "Third", monthly: "0.25%", daily: "0.25% / 30", width: "w-[72%]" },
];

const mockReferrals = [
  { name: "Rahul Sharma", level: "A", active: true, capital: 500 },
  { name: "Priya Patel", level: "A", active: true, capital: 1200 },
  { name: "Amit Kumar", level: "B", active: false, capital: 0 },
  { name: "Sneha Gupta", level: "C", active: true, capital: 300 },
];

export default function ReferPage() {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const code = "TW8X4K2M";
  const earnings = 42.50;
  const activeCount = mockReferrals.filter(r => r.active).length;

  const list = mockReferrals.filter((item) => (filter === "all" ? true : filter === "active" ? item.active : !item.active));

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-7 pb-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Network income</p>
        <h1 className="text-2xl font-display font-extrabold mt-1">Refer & Earning</h1>
      </div>

      <div className="px-5 space-y-4">
        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="panel-strong rounded-[2rem] p-5">
          <div className="flex gap-3 items-start">
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Live referral earning</p>
              <p className="text-4xl font-display font-extrabold mt-3 text-signal">${earnings.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground mt-1">≈ ₹{Math.round(earnings * INR_RATE).toLocaleString()}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{activeCount} active people</p>
            </div>
          </div>

          <div className="mt-5 panel rounded-[1.5rem] p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Invite code</p>
                <p className="text-2xl font-display font-extrabold tracking-[0.22em] mt-2">{code}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => { navigator.clipboard.writeText(code); toast.success("Code copied"); }}
                  className="w-11 h-11 rounded-2xl panel-muted flex items-center justify-center"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: "TradeWay", text: `Join TradeWay and start profitable AI trading! Use my referral code: ${code}` });
                    } else {
                      navigator.clipboard.writeText(`Join TradeWay! Use my referral code: ${code}`);
                      toast.success("Link copied!");
                    }
                  }}
                  className="w-11 h-11 rounded-2xl gradient-signal text-primary-foreground flex items-center justify-center"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="panel rounded-[1.9rem] p-5">
          <div className="mb-4">
            <h2 className="text-sm font-display font-bold">3-step referral earning</h2>
            <p className="text-[11px] text-muted-foreground mt-1">Earning percentage is calculated on the capital added by users referred by you. Monthly earning divided by 30 for daily credit.</p>
          </div>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={step.level} className={`${step.width} ${index !== 0 ? "ml-auto" : ""} panel-muted rounded-[1.4rem] p-4`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">Step {step.level}</p>
                    <p className="text-lg font-display font-bold mt-1">{step.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-display font-extrabold">{step.monthly}</p>
                    <p className="text-[11px] text-muted-foreground mt-1">{step.daily}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="panel rounded-[1.9rem] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-display font-bold">People in network</h2>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{mockReferrals.length} total</span>
          </div>
          <div className="flex gap-2 mb-4">
            {(["all", "active", "inactive"] as const).map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`px-3 py-2 rounded-xl text-[10px] uppercase tracking-[0.18em] font-semibold transition-colors ${filter === item ? "gradient-signal text-primary-foreground" : "panel-muted text-muted-foreground"}`}>
                {item}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {list.map((person, index) => (
              <div key={index} className="flex items-center gap-3 border-b border-border/40 pb-3 last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center text-sm font-display font-bold">
                  {person.level === "A" ? "1" : person.level === "B" ? "2" : "3"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{person.name}</p>
                  <p className="text-[11px] text-muted-foreground">${person.capital.toFixed(2)} • ₹{Math.round(person.capital * INR_RATE).toLocaleString()}</p>
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${person.active ? "text-success" : "text-muted-foreground"}`}>
                  {person.active ? "Active" : "Idle"}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <BottomNav />
    </div>
  );
}
