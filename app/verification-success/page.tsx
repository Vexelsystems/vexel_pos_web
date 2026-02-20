"use client";

import Link from "next/link";
import { CheckCircle2, LogIn, ArrowRight } from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function VerificationSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 font-display">
      <div className="max-w-md w-full bg-inner-box rounded-[3rem] p-10 shadow-2xl border border-white/20 text-center space-y-8 animate-in zoom-in-95 duration-500">
        <div className="size-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-xl">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-black text-foreground leading-tight">
            Email Verified!
          </h1>
          <p className="text-foreground/60 font-bold">
            Thank you for verifying your email. Your account is now fully active
            and ready to use.
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <Link
            href="/login"
            className="w-full py-5 rounded-2xl bg-primary text-white font-black hover:brightness-110 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
          >
            Log In to Portal <LogIn className="w-5 h-5" />
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors"
          >
            Go to Dashboard <ArrowRight size={14} />
          </Link>
        </div>

        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          Locked & Secured by{" "}
          <span className="text-gray-600">Vexel Systems</span>
        </p>
      </div>
    </div>
  );
}
