"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * SCROLL TO TOP WITH SMOOTH TRANSITION
 * Automatically scrolls to the top of the page on route changes
 * with a smooth fade transition effect
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Start transition
    setIsTransitioning(true);

    // Scroll to top instantly
    window.scrollTo(0, 0);

    // End transition after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 bg-background pointer-events-none z-[9999] transition-opacity duration-300 ${
        isTransitioning ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
