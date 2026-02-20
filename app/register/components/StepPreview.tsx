import React from "react";
import {
  User,
  Store,
  Package,
  Warehouse,
  ShieldCheck,
  MapPin,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface StepPreviewProps {
  data: any;
  prevStep: () => void;
  submitRegistration: () => void;
  isSubmitting: boolean;
}

export default function StepPreview({
  data,
  prevStep,
  submitRegistration,
  isSubmitting,
}: StepPreviewProps) {
  // Get Main Branch (first branch)
  const mainBranch =
    data.branches && data.branches.length > 0 ? data.branches[0] : null;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-black text-foreground">Review Details</h2>
        <p className="text-foreground/60 text-sm font-medium">
          Double check everything before finalizing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {/* User Details */}
        <div className="group bg-background p-5 rounded-[2rem] border border-white/20 hover:border-primary/20 transition-all shadow-xl shadow-black/5 hover:shadow-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity">
            <User className="w-24 h-24 text-primary transform rotate-12 translate-x-4 -translate-y-4" />
          </div>

          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-white/5">
            <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-foreground">
                Administrator
              </h3>
              <p className="text-[10px] font-bold text-foreground/40">
                Personal Information
              </p>
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                  Full Name
                </p>
                <p className="text-xs font-bold text-foreground">
                  {data.firstName} {data.lastName}
                </p>
              </div>
              <div>
                <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                  Mobile
                </p>
                <p className="text-xs font-bold text-foreground">
                  {data.mobileNumber}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                Email / Login ID
              </p>
              <p className="text-xs font-bold text-foreground break-all">
                {data.storeEmail}
              </p>
            </div>
          </div>
        </div>

        {/* Business Details */}
        <div className="group bg-background p-5 rounded-[2rem] border border-white/20 hover:border-primary/20 transition-all shadow-xl shadow-black/5 hover:shadow-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity">
            <Store className="w-24 h-24 text-emerald-500 transform rotate-12 translate-x-4 -translate-y-4" />
          </div>

          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-white/5">
            <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-foreground">
                Business Info
              </h3>
              <p className="text-[10px] font-bold text-foreground/40">
                Shop Details
              </p>
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                  Store Name
                </p>
                <p className="text-xs font-bold text-foreground">
                  {data.storeName}
                </p>
              </div>
              <div>
                <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                  POS Type
                </p>
                <p className="text-xs font-bold text-foreground">
                  {data.posCategory}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                Website
              </p>
              <p className="text-xs font-bold text-foreground break-all">
                {data.website || "-"}
              </p>
            </div>
          </div>
        </div>

        {/* Plan & Branch */}
        <div className="group bg-background p-5 rounded-[2rem] border border-white/20 hover:border-primary/20 transition-all shadow-xl shadow-black/5 hover:shadow-primary/5 relative overflow-hidden md:col-span-2">
          <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity">
            <Package className="w-32 h-32 text-amber-500 transform rotate-12 translate-x-8 -translate-y-8" />
          </div>

          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-white/5">
            <div className="size-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-inner">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-foreground">
                Subscription
              </h3>
              <p className="text-[10px] font-bold text-foreground/40">
                Plan & Locations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div>
              <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-2">
                Selected Plan
              </p>
              <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-black uppercase tracking-wide border border-primary/20">
                {data.package}
              </span>
            </div>
            <div>
              <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                Total Branches
              </p>
              <p className="text-sm font-bold text-foreground">
                {data.branches?.length || 0} Location(s)
              </p>
            </div>
            <div>
              <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                Main Branch Location
              </p>
              {mainBranch ? (
                <div className="flex items-start gap-1.5 text-xs font-bold text-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span className="leading-tight">
                    {mainBranch.city}, {mainBranch.district}
                  </span>
                </div>
              ) : (
                <span className="text-xs text-foreground/50 font-medium">
                  Not set
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Activation Notice */}
        <div className="md:col-span-2 p-4 bg-primary/5 rounded-[1.5rem] border border-primary/10 flex items-start gap-4">
          <div className="size-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h4 className="font-black text-foreground text-sm">
              Account Activation Process
            </h4>
            <p className="text-xs font-medium text-foreground/60 leading-relaxed max-w-2xl">
              Your account will be created as{" "}
              <span className="text-primary font-black">Inactive</span>. Our
              team will verify your details and activate your account within 24
              hours. You will receive an email once activated.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="md:col-span-2 flex items-center justify-center gap-4 mt-4">
          <button
            onClick={prevStep}
            disabled={isSubmitting}
            className="px-6 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button
            onClick={submitRegistration}
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="loader brightness-0 invert" /> Processing...
              </>
            ) : (
              <>
                Confirm & Register <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
