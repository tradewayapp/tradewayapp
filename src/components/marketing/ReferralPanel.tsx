import { Users } from "lucide-react";
import Reveal from "./Reveal";

const tiers = [
  { level: "L1", pct: "1.0%", desc: "Direct referrals" },
  { level: "L2", pct: "0.5%", desc: "Referrals of referrals" },
  { level: "L3", pct: "0.25%", desc: "Third-tier network" },
];

export default function ReferralPanel() {
  return (
    <section id="referral" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="panel-strong rounded-3xl p-8 sm:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] uppercase tracking-[0.22em] mb-5">
                <Users size={12} /> Referral program
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
                Earn from <span className="text-signal">3 levels deep.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Invite friends and earn a recurring share of their monthly trading profits — across three referral tiers, settled daily alongside your trades.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Example: a network earning ₹1,00,000/month in profits = up to <span className="text-foreground font-semibold">₹1,750/month</span> passive to you.
              </p>
            </div>

            <div className="space-y-3">
              {tiers.map((t) => (
                <div key={t.level} className="panel rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{t.level} tier</p>
                    <p className="font-display font-bold text-lg mt-0.5">{t.desc}</p>
                  </div>
                  <p className="font-display font-extrabold text-3xl text-signal">{t.pct}</p>
                </div>
              ))}
              <p className="text-xs text-muted-foreground text-center pt-2">
                Of monthly profits · Daily settlement · No referral cap
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
