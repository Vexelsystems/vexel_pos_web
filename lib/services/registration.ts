import { api } from "../api";

// Input for Phase 1: User Registration
interface UserRegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

// Input for Phase 2: Business Onboarding
interface OnboardingData {
  userId: string;
  email: string;
  shopName: string;
  posType: string;
  subscriptionId: string;
  branches: any[];
}

/**
 * Step 1: Request Pre-Registration OTP
 */
export const requestRegistrationOTP = async (data: UserRegistrationData) => {
  try {
    const result = await api.post("/api/auth/register/request-otp", data);
    return result;
  } catch (error: any) {
    console.error("Request OTP error:", error);
    throw error;
  }
};

/**
 * Step 2: Complete Registration after OTP
 */
export const completeRegistration = async (email: string, otp: string) => {
  try {
    const result = await api.post("/api/auth/register/complete", {
      email,
      otp,
    });
    return result;
  } catch (error: any) {
    console.error("Complete registration error:", error);
    throw error;
  }
};

/**
 * Phase 2: Business Onboarding
 * Calls Backend API to create Shop, Branches, and updates User Profile.
 */
export const onboardBusiness = async (data: OnboardingData) => {
  try {
    const result = await api.post("/api/business/onboard", data);
    return result;
  } catch (error: any) {
    console.error("Onboarding error:", error);
    throw error;
  }
};

/**
 * @deprecated Use requestRegistrationOTP and completeRegistration
 */
export const registerUserOnly = async (data: UserRegistrationData) => {
  return requestRegistrationOTP(data);
};
