import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const location = useLocation();
  const phone = (location.state as { phone?: string } | null)?.phone || "";

  useEffect(() => {
    if (timer > 0) {
      const id = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(id);
    }
  }, [timer]);

  const handleVerify = () => {
    if (otp.length !== 4) return;
    toast.success("Verified!");
    navigate("/profile-setup");
  };

  const handleResend = () => {
    setTimer(30);
    toast.success("OTP resent!");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 pt-6 flex items-center justify-between">
        <button onClick={() => navigate("/login")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">OTP</span>
      </div>

      <div className="flex-1 px-6 pt-10 pb-8 flex flex-col justify-between">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">Verification</p>
          <h1 className="text-[2.5rem] leading-[1] font-display font-extrabold">OTP in the code.</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-[280px]">
            We sent a 4-digit access code to <span className="text-foreground font-semibold">+91 {phone}</span>.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="panel rounded-[2rem] p-6">
          <InputOTP maxLength={4} value={otp} onChange={setOtp}>
            <InputOTPGroup className="w-full justify-center gap-3">
              {[0, 1, 2, 3].map((idx) => (
                <InputOTPSlot
                  key={idx}
                  index={idx}
                  className="w-14 h-16 rounded-2xl panel-muted border-0 text-2xl font-display font-extrabold"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          <div className="mt-6 text-center">
            {timer > 0 ? (
              <p className="text-sm text-muted-foreground">Resend in <span className="text-foreground font-semibold">{timer}s</span></p>
            ) : (
              <button onClick={handleResend} className="text-sm font-semibold text-primary hover:underline">
                Resend code
              </button>
            )}
          </div>
        </motion.div>

        <Button
          className="w-full h-14 rounded-2xl gradient-signal text-primary-foreground font-display font-bold text-base"
          disabled={otp.length !== 4}
          onClick={handleVerify}
        >
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
