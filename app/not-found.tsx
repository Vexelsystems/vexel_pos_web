"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

/**
 * NOT FOUND (404) PAGE
 *
 * Functional Overview:
 * - Trigger: Renders automatically when `notFound()` is called or an unmatched URL is visited.
 * - UX: Friendly error message with a direct recovery action (Back to Home button).
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="p-6 bg-white dark:bg-white/5 rounded-3xl shadow-sm border border-gray-100 dark:border-white/10 max-w-md w-full">
        <div className="w-16 h-16 bg-gray-100 dark:bg-white/10 text-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Home size={32} />
        </div>

        <h1 className="text-2xl font-bold mb-4 text-foreground">
          Page Not Found
        </h1>
        <p className="text-foreground/60 mb-8 leading-relaxed text-sm">
          We looked everywhere, but we couldn't find the page you were looking
          for. It might have been moved or deleted.
        </p>

        <Link
          href="/"
          className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
