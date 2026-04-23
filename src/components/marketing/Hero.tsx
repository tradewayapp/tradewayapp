import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle, Shield, Zap, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const chips = [
  { icon: Coins, label: "XAU/USD focused" },
  { icon: Zap, label: "24/7 AI engine" },
  { icon: Shield, label: "Hands-free" },
];

const PlayStoreIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" aria-hidden="true">
    <path d="M99.4 32.6C90.5 37.7 85 47.4 85 60.5v391c0 13.1 5.5 22.8 14.4 27.9l203.4-223.7L99.4 32.6z" fill="#34A853"/>
    <path d="M362.1 188.3 287.4 145l-15.2-8.8L99.4 32.6c-3.1-1.8-6.4-2.7-9.7-2.6L271.4 235l90.7-46.7z" fill="#EA4335"/>
    <path d="M362.1 323.7 271.4 277l-181.7 207c3.3.1 6.6-.8 9.7-2.6l172.8-103.6 90-54.1z" fill="#FBBC04"/>
    <path d="M464.6 234.7 386.1 189l-23.9 13.7-90.8 53.3 90.8 53.3 23.9 13.7 78.5-45.7c20.1-11.7 20.1-31.6 0-43.6z" fill="#4285F4"/>
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
            className="font-display font-extrabold leading-[0.95] text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] tracking-tight"
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
            <Link to="/onboarding">
              <Button size="lg" className="gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12 px-6 gap-2">
                <PlayStoreIcon /> Download App
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-6 border-border" asChild>
              <a href="#how">
                <PlayCircle className="mr-1" size={16} /> See how it works
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
