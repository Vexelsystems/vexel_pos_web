import React from "react";

/**
 * HERO BADGE COMPONENT
 * - Pure UI component displaying the "status" or "tag" in the hero area.
 * - Uses backdrop blur for depth.
 */

export function HeroBadge() {
  return (
    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 shadow-2xl shadow-primary/10 group cursor-default">
      <div className="size-2 rounded-full bg-primary animate-pulse"></div>
      <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary transition-colors">
        Your Growth Partner
      </span>
    </div>
  );
}
