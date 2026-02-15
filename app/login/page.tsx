import { generatePageMetadata } from "@/lib/seo";
import LoginClient from "@/components/LoginClient";

/**
 * LOGIN ROOT PAGE
 *
 * Functional Overview:
 * - Purpose: Secure entry point for the "Vexel Nexus" client portal.
 * - Implementation: Wraps `LoginClient` which handles the actual auth form and state.
 */

export const metadata = generatePageMetadata({
  title: "Client Portal Login | Vexel Nexus",
  description:
    "Securely sign in to your Vexel POS dashboard. Manage your business from anywhere in the world.",
  keywords: [
    "Vexel POS login",
    "client portal sign in",
    "manage Vexel account",
    "secure business login",
  ],
  path: "/login",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function LoginPage() {
  return (
    <MotionWrapper>
      <LoginClient />
    </MotionWrapper>
  );
}
