import { generatePageMetadata } from "@/lib/seo";
import PlatformClient from "./PlatformClient";

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
