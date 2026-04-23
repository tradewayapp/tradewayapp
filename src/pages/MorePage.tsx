import { motion } from "framer-motion";
import { BookOpen, LogOut, ShieldCheck, UserRound, LifeBuoy, Lock, FileText, Bot, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { toast } from "sonner";

export default function MorePage() {
  const navigate = useNavigate();
  const profileName = "Rahul Sharma";
  const initials = "RS";

  const handleLogout = () => {
    toast.success("Logged out");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-7 pb-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Menu</p>
        <h1 className="text-2xl font-display font-extrabold mt-1">More</h1>
      </div>

      <div className="px-5 space-y-4">
        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="panel-strong rounded-[2rem] p-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-[1.6rem] gradient-signal flex items-center justify-center">
              <span className="text-2xl font-display font-extrabold text-primary-foreground">{initials}</span>
            </div>
            <div className="flex-1">
              <p className="text-xl font-display font-bold">{profileName}</p>
              <p className="text-xs text-muted-foreground mt-1">+91 98765 43210</p>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/12 border border-success/20">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-success font-semibold">Verified</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="panel rounded-[1.9rem] overflow-hidden">
          <div className="px-5 pt-4 pb-2">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">Account</p>
          </div>
          <MenuItem icon={<UserRound className="w-4.5 h-4.5" />} title="Profile" desc="Edit personal details" onClick={() => navigate("/profile-setup")} />
          <MenuItem icon={<ShieldCheck className="w-4.5 h-4.5" />} title="KYC" desc="Aadhaar verification" onClick={() => navigate("/kyc")} />
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="panel rounded-[1.9rem] overflow-hidden">
          <div className="px-5 pt-4 pb-2">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">Resources</p>
          </div>
          <MenuItem icon={<BookOpen className="w-4.5 h-4.5" />} title="Learn" desc="How TradeWay works" onClick={() => navigate("/learn")} />
          <MenuItem icon={<Bot className="w-4.5 h-4.5" />} title="AI Guide" desc="How trading works" onClick={() => navigate("/ai-guide")} />
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.11 }} className="panel rounded-[1.9rem] overflow-hidden">
          <div className="px-5 pt-4 pb-2">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">Support & legal</p>
          </div>
          <MenuItem icon={<LifeBuoy className="w-4.5 h-4.5" />} title="Help Center" desc="FAQs and support" onClick={() => navigate("/help-center")} />
          <MenuItem icon={<Lock className="w-4.5 h-4.5" />} title="Privacy" desc="Security and policy" onClick={() => navigate("/privacy")} />
          <MenuItem icon={<FileText className="w-4.5 h-4.5" />} title="Terms" desc="Platform conditions" onClick={() => navigate("/terms")} />
        </motion.section>

        <motion.button
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          onClick={handleLogout}
          className="w-full panel rounded-[1.9rem] p-4 flex items-center gap-3 text-destructive"
        >
          <div className="w-10 h-10 rounded-2xl bg-destructive/12 flex items-center justify-center">
            <LogOut className="w-4 h-4 text-destructive" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold">Log out</p>
            <p className="text-[11px] text-muted-foreground mt-1">Exit this device session</p>
          </div>
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
}

function MenuItem({ icon, title, desc, onClick }: { icon: React.ReactNode; title: string; desc: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-secondary/40 transition-colors">
      <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">{desc}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
    </button>
  );
}
