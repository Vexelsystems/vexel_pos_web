"use client";

/**
 * LOADER COMPONENT
 *
 * A reusable CSS-based loading animation.
 * Usage: <Loader className="scale-150" />
 */
export default function Loader({ className = "" }: { className?: string }) {
  return <div className={`loader ${className}`} aria-label="Loading" />;
}
