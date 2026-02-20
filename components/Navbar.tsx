"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { companyDetails } from "@/lib/companydetails";
import { useAuth } from "@/lib/auth-context";

const navLinks = [
  { name: "Platform", href: "/#solutions" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Downloads", href: "/download" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
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
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
              <Image
                src={companyDetails.logos.main}
                alt={`${companyDetails.name} Logo`}
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="font-black text-2xl tracking-tighter text-foreground">
              Vexel <span className="text-secondary italic">POS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className="px-4 py-2 text-xs font-black uppercase tracking-widest text-foreground/60 hover:text-secondary transition-all"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Auth/CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/dashboard"
                  className="text-xs font-black uppercase tracking-widest text-foreground/60 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                    {user.firstName?.[0] || user.email?.[0].toUpperCase()}
                  </div>
                  Dashboard
                </Link>
                <button
                  onClick={() => logout()}
                  className="bg-red-500/10 text-red-500 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all active:scale-95 flex items-center gap-2"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-xs font-black uppercase tracking-widest text-foreground/40 hover:text-secondary transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="bg-secondary hover:bg-secondary/95 text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 active:scale-95 whitespace-nowrap"
                >
                  Get Started
                </Link>
              </>
            )}
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-inner-box border-b border-white/10 p-6 animate-in slide-in-from-top duration-300">
          <div className="grid gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-black text-foreground hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-white/10" />
            {user ? (
              <div className="grid gap-4">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-xl font-black text-foreground"
                >
                  <User size={20} /> Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-3 bg-red-500 text-white p-5 rounded-2xl font-black uppercase tracking-widest"
                >
                  <LogOut size={20} /> Sign Out
                </button>
              </div>
            ) : (
              <div className="grid gap-4">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center font-black uppercase tracking-widest text-foreground/40 hover:text-secondary"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-secondary text-white p-5 rounded-2xl text-center font-black uppercase tracking-widest shadow-xl shadow-secondary/20"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
