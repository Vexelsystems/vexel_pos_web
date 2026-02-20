"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  Download,
  ArrowLeft,
  Monitor,
  Apple,
  Smartphone,
  Lock,
  ChevronRight,
  Wifi,
  Database,
} from "lucide-react";
import Link from "next/link";

export default function DownloadClient() {
  return (
    <div className="bg-white dark:bg-zinc-950 font-sans text-slate-900 dark:text-white antialiased selection:bg-primary/20 transition-colors duration-200">
      <main className="relative overflow-hidden pt-24">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-primary/5 to-transparent -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <MotionWrapper type="slideUp">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary mb-8 border border-primary/20">
                Latest Version 3.2.0 Available
              </span>
              <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">
                Manage Your Business <br className="hidden sm:block" /> From
                Anywhere
              </h1>
              <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold leading-relaxed max-w-2xl mx-auto">
                Powerful POS software for every device. Syncs inventory, sales,
                and customer data in real-time across all your platforms.
              </p>
            </MotionWrapper>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Windows",
                desc: "Full desktop application",
                meta: "For Windows 10/11 (64-bit)",
                icon: Monitor,
                color: "text-blue-500",
                btnColor: "bg-primary",
              },
              {
                title: "macOS",
                desc: "Native Mac application",
                meta: "For macOS 11+ (Intel & Apple Silicon)",
                icon: Apple,
                color: "text-slate-900 dark:text-white",
                btnColor: "bg-slate-900 dark:bg-white dark:text-slate-900",
              },
            ].map((platform, i) => {
              const Icon = platform.icon;
              return (
                <MotionWrapper
                  key={i}
                  type="slideUp"
                  delay={i * 0.1}
                  className="group relative flex flex-col bg-slate-50 dark:bg-zinc-900 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20"
                >
                  <div className="w-20 h-20 mb-10 rounded-[1.5rem] bg-white dark:bg-zinc-800 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon
                      className={`w-10 h-10 ${platform.color}`}
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                    {platform.title}
                  </h3>
                  <p className="text-slate-500 dark:text-zinc-400 font-bold mb-1">
                    {platform.desc}
                  </p>
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-10">
                    {platform.meta}
                  </p>
                  <div className="mt-auto">
                    <button
                      className={`w-full py-5 px-6 ${platform.btnColor} ${platform.title === "Windows" ? "text-white" : ""} font-black rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95`}
                    >
                      <Download size={20} />
                      Download Now
                    </button>
                    <div className="mt-6 text-center">
                      <Link
                        className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors inline-flex items-center gap-1"
                        href="#release-notes"
                      >
                        View Release Notes <ChevronRight size={10} />
                      </Link>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}

            {/* Android Card (Coming Soon)
               Strategy: Intent capture for future products.
               Logic: Displayed as disabled/lock-state to manage user expectations.
            */}
            <MotionWrapper
              type="slideUp"
              delay={0.2}
              className="relative flex flex-col bg-slate-50/50 dark:bg-zinc-900/50 rounded-[2.5rem] p-10 border border-slate-100 dark:border-zinc-800 opacity-90 group"
            >
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-200 text-slate-600 dark:bg-zinc-800 dark:text-zinc-400 border border-slate-300 dark:border-zinc-700">
                  Coming Soon
                </span>
              </div>
              <div className="w-20 h-20 mb-10 rounded-[1.5rem] bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shadow-sm grayscale opacity-50">
                <Smartphone
                  className="w-10 h-10 text-green-500"
                  strokeWidth={2.5}
                />
              </div>
              <h3 className="text-3xl font-black text-slate-400 dark:text-zinc-600 mb-3 tracking-tight">
                Android
              </h3>
              <p className="text-slate-400 dark:text-zinc-600 font-bold mb-1">
                Mobile POS App
              </p>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-300 dark:text-zinc-700 mb-10">
                Perfect for tablets
              </p>
              <div className="mt-auto">
                <button
                  className="w-full py-5 px-6 bg-slate-100 dark:bg-zinc-800 text-slate-400 dark:text-zinc-600 font-black rounded-2xl cursor-not-allowed flex items-center justify-center gap-3 border border-slate-200 dark:border-zinc-700"
                  disabled
                >
                  <Lock size={18} />
                  Notify Me
                </button>
              </div>
            </MotionWrapper>
          </div>

          {/* Bottom Section: Requirements & Teaser */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* System Requirements Table */}
            <MotionWrapper
              type="slideRight"
              className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 p-10 shadow-sm"
            >
              <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-4 tracking-tight">
                {/* 
                   SYSTEM REQUIREMENTS ENGINE
                   Strategy: Comparative data display.
                   Logic: Contrast 'Minimum' vs 'Recommended' to push users toward optimal hardware.
                */}
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  <Database size={24} />
                </div>
                System Requirements
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left font-bold">
                  <thead className="text-[10px] text-slate-400 uppercase tracking-[0.3em] bg-slate-50/50 dark:bg-zinc-800/50">
                    <tr>
                      <th className="px-8 py-5 rounded-l-2xl" scope="col">
                        Component
                      </th>
                      <th className="px-8 py-5" scope="col">
                        Minimum
                      </th>
                      <th className="px-8 py-5 rounded-r-2xl" scope="col">
                        Recommended
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600 dark:text-zinc-300">
                    {[
                      {
                        component: "Processor",
                        min: "Intel Core i3 / M1",
                        rec: "Intel Core i5 / M2",
                      },
                      { component: "Memory", min: "4 GB RAM", rec: "8 GB RAM" },
                      {
                        component: "Storage",
                        min: "500 MB Available",
                        rec: "1 GB SSD",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-slate-50 dark:border-zinc-800 last:border-0 group"
                      >
                        <td className="px-8 py-6 font-black text-slate-900 dark:text-white">
                          {row.component}
                        </td>
                        <td className="px-8 py-6">{row.min}</td>
                        <td className="px-8 py-6 text-primary">{row.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                Internet connection required for initial setup and daily
                synchronization.
              </div>
            </MotionWrapper>

            {/* iOS Teaser */}
            <MotionWrapper
              type="slideLeft"
              className="relative bg-slate-900 dark:bg-zinc-900 rounded-[2.5rem] p-12 overflow-hidden flex flex-col justify-center items-center text-center group border border-slate-800"
            >
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 blur-[100px] rounded-full"></div>
              </div>

              <div className="relative z-10 w-full">
                <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Smartphone
                    className="text-white"
                    size={32}
                    strokeWidth={2.5}
                  />
                </div>
                <h4 className="text-3xl font-black text-white mb-4 tracking-tight">
                  iOS App
                </h4>
                <p className="text-slate-400 font-bold text-sm mb-10 leading-relaxed max-w-[200px] mx-auto">
                  Experience Vexel POS on your iPhone and iPad. Seamlessly
                  integrated.
                </p>

                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest backdrop-blur-md text-white/70">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Coming Later This Year
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </main>
    </div>
  );
}

// Custom icon components removed as they are now imported from lucide-react or replaced
