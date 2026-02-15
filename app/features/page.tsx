import { generatePageMetadata } from "@/lib/seo";
import FeaturesClient from "./FeaturesClient";

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
      "multi-branch business management",
      "SaaS POS features",
      "cloud business tools",
    ],
    path: "/features",
  });
}

export default function FeaturesPage() {
  return <FeaturesClient />;
}
