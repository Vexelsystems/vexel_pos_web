"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

/**
 * COOKIE CONSENT COMPONENT
 * 
 * Functional Overview:
 * - State Persistence: Check `localStorage` for 'vexel_cookie_status' on mount.
 * - Conditional Rendering: 
 *   - 'unset': Shows bottom banner.
 *   - 'rejected': Shows full-screen blocking wall (Access Restricted).
 *   - 'accepted': Renders nothing (null).
 */

export default function CookieConsent() {
  const [status, setStatus] = useState<'loading' | 'unset' | 'accepted' | 'rejected'>('loading');

  useEffect(() => {
    const savedStatus = localStorage.getItem('vexel_cookie_status') as any;
    setStatus(savedStatus || 'unset');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('vexel_cookie_status', 'accepted');
    setStatus('accepted');
  };

  const handleReject = () => {
    localStorage.setItem('vexel_cookie_status', 'rejected');
    setStatus('rejected');
  };

  if (status === 'loading' || status === 'accepted') return null;

  return (
    <>
      {/* The Block/Wall Overlay */}
      {status === 'rejected' && (
        <div
          className="fixed inset-0 z-10000 bg-white/80 dark:bg-black/80 backdrop-blur-2xl flex items-center justify-center p-6"
        >
          <div className="max-w-md text-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
              <Cookie size={40} />
            </div>
            <h2 className="text-3xl font-black mb-4">Access Restricted</h2>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              To browse Vexel Systems, you must accept our cookie policy. We use these to ensure site security and optimal performance.
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleAccept}
                className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:brightness-105 transition-all shadow-xl shadow-primary/20"
              >
                Accept All & Proceed
              </button>
              <Link href="/privacy" className="text-sm font-bold text-primary hover:underline">
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* The Initial Banner */}
      {status === 'unset' && (
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-999 w-[90%] max-w-[700px]"
        >
          <div className="bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Cookie size={24} />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg mb-1">We value your privacy</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Accept our <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> to access all features of Vexel Systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleAccept}
                className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:brightness-105 transition-all text-sm whitespace-nowrap"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="px-6 py-3 bg-black/5 dark:bg-white/5 text-foreground/40 hover:text-red-500 font-bold rounded-xl transition-all text-sm whitespace-nowrap"
              >
                Reject All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
