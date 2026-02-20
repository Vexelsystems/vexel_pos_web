"use client";

import LoginClient from "@/components/LoginClient";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { useAuth } from "@/lib/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * LOGIN PAGE
 *
 * Smart redirect: If the user is already authenticated, forward them
 * to the correct destination (onboarding or dashboard) automatically.
 * Acts as the single entry point after any successful login.
 */
export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      // Forward to the correct destination based on onboarding status
      if (!user.currentShopId) {
        router.replace("/onboarding");
      } else {
        router.replace("/dashboard");
      }
    }
  }, [user, loading, router]);

  // While auth is loading or redirecting, show nothing (avoids flash)
  if (loading || user) return null;

  return (
    <MotionWrapper>
      <LoginClient />
    </MotionWrapper>
  );
}
