import { useEffect } from "react";
import SiteHeader from "@/components/marketing/SiteHeader";
import SiteFooter from "@/components/marketing/SiteFooter";
import Reveal from "@/components/marketing/Reveal";
import { Target, Sparkles, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Aligned incentives", desc: "We earn only when you earn. 20% of profits, never of your capital." },
  { icon: Sparkles, title: "Quietly powerful", desc: "Heavy infra, simple app. The hard work happens in the background." },
  { icon: Users, title: "Built for retail", desc: "Designed for first-time traders in India — not for institutions." },
];

const team = [
  { name: "Quant Team", role: "Models & strategy" },
  { name: "Product Team", role: "App & experience" },
  { name: "Risk Team", role: "Safeguards & compliance" },
  { name: "Support Team", role: "24/7 trader support" },
];

export default function About() {
  useEffect(() => {
    document.title = "About — TradeWay";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative py-20 lg:py-28 border-b border-border/60">
          <div className="absolute inset-0 editorial-grid opacity-30" />
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/15 to-transparent" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3">About TradeWay</p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight leading-tight">
              We're building <span className="text-signal">autonomous trading</span> for everyone.
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              TradeWay started with a simple belief: retail traders shouldn't need a Bloomberg terminal, a quant team, or sleepless nights to participate in global forex markets. So we built the engine, packaged it in an app, and let the AI do the staring.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <h2 className="font-display font-extrabold text-3xl tracking-tight text-center mb-12">What we believe</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="panel rounded-2xl p-6 h-full">
                    <div className="w-11 h-11 rounded-xl gradient-signal flex items-center justify-center mb-5">
                      <v.icon size={20} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-lg">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30 border-y border-border/60">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="font-display font-extrabold text-3xl tracking-tight">The team</h2>
                <p className="mt-3 text-muted-foreground">Distributed across India, working in shifts so the engine — and you — never sleeps.</p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {team.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.05}>
                  <div className="panel-muted rounded-2xl p-5 text-center">
                    <div className="w-14 h-14 rounded-full gradient-signal mx-auto mb-3" />
                    <p className="font-display font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
