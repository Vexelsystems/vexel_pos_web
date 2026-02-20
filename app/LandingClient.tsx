"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  CheckCircle2,
  Play,
  Monitor,
  Smartphone,
  Laptop,
  ArrowRight,
  Bolt,
  Package,
  Users,
  BarChart3,
  CreditCard,
  Truck,
  ChevronRight,
  Star,
  Globe,
  Rocket,
  ShieldCheck,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUpRight,
  WifiOff,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { companyDetails } from "@/lib/companydetails";

/**
 * LANDING CLIENT COMPONENT
 *
 * Functional Overview:
 * - Implements a high-conversion SaaS landing page.
 * - Sections Included: Hero (Value Prop), Metrics (Social Proof), Video (Product Demo),
 *   Platform Support (Multi-device), Feature Grid (Functional depth),
 *   Industry Solutions (Vertical focus), and Testimonials.
 * - UI/UX: Uses `MotionWrapper` for entrance animations and standardizes on the Vexel design system.
 */
export default function LandingClient() {
  return (
    <div className="bg-white dark:bg-zinc-950 font-sans text-slate-800 dark:text-slate-200 antialiased selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionWrapper type="slideUp">
            {/* 
              NEW FEATURE BADGE LOGIC
              - Visual Strategy: Pulsing animation to draw attention.
              - Logic: Purely presentation, but used as a hook for marketing recent updates.
            */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-10 uppercase tracking-[0.2em] shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New: Integrated Delivery Sync is live!
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.85]">
              Transform Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-500 to-indigo-500">
                Business
              </span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-slate-500 dark:text-zinc-400 max-w-3xl mx-auto mb-16 font-bold leading-relaxed">
              Vexel is a{" "}
              <span className="text-secondary">Sri Lanka-based company</span>{" "}
              providing the all-in-one cloud POS platform designed for local
              retail and hospitality. Simplify operations, track inventory in
              real-time, and grow effortlessly.
            </p>

            {/* 
              CTA LOGIC
              - Primary: Link to registration flow (`/register`).
              - Secondary: Link to demo request (`/demo`).
              - Logic: Tracking high-intent user paths.
            */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20 items-center">
              <Link
                className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-[2.5rem] text-xl font-black transition-all shadow-2xl shadow-primary/30 transform hover:scale-105 active:scale-95 flex items-center gap-2"
                href="/register"
              >
                Get Started Free <ArrowUpRight size={24} />
              </Link>
              <Link
                className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 px-10 py-5 rounded-[2.5rem] text-xl font-black transition-all transform hover:scale-105 active:scale-95"
                href="/demo"
              >
                Request Demo
              </Link>
            </div>
          </MotionWrapper>

          {/* 
            METRICS LOGIC (SOCIAL PROOF)
            - Purpose: Establish reliability and scale.
            - Logic: Display hard stats that map to business KPIs.
          */}
          <MotionWrapper
            type="slideUp"
            delay={0.4}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto border-t border-slate-100 dark:border-zinc-900 pt-20"
          >
            <div className="p-4 group">
              <div className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter group-hover:text-primary transition-colors">
                500+
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                Businesses Trusted
              </div>
            </div>
            <div className="p-4 md:border-x border-slate-100 dark:border-zinc-900 group">
              <div className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter group-hover:text-primary transition-colors">
                50K+
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                Daily Transactions
              </div>
            </div>
            <div className="p-4 group">
              <div className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter group-hover:text-primary transition-colors">
                99.9%
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                System Uptime
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 bg-slate-50/50 dark:bg-zinc-950/50 border-y border-slate-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <MotionWrapper type="slideRight" className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
                See Vexel POS in{" "}
                <span className="text-primary italic">Action</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-zinc-400 mb-12 font-bold leading-relaxed">
                Experience how seamless your daily operations can be. From
                billing to detailed reporting, Vexel handles the complexity so
                you can focus on your customers.
              </p>
              <ul className="grid gap-6">
                {[
                  {
                    title: "Lightning Fast Billing",
                    desc: "Process orders in seconds, reducing queue times.",
                    icon: Rocket,
                  },
                  {
                    title: "Works Offline",
                    desc: "Keep selling even when the internet goes down. Syncs automatically.",
                    icon: WifiOff,
                  },
                  {
                    title: "Inventory Management",
                    desc: "Real-time stock alerts and supplier management.",
                    icon: Package,
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center mr-6 group-hover:bg-green-500 group-hover:text-white transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-zinc-400 font-bold mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </MotionWrapper>

            {/* 
              DEMO VIDEO LOGIC
              - Strategy: Interactive thumbnail with hover effects.
              - Logic: Placeholder for video player integration.
            */}
            <MotionWrapper
              type="slideLeft"
              className="order-1 lg:order-2 relative group cursor-pointer"
            >
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-blue-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl ring-8 ring-slate-100 dark:ring-zinc-800">
                {/* Mock Image Placeholder */}
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <Play
                    size={80}
                    className="text-white fill-white/20 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-white/60 uppercase tracking-widest">
                      Feature Tour
                    </div>
                    <div className="text-xl font-black text-white tracking-tight">
                      The Modern Experience
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-[10px] font-black text-white border border-white/20 uppercase tracking-widest">
                    3:45 MINS
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
              Available on{" "}
              <span className="text-primary italic">All Devices</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 dark:text-zinc-400 font-bold max-w-2xl mx-auto">
              Run your business from anywhere, on any hardware you prefer.
            </p>
          </div>

          {/* 
            PLATFORM GRID LOGIC
            - Data Structure: Array of platform objects containing metadata (OS, description, status).
            - UI Logic: Map through array to generate cards with accessibility-aware labels.
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Windows",
                desc: "Powerful desktop app for high-volume checkout counters.",
                icon: Monitor,
                color: "bg-blue-500",
                status: "Available Now",
              },
              {
                title: "macOS",
                desc: "Optimized for MacBook and iMac with native performance.",
                icon: Laptop,
                color: "bg-indigo-500",
                status: "Available Now",
              },
              {
                title: "Android POS",
                desc: "Mobile flexibility for tableside ordering and terminals.",
                icon: Smartphone,
                color: "bg-green-500",
                status: "Coming Soon",
              },
            ].map((card, i) => (
              <MotionWrapper
                key={i}
                type="slideUp"
                delay={i * 0.1}
                className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group flex flex-col items-center text-center"
              >
                <div
                  className={`h-20 w-20 ${card.color} rounded-[1.5rem] flex items-center justify-center mb-8 shadow-2xl ${card.color}/30 transform group-hover:rotate-12 transition-transform text-white`}
                >
                  <card.icon size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-500 dark:text-zinc-400 mb-8 font-bold leading-relaxed">
                  {card.desc}
                </p>
                <span
                  className={`inline-flex items-center px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${card.status === "Available Now" ? "bg-green-500/10 text-green-600" : "bg-amber-500/10 text-amber-600"} border border-current/20 mt-auto`}
                >
                  {card.status}
                </span>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-slate-50/50 dark:bg-zinc-950/50 border-y border-slate-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">
              What's Inside?
            </span>
            <h2 className="mt-4 text-4xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter">
              Everything for <br />{" "}
              <span className="text-primary italic">Modern Retail</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Orders",
                desc: "Streamlined checkout flow designed for peak hours.",
                icon: Bolt,
                color: "text-blue-500 bg-blue-50",
              },
              {
                title: "Smart Inventory",
                desc: "Automated low-stock alerts and smart ordering.",
                icon: Package,
                color: "text-indigo-500 bg-indigo-50",
              },
              {
                title: "Insights",
                desc: "Track purchase history and preferences for loyalty.",
                icon: Users,
                color: "text-purple-500 bg-purple-50",
              },
              {
                title: "Live Analytics",
                desc: "Real-time dashboard showing sales and profit.",
                icon: BarChart3,
                color: "text-pink-500 bg-pink-50",
              },
              {
                title: "Flex Payments",
                desc: "Accept cash, cards, QR, and digital wallets.",
                icon: CreditCard,
                color: "text-orange-500 bg-orange-50",
              },
              {
                title: "Delivery Sync",
                desc: "Integrated driver tracking for smooth delivery.",
                icon: Truck,
                color: "text-green-500 bg-green-50",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-zinc-800 hover:scale-[1.02] hover:shadow-2xl transition-all group"
              >
                <div
                  className={`w-16 h-16 ${feat.color} dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6`}
                >
                  <feat.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-slate-500 dark:text-zinc-400 font-bold leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-20 text-center tracking-tighter">
            Industry-Specific <span className="text-primary italic">Power</span>
          </h2>
          {/* 
            INDUSTRY SOLUTIONS LOGIC
            - Strategy: Vertical-specific sub-pages (implied).
            - Logic: Mock metrics (e.g., '60%') shown via inline-style progress bars to indicate market penetration or relevance.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Restaurants",
                desc: "Table management & KOT",
                count: "120+",
                h: "85%",
                icon: Utensils,
              },
              {
                title: "Supermarkets",
                desc: "Bulk inventory & scale",
                count: "200+",
                h: "92%",
                icon: ShoppingCart,
              },
              {
                title: "Fashion Retail",
                desc: "Size matrix & Barcodes",
                count: "80+",
                h: "60%",
                icon: Shirt,
              },
              {
                title: "Pharmacies",
                desc: "Expiry alerts & Batches",
                count: "100+",
                h: "70%",
                icon: Pill,
              },
            ].map((industry, i) => (
              <div
                key={i}
                className="relative group rounded-[2.5rem] overflow-hidden aspect-[4/5] cursor-pointer shadow-xl ring-8 ring-slate-100 dark:ring-zinc-900"
              >
                <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                  {/* Abstract background instead of external images */}
                  <div className="absolute inset-0 opacity-20 bg-linear-to-br from-primary via-indigo-500 to-purple-500"></div>
                  <div className="text-white/20">
                    <Monitor size={120} strokeWidth={1} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="text-white/60 text-sm font-bold mb-6">
                    {industry.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: industry.h }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                      {industry.count} Clients
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50/50 dark:bg-zinc-950/50 border-t border-slate-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white text-center mb-24 tracking-tighter">
            Trusted by <br />{" "}
            <span className="text-primary italic">Local Heroes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Dinesh Perera",
                role: "Owner, Green Leaf Cafe",
                quote:
                  "Vexel POS transformed how we manage our rush hour. KDS integration reduced errors to zero.",
              },
              {
                name: "Sarah J.",
                role: "Manager, Fashion House",
                quote:
                  "The inventory insights are incredible. We now know exactly what's selling and what's not.",
              },
              {
                name: "Kamal Silva",
                role: "CEO, Silva Grocers",
                quote:
                  "Switching to Vexel was the best decision. Support team is always available during power cuts.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Users className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white tracking-tight">
                      {t.name}
                    </h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-slate-500 dark:text-zinc-400 font-bold leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="mt-8 flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={16}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(19,91,236,0.3)]">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[100px]"></div>

            <MotionWrapper type="slideUp" className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
                Ready to Upgrade <br /> Your Business?
              </h2>
              <p className="text-2xl text-white/70 font-bold mb-16 max-w-3xl mx-auto leading-relaxed">
                Join 500+ businesses across Sri Lanka growing with Vexel POS.
                Start your Vexel journey today.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                <Link
                  className="bg-white text-primary hover:bg-slate-50 px-12 py-6 rounded-[2.5rem] text-2xl font-black transition-all shadow-2xl transform hover:scale-105 active:scale-95"
                  href="/register"
                >
                  Get Started
                </Link>
                <Link
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 rounded-[2.5rem] text-2xl font-black transition-all backdrop-blur-md transform hover:scale-105 active:scale-95"
                  href="/demo"
                >
                  Schedule a Call
                </Link>
              </div>
              <p className="mt-12 text-[10px] font-black text-white/50 uppercase tracking-[0.4em]">
                Integrated with {companyDetails.name} Support ecosytem
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}

// Inline missing lucide icons for simplicity in this artifact
const ShoppingCart = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3.97 2 1.41 1.41" />
    <path d="M7.47 5.47 9 7" />
    <path d="M19.07 4.93 17 7" />
    <path d="M14 13h4" />
    <path d="M15 17h3" />
    <path d="M16 21h2" />
    <path d="M17 13h3" />
    <path d="M18 17h2" />
    <path d="M18 21h2" />
    <path d="M20.97 5.47 19.56 4.06" />
    <path d="M3 21h18" />
    <path d="M5 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3Z" />
  </svg>
);
const Shirt = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z" />
  </svg>
);
const Pill = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);
const Utensils = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);
