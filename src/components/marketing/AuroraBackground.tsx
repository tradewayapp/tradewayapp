interface Props {
  variant?: "hero" | "subtle" | "intense";
  className?: string;
}

export default function AuroraBackground({ variant = "hero", className = "" }: Props) {
  const config = {
    hero: [
      { color: "hsl(var(--primary) / 0.45)", size: 520, top: "-10%", left: "-10%", delay: "0s" },
      { color: "hsl(var(--accent) / 0.40)", size: 460, top: "20%", right: "-15%", delay: "-6s" },
      { color: "hsl(var(--primary-glow) / 0.30)", size: 380, bottom: "-20%", left: "30%", delay: "-12s" },
    ],
    subtle: [
      { color: "hsl(var(--primary) / 0.20)", size: 400, top: "10%", left: "20%", delay: "0s" },
      { color: "hsl(var(--accent) / 0.18)", size: 360, bottom: "10%", right: "10%", delay: "-8s" },
    ],
    intense: [
      { color: "hsl(var(--primary) / 0.55)", size: 600, top: "0%", left: "0%", delay: "0s" },
      { color: "hsl(var(--accent) / 0.50)", size: 540, top: "10%", right: "0%", delay: "-5s" },
      { color: "hsl(var(--primary-glow) / 0.40)", size: 460, bottom: "0%", left: "40%", delay: "-10s" },
    ],
  }[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {config.map((b, i) => (
        <div
          key={i}
          className="aurora-blob"
          style={{
            background: b.color,
            width: b.size,
            height: b.size,
            top: b.top,
            left: (b as any).left,
            right: (b as any).right,
            bottom: (b as any).bottom,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
