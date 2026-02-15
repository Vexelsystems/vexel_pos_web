"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Hammer } from "lucide-react";

/**
 * MAINTENANCE PAGE
 *
 * Functional Overview:
 * - Usage: Static page enabling a "construction mode" (manual redirect required to activate).
 * - Layout: Focused center card with estimated return time to manage user expectations.
 */

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-purple-500/5 -z-10"></div>

      <MotionWrapper type="scale">
        <div className="p-6 bg-white dark:bg-white/5 rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 max-w-lg w-full">
          <div className="w-16 h-16 bg-yellow-500/10 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Hammer size={32} />
          </div>

          <h1 className="text-3xl font-black mb-4">Under Maintenance</h1>
          <p className="text-foreground/60 mb-8 leading-relaxed">
            We're currently upgrading this page to bring you a better
            experience. Please check back soon!
          </p>

          <div className="p-4 bg-gray-50 dark:bg-black/20 rounded-xl flex items-center justify-center gap-3 mb-8">
            <Clock className="text-primary" size={20} />
            <span className="text-sm font-bold text-foreground/80">
              Estimated Return: 2 Hours
            </span>
          </div>

          <Link
            href="/"
            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </MotionWrapper>

      <div className="mt-8 text-xs text-foreground/40 font-medium">
        &copy; Vexel Systems. All rights reserved.
      </div>
    </div>
  );
}
