import { useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

export default function ComingSoon() {
  useEffect(() => {
    document.title = "TradeWay — Launching Soon";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "TradeWay AI forex trading platform launching soon."
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background editorial-grid relative overflow-hidden flex flex-col">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/15 via-accent/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="inline-flex"
          >
            <Logo size="lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="mt-5"
          >
            <h2 className="font-display font-extrabold tracking-tight text-3xl sm:text-4xl">
              TradeWay
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6"
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-primary font-semibold">
              Coming Soon
            </p>
            <h1 className="mt-3 text-[2.6rem] sm:text-[3.2rem] leading-[0.95] font-display font-extrabold tracking-tight">
              Launching
              <br />
              <span className="text-signal">very soon.</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
              AI-powered XAU/USD gold trading on autopilot. We&apos;re putting
              the final touches — going live shortly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 space-y-3"
          >
            <div className="h-[3px] w-40 mx-auto rounded-full signal-line animate-pulseLine" />
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Stay tuned
            </p>
          </motion.div>
        </div>
      </div>

      <footer className="relative z-10 px-6 py-6 text-center">
        <p className="text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} TradeWay
        </p>
      </footer>
    </main>
  );
}
