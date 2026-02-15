import React from "react";
import { Shield, Lock, Eye, FileText, Globe, Bell } from "lucide-react";
import { companyDetails } from "@/lib/companydetails";

/**
 * PRIVACY POLICY PAGE
 *
 * Functional Overview:
 * - Structure: Static content page using a data-driven approach for section rendering.
 * - Data Mapping: `sections` array maps icons, titles, and content to reusable card components.
 * - Integration: Dynamically pulls company details (name, email) from `@/lib/companydetails` configuration.
 */

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Vexel Systems",
  keywords: [
    "privacy policy Vexel Systems",
    "data protection Sri Lanka",
    "user privacy agreement",
    "software data privacy",
    "GDPR policy Sri Lanka",
    "personal data protection",
    "Vexel privacy guidelines",
    "secure data handling",
    "client confidentiality agreement",
  ],
  path: "/privacy",
  noIndex: true,
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function PrivacyPolicy() {
  const lastUpdated = "January 14, 2026";

  const sections = [
    {
      icon: Eye,
      title: "Data Collection",
      content:
        "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request support, or communicate with us. This includes your name, email address, and any other information you choose to provide.",
    },
    {
      icon: Shield,
      title: "How We Use Data",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Vexel Systems and our users. We also use this information to offer you tailored content—like giving you more relevant search results.",
    },
    {
      icon: Lock,
      title: "Data Security",
      content:
        "We work hard to protect Vexel Systems and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use standard encryption (SSL/TLS) for all data in transit.",
    },
    {
      icon: Globe,
      title: "International Transfers",
      content:
        "Information we collect may be processed in any country where we or our partners operate. By using our services, you consent to any such transfer of information outside of your country.",
    },
    {
      icon: FileText,
      title: "Your Rights",
      content:
        "Depending on your location (such as the EU/GDPR), you may have rights to access, update, or delete your personal data. You can exercise these rights at any time by contacting our support team.",
    },
    {
      icon: Bell,
      title: "Changes to Policy",
      content:
        "We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.",
    },
  ];

  return (
    <main className="min-h-[60vh] md:min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] pt-20 lg:pt-24 pb-12 overflow-hidden flex flex-col items-center justify-start text-center">
        {/* Background Gradients & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10 bg-center"></div>

        <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
          {/* Hero Badge */}
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/40 dark:bg-nav-bg/10 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default">
            <div className="size-2 rounded-full bg-primary"></div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 transition-colors">
              Legal Center
            </span>
          </div>

          <MotionWrapper type="scale">
            <div className="flex flex-col items-center overflow-hidden text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 text-center">
                <span className="text-foreground">Privacy </span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2">
                  Policy
                </span>
              </h1>

              <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed mb-4">
                At {companyDetails.name}, we take your privacy seriously.
              </p>

              <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 pb-20">
        <MotionWrapper type="stagger">
          <div className="flex flex-col gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group p-8 md:p-10 rounded-3xl bg-card dark:bg-nav-bg/10 border border-primary/10 dark:border-primary/20 hover:border-primary/30 transition-all hover:bg-card/80 dark:hover:bg-nav-bg/20"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <section.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.4}>
          <div className="mt-20 p-12 rounded-[40px] bg-primary text-white text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Questions about your{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white/90 to-white/70">
                  data?
                </span>
              </h2>
              <p className="text-white/80 mb-8 max-w-md mx-auto">
                If you have any questions or concerns about our privacy
                practices, please reach out to our legal team.
              </p>
              <a
                href={`mailto:legal@${companyDetails.contact.email.split("@")[1]}`}
                className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-2xl hover:brightness-105 transition-all shadow-xl"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </main>
  );
}
