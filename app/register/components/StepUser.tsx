import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  validatePassword,
  validateEmail,
  validatePhone,
  validateName,
} from "@/lib/validation";

interface StepUserProps {
  data: any;
  updateData: (newData: any) => void;
  nextStep: () => void;
  isSubmitting?: boolean;
}

/**
 * STEP USER COMPONENT
 *
 * Functional Overview:
 * - Collects primary owner information.
 * - Self-contained layout with "Account Details" header.
 */
export default function StepUser({
  data,
  updateData,
  nextStep,
  isSubmitting = false,
}: StepUserProps) {
  // -- UI Visibility Logic --
  const [showPasswords, setShowPasswords] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  // -- Validation Logic --
  const passwordRules = validatePassword(data.ownerPassword || "");
  const isFirstNameValid = validateName(data.firstName || "");
  const isLastNameValid = validateName(data.lastName || "");

  // Generate static password requirement message
  const passwordError =
    data.ownerPassword && !passwordRules.isValid
      ? "Password must contain 8 to 32 characters, 1 uppercase,1 lowercase, 1 number, 1 special character."
      : null;

  // Combine country code and number for validation
  const fullPhoneNumber =
    (data.mobileCountryCode || "") + (data.mobileNumber || "");
  const isPhoneValid = validatePhone(fullPhoneNumber);

  const isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isPhoneValid &&
    data.storeEmail &&
    !data.emailError &&
    passwordRules.isValid &&
    data.confirmPassword &&
    data.ownerPassword === data.confirmPassword;

  useEffect(() => {
    const checkEmail = async () => {
      // 1. Format Check Local
      if (data.storeEmail && !validateEmail(data.storeEmail)) {
        updateData({
          emailError: "Invalid email format.",
          isEmailVerified: false,
        });
        return;
      }

      // 2. Firebase email check disabled
      updateData({
        emailError: null,
        isEmailVerified: true,
      });
    };

    const timer = setTimeout(() => {
      checkEmail();
    }, 600);

    return () => clearTimeout(timer);
  }, [data.storeEmail, data.lastCheckedEmail]);

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
            Create Account
          </h1>
          <p className="text-slate-400 text-sm font-normal">
            Enter your personal details to get started with Vexel.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#1e1e24]/40 border border-slate-700/50 rounded-xl p-6 flex flex-col gap-6 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label className="text-white text-sm font-medium">
                  First Name
                </label>
                {data.firstName && !isFirstNameValid && (
                  <span className="text-[10px] text-red-500 font-bold">
                    Invalid
                  </span>
                )}
              </div>
              <input
                type="text"
                name="firstName"
                value={data.firstName || ""}
                onChange={handleChange}
                placeholder="Jane"
                maxLength={50}
                className={`w-full rounded-lg bg-[#211b28] border px-4 py-3 text-white placeholder:text-slate-500 focus:ring-1 outline-none transition-all ${
                  data.firstName && !isFirstNameValid
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:border-primary focus:ring-primary"
                }`}
                required
                suppressHydrationWarning
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label className="text-white text-sm font-medium">
                  Last Name
                </label>
                {data.lastName && !isLastNameValid && (
                  <span className="text-[10px] text-red-500 font-bold">
                    Invalid
                  </span>
                )}
              </div>
              <input
                type="text"
                name="lastName"
                value={data.lastName || ""}
                onChange={handleChange}
                placeholder="Doe"
                maxLength={50}
                className={`w-full rounded-lg bg-[#211b28] border px-4 py-3 text-white placeholder:text-slate-500 focus:ring-1 outline-none transition-all ${
                  data.lastName && !isLastNameValid
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:border-primary focus:ring-primary"
                }`}
                required
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="text-white text-sm font-medium">
                Mobile Number
              </label>
              {data.mobileNumber && !isPhoneValid && (
                <span className="text-xs text-red-500 font-bold">
                  Invalid format (e.g. +94771234567)
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <div className="w-[100px] shrink-0">
                <select
                  name="mobileCountryCode"
                  value={data.mobileCountryCode || "+94"}
                  onChange={handleChange}
                  className="w-full h-full rounded-lg bg-[#211b28] border border-slate-700 px-3 py-3 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                  suppressHydrationWarning
                >
                  <option value="+94">SL (+94)</option>
                  <option value="+91">IN (+91)</option>
                  <option value="+1">US (+1)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+971">UAE (+971)</option>
                  <option value="+61">AU (+61)</option>
                </select>
              </div>
              <input
                type="tel"
                name="mobileNumber"
                value={data.mobileNumber || ""}
                onChange={(e) => {
                  // Clean numeric input and strip ANY leading zeros for E.164 compliance
                  const val = e.target.value
                    .replace(/\D/g, "")
                    .replace(/^0+/, "");
                  updateData({ mobileNumber: val });
                }}
                placeholder="771234567"
                className={`flex-1 rounded-lg bg-[#211b28] border px-4 py-3 text-white placeholder:text-slate-500 focus:ring-1 outline-none transition-all ${
                  data.mobileNumber && !isPhoneValid
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:border-primary focus:ring-primary"
                }`}
                required
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="text-white text-sm font-medium">
                Email Address
              </label>
              {data.emailError && (
                <span className="text-xs text-red-500 font-bold">
                  {data.emailError}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                name="storeEmail"
                value={data.storeEmail || ""}
                onChange={handleChange}
                placeholder="jane@example.com"
                className={`w-full rounded-lg bg-[#211b28] border px-4 py-3 text-white placeholder:text-slate-500 focus:ring-1 outline-none transition-all ${
                  data.emailError
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:border-primary focus:ring-primary"
                }`}
                required
                suppressHydrationWarning
              />
              {isCheckingEmail && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 scale-50 origin-right">
                  <div className="loader" />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="text-white text-sm font-medium">Password</label>
            </div>
            <div className="relative">
              <input
                type={showPasswords ? "text" : "password"}
                name="ownerPassword"
                value={data.ownerPassword || ""}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full rounded-lg bg-[#211b28] border px-4 py-3 text-white placeholder:text-slate-500 focus:ring-1 outline-none transition-all ${
                  data.ownerPassword && !passwordRules.isValid
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:border-primary focus:ring-primary"
                }`}
                required
                suppressHydrationWarning
              />
              <button
                type="button"
                onClick={() => setShowPasswords(!showPasswords)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
              >
                {showPasswords ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-xs text-red-500 font-medium leading-relaxed mt-1">
                {passwordError}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="text-white text-sm font-medium">
                Confirm Password
              </label>
              {data.ownerPassword &&
                data.confirmPassword &&
                data.ownerPassword !== data.confirmPassword && (
                  <span className="text-xs text-red-500 font-bold">
                    Passwords do not match
                  </span>
                )}
            </div>
            <input
              type={showPasswords ? "text" : "password"}
              name="confirmPassword"
              value={data.confirmPassword || ""}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full rounded-lg bg-[#211b28] border px-4 py-3 text-white placeholder:text-slate-500 focus:ring-1 outline-none transition-all ${
                data.ownerPassword &&
                data.confirmPassword &&
                data.ownerPassword !== data.confirmPassword
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-700 focus:border-primary focus:ring-primary"
              }`}
              required
              suppressHydrationWarning
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div>
          <button
            onClick={nextStep}
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-bold transition-all ${
              isFormValid
                ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
            }`}
          >
            {isSubmitting ? (
              <div className="loader brightness-0 invert" />
            ) : (
              <>
                Next Step
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
          <p className="mt-4 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* Support */}
        <div className="text-center">
          <p className="text-slate-500 text-xs">
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
