"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

/**
 * SCROLL NAVIGATION BUTTONS
 * Fixed buttons on the right side for quick navigation to top/footer
 */

export default function ScrollNavButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if at top (within 50px of top)
      /**
       * SCROLL THRESHOLD DETECTION
       * Strategy: Coordinate-based visibility.
       * Logic:
       * 1. 'isAtTop': Hides the "Up" button when already near the header (50px buffer).
       * 2. 'isAtBottom': Hides the "Down" button when near the footer (100px buffer).
       * 3. 'isVisible': Ensures buttons only appear on pages long enough to require scrolling.
       */
      setIsAtTop(scrollY < 50);

      // Check if at bottom (within 100px of bottom)
      setIsAtBottom(scrollY + windowHeight >= documentHeight - 100);

      // Show buttons if page is scrollable (has content beyond viewport)
      setIsVisible(documentHeight > windowHeight);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial check
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed right-6 bottom-32 z-50 flex flex-col gap-3 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-20 pointer-events-none"
      }`}
    >
      {/* Scroll to Top Button - Hide when at top */}
      {!isAtTop && (
        <button
          onClick={scrollToTop}
          className="group flex items-center justify-center size-12 rounded-2xl bg-background/80 dark:bg-card/80 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={20}
            className="text-primary group-hover:scale-110 transition-transform"
          />
        </button>
      )}

      {/* Scroll to Footer Button - Hide when at bottom */}
      {!isAtBottom && (
        <button
          onClick={scrollToFooter}
          className="group flex items-center justify-center size-12 rounded-2xl bg-background/80 dark:bg-card/80 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to footer"
        >
          <ArrowDown
            size={20}
            className="text-primary group-hover:scale-110 transition-transform"
          />
        </button>
      )}
    </div>
  );
}
