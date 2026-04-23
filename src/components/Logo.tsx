import logoSm from "@/assets/logo-sm.png";
import logoMd from "@/assets/logo-md.png";
import logoLg from "@/assets/logo-lg.png";
import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  size?: LogoSize;
  showWordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
}

const sizeMap: Record<LogoSize, { src: string; px: number }> = {
  sm: { src: logoSm, px: 32 },
  md: { src: logoMd, px: 40 },
  lg: { src: logoLg, px: 112 },
};

export default function Logo({
  size = "sm",
  showWordmark = false,
  className,
  wordmarkClassName,
}: LogoProps) {
  const { src, px } = sizeMap[size];

  const img = (
    <img
      src={src}
      width={px}
      height={px}
      alt="TradeWay"
      className={cn("block select-none", className)}
      draggable={false}
    />
  );

  if (!showWordmark) return img;

  return (
    <span className="inline-flex items-center gap-2">
      {img}
      <span
        className={cn(
          "font-display font-extrabold tracking-tight text-lg",
          wordmarkClassName
        )}
      >
        TradeWay
      </span>
    </span>
  );
}
