import { generatePageMetadata } from "@/lib/seo";
import ContactClient from "./ContactClient";

/**
 * CONTACT ROOT PAGE
 * 
 * Functional Overview:
 * - Architecture: Wrapper for `ContactClient` to enable SEO metadata injection.
 * - Keyword Targeting: Optimized for location-specific terms ("Vavuniya", "Sri Lanka").
 */

export const metadata = generatePageMetadata({
  title: "Contact / Quote",
  description: "Web & Software Development",
  keywords: [
    "contact Vexel Systems",
    "software company contact Sri Lanka",
    "IT company Vavuniya contact",
    "Vexel Systems address",
    "Vexel POS contact",
    "ERP software contact",
    "business software contact Sri Lanka",
    "customer support Vexel Systems",
    "reach Vexel Systems",
    "software inquiries Sri Lanka",
    "SaaS company contact",
    "startup software contact",
    "digital solutions contact",
    "Vexel support",
    "software consultation request",
    "technology company contact",
    "business software inquiry",
    "Vavuniya software contact",
    "contact Vexel Systems Vavuniya",
    "software support Vavuniya",
    "IT support Vavuniya",
    "visit Vexel Systems Vavuniya",
    "call Vexel Systems Sri Lanka"
  ],
  path: "/contact",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function ContactPage() {
  return (
    <MotionWrapper>
      <ContactClient />
    </MotionWrapper>
  );
}
