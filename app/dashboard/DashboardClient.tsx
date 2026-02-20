"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { useAuth } from "@/lib/auth-context";
import {
  User as UserIcon,
  Building2,
  Save,
  LogOut,
  Sparkles,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Loader from "@/components/Loader";

export function DashboardClient() {
  const router = useRouter();
  const {
    user: authUser,
    loading: authLoading,
    logout,
    updateUser,
  } = useAuth();

  const [user, setUser] = useState<any | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [tenantData, setTenantData] = useState<any | null>(null);

  /**
   * UI FLOW STATE
   * - loading: Master flag for initial data fetching.
   * - activeTab: Toggles between Profile and Business forms.
   * - isEditing: Master toggle for form input 'disabled' attributes.
   * - saving: Loading state for the write operations.
   */
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"profile" | "business">("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  // Logic: Working memory for form edits before committing to Firestore.
  const [formData, setFormData] = useState<any>({});

  const [emailOtp, setEmailOtp] = useState("");
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const [phoneOtp, setPhoneOtp] = useState("");
  const [verifyingPhone, setVerifyingPhone] = useState(false);
  const [showPhoneOtpInput, setShowPhoneOtpInput] = useState(false);
  const [requestingPhoneOtp, setRequestingPhoneOtp] = useState(false);

  const handleLogout = async () => {
    logout();
  };

  useEffect(() => {
    if (!authLoading && authUser) {
      setUser(authUser);
      setUserData(authUser);
      // Logic: For now, setting tenantData to a placeholder or fetching it if possible.
      // In a real scenario, you'd fetch this from the backend.
      setTenantData({
        name: authUser.companyName || "Store Name",
        shopMobileNumber: authUser.phoneNumber || "0112345678",
        address: {
          shopNumber: "",
          streetName: "",
          city: authUser.country || "City",
        },
      });
      setFormData({
        ...authUser,
      });
      setLoading(false);
    } else if (!authLoading && !authUser) {
      router.replace("/login");
    }
  }, [authUser, authLoading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader" />
      </div>
    );
  }

  const handleVerifyEmail = async () => {
    if (emailOtp.length !== 6) {
      toast.error("Please enter a valid 6-digit code.");
      return;
    }
    setVerifyingOtp(true);
    try {
      const result = await api.post("/api/verify/email-otp", {
        email: user?.email,
        otp: emailOtp,
      });
      if (result.success) {
        toast.success("Email verified!");
        // Update context and local state
        updateUser({ emailVerified: true });
      } else {
        toast.error(result.error || "Verification failed.");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to verify. Please try again.");
    } finally {
      setVerifyingOtp(false);
    }
  };

  const handleRequestPhoneOtp = async () => {
    setRequestingPhoneOtp(true);
    try {
      const result = await api.post("/api/verify/phone-otp", {
        email: user?.email,
      });
      if (result.success) {
        toast.success("SMS verification code sent!");
        setShowPhoneOtpInput(true);
      } else {
        toast.error(result.error || "Failed to send code.");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setRequestingPhoneOtp(false);
    }
  };

  const handleVerifyPhone = async () => {
    if (phoneOtp.length !== 6) {
      toast.error("Please enter a valid 6-digit code.");
      return;
    }
    setVerifyingPhone(true);
    try {
      const result = await api.post("/api/verify/phone-verify", {
        email: user?.email,
        otp: phoneOtp,
      });
      if (result.success) {
        toast.success("Phone number verified!");
        // Update context and local state
        updateUser({ phoneVerified: true });
      } else {
        toast.error(result.error || "Verification failed.");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to verify. Please try again.");
    } finally {
      setVerifyingPhone(false);
    }
  };

  // --- EMAIL VERIFICATION CHECK ---
  if (!user?.emailVerified) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6 pt-32">
        <div className="max-w-md w-full bg-inner-box rounded-[2.5rem] p-8 shadow-2xl border border-white/10 text-center space-y-6">
          <div className="size-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg">
            <Sparkles className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-foreground">
              Verify Your Email
            </h2>
            <p className="text-foreground/60 font-medium">
              We've sent a 6-digit code to:
            </p>
            <div className="bg-primary/5 p-3 rounded-xl border border-primary/10">
              <span className="text-sm font-bold text-primary">
                {user?.email}
              </span>
            </div>
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
              className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {verifyingOtp ? (
                <div className="loader brightness-0 invert" />
              ) : (
                "Verify Email"
              )}
            </button>

            <button
              onClick={async () => {
                toast.promise(
                  api.post("/api/verify/resend", { email: user?.email }),
                  {
                    loading: "Sending verification email...",
                    success: "Verification code sent! Check your inbox.",
                    error: "Failed to send code. Please try again.",
                  },
                );
              }}
              className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors"
            >
              Didn't receive a code? Resend
            </button>

            <hr className="border-white/5" />

            <button
              onClick={handleLogout}
              className="w-full py-4 bg-background border border-white/10 text-foreground/60 font-black rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <LogOut size={18} /> Sign Out
            </button>
          </div>

          <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">
            Enter the OTP from your email to continue
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 pt-32 md:p-12 md:pt-32">
      {/* Full Screen Loading Overlay */}
      {(saving || verifyingOtp || verifyingPhone || requestingPhoneOtp) && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="flex flex-col items-center gap-8">
            <Loader className="scale-[2.5]" />
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl font-black text-primary tracking-tighter animate-pulse uppercase">
                {verifyingOtp || verifyingPhone
                  ? "Verifying..."
                  : "Processing..."}
              </h3>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">
            Client Dashboard
          </h1>
          <button
            type="button"
            onClick={handleLogout}
            className="text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-xl transition-colors flex items-center gap-2"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>

        <div className="bg-inner-box rounded-[2rem] shadow-xl border border-white/10 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 py-4 text-sm font-black uppercase tracking-widest transition-colors ${activeTab === "profile" ? "bg-primary/5 text-primary" : "text-gray-400 hover:text-gray-600"}`}
            >
              <div className="flex items-center justify-center gap-2">
                <UserIcon size={18} /> My Profile
              </div>
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`flex-1 py-4 text-sm font-black uppercase tracking-widest transition-colors ${activeTab === "business" ? "bg-primary/5 text-primary" : "text-gray-400 hover:text-gray-600"}`}
            >
              <div className="flex items-center justify-center gap-2">
                <Building2 size={18} /> Business
              </div>
            </button>
          </div>

          <div className="p-8">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Display Name
                    </label>
                    <input
                      disabled={!isEditing}
                      value={formData.displayName || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          displayName: e.target.value,
                        })
                      }
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center justify-between">
                      Email
                      {user?.emailVerified ? (
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      ) : (
                        <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-0.5 rounded-full">
                          Unverified
                        </span>
                      )}
                    </label>
                    <input
                      disabled
                      value={formData.email || ""}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 font-bold disabled:opacity-50 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center justify-between">
                      Mobile Number
                      {user?.phoneVerified ? (
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      ) : (
                        <span className="text-[10px] bg-gray-500/10 text-gray-500 px-2 py-0.5 rounded-full italic">
                          Optional
                        </span>
                      )}
                    </label>
                    <input
                      disabled={!isEditing}
                      value={formData.mobileNumber || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobileNumber: e.target.value,
                        })
                      }
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      disabled={!isEditing}
                      value={formData.dateOfBirth || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateOfBirth: e.target.value,
                        })
                      }
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                {/* Optional Phone Verification Card */}
                {!user?.phoneVerified && (
                  <div className="mt-8 bg-primary/5 rounded-[2rem] p-8 border border-primary/10 space-y-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={120} className="text-primary" />
                    </div>

                    <div className="relative flex items-center gap-4">
                      <div className="size-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <Phone size={28} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-black text-foreground">
                          Secure your account
                        </h3>
                        <p className="text-foreground/60 font-medium text-sm">
                          Verify your phone number for extra security and
                          notifications.
                        </p>
                      </div>
                    </div>

                    {!showPhoneOtpInput ? (
                      <div className="flex items-center justify-between bg-white/50 dark:bg-black/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="size-2 bg-primary rounded-full animate-pulse" />
                          <span className="font-bold text-foreground/80">
                            {user?.phoneNumber || "No number provided"}
                          </span>
                        </div>
                        {user?.phoneNumber && (
                          <button
                            onClick={handleRequestPhoneOtp}
                            disabled={requestingPhoneOtp}
                            className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:brightness-110 disabled:opacity-50 transition-all flex items-center gap-2"
                          >
                            {requestingPhoneOtp ? (
                              <div className="loader brightness-0 invert" />
                            ) : (
                              "Verify SMS"
                            )}
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4 pt-2">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            maxLength={6}
                            value={phoneOtp}
                            onChange={(e) =>
                              setPhoneOtp(e.target.value.replace(/\D/g, ""))
                            }
                            placeholder="Enter 6-digit code"
                            className="flex-[2] bg-background border border-white/10 rounded-xl px-4 py-3 font-bold focus:ring-2 focus:ring-primary/20 outline-none text-center tracking-[0.5rem]"
                          />
                          <button
                            onClick={handleVerifyPhone}
                            disabled={verifyingPhone || phoneOtp.length !== 6}
                            className="flex-1 py-3 bg-emerald-500 text-white font-black rounded-xl shadow-lg shadow-emerald-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                          >
                            {verifyingPhone ? (
                              <div className="loader brightness-0 invert" />
                            ) : (
                              <>
                                {" "}
                                <ShieldCheck size={18} /> Verify Code{" "}
                              </>
                            )}
                          </button>
                        </div>
                        <button
                          onClick={() => setShowPhoneOtpInput(false)}
                          className="text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors mx-auto block"
                        >
                          Change Number or Cancel
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            {activeTab === "business" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Store Name
                    </label>
                    <input
                      disabled={!isEditing}
                      value={formData.name || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Shop Mobile
                    </label>
                    <input
                      disabled={!isEditing}
                      value={formData.shopMobileNumber || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          shopMobileNumber: e.target.value,
                        })
                      }
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Address
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        placeholder="Shop No"
                        disabled={!isEditing}
                        value={formData.address?.shopNumber || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: {
                              ...formData.address,
                              shopNumber: e.target.value,
                            },
                          })
                        }
                        className="bg-background border border-white/10 rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                      <input
                        placeholder="Street"
                        disabled={!isEditing}
                        value={formData.address?.streetName || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: {
                              ...formData.address,
                              streetName: e.target.value,
                            },
                          })
                        }
                        className="bg-background border border-white/10 rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                      <input
                        placeholder="City"
                        disabled={!isEditing}
                        value={formData.address?.city || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: {
                              ...formData.address,
                              city: e.target.value,
                            },
                          })
                        }
                        className="bg-background border border-white/10 rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-all focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-background/50 flex justify-end gap-3 border-t border-white/10">
            {isEditing ? (
              <>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({ ...userData, ...tenantData }); // Reset
                  }}
                  className="px-6 py-2.5 rounded-xl font-bold text-foreground/60 hover:text-foreground hover:bg-background transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    setSaving(true);
                    try {
                      // Firebase update logic disabled
                      toast.success("Changes saved successfully (Simulation)!");
                      setIsEditing(false);
                    } catch (err) {
                      toast.error("Failed to save changes.");
                    } finally {
                      setSaving(false);
                    }
                  }}
                  disabled={saving}
                  className="px-6 py-2.5 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
                >
                  {saving ? (
                    <div className="loader brightness-0 invert" />
                  ) : (
                    <>
                      <Save size={18} /> Save Changes
                    </>
                  )}
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2.5 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-opacity"
              >
                Edit Details
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
