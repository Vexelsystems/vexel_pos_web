"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { onboardBusiness } from "@/lib/services/registration";
import { api } from "@/lib/api";
import { toast } from "sonner";
import StepBusiness from "@/app/register/components/StepBusiness";
import StepPackage from "@/app/register/components/StepPackage";
import StepBranch from "@/app/register/components/StepBranch";
import StepPreview from "@/app/register/components/StepPreview";
import { CheckCircle2, LogOut } from "lucide-react";
import Link from "next/link";
import Loader from "@/components/Loader";

/**
 * ONBOARDING PAGE
 *
 * Functional Overview:
 * - Phase 2 of Registration: Business Setup.
 * - Protected Route: Requires authenticated user.
 * - Steps: Shop Details -> Plan Selection -> Branch Setup -> Review.
 */
export default function OnboardingPage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  // -- State Management --
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    userId: "",
    email: "", // User's email from Auth

    // Step 1: Business Profile
    storeName: "",
    posCategory: "",
    website: "",

    // Step 2: Subscription choice
    package: "Starter",

    // Step 3: Branch Logic
    branches: [
      {
        id: "main-default",
        branchName: "Main Branch",
        branchCode: "MAIN-001",
        countryCode: "LK",
        country: "Sri Lanka",
        shopNumber: "",
        streetName: "",
        townVillage: "",
        city: "",
        district: "",
        stateProvince: "",
        postalCode: "",
      },
    ],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // -- Auth & Verification Check --
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");
      } else if (!user.emailVerified) {
        // Force verification before shop creation
        toast.error("Please verify your email to create a shop.");
        router.replace("/dashboard");
      }
    }
  }, [user, loading, router]);

  // Update formData with user info once available
  useEffect(() => {
    if (user && !formData.userId) {
      setFormData((prev) => ({
        ...prev,
        userId: user.uid,
        email: user.email || "",
      }));
    }
  }, [user, formData.userId]);

  // Check if user already has a shop
  useEffect(() => {
    const checkShopStatus = async () => {
      if (user && user.uid && !loading) {
        try {
          const statusResult = await api.get(`/api/auth/status/${user.uid}`);
          if (statusResult.success && statusResult.user.currentShopId) {
            toast.success("Business already set up. Redirecting...");
            router.replace("/dashboard");
            return;
          }
        } catch (error) {
          console.error("Failed to check onboarding status:", error);
        }
      }
    };
    checkShopStatus();
  }, [user, loading, router]);

  const updateFormData = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    // Phase 2 Validation
    if (currentStep === 1) {
      // Business Details
      if (!formData.storeName || !formData.posCategory) {
        toast.error("Please fill in all required shop details.");
        return;
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await onboardBusiness({
        userId: formData.userId,
        email: formData.email,
        shopName: formData.storeName,
        posType: formData.posCategory as any,
        subscriptionId: formData.package,
        branches: formData.branches.map((b: any) => ({
          branchName: b.branchName,
          branchCode: b.branchCode,
          address: {
            shopNumber: b.shopNumber,
            streetName: b.streetName,
            townVillage: b.townVillage,
            city: b.city,
            district: b.district,
            stateProvince: b.stateProvince,
            postalCode: b.postalCode,
            country: b.country,
          },
        })),
      });

      setIsSuccess(true);
      toast.success("Business set up successfully!");
    } catch (error: any) {
      console.error("Onboarding failed:", error);
      toast.error(error.message || "Setup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="loader" />
      </div>
    );
  }

  if (!user) return null; // Wait for redirect

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4 font-display text-center">
        <div className="bg-inner-box p-8 rounded-[3rem] shadow-2xl max-w-md w-full space-y-6 animate-in zoom-in-95 duration-500 border border-white/20">
          <div className="size-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-xl">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-foreground leading-tight">
              You're All Set!
            </h2>
            <p className="text-foreground/60 font-bold">
              Your business has been configured. Redirecting to your
              dashboard...
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <Link
              href="/dashboard"
              className="w-full py-5 rounded-2xl bg-primary text-white font-black hover:brightness-110 transition-all shadow-xl shadow-primary/20"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 font-display overflow-hidden relative selection:bg-primary/10">
      {/* Full Screen Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/60 backdrop-blur-md animate-in fade-in duration-300">
          <Loader className="scale-[2.5]" />
        </div>
      )}
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-blue-400/10 blur-[150px]" />
      </div>

      {/* Header with Logout */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-sm font-bold text-foreground transition-all"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>

      {/* Main Container */}
      <div className="w-full relative z-10">
        {currentStep === 1 && (
          <StepBusiness
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
            prevStep={() => {}} // No back step from first step of onboarding
          />
        )}
        {currentStep === 2 && (
          <StepPackage
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 3 && (
          <StepBranch
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 4 && (
          <StepPreview
            data={formData}
            prevStep={prevStep}
            submitRegistration={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  );
}
