import { generatePageMetadata } from "@/lib/seo";
import PricingClient from "./PricingClient";

/**
 * PRICING ROOT PAGE
 *
 * Functional Overview:
 * - Public marketing page displaying subscription tiers and billing options.
 * - Dynamic Metadata: Sets SEO attributes for the pricing page.
 * - Components: Wraps `PricingClient` for interactive tier selection and toggles.
 */

/**
 * METADATA GENERATION
 * Optimized for keywords related to POS pricing in Sri Lanka.
 */
export async function generateMetadata() {
  return await generatePageMetadata({
    title: "Simple & Transparent Pricing",
    description:
      "Choose the perfect Vexel POS plan for your business. Affordable cloud-based pricing for retail and hospitality in Sri Lanka.",
    keywords: [
      "Vexel POS pricing",
      "POS software cost Sri Lanka",
      "subscription POS plans",
      "retail software pricing",
      "SaaS pricing",
      "affordable POS Vavuniya",
    ],
    path: "/pricing",
  });
}

/**
 * PRICING PAGE COMPONENT
 * Returns the interactive PricingClient.
 */
export default function PricingPage() {
  return <PricingClient />;
}
