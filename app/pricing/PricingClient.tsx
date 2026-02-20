"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { CheckCircle2, Info, Headset } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const tiers = [
  {
    name: "Vexel Startup",
    description: "Best for small petti kade just starting out.",
    monthlyPrice: "4,000",
    yearlyPrice: "35,000",
    cta: "Start Basic",
    highlight: false,
    features: [
      "2 Users",
      "Single",
      "1,000 Proucts",
      "Web POS",
      "Basic Reports",
    ],
  },
  {
    name: "Vexel Business",
    description: "Perfect for growing retail shops needing reliability.",
    monthlyPrice: "6,000",
    yearlyPrice: "65,000",
    cta: "Get Started",
    highlight: true,
    mostPopular: true,
    features: [
      "Everything in Startup, plus:",
      "5 Staff Accounts",
      "Hybrid POS (Works faster)",
      "Unlimited Products",
      "Offline Mode",
      "Client Portal",
      "Priority Support",
    ],
  },
];

/**
 * PRICING CLIENT COMPONENT
 *
 * Functional Overview:
 * - Renders the pricing grid with Monthly/Yearly billing cycle toggle.
 * - Logic: Dynamically calculates savings percentage and absolute LKR savings for yearly billing.
 * - UI: Uses highly visual cards with high-contrast highlighting for the 'Business' tier.
 */
