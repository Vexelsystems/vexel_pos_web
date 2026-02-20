import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * HERO ACTIONS COMPONENT
 * - Renders primary (CTA) and secondary action buttons.
 * - Encapsulates navigation links to `/pricing` and `/services`.
 */

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <Link href="/register">
        <button className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden">
          Get Started
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </Link>

      <Link href="/services">
        <button className="px-10 py-5 rounded-2xl text-lg font-black border-2 border-foreground/10 hover:border-primary/30 transition-all backdrop-blur-sm">
          View Solutions
        </button>
      </Link>
    </div>
  );
}
