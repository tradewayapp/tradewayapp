import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APK_DOWNLOAD_URL } from "@/lib/appDownload";
import Logo from "@/components/Logo";

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
        <Link to="/" className="flex items-center">
          <Logo size="sm" showWordmark />
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
          <Link to={APK_DOWNLOAD_URL} className="hidden sm:block">
            <Button className="gradient-signal text-primary-foreground border-0 hover:opacity-90 inline-flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" aria-hidden="true">
                <path d="M64 40v432c0 14 8 24 20 28 12 4 24 0 34-6l324-188c20-12 20-40 0-52L118 18C108 12 96 8 84 12 72 16 64 26 64 40z"/>
                <path d="M64 40l280 220L64 472"/>
              </svg>
              <span>Download App</span>
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
            <Link to={APK_DOWNLOAD_URL} onClick={() => setOpen(false)} className="sm:hidden">
              <Button className="gradient-signal text-primary-foreground border-0 w-full inline-flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" aria-hidden="true">
                  <path d="M64 40v432c0 14 8 24 20 28 12 4 24 0 34-6l324-188c20-12 20-40 0-52L118 18C108 12 96 8 84 12 72 16 64 26 64 40z"/>
                  <path d="M64 40l280 220L64 472"/>
                </svg>
                <span>Download App</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
