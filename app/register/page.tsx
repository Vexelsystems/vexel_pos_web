"use client";

import React, { useState } from "react";
import { api } from "@/lib/api";
import StepUser from "@/app/register/components/StepUser";
import { toast } from "sonner";
import {
  requestRegistrationOTP,
  completeRegistration,
} from "@/lib/services/registration";
import { CheckCircle2, ChevronLeft, Sparkles, LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

/**
 * REGISTER PAGE COMPONENT
 *
 * Functional Overview:
 * - Phase 1 of Registration: User Identity Only.
 * - Collects Name, Email, Mobile, Password.
 * - Creates Auth Account and User Profile.
 * - Redirects to Login for Phase 2 (Business Onboarding).
 */
export default function RegisterPage() {
  const router = useRouter();
  const IS_MAINTENANCE_MODE = false;

  // -- State Management --
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileCountryCode: "+94",
    mobileNumber: "",
    storeEmail: "",
    ownerPassword: "",
    confirmPassword: "",
    emailError: null as string | null,
    isEmailVerified: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateFormData = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = async () => {
    if (IS_MAINTENANCE_MODE) {
      toast.error(
        "System is under maintenance. Registration is temporarily disabled.",
      );
      return;
    }

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.mobileNumber ||
      !formData.storeEmail ||
      !formData.ownerPassword ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (formData.ownerPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (formData.emailError) {
      toast.error(formData.emailError);
      return;
    }

    setIsSubmitting(true);

    try {
      // Merge country code and mobile number for E.164 format
      const fullMobile =
        (formData.mobileCountryCode || "") + (formData.mobileNumber || "");

      await requestRegistrationOTP({
        email: formData.storeEmail,
        password: formData.ownerPassword,
        firstName: (formData.firstName || "").trim(),
        lastName: (formData.lastName || "").trim(),
        phoneNumber: fullMobile,
      });

      setIsSuccess(true);
      toast.success("Verification code sent!");
    } catch (error: any) {
      // Backend error format usually: { success: false, error: "message" }
      // Or if it's a network error, it's a standard Error object
      const errorMessage =
        error.message || "Registration failed. Please try again.";

      console.log("Registration Error Caught:", errorMessage);

      if (errorMessage.toLowerCase().includes("already available email")) {
        setFormData((prev) => ({
          ...prev,
          emailError:
            "This email address is already associated with an account.",
        }));
        toast.error("Account already exists with this email. Please log in.");
      } else if (
        errorMessage.toLowerCase().includes("mobile number") ||
        errorMessage.toLowerCase().includes("international format")
      ) {
        toast.error(
          "Invalid mobile number format. Please check and try again.",
        );
      } else if (
        errorMessage.toLowerCase().includes("letters only") ||
        errorMessage.toLowerCase().includes("name")
      ) {
        toast.error("Name must contain letters only (max 15 characters).");
      } else {
        toast.error(errorMessage);
      }

      setIsSubmitting(false);
    }
  };

  const [emailOtp, setEmailOtp] = useState("");
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const handleVerifyEmail = async () => {
    if (emailOtp.length !== 6) {
      toast.error("Please enter a valid 6-digit code.");
      return;
    }
    setVerifyingOtp(true);
    try {
      const result = await completeRegistration(formData.storeEmail, emailOtp);
      if (result.success) {
        toast.success("Account created and verified! Redirecting to login...");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        toast.error(result.error || "Verification failed.");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to verify. Please try again.");
    } finally {
      setVerifyingOtp(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4 font-display text-center">
        <div className="bg-inner-box p-8 rounded-[3rem] shadow-2xl max-w-md w-full space-y-6 animate-in zoom-in-95 duration-500 border border-white/20">
          <div className="size-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-xl">
            <Sparkles className="w-12 h-12" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-foreground leading-tight">
              Verify Your Email
            </h2>
            <p className="text-foreground/60 font-bold">
              We've sent a 6-digit code to{" "}
              <span className="text-primary">{formData.storeEmail}</span>.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center gap-2">
              <input
                type="text"
                maxLength={6}
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                className="w-full py-4 text-center text-2xl font-black tracking-[1rem] bg-background border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>

            <button
              onClick={handleVerifyEmail}
              disabled={verifyingOtp || emailOtp.length !== 6}
              className="w-full py-5 rounded-2xl bg-primary text-white font-black hover:brightness-110 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {verifyingOtp ? (
                <div className="loader brightness-0 invert" />
              ) : (
                "Verify Email"
              )}
            </button>

            <button
              onClick={() => {
                toast.promise(
                  requestRegistrationOTP({
                    email: formData.storeEmail,
                    password: formData.ownerPassword,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phoneNumber:
                      (formData.mobileCountryCode || "") +
                      (formData.mobileNumber || ""),
                  }),
                  {
                    loading: "Resending code...",
                    success: "Verification code resent!",
                    error: "Failed to resend code.",
                  },
                );
              }}
              className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors"
            >
              Didn't receive a code? Resend
            </button>

            <hr className="border-white/5" />

            <Link
              href="/login"
              className="w-full py-4 text-sm font-bold text-foreground/40 hover:text-primary transition-colors flex items-center justify-center gap-2"
            >
              Log in instead <LogIn className="w-4 h-4" />
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
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="flex flex-col items-center gap-8">
            <Loader className="scale-[2.5]" />
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl font-black text-primary tracking-tighter animate-pulse uppercase">
                Sending Code...
              </h3>
            </div>
          </div>
        </div>
      )}
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-blue-400/10 blur-[150px]" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-md mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Step 1 User Form */}
        <div className="bg-inner-box rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
          <StepUser
            data={formData}
            updateData={updateFormData}
            nextStep={handleSubmit} // Reusing nextStep prop for submit in this simplified flow
            isSubmitting={isSubmitting}
          />
        </div>

        <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-6">
          Locked & Secured by{" "}
          <span className="text-gray-600">Vexel Systems</span>
        </p>
      </div>
    </div>
  );
}
