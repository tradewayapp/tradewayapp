import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolved, toggle } = useTheme();
  const isDark = resolved === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`relative inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/70 bg-background/60 backdrop-blur hover:bg-secondary/70 hover:border-primary/40 transition-all ${className}`}
    >
      <Sun
        size={15}
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100 text-primary"
        }`}
      />
      <Moon
        size={15}
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100 text-primary" : "opacity-0 rotate-90 scale-50"
        }`}
      />
    </button>
  );
}
