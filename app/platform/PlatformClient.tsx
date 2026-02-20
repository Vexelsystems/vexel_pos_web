"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  Monitor,
  Smartphone,
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layout,
  Car,
  Settings,
  Wrench,
  Music,
  Ticket,
  Utensils,
  Bike,
  Stethoscope,
  Calendar,
  Pill,
  ChevronRight,
  Play,
  BarChart3,
  CreditCard,
  Building,
  Users,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { companyDetails } from "@/lib/companydetails";
import { useState } from "react";

const industries = [
  {
    id: "automotive",
    title: "Automotive & Industrial",
    icon: Car,
    color: "blue",
    hero: {
      tag: "Heavy-Duty Efficiency",
      title: "Drive Efficiency in Your Garage & Dealership",
      desc: "The all-in-one platform to manage parts inventory, mechanic workflows, sales, and rentals. Streamline your operations from the front desk to the service bay.",
    },
  },
  {
    id: "entertainment",
    title: "Entertainment & Events",
    icon: Music,
    color: "purple",
    hero: {
      tag: "Ultimate Venue POS",
      title: "Powering Cinemas, Concerts & Festivals",
      desc: "Manage tickets, concessions, and venue capacity in one unified system. From stadium seating to pop-up merchandise stands, Vexel powers the experience.",
    },
  },
  {
    id: "fnb",
    title: "Food & Beverage",
    icon: Utensils,
    color: "orange",
    hero: {
      tag: "Modern Dining",
      title: "Streamlined Service for Restaurants & Cafes",
      desc: "Front-of-house hospitality meets back-of-house efficiency. Handle table management, KOT routing, and delivery sync in a single unified dashboard.",
    },
  },
  {
    id: "healthcare",
    title: "Healthcare & Wellness",
    icon: Stethoscope,
    color: "emerald",
    hero: {
      tag: "Connected Care",
      title: "Comprehensive POS for Pharmacies & Clinics",
      desc: "Streamline patient care, automate inventory compliance, and enhance client retention with specialized healthcare modules and IoT integration.",
    },
  },
];

