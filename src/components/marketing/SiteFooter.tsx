import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "@/components/Logo";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Referral", href: "/#referral" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Learn", href: "/learn" },
      { label: "AI Guide", href: "/ai-guide" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "KYC", href: "/kyc" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help-center" },
      { label: "FAQ", href: "/faq" },
      { label: "Support", href: "/support" },
      { label: "Delete Account", href: "/delete-account" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-background overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px signal-line opacity-40" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Logo size="md" showWordmark />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Autonomous AI engine for the global forex market — deposit once, profits settle daily in dollars or rupees.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-gold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: "ticker-blink 1.4s ease-in-out infinite" }} />
              <span className="text-muted-foreground">All systems operational</span>
            </div>
            <div className="flex items-center gap-3 mt-5 text-muted-foreground">
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-primary transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display font-semibold text-sm mb-4 text-foreground">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} TradeWay. Made with care for traders.</p>
          <p className="text-xs text-muted-foreground max-w-2xl md:text-right">
            <span className="text-warning font-semibold">Risk disclaimer:</span> Forex trading involves substantial risk and may not be suitable for every investor. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
