import { ReactNode } from "react";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Business Onboarding | Vexel POS",
  description: "Complete your business setup to start using Vexel POS.",
  path: "/onboarding",
});

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background font-display selection:bg-primary/20">
      {/* 
        This layout can be later enhanced with a unified header or progress bar 
        specific to the onboarding experience if needed.
        For now, it's a clean wrapper.
      */}
      {children}
    </div>
  );
}
