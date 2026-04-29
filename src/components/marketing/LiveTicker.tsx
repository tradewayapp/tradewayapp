import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const seed = [
  { sym: "XAU/USD", base: 2387.42, decimals: 2 },
  { sym: "XAG/USD", base: 28.41, decimals: 2 },
  { sym: "EUR/USD", base: 1.0842, decimals: 4 },
  { sym: "USD/INR", base: 83.21, decimals: 2 },
  { sym: "GBP/JPY", base: 198.64, decimals: 2 },
  { sym: "BTC/USD", base: 67842.10, decimals: 2 },
];

function useTicks() {
  const [vals, setVals] = useState(() =>
    seed.map((s) => ({ ...s, price: s.base, change: 0.42 + Math.random() * 1.2 }))
  );
  useEffect(() => {
    const id = setInterval(() => {
      setVals((prev) =>
        prev.map((p) => {
          const drift = (Math.random() - 0.45) * (p.base * 0.0008);
          const newPrice = Math.max(0, p.price + drift);
          const change = ((newPrice - p.base) / p.base) * 100;
          return { ...p, price: newPrice, change };
        })
      );
    }, 1800);
    return () => clearInterval(id);
  }, []);
  return vals;
}

export default function LiveTicker() {
  const ticks = useTicks();
  const row = (
    <div className="flex items-center gap-10 whitespace-nowrap">
      {ticks.map((t, i) => {
        const up = t.change >= 0;
        return (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground font-medium tracking-wider">{t.sym}</span>
            <span className="font-display font-semibold text-foreground tabular-nums">
              {t.price.toLocaleString("en-US", { minimumFractionDigits: t.decimals, maximumFractionDigits: t.decimals })}
            </span>
            <span className={`inline-flex items-center gap-0.5 tabular-nums ${up ? "text-success" : "text-destructive"}`}>
              {up ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
              {up ? "+" : ""}{t.change.toFixed(2)}%
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="relative border-y border-border/60 bg-background/60 backdrop-blur-md overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex items-center gap-3 py-2.5">
        <span className="ml-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-primary font-semibold shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: "ticker-blink 1.4s ease-in-out infinite" }} />
          Live
        </span>
        <div className="marquee">
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
