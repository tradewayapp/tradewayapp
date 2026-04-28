import { useEffect } from "react";
import { Mail, Shield, Clock, Database } from "lucide-react";
import Logo from "@/components/Logo";

const SUPPORT_EMAIL = "tradewayapp@gmail.com";

export default function DeleteAccount() {
  useEffect(() => {
    document.title = "Delete your TradeWay account";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Request deletion of your TradeWay account and associated data."
      );
    }
  }, []);

  const subject = encodeURIComponent("Account Deletion Request — TradeWay");
  const body = encodeURIComponent(
    `Hello TradeWay Support,\n\nI would like to permanently delete my TradeWay account and all associated data.\n\nRegistered email / phone: \nReason (optional): \n\nThank you.`
  );
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;

  const deletedItems = [
    "Profile information (name, email, phone, avatar)",
    "KYC documents and verification records",
    "Wallet balance, transaction & withdrawal history",
    "Trading history, signals received, and AI guide activity",
    "Referral data and referral earnings tied to your account",
    "Notifications, support tickets, and saved preferences",
  ];

  const retainedItems = [
    "Anonymised transaction logs required by financial regulations (retained up to 5 years as per Indian law)",
    "Records required to resolve disputes or fraud investigations",
  ];

  return (
    <main className="min-h-screen bg-background editorial-grid relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 sm:py-16">
        <div className="flex justify-center mb-8">
          <Logo size="md" />
        </div>

        <header className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold mb-3">
            Account & Data Deletion
          </p>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Delete your TradeWay account
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            You can request permanent deletion of your TradeWay account and all
            personal data we hold about you. This action cannot be undone.
          </p>
        </header>

        <section className="panel rounded-2xl p-6 sm:p-7 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <Mail size={20} className="text-primary mt-0.5" />
            <div>
              <h2 className="font-display font-bold text-lg">
                How to request deletion
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Send us an email from the address registered with your TradeWay
                account. We will verify your identity and process the request.
              </p>
            </div>
          </div>

          <a
            href={mailto}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold px-6 py-3 text-sm hover:opacity-90 transition"
          >
            <Mail size={16} />
            Email {SUPPORT_EMAIL}
          </a>

          <p className="mt-4 text-xs text-muted-foreground">
            Or copy this address:{" "}
            <span className="text-foreground font-medium">{SUPPORT_EMAIL}</span>
          </p>
        </section>

        <section className="panel rounded-2xl p-6 sm:p-7 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <Database size={20} className="text-primary mt-0.5" />
            <h2 className="font-display font-bold text-lg">
              What gets deleted
            </h2>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {deletedItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel rounded-2xl p-6 sm:p-7 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <Shield size={20} className="text-primary mt-0.5" />
            <h2 className="font-display font-bold text-lg">
              What may be retained
            </h2>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {retainedItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel rounded-2xl p-6 sm:p-7 mb-6">
          <div className="flex items-start gap-3 mb-2">
            <Clock size={20} className="text-primary mt-0.5" />
            <h2 className="font-display font-bold text-lg">Timeline</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Deletion requests are reviewed and processed within{" "}
            <span className="text-foreground font-medium">30 days</span> of
            verification. You will receive a confirmation email once your
            account and associated data have been removed.
          </p>
        </section>

        <footer className="text-center mt-10">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} TradeWay
          </p>
        </footer>
      </div>
    </main>
  );
}
