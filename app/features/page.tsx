import { generatePageMetadata } from "@/lib/seo";
import FeaturesClient from "./FeaturesClient";

/**
 * FEATURES ROOT PAGE
 *
 * Functional Overview:
 * - Detailed showcase of the Vexel POS feature suite.
 * - Dynamic Metadata: SEO-optimized for feature-specific searches (Inventory, Analytics, etc.).
 * - Content: Wraps `FeaturesClient` for the animated feature deep-dive.
 */

/**
 * METADATA GENERATION
 * Targets high-intent keywords like "smart inventory" and "multi- management".
 */
export async function generateMetadata() {
  return await generatePageMetadata({
    title: "Powerful Features | Scalable POS Solutions",
    description:
      "Discover the advanced features of Vexel POS - from smart inventory to AI insights. Built for Sri Lankan businesses to scale effortlessly.",
    keywords: [
      "Vexel POS features",
      "smart inventory management Sri Lanka",
      "POS analytics dashboard",
      "offline point of sale",
      "SaaS POS features",
      "cloud business tools",
    ],
    path: "/features",
  });
}

/**
 * FEATURES PAGE COMPONENT
 * Renders the primary Features showcase.
 */
export default function FeaturesPage() {
  return <FeaturesClient />;
}
