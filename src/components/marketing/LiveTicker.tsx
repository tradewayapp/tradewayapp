import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

type Pair = { sym: string; price: number; prev: number; change: number; decimals: number };

// Build forex pairs from a USD-base rates map (open.er-api.com).
// rates[X] = how many X per 1 USD.
function buildPairs(rates: Record<string, number>): Pair[] {
  const pair = (sym: string, value: number, decimals: number): Pair => ({
    sym,
    price: value,
    prev: value,
    change: 0,
    decimals,
  });
  const out: Pair[] = [];
  if (rates.EUR) out.push(pair("EUR/USD", 1 / rates.EUR, 4));
  if (rates.GBP) out.push(pair("GBP/USD", 1 / rates.GBP, 4));
  if (rates.JPY) out.push(pair("USD/JPY", rates.JPY, 2));
  if (rates.INR) out.push(pair("USD/INR", rates.INR, 2));
  if (rates.CHF) out.push(pair("USD/CHF", rates.CHF, 4));
  if (rates.AUD) out.push(pair("AUD/USD", 1 / rates.AUD, 4));
  if (rates.CAD) out.push(pair("USD/CAD", rates.CAD, 4));
  if (rates.XAU) out.push(pair("XAU/USD", 1 / rates.XAU, 2));
  return out;
}

// Fallback seed if API unavailable.
const FALLBACK: Pair[] = [
  { sym: "EUR/USD", price: 1.0842, prev: 1.0842, change: 0, decimals: 4 },
  { sym: "GBP/USD", price: 1.2731, prev: 1.2731, change: 0, decimals: 4 },
  { sym: "USD/JPY", price: 154.21, prev: 154.21, change: 0, decimals: 2 },
  { sym: "USD/INR", price: 83.42, prev: 83.42, change: 0, decimals: 2 },
  { sym: "USD/CHF", price: 0.9054, prev: 0.9054, change: 0, decimals: 4 },
  { sym: "AUD/USD", price: 0.6612, prev: 0.6612, change: 0, decimals: 4 },
];

export default function LiveTicker() {
  const [pairs, setPairs] = useState<Pair[]>(FALLBACK);
  const [live, setLive] = useState(false);
  const baselineRef = useRef<Pair[] | null>(null);

  // Fetch real rates once on mount + refresh every 5 min.
  useEffect(() => {
    let cancelled = false;
    const fetchRates = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        if (!res.ok) throw new Error("rate fetch failed");
        const data = await res.json();
        if (cancelled || !data?.rates) return;
        const built = buildPairs(data.rates);
        if (built.length === 0) return;
        baselineRef.current = built.map((p) => ({ ...p }));
        setPairs(built);
        setLive(true);
      } catch {
        // keep fallback
      }
    };
    fetchRates();
    const id = setInterval(fetchRates, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  // Subtle micro-jitter so it visually feels live between fetches.
  useEffect(() => {
    const id = setInterval(() => {
      setPairs((prev) =>
        prev.map((p, i) => {
          const baseline = baselineRef.current?.[i]?.price ?? p.price;
          const drift = (Math.random() - 0.5) * baseline * 0.0004;
          const newPrice = Math.max(0, p.price + drift);
          const change = ((newPrice - baseline) / baseline) * 100;
          return { ...p, price: newPrice, change };
        })
      );
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const row = (
    <div className="flex items-center gap-10 whitespace-nowrap">
      {pairs.map((t, i) => {
        const up = t.change >= 0;
        return (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground font-medium tracking-wider">{t.sym}</span>
            <span className="font-display font-semibold text-foreground tabular-nums">
              {t.price.toLocaleString("en-US", {
                minimumFractionDigits: t.decimals,
                maximumFractionDigits: t.decimals,
              })}
            </span>
            <span className={`inline-flex items-center gap-0.5 tabular-nums ${up ? "text-success" : "text-destructive"}`}>
              {up ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
              {up ? "+" : ""}
              {t.change.toFixed(3)}%
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
          <span
            className="w-1.5 h-1.5 rounded-full bg-success"
            style={{ animation: "ticker-blink 1.4s ease-in-out infinite" }}
          />
          {live ? "Live FX" : "FX"}
        </span>
        <div className="marquee">
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
