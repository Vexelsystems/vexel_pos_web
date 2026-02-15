"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  User,
  Mail,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import { companyDetails } from "@/lib/companydetails";

/**
 * WHATSAPP LEAD FORM COMPONENT
 *
 * Logic Overview:
 * 1. Form Collection: Collects Name, Email, Purpose, and Message.
 * 2. Redirection: Formats the data into a WhatsApp link and opens it in a new tab.
 * 3. Persistence: Optional persistence of user info in localStorage for convenience.
 */

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "General Inquiry",
    message: "",
  });

  // Pre-fill from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem("vexel_lead_info");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({
          ...prev,
          name: parsed.name,
          email: parsed.email,
        }));
      } catch (e) {
        console.error("Failed to parse saved lead info");
      }
    }
  }, []);

  const playSuccessSound = () => {
    const audio = new Audio("/sounds/notification.wav");
    audio.volume = 0.5;
    audio.play().catch((e) => console.error("Error playing success sound:", e));
  };

  const playErrorSound = () => {
    const audio = new Audio("/sounds/error.mp3");
    audio.volume = 0.5;
    audio.play().catch((e) => console.error("Error playing error sound:", e));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Manual Validation for Sounds
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields", {
        description: "Your name, email, and message are required.",
      });
      playErrorSound();
      return;
    }

    // Save info for next time
    localStorage.setItem(
      "vexel_lead_info",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
      }),
    );

    // Format WhatsApp Message
    const text = `━━━━━━━━━━━━━━━━━━━━
🎯 *${formData.purpose.toUpperCase()}*
━━━━━━━━━━━━━━━━━━━━

👤 *FULL NAME:* 
${formData.name}

📧 *EMAIL:* 
${formData.email}

💬 *MESSAGE:* 
${formData.message}

━━━━━━━━━━━━━━━━━━━━
🌐 _Sent via Vexel Systems_`;

    const encodedText = encodeURIComponent(text);
    // Use api.whatsapp.com for better cross-device reliability
    const phoneNumber = companyDetails.contact.whatsapp.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Play success sound and show toast
    playSuccessSound();
    toast.success("Ready to send!", {
      description: "We're redirecting you to WhatsApp now...",
    });

    setIsOpen(false);

    // Reset message only
    setFormData((prev) => ({ ...prev, message: "" }));
  };

  const purposes = [
    "Custom Software Development",
    "AI & Intelligent Systems",
    "IoT & Smart Solutions",
    "Vexel Track (Lead GPS Tracking)",
    "Vexel POS (Point of Sale)",
    "Vexel Hire (Fleet & Resource)",
    "Web & Mobile App Development",
    "Digital Transformation",
    "Technical Support",
    "Careers",
    "Other Inquiry",
  ];

  return (
    <div className="fixed bottom-8 right-8 z-100 font-sans no-scrollbar">
      {/* Form Popup */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[350px] bg-background dark:bg-[#0a0a0a] rounded-3xl shadow-2xl shadow-primary/20 border border-black/5 dark:border-white/5 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-6 bg-primary text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold">Contact Us</h3>
                <p className="text-[10px] opacity-80 uppercase tracking-widest">
                  Via WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-4 max-h-[500px] overflow-y-auto no-scrollbar"
          >
            <div className="space-y-1.5">
              <label className="text-xs font-bold flex items-center gap-2 text-foreground/70">
                <User size={14} /> Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:border-primary transition-all text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold flex items-center gap-2 text-foreground/70">
                <Mail size={14} /> Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:border-primary transition-all text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold flex items-center gap-2 text-foreground/70">
                <HelpCircle size={14} /> Inquiry Purpose
              </label>
              <div className="relative group">
                <select
                  value={formData.purpose}
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                  className="w-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-xl px-4 py-2.5 outline-none focus:border-primary transition-all text-sm appearance-none cursor-pointer"
                >
                  {purposes.map((p) => (
                    <option
                      key={p}
                      value={p}
                      className="dark:bg-[#0a0a0a] dark:text-white"
                    >
                      {p}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none group-focus-within:text-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold flex items-center gap-2 text-foreground/70">
                <MessageSquare size={14} /> Message
              </label>
              <textarea
                rows={3}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:border-primary transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                if (!formData.name || !formData.email || !formData.message) {
                  playErrorSound();
                  toast.error("Required fields missing", {
                    description: "Please complete the form before sending.",
                  });
                }
              }}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:brightness-105 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group mt-2"
            >
              Send on WhatsApp
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <p className="text-[10px] text-center text-foreground/40">
              Clicking send will redirect you to WhatsApp.
            </p>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-105 transition-all group"
        aria-label="Contact on WhatsApp"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <div className="relative">
            <MessageSquare size={28} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
}
