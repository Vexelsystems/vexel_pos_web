"use client";

import React from "react";

interface StepRegionProps {
  data: any;
  updateData: (data: any) => void;
}

export default function StepRegion({ data, updateData }: StepRegionProps) {
  /**
   * HANDLE CHANGE LOGIC
   * Strategy: Dynamic object property assignment.
   * Logic:
   * 1. Take field name (string) and new value.
   * 2. Use computed property syntax [field] to update the specific slice of state.
   * 3. Spread 'data' to ensure immutability and persistence of other fields.
   */
  const handleChange = (field: string, value: any) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-black text-foreground tracking-tight">
          Regional Settings
        </h2>
        <p className="text-sm text-muted-foreground">
          Control System Behavior & Localization
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Country
            </label>
            <input
              type="text"
              value={data.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black outline-none focus:bg-background focus:border-primary/20 transition-all"
              placeholder="Sri Lanka"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Time Zone
            </label>
            <input
              type="text"
              value={data.timeZone}
              onChange={(e) => handleChange("timeZone", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black outline-none focus:bg-background focus:border-primary/20 transition-all"
              placeholder="(GMT+05:30) Colombo"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Currency Code
            </label>
            <input
              type="text"
              value={data.currency}
              onChange={(e) => handleChange("currency", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black outline-none focus:bg-background focus:border-primary/20 transition-all"
              placeholder="LKR"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Currency Symbol
            </label>
            <input
              type="text"
              value={data.currencySymbol}
              onChange={(e) => handleChange("currencySymbol", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black outline-none focus:bg-background focus:border-primary/20 transition-all text-center"
              placeholder="Rs."
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Language
            </label>
            <input
              type="text"
              value={data.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="w-full bg-muted/30 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-black outline-none focus:bg-background focus:border-primary/20 transition-all"
              placeholder="English"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Date Format
            </label>
            <select
              value={data.dateFormat}
              onChange={(e) => handleChange("dateFormat", e.target.value)}
              className="w-full h-12 bg-muted/30 border-2 border-transparent rounded-xl px-4 text-sm font-black appearance-none outline-none focus:bg-background focus:border-primary/20 transition-all cursor-pointer"
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
              Number Format
            </label>
            <select
              value={data.numberFormat}
              onChange={(e) => handleChange("numberFormat", e.target.value)}
              className="w-full h-12 bg-muted/30 border-2 border-transparent rounded-xl px-4 text-sm font-black appearance-none outline-none focus:bg-background focus:border-primary/20 transition-all cursor-pointer"
            >
              <option value="1,000.00">1,000.00 (Comma Separator)</option>
              <option value="1.000,00">1.000,00 (Dot Separator)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
