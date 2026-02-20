"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * PAGE TRANSITION COMPONENT
 *
 * Functional Overview:
 * - Uses Framer Motion's AnimatePresence to handle route change animations.
 * - Provides a subtle fade and slide-up effect for a premium feel.
 * - Keyed by pathname to trigger re-animation on navigation.
 */

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        /**
         * ROUTE-KEYED ORCHESTRATION
         * Strategy: Dynamic keying for lifecycle management.
         * Logic:
         * 1. Next.js App Router keeps the layout stable but swaps children.
         * 2. Using 'pathname' as the key forces Framer Motion to treat every navigation as a new entry/exit.
         * 3. 'mode="wait"' ensures the old page exits BEFORE the new one enters to prevent layout flickering.
         */
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="w-full flex-1 flex flex-col relative"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
