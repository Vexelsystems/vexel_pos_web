"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HomePreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const duration = 1200; // 1.2 seconds total load time (Faster)
    const interval = 20; // update every 20ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, duration + 200); // Wait a bit after 100% before fading out

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground"
        >
          {/* Content Container */}
          <div className="flex flex-col items-center gap-8">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative size-24 md:size-32"
            >
              <Image
                src="/Vexcel Logo.png"
                alt="Vexel Systems"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center space-y-2"
            >
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter">
                Vexel Systems
              </h1>
              <p className="text-sm uppercase tracking-[0.2em] opacity-60">
                Technology Made Simple.
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 h-1 bg-foreground/10 rounded-full overflow-hidden mt-4 relative">
              {/* Progress Fill */}
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.02 }} // Smooth instantaneous updates
              />
            </div>

            {/* Percentage Text */}
            <div className="text-xs font-bold font-mono opacity-50">
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
