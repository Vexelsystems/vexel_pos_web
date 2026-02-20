import { generatePageMetadata } from "@/lib/seo";
import LandingClient from "./LandingClient";

/**
 * ROOT LANDING PAGE
 *
 * Functional Overview:
 * - Serves as the primary entry point for the Vexel POS platform.
 * - Dynamic Metadata: Generates SEO-optimized titles and descriptions for search engines.
 * - Implementation: Wraps `LandingClient` which contains the visual hero, features, and CTA sections.
 *
 * Server-side logic handles SEO before delivering the client component.
 */

/**
 * METADATA GENERATION
 * Constructs the SEO profile for the homepage.
 */
export async function generateMetadata() {
  return await generatePageMetadata({
    title: "Vexel POS - All-in-One Cloud Point of Sale System",
    description:
      "The most powerful cloud POS system for Sri Lankan retail and hospitality. Track inventory, manage staff, and grow your business with Vexel POS.",
    keywords: [
      "Vexel POS",
      "cloud POS Sri Lanka",
      "retail POS software",
      "restaurant POS system",
      "inventory management software Sri Lanka",
      "SaaS POS",
      "SMB business software Vavuniya",
      "smart POS terminal",
    ],
    path: "/",
  });
}

/**
 * HOME COMPONENT
 * Returns the LandingClient for the modular landing page experience.
 */
export default function Home() {
  return <LandingClient />;
}
