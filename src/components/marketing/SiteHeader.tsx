import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.6 2.4c-.4.3-.6.8-.6 1.4v16.4c0 .6.2 1.1.6 1.4l9-9.6-9-9.6z" fill="#34A853"/>
                <path d="M16.6 8.4 5.9 2.2c-.5-.3-1-.3-1.5-.1l8.8 9.4 3.4-3.1z" fill="#EA4335"/>
                <path d="m16.6 15.6-3.4-3.1-8.8 9.4c.5.2 1 .2 1.5-.1l10.7-6.2z" fill="#FBBC04"/>
                <path d="m20.4 10.6-3.8-2.2-3.6 3.6 3.6 3.6 3.8-2.2c1.2-.7 1.2-2.1 0-2.8z" fill="#4285F4"/>
              </svg>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3.6 2.4c-.4.3-.6.8-.6 1.4v16.4c0 .6.2 1.1.6 1.4l9-9.6-9-9.6z" fill="#34A853"/>
                  <path d="M16.6 8.4 5.9 2.2c-.5-.3-1-.3-1.5-.1l8.8 9.4 3.4-3.1z" fill="#EA4335"/>
                  <path d="m16.6 15.6-3.4-3.1-8.8 9.4c.5.2 1 .2 1.5-.1l10.7-6.2z" fill="#FBBC04"/>
                  <path d="m20.4 10.6-3.8-2.2-3.6 3.6 3.6 3.6 3.8-2.2c1.2-.7 1.2-2.1 0-2.8z" fill="#4285F4"/>
                </svg>
                Download App
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
