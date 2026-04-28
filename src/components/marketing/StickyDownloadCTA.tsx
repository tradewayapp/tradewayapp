import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Download } from "lucide-react";
import { APK_DOWNLOAD_URL } from "@/lib/appDownload";

const STORAGE_KEY = "tw_sticky_dl_dismissed_at";
const REAPPEAR_AFTER_MS = 1000 * 60 * 60 * 24; // 24h

export default function StickyDownloadCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissedAt = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (dismissedAt && Date.now() - dismissedAt < REAPPEAR_AFTER_MS) return;
    } catch {}
    const t = window.setTimeout(() => setVisible(true), 800);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 pointer-events-none"
      role="region"
      aria-label="Download TradeWay app"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl">
        <div className="relative panel-strong rounded-2xl overflow-hidden shadow-gold border border-primary/30">
          <div className="absolute inset-0 editorial-grid opacity-20 pointer-events-none" />
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-primary/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative flex items-center gap-3 p-3 sm:p-4">
            <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Download size={20} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-sm sm:text-base leading-tight truncate">
                Get the TradeWay App
              </p>
              <p className="text-xs text-muted-foreground truncate">
                AI-powered XAU/USD trading on Android.
              </p>
            </div>

            <Link
              to={APK_DOWNLOAD_URL}
              className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full gradient-signal text-primary-foreground font-bold text-xs sm:text-sm h-10 px-4 sm:px-5 hover:opacity-90 transition"
            >
              <Download size={15} />
              <span>Download</span>
            </Link>

            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss download banner"
              className="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
