import { generatePageMetadata } from "@/lib/seo";
import BlogClient from "./BlogClient";

export async function generateMetadata() {
  return await generatePageMetadata({
    title: "Blog & Business Insights | Vexel POS",
    description:
      "Expert advice on retail, hospitality, and business management specifically for Sri Lankan entrepreneurs. Stay updated with Vexel.",
    keywords: [
      "Vexel POS blog",
      "retail insights Sri Lanka",
      "business management tips",
      "POS technology trends",
      "hospitality business growth",
      "SME digital transformation",
    ],
    path: "/blog",
  });
}

export default function BlogPage() {
  return <BlogClient />;
}
