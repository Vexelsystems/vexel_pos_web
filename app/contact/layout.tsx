import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Contact Us | Vexel Systems Vavuniya",
  description: "Get in touch with Vexel Systems in Vavuniya, Sri Lanka. Contact us for affordable web development, software projects, and IT consultation.",
  keywords: [
    "Contact Vexel Systems",
    "Vavuniya Office Address",
    "Hire Developers Sri Lanka",
    "Software Company Phone Number Vavuniya",
    "IT Support Contact Northern Province",
    "Vexel Systems Location"
  ],
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