export default function PlatformClient() {
  /**
   * INDUSTRY TAB ENGINE
   * Strategy: Dynamic component switching based on active ID.
   * Logic:
   * 1. Track 'activeTab' matching industry.id.
   * 2. Renders specialized sub-sections (Automotive, FnB, etc.) to keep the main component manageable.
   */
  const [activeTab, setActiveTab] = useState("automotive");

  return (
    <div className="bg-white dark:bg-zinc-950 font-sans text-slate-900 dark:text-white antialiased selection:bg-primary/20 transition-colors duration-200">
      <main className="pt-20">
        {/* Industry Selector Hero */}
        <section className="relative py-24 overflow-hidden border-b border-slate-100 dark:border-zinc-900 bg-slate-50/50 dark:bg-zinc-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <MotionWrapper type="slideUp">
              <h1 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[0.9]">
                One Platform, <br className="hidden sm:block" />
                <span className="text-primary italic">Every Industry</span>
              </h1>
              <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold max-w-2xl mx-auto mb-16">
                Specialized workflows designed for the unique challenges of your
                business sector.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {industries.map((ind) => {
                const Icon = ind.icon;
                const isActive = activeTab === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`group relative flex flex-col items-center p-8 rounded-[2rem] border transition-all duration-500 ${
                      isActive
                        ? "bg-white dark:bg-zinc-900 border-primary shadow-2xl shadow-primary/10"
                        : "bg-transparent border-slate-100 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900/50"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                        isActive
                          ? "bg-primary text-white shadow-xl shadow-primary/20"
                          : "bg-slate-100 dark:bg-zinc-800 text-slate-400"
                      }`}
                    >
                      <Icon size={32} strokeWidth={2.5} />
                    </div>
                    <span
                      className={`text-sm font-black uppercase tracking-widest transition-colors ${isActive ? "text-slate-900 dark:text-white" : "text-slate-400"}`}
                    >
                      {ind.id}
                    </span>
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-zinc-900 border-b border-r border-primary rotate-45"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dynamic Content Section */}
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500">
          {activeTab === "automotive" && (
            <AutomotiveSection ind={industries[0]} />
          )}
          {activeTab === "entertainment" && (
            <EntertainmentSection ind={industries[1]} />
          )}
          {activeTab === "fnb" && <FnBSection ind={industries[2]} />}
          {activeTab === "healthcare" && (
            <HealthcareSection ind={industries[3]} />
          )}
        </div>

        {/* Unified Hardware CTA */}
        <section className="py-32 bg-slate-900 dark:bg-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 blur-[150px] rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <MotionWrapper type="slideRight">
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                  Hardware Built for <br />{" "}
                  <span className="text-primary italic">High Performance</span>
                </h2>
                <p className="text-xl text-slate-400 font-bold mb-12 leading-relaxed">
                  We supply ruggedized kiosks, handheld terminals, and
                  integrated scales designed to withstand industrial
                  environments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/20">
                    Explore Hardware
                  </button>
                  <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl text-lg font-black transition-all">
                    Request a Quote
                  </button>
                </div>
              </MotionWrapper>
              <MotionWrapper type="slideLeft" className="relative group">
                <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-[3rem] p-4 shadow-2xl border border-white/5 ring-12 ring-white/5">
                  <div className="aspect-square bg-slate-800 rounded-[2.5rem] flex items-center justify-center border border-white/5 overflow-hidden">
                    <Monitor
                      size={120}
                      className="text-white/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700"
                    />
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AutomotiveSection({ ind }: any) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <MotionWrapper type="slideRight">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-500 mb-8 border border-blue-500/20">
              {ind.hero.tag}
            </span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">
              {ind.hero.title}
            </h2>
            <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold mb-12 leading-relaxed">
              {ind.hero.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "VIN Decoding",
                  desc: "Auto-fill make, model, & history.",
                },
                {
                  icon: Wrench,
                  title: "Mechanic KDS",
                  desc: "Track repair stages in real-time.",
                },
                {
                  icon: Settings,
                  title: "Parts Inventory",
                  desc: "Intelligent low-stock alerts.",
                },
                {
                  icon: CreditCard,
                  title: "Rental Suite",
                  desc: "Manage fleets and late fees.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-900 flex items-center justify-center text-blue-500 shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-bold mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>
          <MotionWrapper type="slideLeft" className="relative group">
            <div className="bg-slate-100 dark:bg-zinc-900 rounded-[3rem] p-2 shadow-2xl border border-slate-200 dark:border-zinc-800 ring-8 ring-slate-50 dark:ring-zinc-950">
              <div className="bg-white dark:bg-zinc-950 rounded-[2.5rem] overflow-hidden aspect-video relative flex items-center justify-center">
                <Play
                  size={64}
                  className="text-blue-500 fill-blue-500/20 group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Service Jobs",
              desc: "Manage multi-stage repair workflows with automated customer SMS updates.",
              icon: Wrench,
              color: "bg-blue-500",
            },
            {
              title: "Fleet Rentals",
              desc: "Full rental management for equipment and specialized industrial vehicles.",
              icon: Car,
              color: "bg-indigo-500",
            },
            {
              title: "Compliance",
              desc: "Built-in audit logs and safety certification tracking for heavy machinery.",
              icon: ShieldCheck,
              color: "bg-emerald-500",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-transparent hover:border-blue-500/20 transition-all group"
            >
              <div
                className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl transform group-hover:rotate-12 transition-transform`}
              >
                <card.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-zinc-400 font-bold leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EntertainmentSection({ ind }: any) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <MotionWrapper type="slideRight">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-purple-500/10 text-purple-500 mb-8 border border-purple-500/20">
              {ind.hero.tag}
            </span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">
              {ind.hero.title}
            </h2>
            <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold mb-12 leading-relaxed">
              {ind.hero.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Layout,
                  title: "Visual Mapping",
                  desc: "Reserved seating editor.",
                },
                {
                  icon: Ticket,
                  title: "QR Ticketing",
                  desc: "Lightning fast entry validation.",
                },
                {
                  icon: Utensils,
                  title: "Concessions",
                  desc: "Combo meals & snack bar POS.",
                },
                {
                  icon: Users,
                  title: "VIP Loyalty",
                  desc: "Member pricing & exclusives.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-zinc-900 flex items-center justify-center text-purple-500 shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-bold mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>
          <MotionWrapper type="slideLeft">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl ring-1 ring-slate-200 dark:ring-zinc-800">
              <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-indigo-700 opacity-90"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <div className="w-16 h-1 bg-white/30 rounded-full mb-8"></div>
                <h4 className="text-3xl font-black mb-4 tracking-tight">
                  Interactive <br /> Venue Map
                </h4>
                <p className="text-white/70 font-bold text-sm mb-10 leading-relaxed">
                  Drag-and-drop seating editor for any theater or stadium
                  layout.
                </p>
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Layout size={20} />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Zap size={20} />
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

function FnBSection({ ind }: any) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <MotionWrapper type="slideRight">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-orange-500/10 text-orange-500 mb-8 border border-orange-500/20">
              {ind.hero.tag}
            </span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">
              {ind.hero.title}
            </h2>
            <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold mb-12 leading-relaxed">
              {ind.hero.desc}
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Table Management",
                  desc: "Live floor plan with occupancy timers.",
                  icon: Layout,
                },
                {
                  title: "Kitchen Sync",
                  desc: "KDS screens with route-to-station logic.",
                  icon: Zap,
                },
                {
                  title: "Delivery Integration",
                  desc: "Sync UberEats & PickMe in one inbox.",
                  icon: Bike,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-transparent hover:border-orange-500/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-1 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-bold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>
          <MotionWrapper type="slideLeft" className="relative">
            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl p-8 border border-slate-100 dark:border-zinc-800">
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-100 dark:border-zinc-800">
                <h4 className="text-xl font-black text-slate-900 dark:text-white">
                  Kitchen Display System
                </h4>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="grid gap-4">
                {[
                  { id: "#402", table: "04", time: "12:00", status: "Prep" },
                  {
                    id: "#403",
                    table: "Delivery",
                    time: "08:30",
                    status: "New",
                  },
                ].map((ticket, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950 flex items-center justify-between border border-slate-100 dark:border-zinc-800"
                  >
                    <span className="text-xs font-black text-slate-400">
                      {ticket.id}
                    </span>
                    <span className="font-black text-slate-900 dark:text-white">
                      T-{ticket.table}
                    </span>
                    <span className="text-xs font-black text-orange-500">
                      {ticket.time}m
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${ticket.status === "Prep" ? "bg-orange-100 text-orange-600" : "bg-primary/10 text-primary"}`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-zinc-800 flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Avg Prep Time
                </span>
                <span className="text-xl font-black text-emerald-500">
                  14:20m
                </span>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

function HealthcareSection({ ind }: any) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <MotionWrapper type="slideRight">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 mb-8 border border-emerald-500/20">
              {ind.hero.tag}
            </span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">
              {ind.hero.title}
            </h2>
            <p className="text-xl text-slate-500 dark:text-zinc-400 font-bold mb-12 leading-relaxed">
              {ind.hero.desc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2rem] bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
                <Pill size={32} className="text-emerald-500 mb-6" />
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                  Pharmacy Ready
                </h4>
                <p className="text-xs text-slate-500 font-bold mb-0">
                  Automatic batch & expiry tracking for full regulatory
                  compliance.
                </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800">
                <Calendar size={32} className="text-blue-500 mb-6" />
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                  Appointments
                </h4>
                <p className="text-xs text-slate-500 font-bold mb-0">
                  Unified scheduling for clinics and wellness centers.
                </p>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper type="slideLeft" className="relative">
            <div className="bg-slate-900 rounded-[3rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 border border-white/20 group-hover:rotate-12 transition-transform">
                  <ShieldCheck size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                  HIPAA Compliant
                </h3>
                <p className="text-slate-400 font-bold text-sm mb-12 leading-relaxed italic">
                  "Enterprise-grade encryption for all patient data. Role-based
                  access controls and audit logs ensure you meet strict data
                  privacy standards."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                    Secure Cloud Sync
                  </span>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
