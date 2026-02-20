"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * TYPEWRITER TEXT COMPONENT
 *
 * Performance:
 * - Client-side only to avoid hydration mismatches.
 * - Uses Framer Motion for smooth, hardware-accelerated animations.
 * - Optimized with AnimatePresence for clean entry/exit of strings.
 */

const defaultPhrases = [
  "Grows Your Business.",
  "Solves Complex Problems.",
  "Saves You Time.",
  "Drives Real ROI.",
];

export function TypewriterText({
  phrases = defaultPhrases,
  className = "",
}: {
  phrases?: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[index];

      /**
       * TYPEWRITER STATE MACHINE
       * Strategy: Recursive-ish time-slice execution.
       * Logic:
       * 1. 'Typing Phase': Increments 'displayText' length until it matches the full phrase.
       * 2. 'Wait Phase': 2000ms delay after full phrase completion.
       * 3. 'Deleting Phase': Decrements length at double speed (50ms) to clear the slot.
       * 4. 'Switch Phase': Increments 'index' when empty to cycle to the next phrase.
       */
      if (!isDeleting) {
        // Typing
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentPhrase) {
          // Pause at the end
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, typingSpeed]);

  return (
    <span className={`relative inline-flex items-center ${className}`}>
      <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2 min-h-[1.2em]">
        {displayText}
      </span>
      {/* Animated Cursor */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 translate-y-[2px]"
      />
    </span>
  );
}
