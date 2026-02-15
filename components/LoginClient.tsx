"use client";

import React, { useState } from "react";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import Image from "next/image";
import { companyDetails } from "@/lib/companydetails";
import Link from "next/link";
import { playSound } from "@/lib/toast-utils";

/**
 * LOGIN CLIENT COMPONENT
 *
 * Functional Overview:
 * - Purpose: Simulates an authentication flow (mock) for demonstration purposes.
 * - Interactivity: Visual progress bar simulation during the "login" phase.
 * - Feedback: Uses `sonner` toast notifications for success/error feedback.
 * - Aesthetics: High-polish UI with blur effects and floating background elements.
 */

export default function LoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showError, setShowError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);

    // Simulate 0.9s loading
    const start = Date.now();
    const duration = 900;

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);

      if (p >= 100) {
        clearInterval(timer);
      }
    }, 16);

    // Simulate request to non-working endpoint
    try {
      await fetch("https://api.vexelsystems.invalid/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
    } catch (e) {
      // Ignore network error
    }

    await new Promise((resolve) => setTimeout(resolve, 900));

    // Ensure final state
    setProgress(100);
    setIsLoading(false);

    playSound("error");

    setShowError(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-[32px] shadow-2xl border border-gray-100 dark:border-zinc-800 p-8 md:p-12 relative z-10">
        <div className="text-center mb-10">
          <Link
            href="/"
            className="inline-block mb-6 relative hover:scale-105 transition-transform"
          >
            <div className="relative size-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center">
              <Image
                src={companyDetails.logos.main}
                alt={companyDetails.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </Link>
          <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-foreground/60 text-sm font-medium">
            Enter your credentials to access the Vexel Nexus
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">
                Email
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  required
                  placeholder="admin@vexel.com"
                  className="w-full bg-gray-50 dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:font-normal placeholder:text-foreground/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-bold text-foreground/40 hover:text-primary transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary transition-colors"
                  size={20}
                />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-gray-50 dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-2xl py-4 pl-12 pr-4 font-bold text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:font-normal placeholder:text-foreground/20"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-xl bg-primary text-white font-black text-base hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all flex items-center justify-center gap-2 relative overflow-hidden h-[56px]"
          >
            {isLoading ? (
              <>
                <div className="absolute inset-0 bg-black/10 w-full h-full">
                  <div
                    className="h-full bg-white/20 transition-all duration-50 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="relative z-10 font-bold tracking-widest text-sm">
                  {Math.round(progress)}% Authenticating
                </span>
              </>
            ) : (
              <>
                Sign In <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Error Modal Popup */}
      {showError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-900 rounded-[24px] shadow-2xl max-w-sm w-full p-6 border border-red-100 dark:border-red-900/30 animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="size-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-500 mb-2">
                <Lock size={32} />
              </div>
              <h3 className="text-xl font-black text-foreground">
                Access Denied
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Invalid credentials provided. This access attempt has been
                logged for security purposes.
              </p>
              <button
                onClick={() => setShowError(false)}
                className="w-full py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors mt-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
