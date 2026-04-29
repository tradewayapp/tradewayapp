import { Lock, FileCheck, Vault, ScrollText } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: FileCheck, title: "Aadhaar KYC", desc: "Every account verified against UIDAI before any deposit." },
  { icon: Lock, title: "Encrypted transactions", desc: "End-to-end TLS, hardware-backed keys, zero plaintext storage." },
  { icon: Vault, title: "Segregated capital", desc: "Trader funds held in isolated accounts, separate from operations." },
  { icon: ScrollText, title: "Audit trail", desc: "Every signal, trade, and settlement is logged and downloadable." },
];

export default function SecuritySection() {
  return (
    <section className="py-20 lg:py-28 bg-card/20 border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3 font-semibold">Security</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-[1.05]">
              Built like a bank,
              <br />
              <span className="text-gold">runs like a trader.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="panel rounded-2xl p-6 h-full hover-lift">
                <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center mb-4">
                  <it.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
