import Image from "next/image";
import {
  ChevronRight,
  Info,
  HelpCircle,
  Shield,
  Settings,
  Timer,
  Trash2,
  RotateCcw,
  Cookie,
  X,
} from "lucide-react";

/**
 * COOKIE POLICY PAGE
 *
 * Functional Overview:
 * - Navigation: Sidebar-based navigation for larger screens using sticky positioning.
 * - Interactivity: Includes a preview of the "Consent Banner" UI component at the viewport bottom.
 * - Content: Technical breakdown of cookie types (Essential vs Performance) using comparison tables.
 */

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Cookie Policy",
  description: "Vexel Systems",
  keywords: [
    "cookie policy",
    "website cookies Vexel Systems",
    "privacy cookies Sri Lanka",
    "GDPR compliance Sri Lanka",
    "website tracking cookies",
    "user consent cookies",
    "session cookies",
    "performance cookies",
    "third-party cookies",
    "website data policy",
    "digital privacy policy",
    "cookies Sri Lanka",
    "cookie management",
    "Vexel Systems privacy",
    "website cookie consent",
    "cookies transparency",
    "user data cookies",
  ],
  path: "/cookie-policy",
  noIndex: true,
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function CookiePolicy() {
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
              Legal
            </span>
          </div>

          <MotionWrapper type="scale">
            <div className="flex flex-col items-center overflow-hidden text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 text-center">
                <span className="text-foreground">Cookie </span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-500 to-purple-600 pb-2">
                  Policy
                </span>
              </h1>

              <p className="text-foreground/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed mb-4">
                Transparency at Vexel Systems: How we use cookies to improve
                your digital experience.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12 flex flex-col lg:flex-row gap-12">
        {/* Side Navigation */}
        <aside className="lg:w-72 shrink-0">
          <MotionWrapper delay={0.2} className="sticky top-24">
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground text-sm font-bold uppercase tracking-widest mb-4">
                  Policy Navigation
                </h3>
                <p className="text-foreground/60 text-xs mb-6">
                  Last updated: January 14, 2026
                </p>
                <nav className="flex flex-col gap-1">
                  <a
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20"
                    href="#intro"
                  >
                    <Info size={20} />
                    <span className="text-sm font-semibold">Introduction</span>
                  </a>
                  <a
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    href="#what-are"
                  >
                    <HelpCircle size={20} />
                    <span className="text-sm font-medium">
                      What are Cookies
                    </span>
                  </a>
                  <a
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    href="#types"
                  >
                    <Shield size={20} />
                    <span className="text-sm font-medium">Cookie Types</span>
                  </a>
                  <a
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    href="#manage"
                  >
                    <Settings size={20} />
                    <span className="text-sm font-medium">
                      Managing Preferences
                    </span>
                  </a>
                </nav>
              </div>
              <div className="p-6 rounded-xl bg-inner-box border border-gray-200 dark:border-gray-800">
                <h4 className="text-foreground text-sm font-bold mb-2">
                  Need Help?
                </h4>
                <p className="text-foreground/60 text-xs leading-relaxed mb-4">
                  Questions about your privacy or data usage? Contact our legal
                  team.
                </p>
                <a
                  className="text-primary text-xs font-bold hover:underline"
                  href="/contact"
                >
                  Contact Privacy Officer
                </a>
              </div>
            </div>
          </MotionWrapper>
        </aside>

        {/* Content Area */}
        <article className="flex-1 max-w-4xl space-y-16">
          <MotionWrapper delay={0.3}>
            <section id="intro">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                1. Introduction
              </h2>
              <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
                <p>
                  At Vexel Systems, we believe in being clear and open about how
                  we collect and use data related to you. In the spirit of
                  transparency, this policy provides detailed information about
                  how and when we use cookies on our websites.
                </p>
                <p>
                  This Cookie Policy applies to any Vexel Systems product or
                  service that links to this policy or incorporates it by
                  reference. By continuing to use our services, you are agreeing
                  to the use of cookies and similar technologies for the
                  purposes described in this policy.
                </p>
              </div>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <section id="what-are">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                2. What are cookies?
              </h2>
              <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
                <p>
                  Cookies are small pieces of text sent by your web browser by a
                  website you visit. A cookie file is stored in your web browser
                  and allows the service or a third-party to recognize you and
                  make your next visit easier and the service more useful to
                  you.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/50">
                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <Timer className="text-primary" size={20} /> Persistent
                      Cookies
                    </h3>
                    <p className="text-sm">
                      These stay on your device for a set period or until you
                      delete them. They help us recognize you over multiple
                      sessions.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/50">
                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <Trash2 className="text-primary" size={20} /> Session
                      Cookies
                    </h3>
                    <p className="text-sm">
                      These are temporary and are deleted as soon as you close
                      your web browser. They help site navigation.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.5}>
            <section id="types">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                3. Cookie Types
              </h2>
              {/* Cookie Category 1 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded text-xs font-bold">
                    ESSENTIAL
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    Strictly Necessary Cookies
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm mb-6">
                  These cookies are essential for the website to function and
                  cannot be switched off in our systems. They are usually only
                  set in response to actions made by you which amount to a
                  request for services.
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-inner-box text-xs font-bold uppercase text-foreground/60">
                      <tr>
                        <th className="px-6 py-4">Cookie</th>
                        <th className="px-6 py-4">Provider</th>
                        <th className="px-6 py-4">Purpose</th>
                        <th className="px-6 py-4">Expiry</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-800">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                        <td className="px-6 py-4 font-mono text-primary">
                          vxl_sess_id
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          Vexel Systems
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          Maintains user session state and authentication.
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          Session
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                        <td className="px-6 py-4 font-mono text-primary">
                          csrf_token
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          Vexel Systems
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          Prevents Cross-Site Request Forgery attacks.
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          Session
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Cookie Category 2 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-xs font-bold">
                    PERFORMANCE
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    Analytics & Performance Cookies
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm mb-6">
                  These cookies allow us to count visits and traffic sources so
                  we can measure and improve the performance of our site. They
                  help us to know which pages are the most and least popular.
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-inner-box text-xs font-bold uppercase text-foreground/60">
                      <tr>
                        <th className="px-6 py-4">Cookie</th>
                        <th className="px-6 py-4">Provider</th>
                        <th className="px-6 py-4">Purpose</th>
                        <th className="px-6 py-4">Expiry</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-800">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                        <td className="px-6 py-4 font-mono text-primary">
                          _ga
                        </td>
                        <td className="px-6 py-4 text-foreground/80">Google</td>
                        <td className="px-6 py-4 text-foreground/80">
                          Distinguishes unique users and session data.
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          2 Years
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                        <td className="px-6 py-4 font-mono text-primary">
                          _hjSession
                        </td>
                        <td className="px-6 py-4 text-foreground/80">Hotjar</td>
                        <td className="px-6 py-4 text-foreground/80">
                          Anonymously tracks user flow on the page.
                        </td>
                        <td className="px-6 py-4 text-foreground/80">
                          30 Minutes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </MotionWrapper>

          <MotionWrapper delay={0.6}>
            <section id="manage">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                4. Managing Preferences
              </h2>
              <div className="prose dark:prose-invert max-w-none text-foreground/70 leading-relaxed space-y-4">
                <p>
                  Most browsers allow you to control cookies through their
                  settings preferences. However, if you limit the ability of
                  websites to set cookies, you may worsen your overall user
                  experience, since it will no longer be personalized to you.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                    <RotateCcw size={20} />
                    Revoke Current Consent
                  </button>
                  <button className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-foreground font-bold px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                    Learn More About Ad Choices
                  </button>
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
