import { generatePageMetadata } from "@/lib/seo";
import PlatformClient from "./PlatformClient";

/**
 * METADATA GENERATION
 * Strategy: SEO injection via helper library.
 * Logic:
 * 1. Define page-specific title and meta description.
 * 2. Targeted keywords for Sri Lankan retail/business segment.
 * 3. Define canonical path for search engine indexing.
 */
export async function generateMetadata() {
  return await generatePageMetadata({
    title: "Industry Specific POS Solutions | Vexel Platform",
    description:
      "Explore Vexel POS solutions tailored for Automotive, Entertainment, Retail, and Healthcare sectors in Sri Lanka. Scalable cloud infrastructure for every industry.",
    keywords: [
      "Vexel POS platform",
      "industry specific POS",
      "retail software solutions",
      "supermarket POS system",
      "pharmacy POS software Sri Lanka",
      "salon management software",
      "automotive business POS",
    ],
    path: "/platform",
  });
}

export default function PlatformPage() {
  return <PlatformClient />;
}
