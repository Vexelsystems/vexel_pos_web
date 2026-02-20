"use client";

// -- Library Imports --
import React, { useState } from "react"; // React: Core library for component logic and state management (useState)
import { Mail, Lock, LogIn, ArrowRight, Eye, EyeOff } from "lucide-react"; // lucide-react: Providing consistent, modern stroke icons for UI clarity
import Image from "next/image"; // Next.js Image: Optimized image loading for logos (WebP conversion, lazy loading)
import { companyDetails } from "@/lib/companydetails"; // companyDetails: Centralized business info (logos, names) to ensure brand consistency
import Link from "next/link"; // Link: Client-side navigation for fast transitions without full page reloads
import { playSound } from "@/lib/toast-utils"; // playSound: Utility to trigger audio feedback (e.g., 'error' sound) for accessibility/UX
import { useAuth } from "@/lib/auth-context";
import { api } from "@/lib/api"; // api: Backend utility
import { useRouter } from "next/navigation"; // useRouter: Hook to programmatically navigate users after successful login
import { toast } from "sonner"; // sonner: Elegant, non-blocking toast notifications for status updates
import Loader from "@/components/Loader";

/**
 * LOGIN CLIENT COMPONENT
 *
 * Functional Overview:
 * - Provides a secure authentication interface for the Vexel Nexus platform.
 * - Implementation Strategy: Uses a clean, centered box layout with a simulated progress bar for feedback.
 */
