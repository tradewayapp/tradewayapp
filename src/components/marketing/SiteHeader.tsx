import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APK_DOWNLOAD_URL } from "@/lib/appDownload";
import Logo from "@/components/Logo";
import ThemeToggle from "./ThemeToggle";

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
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-background/80 border-b border-border/70 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.5)]"
          : "backdrop-blur-md bg-background/40 border-b border-transparent"
      }`}
    >
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
        <Link to="/" className="flex items-center group">
          <Logo size="sm" showWordmark />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active =
              (l.href.startsWith("/#") && pathname === "/" && hash === l.href.slice(1)) ||
              (!l.href.startsWith("/#") && pathname === l.href);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px gradient-signal rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to={APK_DOWNLOAD_URL} className="hidden sm:block">
            <Button className="gradient-signal text-primary-foreground border-0 hover:opacity-90 inline-flex items-center justify-center gap-2 shadow-gold h-9 px-4 font-semibold text-sm">
              <svg width="14" height="14" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" aria-hidden="true">
                <path d="M64 40v432c0 14 8 24 20 28 12 4 24 0 34-6l324-188c20-12 20-40 0-52L118 18C108 12 96 8 84 12 72 16 64 26 64 40z" />
                <path d="M64 40l280 220L64 472" />
              </svg>
              <span>Download</span>
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
              <Button className="gradient-signal text-primary-foreground border-0 w-full inline-flex items-center justify-center gap-2 shadow-gold font-semibold">
                <svg width="14" height="14" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" aria-hidden="true">
                  <path d="M64 40v432c0 14 8 24 20 28 12 4 24 0 34-6l324-188c20-12 20-40 0-52L118 18C108 12 96 8 84 12 72 16 64 26 64 40z" />
                  <path d="M64 40l280 220L64 472" />
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
