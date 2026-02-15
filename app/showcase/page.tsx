import { generatePageMetadata } from "@/lib/seo";
import ShowcaseClient from "./ShowcaseClient";

export async function generateMetadata() {
  return await generatePageMetadata({
    title: "Showcase | Client Success Stories",
    description:
      "Explore how Vexel POS transforms businesses in Sri Lanka. Client testimonials and success stories from various industries.",
    keywords: [
      "Vexel POS showcase",
      "client success stories",
      "POS testimonials",
      "local business growth",
      "Sri Lanka retail success",
    ],
    path: "/showcase",
  });
}

export default function ShowcasePage() {
  return <ShowcaseClient />;
}
