import { Brain, Wallet, Clock, ShieldCheck, Users, LineChart } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { icon: Brain, title: "AI trading engine", desc: "Proprietary models analyze 50+ forex pairs across timezones and execute autonomously." },
  { icon: Wallet, title: "Dual currency wallet", desc: "Deposit and withdraw in INR or USD. Real-time conversion with no hidden spreads." },
  { icon: Clock, title: "Daily 12 AM settlement", desc: "Profits credited to your wallet every midnight IST. No waiting, no lock-ins." },
  { icon: ShieldCheck, title: "KYC-secured", desc: "Aadhaar-verified accounts only. Bank-grade encryption on every transaction." },
  { icon: Users, title: "3-tier referrals", desc: "Earn from your network — L1 1%, L2 0.5%, L3 0.25% of monthly profits." },
  { icon: LineChart, title: "Real-time tracking", desc: "Live positions, settlement history, and analytics — always one tap away." },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3">Features</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Everything you need to trade forex, automated.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A focused toolkit built for retail traders who want institutional-grade execution.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="panel rounded-2xl p-6 h-full hover:border-primary/40 transition-colors">
                <div className="w-11 h-11 rounded-xl gradient-signal flex items-center justify-center mb-5">
                  <f.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
