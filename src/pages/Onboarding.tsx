import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShieldCheck, Landmark, Users } from "lucide-react";

const slides = [
  {
    icon: TrendingUp,
    eyebrow: "AI TRADING",
    title: "Accurate &\nprofitable trading.",
    desc: "Our AI technology analyzes forex markets 24/7 and executes trades automatically to maximize your returns.",
    stat: "50+",
    label: "Currency pairs",
  },
  {
    icon: ShieldCheck,
    eyebrow: "TRUSTED PLATFORM",
    title: "A platform\nyou can trust.",
    desc: "Thousands of users trust TradeWay for transparent profits, daily settlements and real-time tracking.",
    stat: "24/7",
    label: "AI monitoring",
  },
  {
    icon: Landmark,
    eyebrow: "SECURE BANKING",
    title: "Safe & secure\ntransactions.",
    desc: "Add capital via bank transfer with full verification. Every transaction is encrypted and tracked for your safety.",
    stat: "100%",
    label: "Secure payments",
  },
  {
    icon: Users,
    eyebrow: "REFER & EARN",
    title: "Invite friends.\nEarn daily.",
    desc: "Share TradeWay with friends and earn up to 1% on their capital — credited to your profit balance every day.",
    stat: "3-STEP",
    label: "Referral earning",
  },
];

export default function Onboarding() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const slide = slides[index];

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <div className="px-6 pt-6 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">TradeWay Intro</span>
        <button onClick={() => navigate("/login")} className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
          Skip
        </button>
      </div>

      <div className="flex-1 flex px-6 pt-8 pb-6 gap-4">
        <div className="w-7 flex flex-col items-center gap-2 pt-1">
          {slides.map((_, i) => (
            <div key={i} className={`w-[3px] rounded-full transition-all duration-300 ${i === index ? "h-16 gradient-signal" : "h-6 bg-secondary"}`} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -36 }}
            transition={{ duration: 0.28 }}
            className="flex-1 flex flex-col"
          >
            <div className="panel-strong rounded-[2rem] p-6 min-h-[350px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/14 border border-primary/20 flex items-center justify-center mb-6">
                  <slide.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">{slide.eyebrow}</p>
                <h1 className="text-[2.35rem] leading-[1.02] font-display font-extrabold whitespace-pre-line">
                  {slide.title}
                </h1>
              </div>

              <div>
                <div className="panel-muted rounded-2xl p-4 mb-5">
                  <div className="flex items-end justify-between gap-3">
                    <p className="text-3xl font-display font-extrabold text-signal">{slide.stat}</p>
                    <p className="text-[11px] text-muted-foreground text-right">{slide.label}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground max-w-[280px]">{slide.desc}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-6 pb-10">
        <Button
          onClick={() => (index < slides.length - 1 ? setIndex(index + 1) : navigate("/login"))}
          className="w-full h-14 rounded-2xl gradient-signal text-primary-foreground font-display font-bold text-base"
        >
          {index < slides.length - 1 ? "Continue" : "Enter TradeWay"}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
