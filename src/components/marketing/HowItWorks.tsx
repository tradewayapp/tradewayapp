import { UserPlus, Wallet, Bot, ArrowDownToLine } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { icon: UserPlus, title: "Sign up & KYC", desc: "Create an account, verify with Aadhaar front + back. Takes under 2 minutes." },
  { icon: Wallet, title: "Add capital", desc: "Fund your wallet with as little as ₹125 via UPI, net banking, or USDT." },
  { icon: Bot, title: "AI trades 24/7", desc: "Our engine takes over — running positions across global forex sessions." },
  { icon: ArrowDownToLine, title: "Withdraw daily", desc: "Profits settle every midnight. Withdraw to bank or wallet anytime." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 lg:py-28 bg-card/30 border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3">How it works</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              From sign-up to settlement in 4 steps.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="relative panel rounded-2xl p-6 h-full">
                <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-background border border-primary/40 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {i + 1}
                </div>
                <div className="w-11 h-11 rounded-xl panel-muted flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
