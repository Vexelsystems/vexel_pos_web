import Link from "next/link";
import {
  Terminal,
  RefreshCcw,
  CheckCircle,
  AlertTriangle,
  CreditCard,
  Zap,
  Info,
  LifeBuoy,
  HelpCircle,
  Headset,
} from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export const metadata = generatePageMetadata({
  title: "Refund Policy",
  description: "Vexel Systems",
  keywords: [
    "refund policy Vexel Systems",
    "cancellation policy software",
    "service refund terms",
    "money back guarantee Sri Lanka",
    "subscription cancellation",
    "software licensing refunds",
    "Vexel refund guidelines",
    "business fairness policy",
  ],
  path: "/refund-policy",
  noIndex: true,
});

export default function RefundPolicy() {
  return (
    <main className="max-w-[960px] mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap gap-2 mb-6">
        <Link
          className="text-foreground/60 text-sm font-medium leading-normal hover:underline"
          href="/"
        >
          Home
        </Link>
        <span className="text-foreground/40 text-sm font-medium leading-normal">
          /
        </span>
        <span className="text-foreground/60 text-sm font-medium leading-normal">
          Legal
        </span>
        <span className="text-foreground/40 text-sm font-medium leading-normal">
          /
        </span>
        <span className="text-foreground text-sm font-medium leading-normal">
          Refund Policy
        </span>
      </nav>

      {/* Page Heading */}
      <section className="mb-10">
        <MotionWrapper type="scale">
          <div className="flex flex-col gap-3">
            <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Refund & Cancellation{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                Policy
              </span>
            </h1>
            <p className="text-foreground/60 text-lg font-normal leading-normal max-w-2xl">
              Last Updated: January 14, 2026. At Vexel Systems, we strive to
              maintain transparency and fairness in our billing and service
              delivery.
            </p>
          </div>
        </MotionWrapper>
      </section>

      {/* Tabs */}
      <div className="mb-10">
        <div className="flex border-b border-gray-200 dark:border-gray-800 gap-4 md:gap-8 overflow-x-auto whitespace-nowrap">
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-foreground pb-3 pt-4"
            href="#eligibility"
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">
              Eligibility
            </p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-foreground/60 pb-3 pt-4 hover:text-primary transition-colors"
            href="#process"
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">
              Refund Process
            </p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-foreground/60 pb-3 pt-4 hover:text-primary transition-colors"
            href="#cancellation"
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">
              Cancellation
            </p>
          </a>
        </div>
      </div>

      <MotionWrapper type="stagger">
        {/* Section 1: Service Models */}
        <section className="mb-12" id="models">
          <h2 className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
            Service Model Policies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* One-time License Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-800 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Terminal className="text-primary" size={32} />
                <h3 className="text-lg font-bold text-foreground">
                  One-time Licenses
                </h3>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed">
                For perpetual software licenses, we offer a{" "}
                <span className="text-primary font-semibold">
                  14-day money-back guarantee
                </span>{" "}
                from the date of purchase.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground/80">
                    Full refund if license key is NOT activated.
                  </span>
                </li>
                <li className="flex gap-3 text-sm">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground/80">
                    Partial refund if technical issues are unresolved.
                  </span>
                </li>
              </ul>
            </div>
            {/* Subscription Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-800 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <RefreshCcw className="text-primary" size={32} />
                <h3 className="text-lg font-bold text-foreground">
                  Subscription Services
                </h3>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Subscriptions are billed on a recurring basis. Refunds are
                handled based on the billing cycle.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground/80">
                    Full refund within 48 hours of renewal.
                  </span>
                </li>
                <li className="flex gap-3 text-sm">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground/80">
                    Prorated credit for annual plans.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Eligibility */}
        <section className="mb-12 pt-4" id="eligibility">
          <h2 className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
            Eligibility for Refund
          </h2>
          <div className="bg-gray-50 dark:bg-transparent dark:border dark:border-gray-800 rounded-xl p-6 space-y-4">
            <p className="text-foreground/80">
              A refund request will be considered valid under the following
              circumstances:
            </p>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <AlertTriangle className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    Technical Failure
                  </h4>
                  <p className="text-sm text-foreground/60">
                    The software is fundamentally broken and our support team
                    cannot provide a fix within 7 business days.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <CreditCard className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    Duplicate Billing
                  </h4>
                  <p className="text-sm text-foreground/60">
                    You were charged twice for the same service or license due
                    to a system error.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    Service Disruption
                  </h4>
                  <p className="text-sm text-foreground/60">
                    A critical service outage lasting more than 24 consecutive
                    hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Process */}
        <section className="mb-12 pt-4" id="process">
          <h2 className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
            Process for Refund
          </h2>
          <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 bg-primary w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs text-white">
                1
              </div>
              <h4 className="font-bold text-foreground">Submit a Request</h4>
              <p className="text-sm text-foreground/60 mt-1">
                Email{" "}
                <a
                  className="text-primary hover:underline"
                  href="mailto:contact@vexelsystems.lk"
                >
                  contact@vexelsystems.lk
                </a>{" "}
                with your order ID and reason for refund.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 bg-primary w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs text-white">
                2
              </div>
              <h4 className="font-bold text-foreground">Verification</h4>
              <p className="text-sm text-foreground/60 mt-1">
                Our compliance team will review your account activity and
                technical logs within 3 business days.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 bg-primary w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs text-white">
                3
              </div>
              <h4 className="font-bold text-foreground">Refund Issuance</h4>
              <p className="text-sm text-foreground/60 mt-1">
                Once approved, the amount will be credited back to your original
                payment method within 5-10 business days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Cancellation */}
        <section className="mb-12 pt-4" id="cancellation">
          <h2 className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
            Cancellation Terms
          </h2>
          <div className="bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="text-primary" size={24} />
                <p className="text-sm font-semibold text-foreground">
                  Important Information
                </p>
              </div>
              <div className="space-y-4 text-sm text-foreground/60">
                <p>
                  <strong>Notice Period:</strong> Subscriptions must be
                  cancelled at least 24 hours before the next billing cycle to
                  avoid automated charges.
                </p>
                <p>
                  <strong>Data Retention:</strong> Upon cancellation, your data
                  will be retained for 30 days before permanent deletion from
                  our cloud servers.
                </p>
                <p>
                  <strong>Immediate Termination:</strong> You can request
                  immediate account deletion by contacting our privacy officer.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm font-bold text-foreground">
                  Ready to manage your plan?
                </p>
                <p className="text-xs text-foreground/60">
                  Visit the Account Dashboard to change settings.
                </p>
              </div>
              <button className="bg-primary px-6 py-2 rounded-lg text-white font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                Go to Dashboard
              </button>
            </div>
          </div>
        </section>
      </MotionWrapper>

      {/* Contact Support CTA */}
      <MotionWrapper delay={0.2}>
        <div className="mt-16 p-8 rounded-2xl bg-linear-to-br from-primary/20 to-transparent border border-primary/30 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Still have questions?
          </h3>
          <p className="text-foreground/60 mb-6 max-w-lg mx-auto">
            Our legal and billing support team is available 24/5 to help you
            with any policy clarifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform"
            >
              <Headset size={20} />
              Contact Support
            </Link>
            <Link
              href="/faq"
              className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-foreground px-8 py-3 rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <HelpCircle size={20} />
              Read FAQs
            </Link>
          </div>
        </div>
      </MotionWrapper>
    </main>
  );
}
