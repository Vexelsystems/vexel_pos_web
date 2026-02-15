"use client";

import React from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?:
    | "fade"
    | "scale"
    | "stagger"
    | "slideLeft"
    | "slideRight"
    | "slideUp"
    | "slideDown";
}

export const MotionWrapper = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  type = "fade",
}: MotionWrapperProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    // Defer animation initialization to reduce TBT
    // Only mount animations after critical content is rendered
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Show content immediately without animation on first render
  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  if (type === "stagger") {
    return (
      <motion.div
        initial={false} // Don't animate on first render
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.2 }}
        onViewportEnter={() => setIsInView(true)}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const variants: Record<string, any> = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <motion.div
      initial={false} // Critical: Don't animate on first render
      whileInView="visible"
      viewport={{ once: true, margin: "-100px", amount: 0.2 }}
      variants={variants[type]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
