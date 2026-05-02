import { Users, User } from "lucide-react";
import Reveal from "./Reveal";

const tiers = [
  { level: "L1", pct: "2.0%", desc: "Direct referrals", count: 5 },
  { level: "L2", pct: "1.0%", desc: "Their referrals", count: 12 },
  { level: "L3", pct: "0.50%", desc: "Third-tier network", count: 24 },
];

export default function ReferralPanel() {
  return (
    <section id="referral" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="panel-strong rounded-3xl p-8 sm:p-12 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/15 blur-3xl rounded-full" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-purple text-accent-glow text-[11px] uppercase tracking-[0.22em] mb-5 font-semibold">
                <Users size={12} /> Referral program
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-[1.05]">
                Earn from <span className="text-royal">three levels</span> deep.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Invite once — earn forever. Get a recurring share of monthly profits across three referral tiers, settled daily alongside your own trades.
              </p>
              <div className="mt-6 panel-muted rounded-2xl p-4">
                <p className="text-xs text-muted-foreground">Example</p>
                <p className="text-sm mt-1 leading-relaxed">
                  Network earning <span className="text-foreground font-semibold">₹1,00,000/month</span> in profits ={" "}
                  <span className="text-gold font-display font-bold text-lg">₹1,750/mo</span> passive to you.
                </p>
              </div>
            </div>

            {/* Tree visualization */}
            <div className="relative">
              {/* You node */}
              <div className="flex justify-center mb-3">
                <div className="glass-gold rounded-2xl px-5 py-3 inline-flex items-center gap-2 shadow-gold">
                  <div className="w-7 h-7 rounded-full gradient-signal flex items-center justify-center">
                    <User size={13} className="text-primary-foreground" />
                  </div>
                  <span className="font-display font-bold text-sm">You</span>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-6 signal-line" style={{ background: "linear-gradient(180deg, hsl(var(--primary)), transparent)" }} />
              </div>

              <div className="space-y-3">
                {tiers.map((t, i) => (
                  <div key={t.level} className="relative">
                    <div className="panel rounded-2xl p-4 sm:p-5 flex items-center justify-between hover-lift">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center shrink-0">
                          <span className="font-display font-extrabold text-sm text-gold">{t.level}</span>
                        </div>
                        <div>
                          <p className="font-display font-bold text-base">{t.desc}</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">~{t.count} avg per user</p>
                        </div>
                      </div>
                      <p className="font-display font-extrabold text-3xl text-gold tabular-nums">{t.pct}</p>
                    </div>
                    {i < tiers.length - 1 && (
                      <div className="flex justify-center">
                        <div className="w-px h-3 bg-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center pt-5">
                Of monthly profits · Daily settlement · No referral cap
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
