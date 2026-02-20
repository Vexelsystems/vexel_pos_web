"use client";

import Link from "next/link";
import { XCircle, RefreshCcw, Home } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function FailedContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let title = "Verification Failed";
  let message =
    "We couldn't verify your email. The link might be invalid or expired.";

  if (error === "expired") {
    title = "Link Expired";
    message =
      "Your verification link has expired. Please request a new one from the portal.";
  } else if (error === "invalid_token") {
    title = "Invalid Link";
    message =
      "This verification link is invalid. Please make sure you used the correct link from your email.";
  }

  return (
    <div className="max-w-md w-full bg-inner-box rounded-[3rem] p-10 shadow-2xl border border-white/20 text-center space-y-8 animate-in zoom-in-95 duration-500">
      <div className="size-24 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-xl">
        <XCircle className="w-12 h-12" />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-black text-foreground leading-tight">
          {title}
        </h1>
        <p className="text-foreground/60 font-bold">{message}</p>
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <Link
          href="/login"
          className="w-full py-5 rounded-2xl bg-foreground text-background font-black hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-2"
        >
          <RefreshCcw className="w-5 h-5" /> Try Logging In
        </Link>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors"
        >
          <Home size={14} /> Back to Home
        </Link>
      </div>

      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
        Locked & Secured by <span className="text-gray-600">Vexel Systems</span>
      </p>
    </div>
  );
}

export default function VerificationFailedPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 font-display">
      <Suspense
        fallback={
          <div className="text-foreground/40 font-bold">Loading...</div>
        }
      >
        <FailedContent />
      </Suspense>
    </div>
  );
}
