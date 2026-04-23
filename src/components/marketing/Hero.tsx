import { motion } from "framer-motion";
import { PlayCircle, Shield, Zap, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import { Link } from "react-router-dom";
import { APK_DOWNLOAD_URL } from "@/lib/appDownload";

const chips = [
  { icon: Coins, label: "XAU/USD focused" },
  { icon: Zap, label: "24/7 AI engine" },
  { icon: Shield, label: "Hands-free" },
];

const PlayStoreIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" aria-hidden="true">
    <path d="M64 40v432c0 14 8 24 20 28 12 4 24 0 34-6l324-188c20-12 20-40 0-52L118 18C108 12 96 8 84 12 72 16 64 26 64 40z"/>
    <path d="M64 40l280 220L64 472"/>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 editorial-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-primary/15 via-accent/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full panel-muted text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            AI Gold Trading · Live engine
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-extrabold leading-[0.95] text-[2rem] sm:text-[2.6rem] lg:text-[3rem] tracking-tight"
          >
            Welcome to the world of
            <br />
            <span className="text-signal">AI-based Profitable Trading.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            TradeWay is an AI trading platform built around XAU/USD gold pairs. Our autonomous engine analyzes, executes, and manages every position 24/7 — you just deposit and watch profits settle daily in USD or INR. Start with $100 / ₹10,000.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link to={APK_DOWNLOAD_URL} className="inline-flex">
              <Button size="lg" className="gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12 px-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                <PlayStoreIcon size={18} />
                <span>Download App</span>
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-6 border-border inline-flex items-center justify-center gap-2 w-full sm:w-auto" asChild>
              <a href="#how">
                <PlayCircle size={18} />
                <span>See how it works</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {chips.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full panel-muted text-xs text-muted-foreground">
                <c.icon size={13} className="text-primary" /> {c.label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
