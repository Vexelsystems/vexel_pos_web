import { generatePageMetadata } from "@/lib/seo";
import PricingClient from "./PricingClient";

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

export default function PricingPage() {
  return <PricingClient />;
}
