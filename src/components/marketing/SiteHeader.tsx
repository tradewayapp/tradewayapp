import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlayStoreIcon from "./PlayStoreIcon";

const links = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Referral", href: "/#referral" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-signal flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M9 28L17 12L23 20L31 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 12H31V15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-display font-extrabold tracking-tight text-lg">TradeWay</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${
                pathname === l.href ? "text-foreground" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/onboarding" className="hidden sm:block">
            <Button className="gradient-signal text-primary-foreground border-0 hover:opacity-90 gap-2">
              <PlayStoreIcon size={16} />
              Download App
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-1"
              >
                {l.label}
              </a>
            ))}
            <Link to="/onboarding" onClick={() => setOpen(false)} className="sm:hidden">
              <Button className="gradient-signal text-primary-foreground border-0 w-full gap-2">
                <PlayStoreIcon size={16} />
                Download App
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
