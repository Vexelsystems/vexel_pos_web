import { generatePageMetadata } from "@/lib/seo";
import FaqClient from "@/components/FaqClient";

/**
 * FAQ ROOT PAGE
 *
 * Functional Overview:
 * - Pattern: Simple server component wrapper.
 * - Responsibility: Provides static metadata context for the client-side FAQ accordion interactivity.
 */

export const metadata = generatePageMetadata({
  title: "FAQ",
  description: "Vexel Systems",
  keywords: [
    "Vexel Systems FAQ",
    "POS system questions",
    "ERP system questions",
    "software product questions",
    "software support FAQ",
    "business software FAQ",
    "startup software FAQ",
    "IT solution questions Sri Lanka",
    "AI software FAQ",
    "digital solutions FAQ",
    "Vavuniya tech FAQ",
    "software troubleshooting",
    "user support Vexel Systems",
    "ERP FAQ Sri Lanka",
    "POS software FAQ",
    "SaaS questions",
    "Vexel customer support FAQ",
  ],
  path: "/faq",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function FAQPage() {
  return (
    <>
      {/* FAQPage Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Vexel POS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vexel POS is a billing and inventory management system designed for retail and wholesale businesses in Sri Lanka.",
                },
              },
              {
                "@type": "Question",
                name: "Does Vexel Systems provide web development services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Vexel Systems offers custom web development services including modern websites, web applications, and e-commerce solutions using the latest technologies.",
                },
              },
              {
                "@type": "Question",
                name: "What AI integration services does Vexel Systems offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vexel Systems provides AI integration services including chatbots, automated customer support, data analytics, and intelligent business automation solutions.",
                },
              },
              {
                "@type": "Question",
                name: "Does Vexel POS support wholesale businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Vexel POS supports wholesale pricing, bulk billing, customer credit management, and advanced reporting features.",
                },
              },
              {
                "@type": "Question",
                name: "Can Vexel Systems develop custom software solutions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Vexel Systems specializes in custom software development tailored to your business needs, including inventory systems, CRM, and business management tools.",
                },
              },
              {
                "@type": "Question",
                name: "Is Vexel Systems available in Sri Lanka?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Vexel Systems is based in Vavuniya, Sri Lanka, and provides services throughout the country with local support in English and Tamil.",
                },
              },
            ],
          }),
        }}
      />

      <MotionWrapper>
        <FaqClient />
      </MotionWrapper>
    </>
  );
}
