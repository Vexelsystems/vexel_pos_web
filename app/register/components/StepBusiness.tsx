import React from "react";
import { Store, ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";

interface StepBusinessProps {
  data: any;
  updateData: (newData: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

/**
 * STEP BUSINESS COMPONENT
 *
 * Functional Overview:
 * - Collects store metadata: Name, POS Category, and Type.
 * - Collects business website (optional).
 * - Implements specific "Shop Details" design with local header and progress.
 */
export default function StepBusiness({
  data,
  updateData,
  nextStep,
  prevStep,
}: StepBusinessProps) {
  /**
   * handleChange (Binding Logic)
   * Purpose: Generic mutation for simple text/select inputs.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="w-full max-w-[450px] flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl font-bold leading-tight">
            Shop Details
          </h1>
          <p className="text-slate-400 text-sm font-normal">
            Tell us about your business to help us personalize your experience.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#1e1e24]/40 border border-slate-700/50 rounded-xl p-6 flex flex-col gap-6 shadow-xl backdrop-blur-sm">
          {/* Store Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium">
              Store Name *
            </label>
            <input
              type="text"
              name="storeName"
              value={data.storeName}
              onChange={handleChange}
              placeholder="e.g. Blue Bottle Coffee"
              className="w-full rounded-lg bg-[#211b28] border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              required
            />
          </div>

          {/* POS Type Field */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium">POS Type *</label>
            <div className="relative">
              <select
                name="posCategory"
                value={data.posCategory || ""}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#211b28] border border-slate-700 px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                required
              >
                <option value="" disabled>
                  Select POS Type
                </option>
                <option value="Retail">Retail POS</option>
                <option value="Wholesale">Wholesale POS</option>
                <option value="Restaurant">Restaurant POS</option>
                <option value="Pharmacy">Pharmacy POS</option>
                <option value="Fashion">Apparel & Fashion</option>
                <option value="Other">Other Business</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Website Field */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium">Website</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                https://
              </span>
              <input
                type="text"
                name="website"
                value={data.website || ""}
                onChange={handleChange}
                placeholder="www.yourshop.com"
                className="w-full rounded-lg bg-[#211b28] border border-slate-700 pl-16 pr-4 py-3 text-white placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={prevStep}
            className="flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors px-4 py-2"
          >
            <ArrowLeft className="text-lg" />
            Back
          </button>
          <button
            onClick={nextStep}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            Next Step
            <ArrowRight className="text-lg" />
          </button>
        </div>

        {/* Support/Footer */}
        <div className="text-center">
          <p className="text-slate-400 text-xs">
            Need help?{" "}
            <a className="text-primary hover:underline" href="#">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