export default function PricingClient() {
  /**
   * BILLING CYCLE STATE
   * Controls whether monthly or yearly prices are displayed globally in the grid.
   */
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <div className="font-sans bg-white dark:bg-zinc-950 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col selection:bg-secondary/20">
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MotionWrapper type="slideUp">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              Simple pricing for your shop
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
              Choose the perfect plan for your business. From small petti kade
              to island-wide franchises.
            </p>
          </MotionWrapper>
        </div>

        {/* Billing Toggle */}
        <MotionWrapper
          type="slideUp"
          delay={0.2}
          className="flex justify-center mb-16"
        >
          <div className="bg-slate-100 dark:bg-zinc-900 p-1.5 rounded-full inline-flex items-center relative">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 z-10 ${
                billingCycle === "monthly"
                  ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-xl"
                  : "text-slate-500 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative px-8 py-2.5 rounded-full text-sm font-black transition-all duration-300 z-10 ${
                billingCycle === "yearly"
                  ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-xl"
                  : "text-slate-500 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Billed Yearly
              <span className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] px-2.5 py-1 rounded-full font-black shadow-lg border-2 border-white dark:border-zinc-800">
                Save up to 33%
              </span>
            </button>
          </div>
        </MotionWrapper>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full items-stretch">
          {tiers.map((tier, idx) => {
            /**
             * SAVINGS CALCULATION ENGINE
             * Strategy: Derive annual value from monthly string and compare with discounted yearly price.
             * Logic:
             * 1. Sanitize price strings (remove commas) to integers.
             * 2. Compute theoretical annual cost at monthly rate.
             * 3. Calculate absolute LKR savings.
             * 4. Compute percentage savings for visual reinforcement.
             */
            const monthlyVal = parseInt(tier.monthlyPrice.replace(/,/g, ""));
            const yearlyVal = parseInt(tier.yearlyPrice.replace(/,/g, ""));
            const annualCostIfMonthly = monthlyVal * 12; // Base baseline for comparison.
            const savings = annualCostIfMonthly - yearlyVal;
            const savingsPercent = Math.round(
              (savings / annualCostIfMonthly) * 100,
            );

            return (
              <MotionWrapper
                key={tier.name}
                type="slideUp"
                delay={0.4 + idx * 0.1}
                className="h-full"
              >
                <div
                  className={`relative h-full flex flex-col p-8 rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02] border
                ${
                  tier.highlight
                    ? "bg-slate-50 dark:bg-zinc-900 border-secondary/20 dark:border-secondary/40 shadow-2xl scale-105 z-10"
                    : "bg-white dark:bg-zinc-950 border-gray-200 dark:border-zinc-800 hover:shadow-xl"
                }
              `}
                >
                  {tier.mostPopular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3">
                      <div className="bg-yellow-400 text-yellow-900 text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest border-2 border-white dark:border-zinc-800">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3
                      className={`text-xl font-black tracking-tight ${tier.highlight ? "text-secondary" : "text-slate-900 dark:text-white"}`}
                    >
                      {tier.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-medium min-h-[40px]">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-8 p-6 rounded-3xl bg-white/50 dark:bg-black/20 border border-slate-100 dark:border-zinc-800 relative overflow-hidden">
                    <div className="flex items-baseline relative z-10">
                      {/* Currency Label */}
                      <span className="text-sm font-black text-slate-400 dark:text-zinc-600 mr-1.5">
                        LKR
                      </span>

                      {/* 
                        PRICE TOGGLE LOGIC
                        - Controls: billingCycle state.
                        - Impact: Shifts display between monthly snippet and annual bulk price.
                      */}
                      <span
                        className={`font-black tracking-tighter text-slate-900 dark:text-white ${tier.highlight ? "text-5xl" : "text-4xl"}`}
                      >
                        {billingCycle === "monthly"
                          ? tier.monthlyPrice
                          : tier.yearlyPrice}
                      </span>

                      {/* Interval Suffix */}
                      <span className="ml-1 text-sm font-black text-slate-400 dark:text-zinc-600 uppercase tracking-wide">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <p className="text-slate-400 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        per {billingCycle === "monthly" ? "month" : "year"}
                      </p>

                      {billingCycle === "yearly" && (
                        <div className="inline-flex items-center gap-2 mt-1">
                          <span className="px-2 py-1 rounded-md bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-wide">
                            Save {savingsPercent}%
                          </span>
                          <span className="text-[10px] font-bold text-slate-500">
                            Save LKR {savings.toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 
                    CTA ROUTING LOGIC
                    - Strategy: Dynamic href based on plan tier.
                    - Logic: 
                      1. Standard plans go to self-serve registration.
                      2. Enterprise plans require manual sales touchpoint (contact form).
                  */}
                  <Link
                    className={`block w-full py-4 text-center font-black rounded-2xl transition-all duration-300 active:scale-[0.98] mb-8
                    ${
                      tier.highlight
                        ? "bg-secondary text-white shadow-xl shadow-secondary/20 hover:bg-secondary/90"
                        : "bg-transparent border-2 border-secondary/20 text-secondary hover:bg-secondary hover:text-white hover:border-secondary"
                    }
                  `}
                    href={
                      tier.name === "Vexel Enterprise"
                        ? "/contact"
                        : "/register"
                    }
                  >
                    {tier.cta}
                  </Link>

                  <div className="space-y-6 flex-grow">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      What's included
                    </p>
                    <ul className="space-y-4">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-green-500 shrink-0 mt-0.5"
                          />
                          <span
                            className={`text-sm leading-tight ${feature.includes("plus:") ? "font-black text-slate-400 dark:text-zinc-600" : "font-bold text-slate-700 dark:text-slate-300"}`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Trust Footer */}
        <MotionWrapper type="slideUp" delay={0.8} className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 bg-slate-50 dark:bg-zinc-900/50 px-10 py-6 rounded-[2rem] border border-slate-100 dark:border-zinc-800 shadow-xl">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative h-10 w-10 rounded-full ring-4 ring-white dark:ring-zinc-900 overflow-hidden bg-slate-200"
                >
                  <Image
                    src={`https://lh3.googleusercontent.com/aida-public/${i === 1 ? "AB6AXuDMY4ixb882v1ALixJ-jXyNP1YdB_hOmw_eaTCVBid5xRasWr45EYTE6vP3MIT2GEgia_0yga5t3EGEAoKaFKLy2sfb7jS3cl1cM2inxtvYoWS4G5z2M0KhAD3tB4DQsLWPtU4tDrAAAx4cNAfVAWGeyKYT4LsaPXSQxxt31f1drBdFImkfbQn7843zMCIymj_ZpY5zBbQMfL2KriIEf1WeWwxWb-iP8cibfEJqnCiFCgArdx5f05LveYdcS7g2mO3ostFqnr5CFhM" : i === 2 ? "AB6AXuC7g6N821omPCzooki6HirJyeh-utyreyqVgWnh7S5Obni5Q7hPKwTx4dR9zDV9JKlhluzjbr-RYJ4vHdyKt3rfVVNicIX44vFnx0rKAUiqy5x_2-kcKsizmDvDNk4Qf32o9IvYmtuZdD_PDPdPxZGph1XeX3zSAz9DHwRnR5v1qOC3ReCLarja-dkzsrE0cjs-yZRufWOag0BIy5rwIIS49bJPCOdmsKnGg1M2nrcZMNfiG66XOj1D88s55tW5jKBTnaKYUsd9XdY" : "AB6AXuDBF2Twn6GbeBXyolckCxDHy9GVEYZqJMgNA97SoF_NZuhfGAicprwP4IBj96cI8W6Ycp9Gm3m2YhCo2e7rM-g7UG8y7SudpmyAiUqLcY5xaqxZKEbDAxalueGqXFjqOGOMGacolz0yvZLq_QoQL9YOvudaGnzM36zVCtXtYX5BHBRqVH_jQhyeGx6OzWXMpDxAizfqV1ORvF7TTwWwWIAbVWOCmJKJ42EeiTSBp6Ky6K1yMk3ZBfRvwnoN5U9vbwxpcYtRVho-GgE"}`}
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="h-10 w-10 rounded-full ring-4 ring-white dark:ring-zinc-900 bg-secondary/10 flex items-center justify-center text-[10px] font-black text-secondary border border-secondary/20">
                +500
              </div>
            </div>
            <div className="text-sm font-bold text-slate-600 dark:text-slate-400">
              Trusted by{" "}
              <span className="text-slate-900 dark:text-white font-black">
                500+ businesses
              </span>{" "}
              in Sri Lanka.
              <span className="hidden md:inline mx-4 text-slate-200 dark:text-zinc-800">
                |
              </span>
              <span className="block md:inline mt-2 md:mt-0 text-secondary font-black flex items-center justify-center md:justify-start gap-2">
                <Headset size={16} />
                24/7 Local Support
              </span>
            </div>
          </div>
        </MotionWrapper>
      </main>
    </div>
  );
}
