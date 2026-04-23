import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Clock, Copy, PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SupportPage() {
  const navigate = useNavigate();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const handleCall = (number: string) => {
    window.open(`tel:${number}`, "_self");
  };

  return (
    <div className="min-h-screen bg-background pb-10">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Help center</p>
          <h1 className="text-xl font-display font-extrabold">Support</h1>
        </div>
      </div>

      <div className="px-5 space-y-3">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="panel rounded-[1.5rem] p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-success/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-success" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Call us</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Available during business hours</p>
            </div>
          </div>
          <div className="flex items-center justify-between panel-muted rounded-xl px-4 py-3">
            <p className="text-sm font-display font-bold">+91 98765 43210</p>
            <button onClick={() => handleCall("+919876543210")} className="w-9 h-9 rounded-xl bg-success/12 flex items-center justify-center hover:bg-success/20 transition-colors">
              <PhoneCall className="w-4 h-4 text-success" />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="panel rounded-[1.5rem] p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Email support</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">We respond within 24 hours</p>
            </div>
          </div>
          <div className="flex items-center justify-between panel-muted rounded-xl px-4 py-3">
            <p className="text-sm font-display font-bold text-primary">support@tradeway.in</p>
            <button onClick={() => copyToClipboard("support@tradeway.in")} className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Copy className="w-4 h-4 text-primary" />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="panel rounded-[1.5rem] p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold">Business hours</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Indian Standard Time</p>
            </div>
          </div>
          <div className="panel-muted rounded-xl px-4 py-3 space-y-1.5">
            <p className="text-sm font-semibold">Mon – Sat: 10:00 AM – 7:00 PM</p>
            <p className="text-[11px] text-muted-foreground">Sunday & public holidays closed</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="panel-muted rounded-2xl p-4">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            For urgent queries, please call during business hours. For general inquiries, email us and we'll get back within 24 hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
