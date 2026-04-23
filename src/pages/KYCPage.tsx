import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Upload, CheckCircle2, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function KYCPage() {
  const navigate = useNavigate();
  const [front, setFront] = useState<File | null>(null);
  const [back, setBack] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!front || !back) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="px-6 pt-6 flex items-center justify-between">
          <button onClick={() => navigate("/more")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">KYC</span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-center max-w-sm w-full"
          >
            <div className="w-20 h-20 rounded-full bg-success/15 border-2 border-success/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-2xl font-display font-extrabold mb-3">KYC Submitted!</h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Your Aadhaar documents have been submitted successfully. Our team will verify your identity shortly.
            </p>

            <div className="panel rounded-[1.7rem] p-5 text-left mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <p className="text-xs font-display font-bold">What happens next?</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/12 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-display font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Document review</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Our team will verify your Aadhaar details</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/12 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-display font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Verification complete</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Usually takes 2–4 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/12 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-display font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">You'll be notified</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Status will reflect in your menu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-muted rounded-2xl p-3 flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-amber-500/12 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-[11px] text-muted-foreground text-left">Estimated verification time: <span className="text-foreground font-semibold">2–4 hours</span></p>
            </div>

            <Button
              onClick={() => navigate("/more")}
              className="w-full h-14 rounded-2xl gradient-signal text-primary-foreground font-display font-bold text-base"
            >
              Back to Menu
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 pt-6 flex items-center justify-between">
        <button onClick={() => navigate("/more")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">KYC</span>
      </div>

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="flex-1 px-6 pt-6 pb-6">
        <section className="panel-strong rounded-[2rem] p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-primary/14 border border-primary/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Identity verification</p>
              <h1 className="text-xl font-display font-extrabold mt-1">Upload Aadhaar</h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">Front and back are required. Documents stay encrypted and usually review within 2–4 hours.</p>
        </section>

        <div className="space-y-4 mt-5">
          <UploadCard step="01" label="Aadhaar front" file={front} onFile={setFront} />
          <UploadCard step="02" label="Aadhaar back" file={back} onFile={setBack} />
        </div>

        <div className="panel rounded-[1.7rem] p-4 mt-5 space-y-2">
          <p className="text-[11px] text-muted-foreground">• Only Aadhaar front and back are accepted.</p>
          <p className="text-[11px] text-muted-foreground">• Make sure text is readable and corners are visible.</p>
          <p className="text-[11px] text-muted-foreground">• Verification status will reflect in your menu.</p>
        </div>
      </motion.div>

      <div className="px-6 pb-8 pt-2">
        <Button
          className="w-full h-14 rounded-2xl gradient-signal text-primary-foreground font-display font-bold text-base"
          disabled={!front || !back}
          onClick={handleSubmit}
        >
          Submit verification
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function UploadCard({ step, label, file, onFile }: { step: string; label: string; file: File | null; onFile: (file: File) => void }) {
  return (
    <label className="panel rounded-[1.8rem] p-5 flex items-center gap-4 cursor-pointer">
      <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
      <div className="w-14 h-14 rounded-[1.4rem] panel-muted flex items-center justify-center text-sm font-display font-extrabold">
        {file ? <Check className="w-5 h-5 text-success" /> : step}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-display font-bold">{label}</p>
        <p className="text-[11px] text-muted-foreground mt-1">{file ? file.name : "Tap to upload JPG or PNG"}</p>
      </div>
      <div className="w-10 h-10 rounded-2xl bg-primary/12 border border-primary/20 flex items-center justify-center">
        <Upload className="w-4 h-4 text-primary" />
      </div>
    </label>
  );
}
