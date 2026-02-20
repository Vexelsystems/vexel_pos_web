import { toast } from "sonner";

/**
 * playSound (Audio Feedback Logic)
 * Strategy: Low-latency DOM Audio API.
 * Logic:
 * 1. Instantiate a new Audio object with the target asset path.
 * 2. Attempt playback.
 * 3. Catch 'NotAllowedError' specially—this happens if the user hasn't interacted with the page yet
 *    (browser security policy preventing auto-playing sounds).
 */
export const playSound = (type: "success" | "error" | "info") => {
  try {
    const audio = new Audio(
      type === "error" ? "/sounds/error.mp3" : "/sounds/notification.wav",
    );
    audio.play().catch((e) => {
      // Logic: Silently handle expected browser autoplay blocks.
      if (e.name !== "NotAllowedError" && e.name !== "NotSupportedError") {
        console.error("Error playing audio:", e);
      }
    });
  } catch (err) {
    console.error("Failed to initialize audio:", err);
  }
};

/**
 * showSuccess (User Feedback Orchestration)
 * Logic: Combines audio cues with a persistent Sonner toast notification.
 */
export const showSuccess = (message: string, description?: string) => {
  playSound("success");
  toast.success(message, {
    description,
    className:
      "bg-background text-foreground border-border rounded-xl font-bold shadow-xl shadow-primary/10",
  });
};

export const showError = (message: string, description?: string) => {
  playSound("error");
  toast.error(message, {
    description,
    className:
      "bg-destructive text-destructive-foreground border-destructive rounded-xl font-bold shadow-xl shadow-destructive/20",
  });
};

export const showInfo = (message: string, description?: string) => {
  playSound("success");
  toast.info(message, {
    description,
    className:
      "bg-muted text-muted-foreground border-border rounded-xl font-bold",
  });
};
