/**
 * GLOBAL CLIENT WRAPPER
 * Lazy loads non-critical client components to improve initial page load
 * All use ssr:false to prevent server-side rendering (browser APIs required)
 * Components are deferred to load after page is interactive
 */

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy loaded with ssr:false - loads after initial render
const LiveChat = dynamic(() => import("@/components/LiveChat"), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/CookieConsent"), {
  ssr: false,
});
const GlowingBackground = dynamic(
  () => import("@/components/GlowingBackground"),
  { ssr: false },
);

export default function GlobalClientWrapper({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    // Defer loading widgets until after page is interactive
    // This reduces Total Blocking Time significantly
    /**
     * COMPONENT DEFERRAL ENGINE
     * Strategy: Time-based lazy mounting.
     * Logic:
     * 1. Next.js dynamic() handles the chunk loading.
     * 2. This hook delays the actual 'mounting' by 3 seconds.
     * 3. Prioritizes the Hero/Main content rendering over background widgets (LiveChat, Cookies).
     */
    const timer = setTimeout(() => {
      setShowWidgets(true);
    }, 3000); // 3 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWidgets && (
        <>
          <LiveChat />
          <CookieConsent />
        </>
      )}
      <GlowingBackground />
      {children}
    </>
  );
}
