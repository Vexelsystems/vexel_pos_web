/**
 * Validation Utilities
 */

export interface PasswordValidationResult {
  hasMinLength: boolean;
  hasMaxLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
  isValid: boolean;
}

/**
 * Validates a password against security requirements:
 * - 8 to 15 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 * - At least one special character (@#$%&*!?)
 */
export const validatePassword = (
  password: string,
): PasswordValidationResult => {
  const hasMinLength = password.length >= 8;
  const hasMaxLength = password.length <= 32;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  // Special characters: !@#$%^&*()_-+=
  const hasSpecialChar = /[!@#$%^&*()_\-+=]/.test(password);

  return {
    hasMinLength,
    hasMaxLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialChar,
    isValid:
      hasMinLength &&
      hasMaxLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar,
  };
};

/**
 * Validates an email address format.
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a mobile number in international format (E.164).
 * Example: +94771234567
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+[1-9]\d{7,14}$/;
  return phoneRegex.test(phone);
};

/**
 * Validates a person's name.
 * Allows letters, spaces, hyphens, and apostrophes.
 * Length: 2-50 characters.
 */
export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s\-']{2,15}$/;
  return nameRegex.test(name.trim());
};
