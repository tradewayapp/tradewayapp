import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SUPABASE_APK_URL, APK_FILENAME } from "@/lib/appDownload";

type Status = "preparing" | "downloading" | "done" | "error";

export default function DownloadApk() {
  const [status, setStatus] = useState<Status>("preparing");
  const [progress, setProgress] = useState(0);
  const [sizeMb, setSizeMb] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | null = null;

    (async () => {
      try {
        setStatus("downloading");
        const res = await fetch(SUPABASE_APK_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const total = Number(res.headers.get("content-length")) || 0;
        if (total) setSizeMb(Math.round(total / (1024 * 1024)));

        const reader = res.body?.getReader();
        const chunks: Uint8Array[] = [];
        let received = 0;

        if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            if (value) {
              chunks.push(value);
              received += value.length;
              if (total) setProgress(Math.round((received / total) * 100));
            }
          }
        }

        if (cancelled) return;

        const blob = new Blob(chunks as BlobPart[], { type: "application/vnd.android.package-archive" });
        objectUrl = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = objectUrl;
        a.download = APK_FILENAME;
        document.body.appendChild(a);
        a.click();
        a.remove();

        setStatus("done");
      } catch (e) {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="panel-strong rounded-3xl p-10 max-w-md w-full text-center relative overflow-hidden">
        <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative">
          <div className="w-14 h-14 rounded-2xl gradient-signal mx-auto flex items-center justify-center mb-6">
            <svg width="26" height="26" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M9 28L17 12L23 20L31 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 12H31V15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {status !== "done" && status !== "error" && (
            <>
              <h1 className="font-display font-extrabold text-2xl tracking-tight">
                Preparing your download…
              </h1>
              <p className="mt-2 text-muted-foreground text-sm">
                TradeWay APK{sizeMb ? ` · ${sizeMb} MB` : ""}
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-primary">
                <Loader2 className="animate-spin" size={18} />
                <span className="text-sm tabular-nums">
                  {progress > 0 ? `${progress}%` : "Connecting…"}
                </span>
              </div>
              {progress > 0 && (
                <div className="mt-4 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full gradient-signal transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </>
          )}

          {status === "done" && (
            <>
              <CheckCircle2 className="mx-auto text-success" size={32} />
              <h1 className="mt-3 font-display font-extrabold text-2xl tracking-tight">
                Download started
              </h1>
              <p className="mt-2 text-muted-foreground text-sm">
                Check your downloads folder for <span className="text-foreground font-medium">{APK_FILENAME}</span>.
              </p>
              <Link
                to="/"
                className="mt-6 inline-block text-sm text-primary hover:underline"
              >
                ← Back to home
              </Link>
            </>
          )}

          {status === "error" && (
            <>
              <AlertCircle className="mx-auto text-destructive" size={32} />
              <h1 className="mt-3 font-display font-extrabold text-2xl tracking-tight">
                Download failed
              </h1>
              <p className="mt-2 text-muted-foreground text-sm">
                Something went wrong. Try again or use the direct link below.
              </p>
              <a
                href={SUPABASE_APK_URL}
                download={APK_FILENAME}
                className="mt-6 inline-block text-sm text-primary hover:underline"
              >
                Direct download link
              </a>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
