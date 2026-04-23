import { useEffect, useState } from "react";
import SiteHeader from "@/components/marketing/SiteHeader";
import SiteFooter from "@/components/marketing/SiteFooter";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const channels = [
  { icon: Mail, title: "Email", value: "support@tradeway.app" },
  { icon: MessageCircle, title: "Live chat", value: "24/7 in-app" },
  { icon: Clock, title: "Response time", value: "Under 4 hours" },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact — TradeWay";
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Message sent", description: "We'll reply within 4 hours." });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative py-20 lg:py-24 border-b border-border/60">
          <div className="absolute inset-0 editorial-grid opacity-30" />
          <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-primary/15 to-transparent" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-3">Contact</p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight leading-tight">
              We're <span className="text-signal">listening.</span>
            </h1>
            <p className="mt-5 text-muted-foreground">
              Questions about KYC, withdrawals, or referrals — we've got you.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-3">
              {channels.map((c) => (
                <div key={c.title} className="panel rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl panel-muted flex items-center justify-center">
                    <c.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.title}</p>
                    <p className="font-semibold">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={onSubmit} className="lg:col-span-3 panel rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required placeholder="Your name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="you@email.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required placeholder="What's this about?" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={5} placeholder="Tell us more…" />
              </div>
              <Button type="submit" disabled={submitting} className="gradient-signal text-primary-foreground border-0 hover:opacity-90 w-full sm:w-auto">
                {submitting ? "Sending…" : "Send message"}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
