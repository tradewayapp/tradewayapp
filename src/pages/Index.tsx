import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding"), 2400);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background editorial-grid relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="relative z-10 min-h-screen flex flex-col justify-between px-8 py-8">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-muted-foreground font-semibold">
          <span>TradeWay</span>
          <span>Forex AI</span>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="panel-strong w-28 h-28 rounded-[2rem] flex items-center justify-center"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M9 28L17 12L23 20L31 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 12H31V15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="mt-9"
          >
            <h1 className="text-[3.6rem] leading-[0.92] font-display font-extrabold">
              Trade
              <br />
              <span className="text-signal">Way</span>
            </h1>
            <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-muted-foreground">
              Autonomous forex engine for capital, profit, and referrals in both dollars and rupees.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-3"
        >
          <div className="h-[3px] rounded-full signal-line animate-pulseLine" />
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Loading signal room</p>
        </motion.div>
      </div>
    </div>
  );
}
