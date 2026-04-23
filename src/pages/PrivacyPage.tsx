import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Server, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sections = [
  { icon: <Lock className="w-5 h-5" />, title: "Data Encryption", content: "All your personal and financial data is encrypted using AES-256 encryption both in transit and at rest. We use SSL/TLS protocols for all communications between your device and our servers." },
  { icon: <Eye className="w-5 h-5" />, title: "No Third-Party Sharing", content: "We never sell, rent, or share your personal information with third parties for marketing purposes. Your data is used solely for operating the TradeWay platform and improving our services." },
  { icon: <Server className="w-5 h-5" />, title: "Secure Infrastructure", content: "Our servers are hosted in Tier-4 data centers with 24/7 monitoring, firewalls, and intrusion detection systems. Regular security audits and penetration tests are conducted to ensure maximum protection." },
  { icon: <Shield className="w-5 h-5" />, title: "KYC Data Protection", content: "Your Aadhaar card images are stored securely and used only for identity verification purposes as required by regulations. Access to KYC data is restricted to authorized verification personnel only." },
];

export default function PrivacyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-10">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/more")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Legal</p>
          <h1 className="text-xl font-display font-extrabold">Privacy Policy</h1>
        </div>
      </div>

      <div className="px-5 space-y-3">
        {sections.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="panel rounded-[1.5rem] p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">{s.icon}</div>
              <h2 className="text-sm font-display font-bold">{s.title}</h2>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
