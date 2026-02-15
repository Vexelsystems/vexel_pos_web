"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Rocket,
  Smartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

const navLinks = [
  {
    name: "Platform",
    href: "/platform",
    dropdown: [
      {
        name: "Automotive",
        href: "/platform?industry=automotive",
        icon: Rocket,
      },
      {
        name: "Entertainment",
        href: "/platform?industry=entertainment",
        icon: Smartphone,
      },
      { name: "Food & Beverage", href: "/platform?industry=fnb", icon: Zap },
      {
        name: "Healthcare",
        href: "/platform?industry=healthcare",
        icon: ShieldCheck,
      },
    ],
  },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Downloads", href: "/download" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-zinc-900 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform">
              V
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-900 dark:text-white">
              Vexel <span className="text-primary italic">POS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
                className="relative"
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                    activeDropdown === link.name
                      ? "text-primary"
                      : "text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary"
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 pt-4">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-4 shadow-2xl border border-slate-100 dark:border-zinc-800 backdrop-blur-xl">
                      <div className="grid gap-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                              <item.icon size={18} />
                            </div>
                            <span className="text-sm font-black text-slate-900 dark:text-white">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth/CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/login"
              className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/get-started"
              className="bg-primary hover:bg-primary/95 text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20 active:scale-95 whitespace-nowrap"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 dark:text-zinc-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-900 p-6 animate-in slide-in-from-top duration-300">
          <div className="grid gap-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-black text-slate-900 dark:text-white flex justify-between items-center"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={20} />}
                </Link>
                {link.dropdown && (
                  <div className="mt-4 ml-4 grid gap-4 border-l-2 border-slate-100 dark:border-zinc-900 pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-bold text-slate-500 dark:text-zinc-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <hr className="border-slate-100 dark:border-zinc-900" />
            <Link
              href="/login"
              className="text-center font-black uppercase tracking-widest text-slate-400"
            >
              Log In
            </Link>
            <Link
              href="/get-started"
              className="bg-primary text-white p-5 rounded-2xl text-center font-black uppercase tracking-widest shadow-xl shadow-primary/20"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
