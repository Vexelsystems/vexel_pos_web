"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  BarChart3,
  MonitorDot,
  Package,
  Users,
  Zap,
  ChevronRight,
  CheckCircle2,
  Globe,
  WifiOff,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CalendarDays,
  FileDown,
  BrainCircuit,
  LayoutDashboard,
  Utensils,
  Coffee,
  IceCream,
  Wine,
  Store,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesClient() {
  return (
    <div className="bg-white dark:bg-zinc-950 font-sans text-slate-900 dark:text-white antialiased selection:bg-primary/20">
      {/* Hero Section */}
      <section className="pt-40 pb-32 relative overflow-hidden">
        {/* Abstract Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionWrapper type="slideUp">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black mb-8 uppercase tracking-[0.2em] shadow-inner">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>{" "}
              2024 Product Update
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-[0.9]">
              Features that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-500 to-indigo-500">
                Drive Growth
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-zinc-400 font-bold leading-relaxed">
              Vexel POS isn't just a cash register. It's a complete operating
              system for your business designed to scale with you from one store
              to one hundred.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Feature 1: Sales & Transactions */}
      <section className="py-32 bg-slate-50/50 dark:bg-zinc-950/50 border-y border-slate-100 dark:border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Content */}
            <MotionWrapper
              type="slideRight"
              className="order-2 lg:order-1 space-y-10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary text-white mb-2 shadow-2xl shadow-primary/30">
                <MonitorDot size={32} />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
                  Sales &amp; Transactions
                </h2>
                <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold leading-relaxed">
                  Process payments faster than ever with a checkout experience
                  designed for speed and flexibility. Handle complex scenarios
                  without slowing down the line.
                </p>
              </div>
              <ul className="grid gap-6">
                {[
                  {
                    title: "Split Bills Instantly",
                    desc: "Split by item, cover, or custom amount with just two taps.",
                    icon: Zap,
                  },
                  {
                    title: "Multi-Currency Support",
                    desc: "Accept payments in over 40 currencies with real-time exchange rates.",
                    icon: Globe,
                  },
                  {
                    title: "Offline Reliability",
                    desc: "Keep selling even when the internet goes down. Data syncs automatically.",
                    icon: WifiOff,
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 p-6 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-100 dark:border-zinc-800 hover:shadow-xl transition-all group"
                  >
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon size={20} />
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
              <Link
                className="inline-flex items-center text-primary font-black hover:text-primary/80 transition-all group pt-4 uppercase tracking-widest text-sm"
                href="/demo"
              >
                Explore Transaction Features
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </MotionWrapper>

            {/* Visual: POS UI Mockup */}
            <MotionWrapper
              type="slideLeft"
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-[3rem] blur-3xl opacity-50"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 aspect-[4/3] flex flex-col group p-1 ring-8 ring-slate-100 dark:ring-zinc-800">
                <div className="h-10 border-b border-slate-100 dark:border-zinc-800 flex items-center px-6 justify-between bg-slate-50 dark:bg-zinc-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-zinc-700"></div>
                  </div>
                  <div className="w-24 h-3 bg-slate-200 dark:bg-zinc-700 rounded-full"></div>
                </div>
                <div className="flex-1 flex overflow-hidden">
                  <div className="w-2/3 p-6 grid grid-cols-3 gap-3 bg-slate-50/50 dark:bg-zinc-950/30 overflow-y-auto">
                    {[
                      {
                        icon: Utensils,
                        label: "Burger",
                        color: "bg-orange-100 text-orange-600",
                      },
                      {
                        icon: Coffee,
                        label: "Latte",
                        color: "bg-blue-100 text-blue-600",
                      },
                      {
                        icon: IceCream,
                        label: "Gelato",
                        color: "bg-pink-100 text-pink-600",
                      },
                      {
                        icon: Wine,
                        label: "Drink",
                        color: "bg-purple-100 text-purple-600",
                      },
                      {
                        icon: Store,
                        label: "Custom",
                        color: "bg-green-100 text-green-600",
                      },
                      {
                        icon: MoreHorizontal,
                        label: "More",
                        color: "bg-slate-100 text-slate-600",
                      },
                      {
                        icon: Utensils,
                        label: "Sandwich",
                        color: "bg-yellow-100 text-yellow-600",
                      },
                      {
                        icon: Coffee,
                        label: "Tea",
                        color: "bg-amber-100 text-amber-600",
                      },
                      {
                        icon: IceCream,
                        label: "Sorbet",
                        color: "bg-cyan-100 text-cyan-600",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-zinc-800 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-700 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:shadow-lg cursor-pointer transition-all transform hover:-translate-y-1"
                      >
                        <div
                          className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shadow-inner`}
                        >
                          <item.icon size={24} />
                        </div>
                        <div className="h-2 w-12 bg-slate-100 dark:bg-zinc-700 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  <div className="w-1/3 bg-white dark:bg-zinc-900 border-l border-slate-100 dark:border-zinc-800 p-6 flex flex-col">
                    <div className="flex-1 space-y-4">
                      <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
                        Current Order
                      </div>
                      {[
                        { name: "Double Burger", price: "$14.50" },
                        { name: "Caramel Latte", price: "$4.50" },
                        { name: "Large Fries", price: "$5.00" },
                      ].map((line, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center group/line"
                        >
                          <div className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                            {line.name}
                          </div>
                          <div className="text-sm font-black text-primary px-2 py-1 bg-primary/5 rounded-lg">
                            {line.price}
                          </div>
                        </div>
                      ))}
                      <div className="pt-6 mt-6 border-t-2 border-dashed border-slate-100 dark:border-zinc-800 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                            Subtotal
                          </span>
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            $24.00
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
                            Total
                          </span>
                          <span className="text-3xl font-black text-primary tracking-tighter">
                            $26.00
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full py-5 bg-primary text-white rounded-[1.5rem] font-black shadow-2xl shadow-primary/30 mt-8 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                      Complete <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Feature 2: Inventory Management */}
      <section className="py-32 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Visual (Left) */}
            <MotionWrapper type="slideRight" className="order-1 relative">
              <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-zinc-800 aspect-[4/3] p-10 flex flex-col ring-8 ring-slate-50 dark:ring-zinc-900/50">
                <div className="flex items-center justify-between mb-10">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      Inventory Dashboard
                    </h3>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                      Real-time status
                    </p>
                  </div>
                  <div className="px-5 py-2 bg-green-500/10 text-green-600 text-[10px] font-black rounded-full border border-green-500/20 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    Synced Across 4 Stores
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  {[
                    {
                      name: "Arabica Roast (2.5kg)",
                      stock: "142 units",
                      status: "Healthy",
                      color: "text-green-600 bg-green-50",
                      w: "70%",
                    },
                    {
                      name: "Full Cream Milk (1L)",
                      stock: "4 units",
                      status: "Critical",
                      color: "text-red-500 bg-red-50",
                      w: "15%",
                    },
                    {
                      name: "Almond Milk (1L)",
                      stock: "89 units",
                      status: "Healthy",
                      color: "text-green-600 bg-green-50",
                      w: "45%",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`p-6 rounded-[2rem] border-2 transition-all ${item.status === "Critical" ? "bg-red-50/50 dark:bg-red-500/5 border-red-100 dark:border-red-900/30" : "bg-slate-50/50 dark:bg-zinc-800/50 border-transparent hover:border-slate-100 dark:hover:border-zinc-700"}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center font-black text-slate-400`}
                          >
                            #0{i + 1}
                          </div>
                          <div>
                            <div className="font-black text-slate-900 dark:text-white tracking-tight">
                              {item.name}
                            </div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                              {item.status}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-black text-slate-900 dark:text-white tracking-tighter text-xl">
                            {item.stock}
                          </div>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.status === "Critical" ? "bg-red-500" : "bg-primary"}`}
                          style={{ width: item.w }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <MotionWrapper
                  type="slideUp"
                  delay={0.8}
                  className="absolute -bottom-6 -right-6 lg:right-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-8 rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] max-w-[280px] border border-white/10 dark:border-black/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-blue-500 text-white shadow-xl">
                      <BrainCircuit size={24} />
                    </div>
                    <div>
                      <div className="font-black text-lg tracking-tight mb-1">
                        AI Automation
                      </div>
                      <div className="text-sm font-bold opacity-70 leading-relaxed">
                        Re-ordered 50 units of "Full Cream Milk" automatically.
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </MotionWrapper>

            {/* Content (Right) */}
            <MotionWrapper type="slideLeft" className="order-2 space-y-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-indigo-500 text-white mb-2 shadow-2xl shadow-indigo-500/30">
                <Package size={32} />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
                  Smarter Inventory Control
                </h2>
                <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold leading-relaxed">
                  Stop guessing what to order. Vexel POS gives you real-time
                  visibility into your stock across all locations, preventing
                  stockouts and reducing waste.
                </p>
              </div>
              <ul className="grid gap-6">
                {[
                  {
                    title: "Real-Time Tracking",
                    desc: "Inventory updates instantly across your online store and physical locations.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Low-Stock Alerts",
                    desc: "Get notified before you run out. Set custom thresholds for every item.",
                    icon: Zap,
                  },
                  {
                    title: "Supplier Management",
                    desc: "Create and send purchase orders directly from the dashboard.",
                    icon: Users,
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all transform group-hover:rotate-6">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-zinc-400 font-bold">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Feature 3: Employee Management */}
      <section className="py-32 bg-slate-50/50 dark:bg-zinc-950/50 border-y border-slate-100 dark:border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Content */}
            <MotionWrapper
              type="slideRight"
              className="order-2 lg:order-1 space-y-10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-purple-500 text-white mb-2 shadow-2xl shadow-purple-500/30">
                <Users size={32} />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
                  Employee Management
                </h2>
                <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold leading-relaxed">
                  Empower your team with the right tools. Manage schedules,
                  track performance, and control access permissions securely.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Role-Based Access",
                    desc: "Control who can refund items, view reports, or modify inventory.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Performance Tracking",
                    desc: "Identify top sellers and optimize shifts.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Shift Scheduling",
                    desc: "Built-in time clock and scheduling tools.",
                    icon: CalendarDays,
                  },
                  {
                    title: "Team Messaging",
                    desc: "Communication tools for better collaboration.",
                    icon: BrainCircuit,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="space-y-3 p-6 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h4 className="font-black text-slate-900 dark:text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </MotionWrapper>

            {/* Visual */}
            <MotionWrapper
              type="slideLeft"
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-purple-500/5 rounded-[3rem] transform rotate-3"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-zinc-800 p-10 aspect-[4/3] flex flex-col gap-10 ring-8 ring-slate-100 dark:ring-zinc-800">
                {/* Employee Cards Row */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {[
                    {
                      name: "John Doe",
                      role: "Manager",
                      init: "JD",
                      color: "bg-primary",
                    },
                    {
                      name: "Sarah K.",
                      role: "Supervisor",
                      init: "SK",
                      color: "bg-indigo-500",
                    },
                    {
                      name: "Alex R.",
                      role: "Staff",
                      init: "AR",
                      color: "bg-purple-500",
                    },
                  ].map((user, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-48 p-8 rounded-[2rem] bg-slate-50 dark:bg-zinc-800 shadow-sm border border-slate-100 dark:border-zinc-700 text-center transform hover:scale-105 transition-all"
                    >
                      <div
                        className={`w-16 h-16 mx-auto ${user.color} rounded-[1.5rem] shadow-xl mb-4 flex items-center justify-center text-white text-xl font-black`}
                      >
                        {user.init}
                      </div>
                      <div className="font-black text-slate-900 dark:text-white tracking-tight">
                        {user.name}
                      </div>
                      <div className="text-[10px] font-black text-primary uppercase tracking-widest mt-1.5">
                        {user.role}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Performance Graph Mockup */}
                <div className="flex-1 bg-slate-50/50 dark:bg-zinc-950/30 rounded-[2rem] p-8 relative flex flex-col border border-slate-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center mb-10">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      Sales Performance per Server
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-slate-100 dark:border-zinc-700 flex items-center justify-center">
                        <ChevronRight size={14} className="rotate-180" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-slate-100 dark:border-zinc-700 flex items-center justify-center">
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end justify-between px-4 gap-6">
                    {[1 / 3, 1 / 2, 3 / 4, 2 / 5, 1 / 4].map((h, i) => (
                      <div key={i} className="flex-1 relative group">
                        <div
                          className={`w-full rounded-2xl transition-all duration-700 shadow-lg ${i === 2 ? "bg-primary h-3/4" : "bg-indigo-100 dark:bg-indigo-900/30 hover:bg-indigo-200"}`}
                          style={{ height: i === 2 ? "100%" : `${h * 100}%` }}
                        >
                          {i === 2 && (
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-[10px] font-black text-white px-2 py-1 rounded-lg">
                              $4.5k
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Feature 4: Reporting & AI */}
      <section className="py-32 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Visual (Left) */}
            <MotionWrapper type="slideRight" className="order-1 relative">
              <div className="absolute -inset-10 bg-indigo-500/10 rounded-[3rem] blur-3xl opacity-50"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-zinc-800 aspect-[4/3] p-10 flex flex-col ring-8 ring-slate-50 dark:ring-zinc-900/50">
                {/* Tabs Mockup */}
                <div className="flex space-x-10 border-b border-slate-100 dark:border-zinc-800 pb-4 mb-10">
                  <div className="text-xs font-black text-primary border-b-4 border-primary pb-4 uppercase tracking-widest cursor-pointer">
                    Sales Report
                  </div>
                  <div className="text-xs font-black text-slate-400 hover:text-slate-600 uppercase tracking-widest cursor-pointer pb-4 transition-colors">
                    AI Forecast
                  </div>
                </div>
                {/* Chart Area */}
                <div className="flex-1 flex flex-col justify-end relative py-4">
                  <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="border-t border-slate-50 dark:border-zinc-800 w-full opacity-50"
                      ></div>
                    ))}
                  </div>
                  <svg
                    className="w-full h-full z-10 overflow-visible"
                    viewBox="0 0 300 100"
                  >
                    <path
                      className="drop-shadow-[0_10px_10px_rgba(19,91,236,0.3)] animate-[draw_2s_ease-out]"
                      d="M0,80 Q30,70 60,50 T120,40 T180,20 T240,30 T300,10"
                      fill="none"
                      stroke="#135bec"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                    ></path>
                    <path
                      d="M0,80 Q30,70 60,50 T120,40 T180,20 T240,30 T300,10 V100 H0 Z"
                      fill="url(#gradient-report)"
                      opacity="0.1"
                    ></path>
                    <defs>
                      <linearGradient
                        id="gradient-report"
                        x1="0%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#135bec", stopOpacity: 1 }}
                        ></stop>
                        <stop
                          offset="100%"
                          style={{ stopColor: "#135bec", stopOpacity: 0 }}
                        ></stop>
                      </linearGradient>
                    </defs>
                    <circle
                      cx="60"
                      cy="50"
                      fill="white"
                      r="5"
                      stroke="#135bec"
                      strokeWidth="3"
                      className="shadow-lg"
                    ></circle>
                    <circle
                      cx="180"
                      cy="20"
                      fill="white"
                      r="5"
                      stroke="#135bec"
                      strokeWidth="3"
                      className="shadow-lg"
                    ></circle>
                    <circle
                      cx="300"
                      cy="10"
                      fill="white"
                      r="5"
                      stroke="#135bec"
                      strokeWidth="3"
                      className="shadow-lg"
                    ></circle>
                  </svg>
                </div>
                {/* KPIs */}
                <div className="grid grid-cols-3 gap-6 mt-10">
                  {[
                    { label: "Total Revenue", val: "$45,231", up: "+12%" },
                    { label: "Transactions", val: "1,204", up: "+5%" },
                    { label: "Net Growth", val: "+8.4%", up: "+2.1%" },
                  ].map((kpi, i) => (
                    <div
                      key={i}
                      className="p-6 bg-slate-50/50 dark:bg-zinc-800/50 rounded-3xl border border-slate-100 dark:border-zinc-700 shadow-sm transform hover:scale-105 transition-all"
                    >
                      <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                        {kpi.label}
                      </div>
                      <div className="font-black text-slate-900 dark:text-white mt-1 text-xl tracking-tighter">
                        {kpi.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>

            {/* Content (Right) */}
            <MotionWrapper type="slideLeft" className="order-2 space-y-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-blue-600 text-white mb-2 shadow-2xl shadow-blue-600/30">
                <BrainCircuit size={32} />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
                  Intelligent Reporting
                </h2>
                <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold leading-relaxed">
                  Turn data into decisions. Vexel POS analyzes your sales trends
                  to help you forecast demand, optimize pricing, and understand
                  what drives your business.
                </p>
              </div>
              <ul className="grid gap-6">
                {[
                  {
                    title: "AI-Based Forecasting",
                    desc: "Predict sales for the upcoming week based on historical data.",
                    icon: BrainCircuit,
                  },
                  {
                    title: "Visual Dashboards",
                    desc: "Clean charts that give you a snapshot of your business health.",
                    icon: LayoutDashboard,
                  },
                  {
                    title: "Easy Exports",
                    desc: "Export to CSV, PDF, or sync with accounting software.",
                    icon: FileDown,
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2
                      className="text-primary mt-1 flex-shrink-0"
                      size={24}
                    />
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
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/20 blur-[150px] rounded-full opacity-20 transform -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <MotionWrapper type="slideUp">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">
              Ready to upgrade
              <br className="hidden md:block" /> your checkout?
            </h2>
            <p className="text-2xl text-blue-100/60 font-bold mb-16 leading-relaxed">
              Join 10,000+ businesses using Vexel POS to drive growth and
              streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <Link
                className="inline-flex justify-center items-center px-12 py-5 rounded-[2.5rem] bg-primary hover:bg-primary/90 text-white font-black text-xl transition-all shadow-[0_20px_50px_rgba(19,91,236,0.3)] transform hover:scale-105 active:scale-95"
                href="/get-started"
              >
                Get Started Free
              </Link>
              <Link
                className="inline-flex justify-center items-center px-12 py-5 rounded-[2.5rem] bg-white/5 hover:bg-white/10 text-white font-black text-xl transition-all border border-white/10 backdrop-blur-md transform hover:scale-105 active:scale-95"
                href="/demo"
              >
                Schedule Demo
              </Link>
            </div>
            <p className="mt-12 text-sm text-slate-500 font-black uppercase tracking-[0.3em]">
              No credit card required. 14-day free trial.
            </p>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
