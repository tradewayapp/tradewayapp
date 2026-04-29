import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "./Reveal";

const faqs = [
  { q: "What's the minimum capital to start?", a: "You can begin trading with as little as ₹125. There's no upper limit, and you can top up anytime via UPI, net banking, or USDT." },
  { q: "How long do withdrawals take?", a: "Withdrawals to Indian bank accounts settle within minutes via IMPS/UPI. USD/USDT withdrawals usually arrive within 1 hour." },
  { q: "What documents are needed for KYC?", a: "Just your Aadhaar — front and back. The verification is automated via UIDAI and typically completes in under 60 seconds." },
  { q: "What are the fees?", a: "Zero subscription, zero deposit, zero withdrawal. We charge a flat 20% platform fee on profits only — never on your capital." },
  { q: "How does the referral payout work?", a: "L1 referrals earn you 1%, L2 = 0.5%, L3 = 0.25% of monthly profits across your network. Payouts are credited daily alongside your own settlement." },
  { q: "Which forex pairs are supported?", a: "Our AI trades major forex pairs — EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/INR — plus XAU/USD (gold) and XAG/USD (silver). The engine picks the highest-conviction setups across all of them." },
  { q: "What happens if I want to stop trading?", a: "You can pause the engine instantly from your dashboard. Open positions close at the next market window, and full capital plus earned profits remain withdrawable." },
  { q: "When is support available?", a: "Live chat support is available 24/7 in English and Hindi. Email queries are answered within 4 hours on business days." },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3 font-semibold">FAQ</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-[1.05]">
              Questions, <span className="text-gold">answered.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="panel rounded-2xl border border-border/60 overflow-hidden hover:border-primary/30 transition-colors data-[state=open]:border-primary/40 data-[state=open]:shadow-gold"
              >
                <AccordionTrigger className="px-5 py-5 text-left font-display font-semibold text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
