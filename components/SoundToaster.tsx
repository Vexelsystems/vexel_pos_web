"use client";

import { Toaster as SonnerToaster } from "sonner";
import { useEffect } from "react";

/**
 * SOUND TOASTER COMPONENT
 *
 * This component wraps the Sonner Toaster and provides global sound effects
 * for different toast types by listening to toast events.
 */
export function SoundToaster() {
  // Logic to play sounds based on toast events can be implemented here
  // if sonner provides hooks, or we can rely on our lib/toast-utils.ts
  // which already handles sounds.

  // Since we already centralized sound logic in lib/toast-utils.ts,
  // this component primarily ensures the Sonner Toaster is configured
  // with our custom styles and any global sound-related observers.

  return (
    <SonnerToaster
      position="top-right"
      expand={true}
      richColors
      icons={{
        loading: <div className="loader scale-50" />,
      }}
      toastOptions={{
        className: "sonner-toast-custom",
        style: {
          borderRadius: "16px",
          padding: "16px",
          fontWeight: "600",
        },
      }}
    />
  );
}
