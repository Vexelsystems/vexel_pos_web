"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  MonitorDot,
  Eye,
  EyeOff,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { showSuccess } from "@/lib/toast-utils";

export default function SignUpClient() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 h-screen w-full overflow-hidden flex flex-col md:flex-row selection:bg-primary/20">
      {/* Left Side: Brand Anchor */}
      <MotionWrapper
        type="slideRight"
        className="relative w-full md:w-5/12 lg:w-1/2 bg-primary flex flex-col justify-between p-8 lg:p-12 overflow-hidden order-first h-1/3 md:h-full"
      >
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M0 0 L100 0 L100 100 Z" fill="white"></path>
            <circle cx="20" cy="80" fill="white" r="40"></circle>
          </svg>
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <Link
            href="/"
            className="flex items-center space-x-2 text-white group"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/30 group-hover:scale-110 transition-transform">
              <MonitorDot size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              Vexel<span className="italic opacity-80">Sys</span>
            </span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex flex-col justify-center max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tight">
            Start managing your business{" "}
            <span className="text-blue-200">smarter</span> today.
          </h1>
          <div className="flex items-center space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative w-12 h-12 rounded-full border-4 border-primary overflow-hidden bg-slate-200"
                >
                  <Image
                    src={`https://lh3.googleusercontent.com/aida-public/${i === 1 ? "AB6AXuD9fa4u8u_DU8w1tvGkXmpGyJnrncqC_BSjdoy6sAM_JMweyghyhs2kstoD1EcmQB3JgHb1jve1dg9tvOttoDdaWqCN9U2ycQDU5ogslJjCx7Cs_twjOTNLFEfxIOoyJpxKxEiLkv5ooPMcpULNY-Qensy9oOT--QtRwz-0xY3BOnOclk1DdVDI8qlNnctIqVRl-zF4eQAHb-ugzJbw5fRc-kSu_AyEv27Eo_OZOJLfyTNPBLOOYR49b3ipDX2ARN0MvC-dPA8xDoY" : i === 2 ? "AB6AXuAAQsfvEf1vTEjXzwMVMI8HsHTXAxuEnR95adfR5eJEkCBHiiTbk5vfBS2kas5U1z1fZL3CSA80NI5S6y5metCvAsszznS0a-QBcBtWVmGgI8kW-KHqeYiZxcZlFAWcotXME5IfWE4FB_E5ffUezxCZWoawSeGeFe_lK-F-Yzde3M95XqEjHEDzSTQu3cWJ-JhQtEhx9Ch5812ccXgQ7LnOwtZN3WVGQNq4PzVtFoujl69kKTAUmy2DyZynKJr2bxNztIJJCLIT0Nw" : "AB6AXuBIstUdw5jWc4gR9nXDWHGZ6B-HaLSVDWCMOsbB4YWKk8bc5d9URk2CsCfvsyy7gS6P2LbfbIHv2Fpk5v4KLSAzkpvXu6VsWi65XE_nSS-wlDxDxmEtSoRIoXXRViCK_O_YIDML5rN1B4SWdzbtI94eLWByjeGiDTHKrvfyNyBvdHdwm8FriK2Ytv_hXFqdQTwEOlmM3fMKQ_j48atsQJi_rOFYgaq6sg_RpX0M29-I2R3ioas5_qOeAUHxjljcesIQc3Fvig-oXoc"}`}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-primary bg-white text-primary flex items-center justify-center text-xs font-black shadow-xl">
                +500
              </div>
            </div>
            <p className="text-white/95 text-lg font-bold leading-tight">
              Trusted by 500+ <br />
              Sri Lankan Businesses
            </p>
          </div>
        </div>

        {/* Footer Area of Left Panel */}
        <div className="relative z-10 text-white/50 text-[10px] font-black uppercase tracking-[0.2em] mt-8">
          © 2026 Vexel Technologies. All rights reserved.
        </div>
      </MotionWrapper>

      {/* Right Side: Sign Up Form */}
      <MotionWrapper
        type="slideUp"
        className="w-full md:w-7/12 lg:w-1/2 bg-white dark:bg-zinc-950 flex flex-col overflow-y-auto h-2/3 md:h-full"
      >
        <div className="flex-grow flex items-center justify-center p-8 md:p-12 lg:p-20">
          <div className="w-full max-w-md space-y-10">
            {/* Form Header */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter">
                Create your account
              </h2>
              <p className="text-slate-500 dark:text-gray-400 font-bold">
                Join Vexel and start your free 14-day trial.{" "}
                <br className="hidden lg:block" /> No credit card required.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showSuccess(
                  "Account created successfully!",
                  "Check your email to verify your account.",
                );
              }}
              className="space-y-6"
            >
              {/* Business Name */}
              <div className="space-y-2">
                <label
                  className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1"
                  htmlFor="business-name"
                >
                  Business Name
                </label>
                <input
                  className="block w-full rounded-2xl bg-slate-50 dark:bg-zinc-900 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-zinc-800 focus:ring-4 focus:ring-primary/5 text-slate-900 dark:text-white px-5 py-4 transition-all duration-300 outline-none font-bold placeholder:text-slate-300"
                  id="business-name"
                  name="business-name"
                  placeholder="e.g. Colombo Coffee House"
                  type="text"
                  required
                />
              </div>

              {/* Owner Name */}
              <div className="space-y-2">
                <label
                  className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1"
                  htmlFor="owner-name"
                >
                  Owner Name
                </label>
                <input
                  className="block w-full rounded-2xl bg-slate-50 dark:bg-zinc-900 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-zinc-800 focus:ring-4 focus:ring-primary/5 text-slate-900 dark:text-white px-5 py-4 transition-all duration-300 outline-none font-bold placeholder:text-slate-300"
                  id="owner-name"
                  name="owner-name"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>

              {/* Business Type & Mobile Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Business Type */}
                <div className="space-y-2">
                  <label
                    className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1"
                    htmlFor="business-type"
                  >
                    Business Type
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full rounded-2xl bg-slate-50 dark:bg-zinc-900 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-zinc-800 focus:ring-4 focus:ring-primary/5 text-slate-900 dark:text-white px-5 py-4 appearance-none transition-all duration-300 outline-none font-bold cursor-pointer pr-10"
                      id="business-type"
                      name="business-type"
                      required
                    >
                      <option disabled selected value="">
                        Select type
                      </option>
                      <option value="retail">Retail Store</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="wholesale">Wholesale</option>
                      <option value="service">Service Business</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>
                {/* Mobile Number */}
                <div className="space-y-2">
                  <label
                    className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1"
                    htmlFor="mobile"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="block w-full rounded-2xl bg-slate-50 dark:bg-zinc-900 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-zinc-800 focus:ring-4 focus:ring-primary/5 text-slate-900 dark:text-white px-5 py-4 transition-all duration-300 outline-none font-bold placeholder:text-slate-300"
                    id="mobile"
                    name="mobile"
                    placeholder="07x xxxxxxx"
                    type="tel"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="block w-full rounded-2xl bg-slate-50 dark:bg-zinc-900 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-zinc-800 focus:ring-4 focus:ring-primary/5 text-slate-900 dark:text-white px-5 py-4 transition-all duration-300 outline-none font-bold placeholder:text-slate-300"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="block w-full rounded-2xl bg-slate-50 dark:bg-zinc-900 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-zinc-800 focus:ring-4 focus:ring-primary/5 text-slate-900 dark:text-white px-5 py-4 transition-all duration-300 outline-none font-bold placeholder:text-slate-300 pr-12"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="mt-1 text-[10px] font-bold text-slate-400 flex items-center gap-1.5 ml-1">
                  <CheckCircle2 size={12} className="text-slate-300" />
                  Must be at least 8 characters
                </p>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start bg-slate-50 dark:bg-zinc-950 p-4 rounded-2xl border border-transparent hover:border-slate-100 dark:hover:border-zinc-800 transition-colors">
                <div className="flex items-center h-5">
                  <input
                    className="h-5 w-5 rounded-lg border-2 border-slate-200 text-primary focus:ring-primary transition-all cursor-pointer"
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                  />
                </div>
                <div className="ml-4 text-sm font-bold text-slate-600 dark:text-gray-400 leading-snug">
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <Link
                      className="text-primary hover:underline"
                      href="/terms"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-primary hover:underline"
                      href="/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="w-full flex justify-center py-5 px-6 border border-transparent rounded-2xl shadow-2xl shadow-primary/20 text-lg font-black text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all transform active:scale-[0.98]"
                type="submit"
              >
                Start Free Trial
              </button>
            </form>

            {/* Footer Link */}
            <p className="text-center font-bold text-slate-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                className="font-black text-primary hover:underline ml-1"
                href="/login"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}
