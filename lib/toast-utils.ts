import { toast } from "sonner";

export const playSound = (type: "success" | "error" | "info") => {
  try {
    const audio = new Audio(
      type === "error" ? "/sounds/error.mp3" : "/sounds/notification.wav",
    );
    audio.play().catch((e) => {
      // Browsers often block autoplay until user interaction
      if (e.name !== "NotAllowedError" && e.name !== "NotSupportedError") {
        console.error("Error playing audio:", e);
      }
    });
  } catch (err) {
    console.error("Failed to initialize audio:", err);
  }
};

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
