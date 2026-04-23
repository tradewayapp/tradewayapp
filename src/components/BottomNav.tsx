import { LayoutDashboard, Banknote, Send, Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Banknote, label: "Funds", path: "/wallet" },
  { icon: Send, label: "Refer", path: "/refer" },
  { icon: Menu, label: "Menu", path: "/more" },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 safe-bottom pointer-events-none">
      <div className="mx-4 mb-4 pointer-events-auto">
        <div className="panel rounded-[1.7rem] p-2 flex items-center gap-2">
          {tabs.map(({ icon: Icon, label, path }) => {
            const active = location.pathname === path;

            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                aria-label={label}
                className={`h-12 rounded-2xl transition-all duration-300 flex items-center justify-center ${
                  active
                    ? "flex-1 gradient-signal text-primary-foreground px-4 gap-2"
                    : "w-12 panel-muted text-muted-foreground"
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={2.2} />
                {active && <span className="text-[11px] font-bold tracking-wide uppercase">{label}</span>}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
