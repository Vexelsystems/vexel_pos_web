import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "FAQ | Common Questions about Vexel Systems",
  description: "Find answers to common questions about our web development, mobile app, and POS services in Vavuniya and Sri Lanka. Get support for Vexel products.",
  keywords: [
    "Vexel Systems FAQ",
    "Tech Support Vavuniya",
    "Software Support Northern Province",
    "Web Development Questions Sri Lanka",
    "POS System Help Vavuniya",
    "Vexel Support Contact"
  ],
  path: "/faq",
});

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
