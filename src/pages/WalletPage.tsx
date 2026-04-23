import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowRight, ArrowUpRight, Building2, Upload, Clock, ImageIcon, ArrowLeft, Wallet, CheckCircle2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const INR_RATE = 83.8;

const bankDetails = {
  accountName: "TradeWay Technologies Pvt Ltd",
  accountNumber: "9876543210001234",
  ifsc: "HDFC0001234",
  bankName: "HDFC Bank",
  branch: "Andheri West, Mumbai",
};

const mockTransactions = [
  { id: "1", type: "DEPOSIT", amount_usd: 597, amount_inr: 50000, status: "APPROVED", created_at: "2024-04-02" },
  { id: "2", type: "WITHDRAWAL", amount_usd: 100, amount_inr: 8380, status: "PENDING", created_at: "2024-03-31" },
];

type View = "main" | "addCapital" | "profitTransfer" | "withdraw" | "successCapital" | "successWithdraw" | "successProfit" | "addBank";

export default function WalletPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<View>("main");
  const [amount, setAmount] = useState("");
  const [utrNumber, setUtrNumber] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [profitAmount, setProfitAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawFrom, setWithdrawFrom] = useState<"capital" | "profit">("profit");
  const [bankAdded, setBankAdded] = useState(false);
  const [bankForm, setBankForm] = useState({ holderName: "", accountNo: "", ifsc: "", bankName: "" });
  const fileRef = useRef<HTMLInputElement>(null);
  const usdValue = amount ? (parseFloat(amount) / INR_RATE).toFixed(2) : "0.00";

  const CAPITAL = 1250;
  const PROFIT = 186.42;

  const handleSubmitCapital = () => {
    if (!amount || parseFloat(amount) < 50000) { toast.error("Minimum capital is ₹50,000"); return; }
    if (!utrNumber.trim()) { toast.error("Please enter UTR number"); return; }
    if (!screenshot) { toast.error("Please upload payment screenshot"); return; }
    setView("successCapital");
  };

  const handleProfitTransfer = () => {
    const val = parseFloat(profitAmount);
    if (!val || val <= 0 || val > PROFIT) { toast.error(`Enter valid amount (max $${PROFIT})`); return; }
    setView("successProfit");
  };

  const handleWithdraw = () => {
    if (!bankAdded) { setView("addBank"); return; }
    const max = withdrawFrom === "profit" ? PROFIT : CAPITAL;
    const val = parseFloat(withdrawAmount);
    if (!val || val <= 0 || val > max) { toast.error(`Enter valid amount (max $${max})`); return; }
    setView("successWithdraw");
  };

  const handleSaveBank = () => {
    if (!bankForm.holderName || !bankForm.accountNo || !bankForm.ifsc || !bankForm.bankName) {
      toast.error("Please fill all bank details"); return;
    }
    setBankAdded(true);
    toast.success("Bank account verified!");
    setView("withdraw");
  };

  if (view === "successCapital" || view === "successWithdraw" || view === "successProfit") {
    const config = {
      successCapital: { title: "Capital Request Submitted!", desc: `₹${parseFloat(amount).toLocaleString()} (~$${usdValue}) will reflect in your capital within 24 hours after verification.`, icon: "🏦" },
      successWithdraw: { title: "Withdrawal Submitted!", desc: `$${parseFloat(withdrawAmount).toFixed(2)} (~₹${(parseFloat(withdrawAmount) * INR_RATE).toLocaleString()}) will be processed within 24-48 hours to your bank account.`, icon: "💸" },
      successProfit: { title: "Profit Transferred!", desc: `$${parseFloat(profitAmount).toFixed(2)} has been moved from your profit to capital.`, icon: "✅" },
    }[view];

    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200 }} className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full bg-success/15 border-2 border-success/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <p className="text-4xl mb-4">{config.icon}</p>
          <h1 className="text-2xl font-display font-extrabold mb-3">{config.title}</h1>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">{config.desc}</p>
          <div className="panel rounded-2xl p-4 mb-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-primary" />
              <p className="text-xs font-semibold">What happens next?</p>
            </div>
            <ul className="text-[11px] text-muted-foreground space-y-1.5 ml-6">
              <li>• Your request is being reviewed</li>
              <li>• You'll receive a notification once processed</li>
              <li>• Check status anytime in the Wallet section</li>
            </ul>
          </div>
          <Button onClick={() => { setView("main"); setAmount(""); setUtrNumber(""); setScreenshot(null); setProfitAmount(""); setWithdrawAmount(""); }} className="w-full h-13 rounded-2xl gradient-signal text-primary-foreground font-display font-bold">
            Back to Wallet <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    );
  }

  if (view === "addBank") {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="px-6 pt-7 pb-4 flex items-center gap-3">
          <button onClick={() => setView("withdraw")} className="w-9 h-9 rounded-2xl panel-muted flex items-center justify-center"><ArrowLeft className="w-4 h-4" /></button>
          <div>
            <h1 className="text-lg font-display font-extrabold">Add Bank Account</h1>
            <p className="text-[10px] text-muted-foreground">Required for first withdrawal</p>
          </div>
        </div>
        <div className="px-5 space-y-3">
          <div className="flex items-center gap-2 panel rounded-2xl p-3">
            <CreditCard className="w-4 h-4 text-primary shrink-0" />
            <p className="text-[11px] text-muted-foreground">Bank account must be in <span className="text-foreground font-semibold">your name</span> as per KYC records.</p>
          </div>
          <div className="panel rounded-[1.5rem] p-4 space-y-4">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">Account holder name</label>
              <Input value={bankForm.holderName} onChange={(e) => setBankForm(p => ({ ...p, holderName: e.target.value }))} placeholder="As per bank records" className="h-12 rounded-xl border border-border/60 bg-secondary/30 text-sm font-semibold px-3" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">Account number</label>
              <Input value={bankForm.accountNo} onChange={(e) => setBankForm(p => ({ ...p, accountNo: e.target.value }))} placeholder="Enter account number" className="h-12 rounded-xl border border-border/60 bg-secondary/30 text-sm font-semibold px-3" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">IFSC code</label>
                <Input value={bankForm.ifsc} onChange={(e) => setBankForm(p => ({ ...p, ifsc: e.target.value.toUpperCase() }))} placeholder="XXXX0000000" className="h-12 rounded-xl border border-border/60 bg-secondary/30 text-sm font-semibold px-3" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">Bank name</label>
                <Input value={bankForm.bankName} onChange={(e) => setBankForm(p => ({ ...p, bankName: e.target.value }))} placeholder="Bank name" className="h-12 rounded-xl border border-border/60 bg-secondary/30 text-sm font-semibold px-3" />
              </div>
            </div>
          </div>
          <Button onClick={handleSaveBank} className="w-full h-13 rounded-2xl gradient-signal text-primary-foreground font-display font-bold" disabled={!bankForm.holderName || !bankForm.accountNo || !bankForm.ifsc || !bankForm.bankName}>
            Verify & Save Bank <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  if (view === "addCapital") {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="px-6 pt-7 pb-4 flex items-center gap-3">
          <button onClick={() => setView("main")} className="w-9 h-9 rounded-2xl panel-muted flex items-center justify-center"><ArrowLeft className="w-4 h-4" /></button>
          <div>
            <h1 className="text-lg font-display font-extrabold">Add Capital</h1>
            <p className="text-[10px] text-muted-foreground">Bank transfer only</p>
          </div>
        </div>
        <div className="px-5 space-y-3">
          <div className="panel rounded-[1.5rem] p-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">Amount in rupees</label>
            <div className="relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl font-display font-bold text-muted-foreground">₹</span>
              <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" className="h-14 border-0 bg-transparent pl-8 pr-0 text-3xl font-display font-extrabold shadow-none focus-visible:ring-0" />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">≈ ${usdValue}</span>
              <span className="text-primary font-semibold">Minimum ₹50,000</span>
            </div>
          </div>
          <div className="panel rounded-[1.5rem] p-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold block mb-3">Transfer to this account</label>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Account name</span><span className="font-semibold text-right text-xs max-w-[55%]">{bankDetails.accountName}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Account no.</span><span className="font-semibold">{bankDetails.accountNumber}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">IFSC</span><span className="font-semibold">{bankDetails.ifsc}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Bank</span><span className="font-semibold">{bankDetails.bankName}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Branch</span><span className="font-semibold">{bankDetails.branch}</span></div>
            </div>
          </div>
          <div className="panel rounded-[1.5rem] p-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">UTR / Transaction Reference</label>
            <Input type="text" value={utrNumber} onChange={(e) => setUtrNumber(e.target.value)} placeholder="Enter UTR number" className="h-12 rounded-xl border border-border/60 bg-secondary/30 text-sm font-semibold px-3" />
          </div>
          <div className="panel rounded-[1.5rem] p-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-3">Payment screenshot</label>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files?.[0]) { setScreenshot(e.target.files[0]); toast.success("Screenshot attached"); } }} />
            <button onClick={() => fileRef.current?.click()} className="w-full h-20 rounded-2xl border-2 border-dashed border-border/60 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary/40 transition-colors">
              {screenshot ? (<><ImageIcon className="w-5 h-5 text-success" /><span className="text-xs text-success font-semibold">{screenshot.name}</span></>) : (<><Upload className="w-5 h-5" /><span className="text-xs">Tap to upload screenshot</span></>)}
            </button>
          </div>
          <div className="flex items-center gap-2 panel-muted rounded-2xl p-3">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <p className="text-[11px] text-muted-foreground">Capital will reflect within <span className="text-foreground font-semibold">24 hours</span> after verification.</p>
          </div>
          <Button onClick={handleSubmitCapital} className="w-full h-13 rounded-2xl gradient-signal text-primary-foreground font-display font-bold" disabled={!amount || parseFloat(amount) < 50000}>
            Submit request <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  if (view === "profitTransfer") {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="px-6 pt-7 pb-4 flex items-center gap-3">
          <button onClick={() => setView("main")} className="w-9 h-9 rounded-2xl panel-muted flex items-center justify-center"><ArrowLeft className="w-4 h-4" /></button>
          <div>
            <h1 className="text-lg font-display font-extrabold">Profit → Capital</h1>
            <p className="text-[10px] text-muted-foreground">Transfer profit to your capital</p>
          </div>
        </div>
        <div className="px-5 space-y-4">
          <div className="panel rounded-[1.9rem] p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">Transferable profit</p>
            <p className="text-4xl font-display font-extrabold text-success">${PROFIT.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">≈ ₹{Math.round(PROFIT * INR_RATE).toLocaleString()}</p>
          </div>
          <div className="panel rounded-[1.5rem] p-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">Amount to transfer ($)</label>
            <div className="relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl font-display font-bold text-muted-foreground">$</span>
              <Input type="number" value={profitAmount} onChange={(e) => setProfitAmount(e.target.value)} placeholder="0" className="h-14 border-0 bg-transparent pl-8 pr-0 text-3xl font-display font-extrabold shadow-none focus-visible:ring-0" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">≈ ₹{profitAmount ? Math.round(parseFloat(profitAmount) * INR_RATE).toLocaleString() : "0"}</p>
          </div>
          <Button onClick={handleProfitTransfer} className="w-full h-13 rounded-2xl gradient-signal text-primary-foreground font-display font-bold" disabled={!profitAmount || parseFloat(profitAmount) <= 0 || parseFloat(profitAmount) > PROFIT}>
            Transfer to capital <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  if (view === "withdraw") {
    const max = withdrawFrom === "profit" ? PROFIT : CAPITAL;
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="px-6 pt-7 pb-4 flex items-center gap-3">
          <button onClick={() => setView("main")} className="w-9 h-9 rounded-2xl panel-muted flex items-center justify-center"><ArrowLeft className="w-4 h-4" /></button>
          <div>
            <h1 className="text-lg font-display font-extrabold">Withdraw</h1>
            <p className="text-[10px] text-muted-foreground">Request withdrawal to your bank</p>
          </div>
        </div>
        <div className="px-5 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => setWithdrawFrom("profit")} className={`h-12 rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors ${withdrawFrom === "profit" ? "gradient-signal text-primary-foreground" : "panel-muted text-muted-foreground"}`}>
              Profit (${PROFIT.toFixed(2)})
            </button>
            <button onClick={() => setWithdrawFrom("capital")} className={`h-12 rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors ${withdrawFrom === "capital" ? "gradient-signal text-primary-foreground" : "panel-muted text-muted-foreground"}`}>
              Capital (${CAPITAL.toFixed(2)})
            </button>
          </div>
          <div className="panel rounded-[1.5rem] p-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold block mb-2">Withdraw amount ($)</label>
            <div className="relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl font-display font-bold text-muted-foreground">$</span>
              <Input type="number" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} placeholder="0" className="h-14 border-0 bg-transparent pl-8 pr-0 text-3xl font-display font-extrabold shadow-none focus-visible:ring-0" />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">≈ ₹{withdrawAmount ? Math.round(parseFloat(withdrawAmount) * INR_RATE).toLocaleString() : "0"}</span>
              <span className="text-primary font-semibold">Max ${max.toFixed(2)}</span>
            </div>
          </div>
          {bankAdded && (
            <div className="panel rounded-2xl p-3 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold truncate">{bankForm.holderName}</p>
                <p className="text-[10px] text-muted-foreground">{bankForm.bankName} • ****{bankForm.accountNo.slice(-4)}</p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2 panel-muted rounded-2xl p-3">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <p className="text-[11px] text-muted-foreground">Withdrawal will be processed within <span className="text-foreground font-semibold">24-48 hours</span>.</p>
          </div>
          <Button onClick={handleWithdraw} className="w-full h-13 rounded-2xl gradient-signal text-primary-foreground font-display font-bold" disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0 || parseFloat(withdrawAmount) > max}>
            {bankAdded ? "Submit withdrawal" : "Add bank & withdraw"} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-7 pb-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Funding desk</p>
        <h1 className="text-2xl font-display font-extrabold mt-1">Wallet</h1>
      </div>

      <div className="px-5 space-y-4">
        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="panel rounded-[1.9rem] p-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">Capital</p>
              <p className="text-3xl font-display font-extrabold">${CAPITAL.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground mt-1">≈ ₹{Math.round(CAPITAL * INR_RATE).toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">Profit</p>
              <p className="text-3xl font-display font-extrabold text-success">${PROFIT.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground mt-1">≈ ₹{Math.round(PROFIT * INR_RATE).toLocaleString()}</p>
            </div>
          </div>
          <Button onClick={() => setView("profitTransfer")} variant="outline" className="w-full mt-4 h-11 rounded-2xl border-success/30 text-success font-display font-bold hover:bg-success/10">
            Add profit to capital <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.section>

        <div className="grid grid-cols-2 gap-3">
          <Button onClick={() => setView("addCapital")} className="h-14 rounded-2xl gradient-signal text-primary-foreground font-display font-bold flex items-center gap-2">
            <Building2 className="w-4 h-4" /> Add Capital
          </Button>
          <Button onClick={() => setView("withdraw")} variant="outline" className="h-14 rounded-2xl border-border font-display font-bold flex items-center gap-2">
            <Wallet className="w-4 h-4" /> Withdraw
          </Button>
        </div>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }} className="panel rounded-[1.9rem] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-display font-bold">Ledger</h2>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Recent activity</span>
          </div>

          <div className="space-y-3">
            {mockTransactions.map((txn) => (
              <div key={txn.id} className="flex items-center gap-3 border-b border-border/40 pb-3 last:border-0 last:pb-0">
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center ${txn.type === "WITHDRAWAL" ? "bg-destructive/12" : "bg-success/12"}`}>
                  {txn.type === "WITHDRAWAL" ? <ArrowUpRight className="w-4 h-4 text-destructive" /> : <ArrowDownLeft className="w-4 h-4 text-success" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{txn.type === "WITHDRAWAL" ? "Withdrawal" : "Capital Added"}</p>
                  <p className="text-[11px] text-muted-foreground">{txn.status} • {new Date(txn.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-display font-bold ${txn.type === "WITHDRAWAL" ? "text-destructive" : "text-success"}`}>
                    {txn.type === "WITHDRAWAL" ? "-" : "+"}${txn.amount_usd.toFixed(2)}
                  </p>
                  <p className="text-[11px] text-muted-foreground">₹{txn.amount_inr.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <BottomNav />
    </div>
  );
}
