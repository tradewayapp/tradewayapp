import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", age: "", gender: "", state: "", district: "", referral: "" });
  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    if (!form.name) return;
    toast.success("Profile saved!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 pt-6 flex items-center justify-between">
        <button onClick={() => navigate("/otp")} className="w-10 h-10 rounded-2xl panel-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">Step 3 / 3</span>
      </div>

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="flex-1 overflow-y-auto px-6 pt-6 pb-6">
        <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">Profile setup</p>
        <h1 className="text-[2.4rem] leading-[1] font-display font-extrabold">Tell us who you are.</h1>
        <p className="mt-4 text-sm text-muted-foreground max-w-[300px]">
          We use this information to personalize your dashboard and complete your account profile.
        </p>

        <div className="space-y-4 mt-8">
          <section className="panel rounded-[1.7rem] p-4 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold mb-3">Identity</p>
              <Field label="Full name" placeholder="Enter your name" value={form.name} onChange={(v) => update("name", v)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Age" placeholder="25" value={form.age} onChange={(v) => update("age", v)} type="number" />
              <div>
                <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold block mb-2">Gender</label>
                <select
                  value={form.gender}
                  onChange={(e) => update("gender", e.target.value)}
                  className="w-full h-12 rounded-2xl panel-muted px-4 bg-transparent text-sm border-0 focus:outline-none focus:ring-1 focus:ring-primary/30"
                >
                  <option value="" className="bg-card">Select</option>
                  <option value="male" className="bg-card">Male</option>
                  <option value="female" className="bg-card">Female</option>
                  <option value="other" className="bg-card">Other</option>
                </select>
              </div>
            </div>
          </section>

          <section className="panel rounded-[1.7rem] p-4 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">Location</p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="State" placeholder="State" value={form.state} onChange={(v) => update("state", v)} />
              <Field label="District" placeholder="District" value={form.district} onChange={(v) => update("district", v)} />
            </div>
          </section>

          <section className="panel-strong rounded-[1.7rem] p-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">Referral code</p>
            <Input
              placeholder="e.g. TW8X4K2M"
              value={form.referral}
              onChange={(e) => update("referral", e.target.value.toUpperCase())}
              className="h-12 rounded-2xl panel-muted border-0 text-base font-display font-bold tracking-[0.18em] placeholder:tracking-normal placeholder:font-body"
            />
          </section>
        </div>
      </motion.div>

      <div className="px-6 pb-8 pt-2">
        <Button
          className="w-full h-14 rounded-2xl gradient-signal text-primary-foreground font-display font-bold text-base"
          disabled={!form.name}
          onClick={handleSubmit}
        >
          Start Trading
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function Field({ label, placeholder, value, onChange, type = "text" }: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold block mb-2">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-2xl panel-muted border-0 px-4 text-sm"
      />
    </div>
  );
}
