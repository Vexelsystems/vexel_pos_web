"use client";

import React from "react";

/**
 * GLOWING BACKGROUND
 *
 * Purpose:
 * - Provides a subtle, global ambient glow (blue and purple) across the whole page.
 * - Optimized with high blur and low opacity to avoid performance issues.
 * - Uses fixed positioning to stay behind all content.
 */

export const GlowingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-40 select-none">
      {/* Blue Glow - Top Left */}
      <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/15 blur-[120px] dark:hidden" />
      {/* Purple Glow - Bottom Right */}
      <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-purple-600/10 blur-[120px] dark:hidden" />
    </div>
  );
};

export default GlowingBackground;
