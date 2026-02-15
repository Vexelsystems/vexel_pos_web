"use client";

import { companyDetails } from "@/lib/companydetails";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  Laptop,
  Play,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { showSuccess, showInfo } from "@/lib/toast-utils";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DemoClient() {
  return (
    <div className="font-sans bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex flex-col selection:bg-primary/20">
      {/* Navigation */}
      <nav className="w-full bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src={companyDetails.logos.main}
                  alt={`${companyDetails.name} Logo`}
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                Vexel<span className="text-primary">Sys</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium"
                href="/#solutions"
              >
                Product
              </Link>
              <Link
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium"
                href="/#solutions"
              >
                Solutions
              </Link>
              <Link
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium"
                href="/pricing"
              >
                Pricing
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium hidden sm:block"
                href="/login"
              >
                Log in
              </Link>
              <Link
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary/20"
                href="/get-started"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <MotionWrapper type="slideUp">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                Interactive Demo
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                Experience Vexel POS in{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                  Action
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                See how Vexel streamlines operations and boosts sales in under 2
                minutes. Watch the overview or dive into the self-guided tour
                below.
              </p>
            </MotionWrapper>

            {/* Video Player Placeholder */}
            <MotionWrapper type="slideUp" delay={0.2}>
              <div className="video-container relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group cursor-pointer border border-slate-200 dark:border-zinc-800">
                <Image
                  alt="Modern retail store counter with POS system"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlpWbhu3Vu2X2nT76QzLa2ItnABbrBLX0psqF63eU2YqcMfytp-KNXOzEjciIBXSpwAN1me_AoY2c15z7fAZNUZx4cw8ZFrBSwaYfkqosD2nqsJK78EUqdvLQIgNEMVIcmLbF-ikFT2Hgq0SPzVswU84feutgVEUdeDYNHX0ZrFL2OYQALw9mphJdOvZUu1Sj_2Pp22TkYJwY-ZZ4cgTv2tT6NF2zK4kewIS4d8Q8ioXB76PHCF2uAAmBrycyouvTJlL2lXaTppq0"
                  fill
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/95 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white fill-white ml-1" size={32} />
                  </div>
                </div>
                {/* Video UI Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                  <div className="flex items-end justify-between">
                    <div className="text-left">
                      <p className="text-white font-bold text-xl tracking-tight">
                        Vexel Platform Overview
                      </p>
                      <p className="text-slate-300 text-sm">
                        2:14 • 4K Quality
                      </p>
                    </div>
                    <span className="text-white/80 text-xs font-bold bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10 uppercase tracking-widest">
                      Preview
                    </span>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Dual Section Container */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-20">
            {/* Left: Self-Guided Tour */}
            <MotionWrapper
              type="slideRight"
              delay={0.4}
              className="flex flex-col h-full"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Laptop size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    Self-Guided Tour
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
                  Take the wheel. Click through our interactive interface to see
                  exactly how your staff will use Vexel daily.
                </p>
                <div className="flex flex-col gap-4 mb-10 transition-all">
                  {[
                    "Watch real transactions being processed",
                    "Discover powerful reporting features",
                    "Test inventory management workflows",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="text-slate-700 dark:text-slate-200 font-bold text-sm">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Laptop Mockup */}
              <div className="relative group mt-auto">
                <div className="relative bg-slate-800 dark:bg-zinc-900 rounded-t-2xl p-3 pb-0 shadow-2xl mx-auto max-w-[95%] border border-slate-700 dark:border-zinc-800">
                  <div className="bg-black rounded-t-xl p-1 border-b border-slate-700 relative overflow-hidden aspect-[16/10]">
                    <div className="bg-white w-full h-full relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-700 ease-out origin-bottom">
                      <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 justify-between">
                        <div className="w-20 h-3 bg-slate-200 rounded"></div>
                        <div className="flex gap-2">
                          <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-[8px]">
                            JS
                          </div>
                          <div className="size-6 rounded-lg bg-slate-100"></div>
                        </div>
                      </div>
                      <div className="p-4 grid grid-cols-4 gap-4 h-full">
                        <div className="col-span-1 space-y-2">
                          {[0, 1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className={`h-8 rounded-lg ${i === 1 ? "bg-primary/10 border-l-4 border-primary" : "bg-slate-50"}`}
                            ></div>
                          ))}
                        </div>
                        <div className="col-span-3 bg-slate-50 rounded-xl border border-slate-200 p-3 relative overflow-hidden">
                          <div className="grid grid-cols-3 gap-2">
                            {[...Array(6)].map((_, i) => (
                              <div
                                key={i}
                                className="aspect-square bg-white rounded-lg shadow-xs border border-slate-100"
                              ></div>
                            ))}
                          </div>
                          <div className="absolute top-1/2 left-1/2 animate-bounce">
                            <Play
                              className="text-primary fill-primary rotate-90"
                              size={24}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                        <button className="bg-white text-primary font-black py-4 px-8 rounded-xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 active:scale-95">
                          Start Interactive Tour
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-5 bg-slate-700 dark:bg-zinc-800 rounded-b-2xl mx-auto w-full shadow-lg relative z-10 border-t border-slate-900">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-slate-600 rounded-b-xl"></div>
                </div>
              </div>
              <div className="mt-10">
                <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 border-2 border-primary text-primary font-black rounded-xl hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95">
                  Launch Full Screen Tour
                </button>
              </div>
            </MotionWrapper>

            {/* Right: Book Personal Demo */}
            <MotionWrapper
              type="slideLeft"
              delay={0.6}
              className="bg-slate-50 dark:bg-zinc-900/50 rounded-3xl p-8 border border-slate-200 dark:border-zinc-800 shadow-inner h-full flex flex-col"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Calendar size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    Book a Personal Demo
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                  Need a tailored walkthrough? Schedule a 15-minute call with a
                  product specialist.
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-xl border border-slate-200 dark:border-zinc-800 overflow-hidden flex-grow flex flex-col relative">
                <div className="p-5 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center bg-slate-50/50 dark:bg-zinc-900/50">
                  <span className="font-black text-slate-800 dark:text-white text-lg tracking-tight">
                    March 2026
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-white dark:hover:bg-zinc-800 rounded-lg text-slate-500 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-zinc-700">
                      <ChevronLeft size={20} />
                    </button>
                    <button className="p-2 hover:bg-white dark:hover:bg-zinc-800 rounded-lg text-slate-500 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-zinc-700">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-7 gap-2 text-center mb-4">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                      <span
                        key={day}
                        className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {[...Array(31)].map((_, i) => {
                      const day = i + 1;
                      const isSelected = day === 15;
                      const isPast = day < 15;
                      return (
                        <button
                          key={i}
                          disabled={isPast}
                          className={`aspect-square flex items-center justify-center rounded-xl font-bold transition-all relative group
                              ${isSelected ? "bg-primary text-white shadow-lg shadow-primary/30" : ""}
                              ${isPast ? "text-slate-300 dark:text-zinc-800 cursor-not-allowed" : "text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary"}
                            `}
                        >
                          {day}
                          {!isSelected && !isPast && (
                            <div className="absolute bottom-1.5 size-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-zinc-800 p-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4Px text-center">
                    Available Times (Mar 15, 2026)
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {["09:00 AM", "10:30 AM", "02:00 PM", "04:15 PM"].map(
                      (time, i) => (
                        <button
                          key={i}
                          onClick={() => showInfo(`Selected time: ${time}`)}
                          className={`px-4 py-3 text-sm rounded-xl font-bold transition-all border-2
                          ${i === 1 ? "bg-primary/5 border-primary text-primary shadow-xs" : "border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary"}
                        `}
                        >
                          {time}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 space-y-4 mt-auto">
                  <input
                    className="w-full px-5 py-4 text-sm border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-zinc-950 dark:text-white transition-all outline-none font-bold"
                    placeholder="Full Name"
                    type="text"
                  />
                  <input
                    className="w-full px-5 py-4 text-sm border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-zinc-950 dark:text-white transition-all outline-none font-bold"
                    placeholder="Work Email"
                    type="email"
                  />
                  <button
                    onClick={() => {
                      showSuccess(
                        "Demo Request Received!",
                        "Our specialist will contact you shortly to confirm the appointment.",
                      );
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-xl text-lg font-black shadow-xl shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    Confirm Booking
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
