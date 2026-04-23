const stats = [
  { value: "₹120Cr+", label: "Capital managed" },
  { value: "1,200+", label: "Daily settlements" },
  { value: "99.97%", label: "Engine uptime" },
  { value: "50+", label: "Forex pairs" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-center text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-6">
          Trusted by thousands of traders across India
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-extrabold text-2xl sm:text-3xl text-signal">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
