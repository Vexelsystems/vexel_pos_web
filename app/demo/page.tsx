import { generatePageMetadata } from "@/lib/seo";
import DemoClient from "./DemoClient";

/**
 * METADATA GENERATION
 * Strategy: Conversion-focused SEO (Interactive Tour).
 * Logic: Targets high-intent users looking to "test" or "experience" the system.
 */
export async function generateMetadata() {
  return await generatePageMetadata({
    title: "Interactive Demo | Experience Vexel POS",
    description:
      "Try Vexel POS today with our interactive self-guided tour. Experience the power of smart inventory and fast transactions.",
    keywords: [
      "Vexel POS demo",
      "interactive POS tour",
      "test point of sale",
      "free software trial",
      "POS simulation Sri Lanka",
    ],
    path: "/demo",
  });
}

export default function DemoPage() {
  return <DemoClient />;
}
