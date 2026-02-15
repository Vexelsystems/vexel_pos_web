import Link from "next/link";
import {
  FileText,
  CreditCard,
  AlertTriangle,
  Ban,
  ArrowRight,
  BookOpen,
  Scale,
  HelpCircle,
} from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

/**
 * TERMS OF SERVICE PAGE
 *
 * Functional Overview:
 * - Redesigned to match Cookie Policy layout.
 * - Standardized Hero Section.
 * - Sticky Sidebar Navigation for sections.
 */

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Terms & Conditions",
  description: "Vexel Systems",
  keywords: [
    "terms of service Vexel Systems",
    "software usage agreement",
    "business terms Sri Lanka",
    "IT service contract",
    "software license agreement",
    "legal terms Vavuniya",
    "website terms of use",
    "client service agreement",
    "Vexel legal terms",
  ],
  path: "/terms",
  noIndex: true,
});

export default function Terms() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] pt-20 lg:pt-24 pb-12 flex flex-col items-center justify-start text-center">
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
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 text-center">
                <span className="text-foreground">Terms of </span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2">
                  Service
                </span>
              </h1>

              <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed mb-4">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12 flex flex-col lg:flex-row gap-12">
        {/* Side Navigation */}
        <aside className="lg:w-72 shrink-0">
          <MotionWrapper delay={0.2} className="sticky top-32">
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground text-sm font-bold uppercase tracking-widest mb-4">
                  Table of Contents
                </h3>
                <p className="text-foreground/60 text-xs mb-6">
                  Last updated: January 14, 2026
                </p>
                <nav className="flex flex-col gap-1">
                  <a
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20"
                    href="#usage"
                  >
                    <FileText size={20} />
                    <span className="text-sm font-semibold">Service Usage</span>
                  </a>
                  <a
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-card dark:hover:bg-nav-bg transition-colors"
                    href="#payments"
                  >
                    <CreditCard size={20} />
                    <span className="text-sm font-medium">
                      Payments & Billing
                    </span>
                  </a>
                  <a
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-card dark:hover:bg-nav-bg transition-colors"
                    href="#liability"
                  >
                    <AlertTriangle size={20} />
                    <span className="text-sm font-medium">Liability</span>
                  </a>
                  <a
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-card dark:hover:bg-nav-bg transition-colors"
                    href="#termination"
                  >
                    <Ban size={20} />
                    <span className="text-sm font-medium">Termination</span>
                  </a>
                </nav>
              </div>
              <div className="p-6 rounded-xl bg-card dark:bg-nav-bg border border-primary/10 dark:border-primary/20">
                <h4 className="text-foreground text-sm font-bold mb-2">
                  Have Questions?
                </h4>
                <p className="text-foreground/60 text-xs leading-relaxed mb-4">
                  If you have any doubts about our terms, legal team is here to
                  help.
                </p>
                <a
                  className="text-primary text-xs font-bold hover:underline"
                  href="/contact"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </MotionWrapper>
        </aside>

        {/* Content Area */}
        <article className="flex-1 max-w-4xl space-y-16">
          <MotionWrapper delay={0.3}>
            <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
              <p className="text-lg">
                Welcome to Vexel Systems. These Terms & Conditions govern your
                access to and use of Vexel Systems' website, services, and
                software applications. By using our services, you agree to be
                bound by these terms.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <section id="usage" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  1
                </span>
                Service Usage
              </h2>
              <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
                <p>
                  You must be at least 18 years old to use our Services. By
                  agreeing to these Terms, you represent and warrant that you
                  are of legal age.
                </p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                    <span>
                      <strong className="text-foreground">
                        Account Security:
                      </strong>{" "}
                      You are responsible for maintaining the confidentiality of
                      your account credentials.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                    <span>
                      <strong className="text-foreground">
                        Prohibited Conduct:
                      </strong>{" "}
                      You agree not to misuse the Services or help anyone else
                      do so. This includes attempting to access non-public areas
                      of the Service.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                    <span>
                      <strong className="text-foreground">
                        Software License:
                      </strong>{" "}
                      Vexel Systems grants you a personal, worldwide,
                      royalty-free, non-assignable and non-exclusive license to
                      use the software provided.
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.5}>
            <section id="payments" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  2
                </span>
                Payments & Billing
              </h2>
              <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
                <p>
                  Some aspects of the Service may be provided for a fee. If you
                  elect to use paid features, you agree to the pricing and
                  payment terms.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  <div className="p-5 rounded-xl border border-primary/10 dark:border-primary/20 bg-card/50 dark:bg-white/5">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <CreditCard className="text-primary" size={18} />{" "}
                      Subscription Cycles
                    </h4>
                    <p className="text-sm">
                      Fees are billed in advance on a monthly or annual basis
                      and are non-refundable except as required by law.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-primary/10 dark:border-primary/20 bg-card/50 dark:bg-white/5">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <Scale className="text-primary" size={18} /> Taxes
                    </h4>
                    <p className="text-sm">
                      All fees are exclusive of taxes, and you are responsible
                      for their payment.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.6}>
            <section id="liability" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  3
                </span>
                Limitation of Liability
              </h2>
              <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400">
                <h4 className="text-sm font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                  <AlertTriangle size={16} /> Legal Disclaimer
                </h4>
                <p className="italic font-medium leading-relaxed text-foreground/80">
                  "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VEXEL
                  SYSTEMS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF
                  PROFITS OR REVENUES."
                </p>
              </div>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                Our total liability for any claim arising out of or relating to
                these terms or the services, regardless of the form of the
                action, is limited to the amount paid by you to use the services
                in the 12 months preceding the claim.
              </p>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.7}>
            <section id="termination" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  4
                </span>
                Termination
              </h2>
              <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
                <p>
                  We may terminate or suspend your access to the Services at any
                  time, with or without cause, and with or without notice. Upon
                  termination, your right to use the Services will immediately
                  cease.
                </p>
                <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/5 border border-primary/10 mt-4">
                  <HelpCircle className="text-primary shrink-0" size={20} />
                  <p className="text-sm m-0">
                    If you have any questions about these Terms, please contact
                    us at{" "}
                    <a
                      href="mailto:contact@vexelsystems.lk"
                      className="text-primary font-bold hover:underline"
                    >
                      contact@vexelsystems.lk
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </MotionWrapper>

          {/* Footer spacer */}
          <div className="h-24"></div>
        </article>
      </div>
    </main>
  );
}
