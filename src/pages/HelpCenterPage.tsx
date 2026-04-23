import { motion } from "framer-motion";
import { ArrowLeft, HelpCircle, Headphones, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HelpCenterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-10">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/more")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Support</p>
          <h1 className="text-xl font-display font-extrabold">Help Center</h1>
        </div>
      </div>

      <div className="px-5 space-y-3">
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => navigate("/faq")}
          className="w-full panel rounded-[1.5rem] p-5 flex items-center gap-4 text-left"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-base font-display font-bold">FAQs</p>
            <p className="text-xs text-muted-foreground mt-1">Find answers to common questions about trading, capital, withdrawals and more.</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
          onClick={() => navigate("/support")}
          className="w-full panel rounded-[1.5rem] p-5 flex items-center gap-4 text-left"
        >
          <div className="w-14 h-14 rounded-2xl bg-success/10 border border-success/15 flex items-center justify-center">
            <Headphones className="w-6 h-6 text-success" />
          </div>
          <div className="flex-1">
            <p className="text-base font-display font-bold">Support</p>
            <p className="text-xs text-muted-foreground mt-1">Contact our team via email or phone. We're here to help during business hours.</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
        </motion.button>
      </div>
    </div>
  );
}
