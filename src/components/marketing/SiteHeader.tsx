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
              <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                <path d="M85 60.5v391c0 13.1 5.5 22.8 14.4 27.9l203.4-223.7L99.4 32.6C90.5 37.7 85 47.4 85 60.5z"/>
                <path d="M362.1 188.3 99.4 32.6c-3.1-1.8-6.4-2.7-9.7-2.6L271.4 235l90.7-46.7z"/>
                <path d="M362.1 323.7 271.4 277l-181.7 207c3.3.1 6.6-.8 9.7-2.6l262.7-157.7z"/>
                <path d="M464.6 234.7 386.1 189l-23.9 13.7-90.8 53.3 90.8 53.3 23.9 13.7 78.5-45.7c20.1-11.7 20.1-31.6 0-43.6z"/>
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
                <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                  <path d="M85 60.5v391c0 13.1 5.5 22.8 14.4 27.9l203.4-223.7L99.4 32.6C90.5 37.7 85 47.4 85 60.5z"/>
                  <path d="M362.1 188.3 99.4 32.6c-3.1-1.8-6.4-2.7-9.7-2.6L271.4 235l90.7-46.7z"/>
                  <path d="M362.1 323.7 271.4 277l-181.7 207c3.3.1 6.6-.8 9.7-2.6l262.7-157.7z"/>
                  <path d="M464.6 234.7 386.1 189l-23.9 13.7-90.8 53.3 90.8 53.3 23.9 13.7 78.5-45.7c20.1-11.7 20.1-31.6 0-43.6z"/>
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
