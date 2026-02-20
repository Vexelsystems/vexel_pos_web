"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Optimization: Only attach listener on devices that support hover (desktops)
    // This saves TBT/CPU on mobile devices where "mousemove" is less relevant or polyfilled poorly
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      /**
       * MOUSE-COORDINATE ENGINE
       * Strategy: CSS Variable synchronization.
       * Logic:
       * 1. Calculates relative X/Y % within the container.
       * 2. Sets '--mouse-x' and '--mouse-y' on the DOM element.
       * 3. Bypasses React state (no re-renders) for 60fps performance during high-frequency mouse moves.
       */
      container.style.setProperty("--mouse-x", x.toString());
      container.style.setProperty("--mouse-y", y.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      {/* 
        Optimization: Removed initial opacity transition to prevent "pop-in" effect.
        The gradient now has a default fallback (centered) via CSS variables.
      */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          background: `
            radial-gradient(
              800px circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
              rgba(var(--primary-rgb), 0.15),
              transparent 40%
            )
          `,
        }}
      />
    </div>
  );
}
