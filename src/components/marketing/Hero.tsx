import { motion } from "framer-motion";
import { PlayCircle, Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { APK_DOWNLOAD_URL } from "@/lib/appDownload";
import AuroraBackground from "./AuroraBackground";
import LiveTicker from "./LiveTicker";
import MagneticButton from "./MagneticButton";
import AnimatedCounter from "./AnimatedCounter";

const PlayStoreIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" aria-hidden="true">
    <path d="M64 40v432c0 14 8 24 20 28 12 4 24 0 34-6l324-188c20-12 20-40 0-52L118 18C108 12 96 8 84 12 72 16 64 26 64 40z" />
    <path d="M64 40l280 220L64 472" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground variant="hero" />
      <div className="absolute inset-0 editorial-grid opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-16 lg:pt-24 lg:pb-24">
        {/* Eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="glass-gold inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full text-[11px] font-medium">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full gradient-signal text-primary-foreground font-bold uppercase tracking-wider text-[9px]">
              <Sparkles size={10} /> New
            </span>
            <span className="text-muted-foreground">AI forex engine · v3.2 · 24/5 markets</span>
            <ArrowUpRight size={12} className="text-primary" />
          </div>
        </motion.div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-extrabold leading-[0.95] tracking-tight text-[2.4rem] sm:text-[3.4rem] lg:text-[4.6rem]"
          >
            Welcome to the world of
            <br />
            <span className="text-gold">AI-based Profitable Trading.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            TradeWay's AI engine trades the live forex market — EUR/USD, GBP/USD, USD/JPY, gold and more — 24/5.
            Entries, exits, risk: fully autonomous. Profits settle daily in <span className="text-foreground font-medium">USD or INR</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <MagneticButton>
              <Link to={APK_DOWNLOAD_URL}>
                <Button size="lg" className="gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12 px-7 inline-flex items-center justify-center gap-2 shadow-gold font-semibold">
                  <PlayStoreIcon size={18} />
                  <span>Download App</span>
                </Button>
              </Link>
            </MagneticButton>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 border-border bg-background/40 backdrop-blur inline-flex items-center justify-center gap-2"
              asChild
            >
              <a href="#how">
                <PlayCircle size={18} />
                <span>See how it works</span>
              </a>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
          >
            <div className="inline-flex items-center gap-2">
              <span className="text-foreground font-display font-bold text-base">4.8</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="hsl(var(--primary))">
                    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                  </svg>
                ))}
              </div>
              <span>Play Store</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="inline-flex items-center gap-1.5">
              <span className="text-foreground font-display font-bold text-base tabular-nums">1000+</span>
              <span>traders</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
