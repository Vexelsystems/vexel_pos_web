import { generatePageMetadata } from "@/lib/seo";
import ConsultationClient from "./ConsultationClient";

/**
 * CONSULTATION ROOT PAGE
 * 
 * Functional Overview:
 * - Role: Server-side entry point for the Consultation booking flow.
 * - Logic: Delegates all interactivity (form, progress tracking) to `ConsultationClient`.
 * - Metadata: SEO optimized for "booking" and "consultation" keywords.
 */

export const metadata = generatePageMetadata({
  title: "Book a Free Consultation",
  description: "Vexel Systems",
  keywords: [
    "software consultation Sri Lanka",
    "IT consulting Vavuniya",
    "business technology consulting",
    "startup software consultation",
    "digital strategy consulting",
    "POS consulting Sri Lanka",
    "ERP software consulting",
    "AI software consultation",
    "IT solutions Vavuniya",
    "custom software consultation",
    "technology consulting company",
    "Vexel consulting",
    "business process automation",
    "SaaS consulting Sri Lanka",
    "IT advisory services",
    "software project consulting",
    "enterprise software consulting"
  ],
  path: "/consultation",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypewriterText } from "@/components/hero/TypewriterText";

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 flex flex-col items-center justify-start text-center">
        <HeroBackground />
        <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
            <MotionWrapper type="scale">
              <h1 className="text-4xl md:text-6xl font-black mb-6 flex flex-col items-center gap-2">
                <span className="text-foreground">Schedule a</span>
                <TypewriterText phrases={["Discovery Call.", "Strategy Session.", "Growth Audit.", "Consultation."]} />
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Discuss your project requirements, technology needs, and digital transformation goals with our team.
              </p>
            </MotionWrapper>
        </div>
      </section>

      <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px] py-12">
        <MotionWrapper delay={0.2}>
          <ConsultationClient />
        </MotionWrapper>
      </div>
    </main>
  );
}
