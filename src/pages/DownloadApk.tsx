import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, Loader2 } from "lucide-react";
import { APK_SOURCE_URL, APK_FILENAME } from "@/lib/appDownload";
import Logo from "@/components/Logo";

export default function DownloadApk() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = APK_SOURCE_URL;
    }, 600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="panel-strong rounded-3xl p-10 max-w-md w-full text-center relative overflow-hidden">
        <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative">
          <div className="mx-auto flex items-center justify-center mb-6">
            <Logo size="lg" />
          </div>

          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Loader2 className="animate-spin" size={22} />
          </div>

          <h1 className="font-display font-extrabold text-2xl tracking-tight">
            Starting your download…
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">
            If it doesn&apos;t start automatically, tap the button below.
          </p>

          <a
            href={APK_SOURCE_URL}
            download={APK_FILENAME}
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-gold transition hover:opacity-90"
          >
            <Download size={17} />
            Download APK now
          </a>

          <p className="mt-3 text-xs text-muted-foreground">
            File: <span className="text-foreground font-medium">{APK_FILENAME}</span>
          </p>

          <Link
            to="/"
            className="mt-6 inline-block text-sm text-primary hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
