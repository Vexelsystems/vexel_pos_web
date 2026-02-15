/**
 * HERO SECTION - Homepage landing component
 * Server-rendered for optimal LCP performance
 */

import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroActions } from "@/components/hero/HeroActions";
import { HeroSocials } from "@/components/hero/HeroSocials";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";
import Link from "next/link";

/**
 * HERO SECTION PARENT
 *
 * Functional Overview:
 * - Composition: Aggregates atomic sub-components (`badge`, `actions`, `socials`) into a cohesive layout.
 * - Performance: Server Component (RSC) to minimize main-thread work for the LCP element.
 * - Styling: Centralized flexbox layout.
 */

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 pb-12 flex flex-col items-center justify-center text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <HeroBackground />
      <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
        {/* Client component with animation */}
        <div className="mt-20">
          <HeroBadge />
        </div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-primary text-lg md:text-xl font-bold uppercase tracking-widest mb-4">
            Software Solutions & AI Experts in Vavuniya
          </h2>

          {/* bg-clip-text creates gradient text effect */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight flex flex-col items-center gap-2 mb-6">
            <span className="text-foreground">
              We Build{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600">
                App
              </span>{" "}
              That
            </span>
            <TypewriterText />
          </h1>

          <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            We build websites, mobile apps, and business software (POS) that
            save you time and money. The only tech team in Vairavapuliyankulam
            dedicated to your growth.
          </p>
        </div>

        {/* Client components with hover effects */}
        <HeroActions />
        <HeroSocials />
      </div>
    </section>
  );
}
