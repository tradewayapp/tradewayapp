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
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3">Security</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Built like a bank, runs like a trader.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="panel rounded-2xl p-6 h-full">
                <it.icon size={22} className="text-primary mb-4" />
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
