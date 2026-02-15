import React from "react";
import {
  ShieldCheck,
  Target,
  Heart,
  Users,
  Recycle,
  Scale,
} from "lucide-react";
import { companyDetails } from "@/lib/companydetails";

/**
 * COMPANY POLICY PAGE
 *
 * Functional Overview:
 * - Data Structure: `categories` array drives the rendering of policy cards (Ethics, Sustainability, etc.).
 * - Layout: Centralized layout with a responsive grid system and hover effects for card interactivity.
 */

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Company Policy",
  description: "Vexel Systems",
  keywords: [
    "Company Policy",
    "Corporate Governance",
    "Business Ethics",
    "Sustainability",
    "Social Responsibility",
    "Vexel Standards",
  ],
  path: "/company-policy",
  noIndex: true,
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function CompanyPolicy() {
  const categories = [
    {
      icon: <Target size={24} />,
      title: "Business Ethics",
      content:
        "We conduct our business with integrity and transparency. We strictly prohibit bribery, corruption, and unethical competitive practices across all our global operations.",
    },
    {
      icon: <Recycle size={24} />,
      title: "Sustainability",
      content:
        "Vexel Systems is committed to reducing our environmental footprint. We prioritize cloud-based infrastructure that utilizes renewable energy and promote paperless office environments.",
    },
    {
      icon: <Heart size={24} />,
      title: "Social Responsibility",
      content:
        "We believe in giving back to the communities where we operate. This includes supporting local tech education initiatives and ensuring fair labor practices throughout our supply chain.",
    },
    {
      icon: <Users size={24} />,
      title: "Diversity & Inclusion",
      content:
        "We foster a culture where everyone feels they belong. We are an equal opportunity employer and value the diverse perspectives that a global workforce brings to our innovation.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Quality Assurance",
      content:
        "Our 'Vexel Standard' ensures that every piece of software we deliver undergoes rigorous testing and meets the highest industry benchmarks for security and reliability.",
    },
    {
      icon: <Scale size={24} />,
      title: "Legal Compliance",
      content:
        "We adhere strictly to the laws and regulations of every country we operate in, covering everything from financial reporting to data protection and international trade.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] pt-20 lg:pt-24 pb-12 overflow-hidden flex flex-col items-center justify-start text-center">
        {/* Background Gradients & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10 bg-center"></div>

        <div className="w-[90%] md:w-[80%] mx-auto max-w-5xl relative z-10 flex flex-col items-center gap-6">
          {/* Hero Badge */}
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-primary/20 shadow-2xl shadow-primary/5 group cursor-default">
            <div className="size-2 rounded-full bg-primary"></div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary/80 transition-colors">
              Corporate Governance
            </span>
          </div>

          <MotionWrapper type="scale">
            <div className="flex flex-col items-center overflow-hidden text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 text-center">
                <span className="text-foreground">Company </span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2">
                  Policy
                </span>
              </h1>

              <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed mb-4">
                The Vexel Standard of Excellence.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <MotionWrapper delay={0.2}>
          <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-16 text-foreground/70 leading-relaxed text-center">
            <p className="text-xl">
              At {companyDetails.name}, our policies are not just rules—they are
              the foundation of our culture and our promise to clients,
              employees, and the global community.
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper type="stagger">
          <div className="flex flex-col gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-8 rounded-[24px] bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {category.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    {category.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.4}>
          <div className="mt-20 p-12 rounded-[48px] bg-zinc-900 border border-white/5 text-white text-center">
            <h2 className="text-3xl font-bold mb-6 italic">
              "Excellence is not an act, but a habit."
            </h2>
            <p className="text-primary mb-8 max-w-3xl mx-auto">
              At {companyDetails.name}, we are committed to conducting our
              business with the highest standards of integrity, transparency,
              and social responsibility. Our policies guide our operations and
              ensure we deliver exceptional value to our clients, partners, and
              communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
                ISO 9001 Certified
              </div>
              <div className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
                GDPR Compliant
              </div>
              <div className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
                Carbon Neutral Cloud
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </main>
  );
}
