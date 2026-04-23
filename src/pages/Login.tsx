import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (phone.length !== 10) return;
    toast.success("OTP sent!");
    navigate("/otp", { state: { phone } });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 pt-6 flex items-center justify-between">
        <button onClick={() => navigate("/onboarding")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">Access</span>
      </div>

      <div className="flex-1 px-6 pt-10 pb-6 flex flex-col justify-between">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">Welcome</p>
          <h1 className="text-[2.6rem] leading-[1.02] font-display font-extrabold max-w-[300px]">
            Step into
            <br />
            profitable trading.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-[290px]">
            Welcome to the world of AI-powered forex trading. Enter your number to begin your journey towards smarter, automated profits.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="panel-strong rounded-[2rem] p-5">
          <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold block mb-3">Mobile number</label>
          <div className="flex gap-2 mb-3">
            <div className="w-16 h-14 rounded-2xl panel-muted flex items-center justify-center font-display font-bold text-sm">
              +91
            </div>
            <Input
              type="tel"
              placeholder="00000 00000"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              className="h-14 flex-1 rounded-2xl panel-muted border-0 px-4 text-base font-semibold tracking-[0.12em] placeholder:text-muted-foreground/45 focus-visible:ring-primary/30"
              maxLength={10}
            />
          </div>
          <p className="text-xs text-muted-foreground mb-5">Use the number linked to your TradeWay account.</p>
          <Button
            className="w-full h-13 rounded-2xl gradient-signal text-primary-foreground font-display font-bold text-base"
            disabled={phone.length !== 10}
            onClick={handleSendOTP}
          >
            Send OTP
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
