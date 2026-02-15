import { generatePageMetadata } from "@/lib/seo";
import LandingClient from "./LandingClient";

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

export default function Home() {
  return <LandingClient />;
}
