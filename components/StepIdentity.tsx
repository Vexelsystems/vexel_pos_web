"use client";

import { Camera, Edit, ShieldCheck } from "lucide-react";
import React from "react";

interface StepIdentityProps {
  data: any;
  updateData: (data: any) => void;
}

export default function StepIdentity({ data, updateData }: StepIdentityProps) {
  const handleChange = (field: string, value: any) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-black text-foreground tracking-tight">
          Store Identity
        </h2>
        <p className="text-sm text-muted-foreground">
          Core Branding & Public Information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Upload */}
        <div className="flex flex-col gap-4">
          <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
            Store Logo
          </label>
          <div className="size-48 bg-muted/20 rounded-3xl border-2 border-dashed border-border flex flex-col items-center justify-center p-6 relative group transition-all hover:border-primary/40 hover:bg-primary/5 cursor-pointer">
            {data.logoUrl ? (
              <img
                src={data.logoUrl}
                alt="Store Logo"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-muted-foreground/40 text-center">
                <Camera className="w-12 h-12" />
                <span className="text-[10px] font-black uppercase tracking-tighter">
                  Click to Upload
                </span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    handleChange("logoUrl", reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-3xl pointer-events-none">
              <Edit className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground italic text-center leading-relaxed">
            Recommended: 512x512px PNG <br /> High-contrast for receipts
          </p>
        </div>

        {/* Main Info */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5 relative">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Shop Name (Official)
            </label>
            <input
              type="text"
              value={data.storeName}
              onChange={(e) => handleChange("storeName", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black focus:bg-background focus:border-primary/20 outline-none transition-all"
              placeholder="e.g. Vexel Wholesale"
            />
            <p className="text-[9px] text-rose-500 font-bold flex items-center gap-1 ml-1 uppercase tracking-tighter mt-1">
              <ShieldCheck className="w-3 h-3" /> Admin password required for
              changes
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Trade Name (Optional)
            </label>
            <input
              type="text"
              placeholder="Alternative Business Name"
              value={data.tradeName}
              onChange={(e) => handleChange("tradeName", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black focus:bg-background focus:border-primary/20 outline-none transition-all"
            />
          </div>

          <div className="md:col-span-2 space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Store Tagline
            </label>
            <input
              type="text"
              placeholder="Quality You Can Trust"
              value={data.storeTagline}
              onChange={(e) => handleChange("storeTagline", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black focus:bg-background focus:border-primary/20 outline-none transition-all"
            />
          </div>

          <div className="md:col-span-2 space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Official Address
            </label>
            <textarea
              rows={3}
              value={data.storeAddress}
              onChange={(e) => handleChange("storeAddress", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black focus:bg-background focus:border-primary/20 outline-none transition-all resize-none"
              placeholder="123 Business Avenue, Suite 100"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Contact Number
            </label>
            <input
              type="text"
              value={data.storePhone}
              onChange={(e) => handleChange("storePhone", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black focus:bg-background focus:border-primary/20 outline-none transition-all"
              placeholder="+94 740968108"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              WhatsApp Number
            </label>
            <input
              type="text"
              value={data.storeWhatsApp}
              onChange={(e) => handleChange("storeWhatsApp", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black focus:bg-background focus:border-primary/20 outline-none transition-all"
              placeholder="+94 740968108"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Email Address
            </label>
            <input
              type="email"
              value={data.storeEmail}
              onChange={(e) => handleChange("storeEmail", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black focus:bg-background focus:border-primary/20 outline-none transition-all"
              placeholder="contact@vexelsystems.lk"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Website (Optional)
            </label>
            <input
              type="text"
              value={data.storeWebsite}
              onChange={(e) => handleChange("storeWebsite", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black focus:bg-background focus:border-primary/20 outline-none transition-all"
              placeholder="www.vexelsystems.lk"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
