import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Bot, TrendingUp, Wallet, Zap } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import AuroraBackground from "./AuroraBackground";
import Reveal from "./Reveal";

export default function FloatingShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [6, -6]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-6, 6]), { stiffness: 80, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 border-y border-border/60 bg-card/20">
      <AuroraBackground variant="subtle" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative max-w-6xl mx-auto px-6"
        style={{ perspective: 1200 }}
      >
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3 font-semibold">The Engine</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-[1.05]">
              One screen. <span className="text-gold">Infinite focus.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              The AI watches every tick across major forex pairs so you don't have to.
            </p>
          </div>
        </Reveal>

        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
          className="relative mx-auto max-w-4xl h-[640px] sm:h-[680px]"
        >
          {/* Center phone */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}>
            <PhoneMockup />
          </div>

          {/* Left floating card — AI Decision */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block absolute left-2 lg:left-8 top-20 z-30"
            style={{ transform: "translateZ(80px)" }}
          >
            <div className="glass-gold rounded-2xl p-4 w-[230px] shadow-gold">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg gradient-signal flex items-center justify-center">
                  <Bot size={15} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">AI Decision</p>
                  <p className="text-xs font-semibold">2 sec ago</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="px-2 py-0.5 rounded-md bg-success/15 text-success text-[10px] font-bold">BUY</span>
                <span className="font-display font-bold text-sm">XAU/USD</span>
              </div>
              <div className="mt-3 text-[10px] text-muted-foreground">Confidence</div>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full w-[94%] gradient-signal rounded-full" />
                </div>
                <span className="text-xs font-bold text-primary tabular-nums">94%</span>
              </div>
            </div>
          </motion.div>

          {/* Right floating card — PnL */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden md:block absolute right-2 lg:right-8 top-32 z-30"
            style={{ transform: "translateZ(80px)" }}
          >
            <div className="glass-gold rounded-2xl p-4 w-[210px] shadow-gold">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-success/15 flex items-center justify-center">
                  <Wallet size={15} className="text-success" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Today's PnL</p>
                  <p className="text-xs font-semibold">Live</p>
                </div>
              </div>
              <p className="font-display font-extrabold text-2xl text-success">+$284.50</p>
              <p className="text-[10px] text-muted-foreground mt-1">Across 14 trades · 12W / 2L</p>
            </div>
          </motion.div>

          {/* Bottom right card — Speed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden md:block absolute right-12 lg:right-24 bottom-20 z-30"
            style={{ transform: "translateZ(60px)" }}
          >
            <div className="glass-purple rounded-2xl p-4 w-[200px] shadow-royal">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg gradient-royal flex items-center justify-center">
                  <Zap size={15} className="text-accent-foreground" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Latency</p>
              </div>
              <p className="font-display font-extrabold text-2xl text-royal">8ms</p>
              <p className="text-[10px] text-muted-foreground mt-1">Order to execution</p>
            </div>
          </motion.div>

          {/* Bottom left card — Trend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hidden md:block absolute left-12 lg:left-24 bottom-32 z-30"
            style={{ transform: "translateZ(60px)" }}
          >
            <div className="glass-gold rounded-2xl p-4 w-[200px] shadow-gold">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={14} className="text-primary" />
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Win rate · 30d</p>
              </div>
              <p className="font-display font-extrabold text-2xl text-gold">94.2%</p>
              <p className="text-[10px] text-muted-foreground mt-1">2,184 of 2,318 trades</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