export default function LoginClient() {
  // -- Programmatic Routing --
  // router: Facilitates navigation to the /dashboard after successful sign-in.
  const router = useRouter();
  const { login } = useAuth();

  // -- Form State --
  // email: Stores the user-provided email address from the input field.
  const [email, setEmail] = useState("");
  // password: Stores the secret password provided by the user (cleared on error for security).
  const [password, setPassword] = useState("");
  // showPassword: Visibility flag for the password input field.
  const [showPassword, setShowPassword] = useState(false);

  // -- UI Feedback State --
  // isLoading: Boolean flag to disable the submit button and show loading indicators during auth requests.
  const [isLoading, setIsLoading] = useState(false);
  // progress: Numeric percentage (0-100) used for the simulated progress overlay in the button.
  const [progress, setProgress] = useState(0);

  // -- Error Handling State --
  // showError: Visibility flag for the specialized 'Access Denied' modal.
  const [showError, setShowError] = useState(false);
  // errorMessage: The specific text displayed in UI feedback (mapped from technical error codes).
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * AUTH SUBMISSION HANDLER
   * Performs standard Firebase Email/Password authentication.
   *
   * @param e - The React Form Event used to prevent the default browser refresh behavior.
   */
  const handleLogin = async (e: React.FormEvent) => {
    // PRE-SUBMISSION LOGIC: Prepare UI for the network request
    e.preventDefault(); // Stop page reload

    // DEBOUNCE / DOUBLE-SUBMIT GUARD:
    // If a request is already in-flight, ignore subsequent calls to prevent race conditions.
    if (isLoading) return;

    setIsLoading(true); // Toggle loading state to prevent double-clicks
    setProgress(0); // Reset progress tracker

    // UX SIMULATION: Starts a timer to increment the visual progress bar artificially
    // This gives the user immediate visual confirmation that work is being done.
    const timer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 5, 90)); // Cap progress at 90% until server responds
    }, 50);

    try {
      /**
       * NETWORK REQUEST BLOCK: FIREBASE AUTH
       * Communicates with Firebase to verify the email/password combination.
       */
      // 1. Call Backend to verify credentials and get Token
      const loginResult = await api.post("/api/auth/login", {
        email,
        password,
      });

      if (!loginResult.success) {
        throw new Error(loginResult.error || "Login failed");
      }

      // 2. Update local Auth State (Zero-Firebase way)
      login(loginResult.user, loginResult.token);

      // SUCCESS BLOCK: Perform cleanup and navigation
      clearInterval(timer); // Stop the progress simulation
      setProgress(100); // Snap bar to 100%

      // Redirect to login — which will forward to the right place
      toast.success("Login successful!");
      router.push("/login");
    } catch (error: any) {
      // ERROR CLEANUP BLOCK: Reset UI to allow retry
      clearInterval(timer); // Stop the progress simulation
      setProgress(100); // Complete visual bar
      setIsLoading(false); // Enable the button again

      // Play an audible error sound for improved UX
      playSound("error");
      // Trigger the specialized error modal
      setShowError(true);

      /**
       * ERROR MAPPING LOGIC
       * Translates Firebase technical codes into secure, human-readable strings.
       */
      const errorCode = error.code; // Extracting the code for cleaner switching

      if (errorCode === "auth/invalid-credential") {
        setErrorMessage("Invalid email or password. Please try again.");
      } else if (errorCode === "auth/too-many-requests") {
        setErrorMessage("Too many failed attempts. Please try again later.");
      } else if (error.message) {
        // Custom error messages from our security checks
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 pt-24 relative overflow-hidden">
      {/* Full Screen Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/60 backdrop-blur-md animate-in fade-in duration-300">
          <Loader className="scale-[2.5]" />
        </div>
      )}
      {/* 
        VISUAL BACKGROUND DECORATION 
        Purpose: Adds depth and brand color without distracting from the main form.
      */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Top-left primary ambient glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
        {/* Bottom-right purple ambient glow */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* 
        MAIN LOGIN PANEL 
        Purpose: The primary interaction box containing brand identity and form fields.
      */}
      <div className="w-full max-w-md bg-inner-box rounded-[32px] shadow-2xl border border-white/20 p-8 md:p-12 relative z-10">
        {/* BRANDING SECTION */}
        <div className="text-center mb-10">
          <Link
            href="/"
            className="inline-block mb-6 relative hover:scale-105 transition-transform"
          >
            <div className="relative size-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center">
              <Image
                src={companyDetails.logos.main}
                alt={companyDetails.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </Link>
          <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-foreground/60 text-sm font-medium">
            Enter your credentials to access the Vexel Nexus
          </p>
        </div>

        {/* AUTHENTICATION FORM */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            {/* EMAIL INPUT BLOCK */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">
                Email
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  required
                  spellCheck={false}
                  placeholder="admin@vexel.com"
                  className="w-full bg-background border border-white/10 rounded-2xl py-4 pl-12 pr-4 font-bold text-foreground outline-none focus:border-primary/50 transition-all placeholder:font-normal placeholder:text-foreground/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* PASSWORD INPUT BLOCK */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-bold text-foreground/40 hover:text-primary transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary transition-colors"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full bg-background border border-white/10 rounded-2xl py-4 pl-12 pr-12 font-bold text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:font-normal placeholder:text-foreground/20"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-primary transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* SUBMIT ACTION BLOCK */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-xl bg-primary text-white font-black text-base hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all flex items-center justify-center gap-2 relative overflow-hidden h-[56px]"
          >
            {isLoading ? (
              <div className="loader brightness-0 invert" />
            ) : (
              /* IDLE STATE UI: Primary CTA */
              <>
                Sign In <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>
      </div>

      {/* 
        ERROR MODAL POPUP 
        Purpose: Forces user attention to the specific reason for login failure.
      */}
      {showError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-inner-box rounded-[24px] shadow-2xl max-w-sm w-full p-6 border border-red-100 dark:border-red-900/30 animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Security Icon Container */}
              <div className="size-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-500 mb-2">
                <Lock size={32} />
              </div>
              {/* Main Heading: access denial focus */}
              <h3 className="text-xl font-black text-foreground">
                Access Denied
              </h3>
              {/* Message Content: mapped from state */}
              <p className="text-sm text-foreground/70 leading-relaxed">
                {errorMessage ||
                  "Invalid credentials provided. This access attempt has been logged for security purposes."}
              </p>
              {/* Close Action: Reset modal visibility */}
              <button
                onClick={() => setShowError(false)}
                className="w-full py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors mt-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
