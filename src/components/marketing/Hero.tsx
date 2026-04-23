import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const chips = [
  { icon: Globe, label: "50+ pairs" },
  { icon: Zap, label: "24/7 AI" },
  { icon: Shield, label: "100% secure" },
];

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
            Forex AI · Live engine
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-extrabold leading-[0.95] text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] tracking-tight"
          >
            Autonomous forex trading,
            <br />
            in <span className="text-signal">dollars and rupees.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            TradeWay runs an autonomous AI engine that trades global forex pairs 24/7, settles profits daily at midnight, and pays you in USD or INR. Start with as little as ₹125.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link to="/onboarding">
              <Button size="lg" className="gradient-signal text-primary-foreground border-0 hover:opacity-90 h-12 px-6">
                Launch App <ArrowRight className="ml-1" size={16} />
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
