/**
 * COMPANY DETAILS CONFIGURATION
 *
 * This file serves as the single source of truth for all company information
 * across the entire application. Centralizing this data ensures consistency
 * and makes updates easier.
 *
 * Used by:
 * - Layout (metadata, JSON-LD schema)
 * - Footer (contact info, social links)
 * - Contact pages (address, phone, email)
 * - SEO utilities (company name, description)
 * - All components that display company information
 *
 * Benefits of centralization:
 * - Update once, reflect everywhere
 * - Prevents inconsistencies
 * - Easier maintenance
 * - Type safety with TypeScript
 */

/**
 * Main company details object
 * Contains all information about Vexel Systems
 */
export const companyDetails = {
  /**
   * BASIC IDENTITY
   * Core company identification information
   */
  name: "Vexel Systems", // Display name used throughout the site
  legalName: "Vexel Systems", // Legal business name for official documents
  tagline: "Technology Made Simple", // Company slogan/tagline

  /**
   * LOGO PATHS
   * Centralized logo file paths for easy management
   * Update these paths if logo files are moved or renamed
   */
  logos: {
    main: "/VLogo.png", // Primary logo file
  },

  /**
   * COMPANY DESCRIPTION
   * Used for meta descriptions, about sections, and SEO
   */
  description:
    "Vexel Systems is a modern technology company delivering innovative, scalable, and user-friendly digital solutions. We specialize in software development, AI-powered systems, IoT solutions, and modern web technologies to help businesses grow efficiently.",

  /**
   * MISSION & VISION
   * Company's purpose and long-term goals
   */
  mission:
    "To simplify technology through innovative, reliable, and scalable solutions that empower businesses and individuals.",

  vision:
    "To become a globally trusted technology partner delivering intelligent digital solutions that shape the future.",

  philosophy: "Build simple. Think smart. Deliver impact.",

  /**
   * FOUNDERS / LEADERSHIP
   * Information about company founders
   * Displayed on team page and about section
   */
  founders: [
    {
      name: "Jathushan Varnakulasingam",
      role: "Founder, CEO & CTO", // Chief Executive Officer & Chief Technology Officer
      quote: "Innovation starts with simplicity.",
    },
    {
      name: "Kajakaran Sivananthan",
      role: "Founder, COO & CBO", // Chief Operating Officer & Chief Business Officer
      quote: "Technology works best when it solves real problems.",
    },
  ],

  /**
   * CONTACT INFORMATION
   * All contact methods for the company
   * Used in footer, contact page, and metadata
   */
  contact: {
    email: "contact@vexelsystems.lk", // General inquiries
    salesEmail: "contact@vexelsystems.lk", // Sales department
    supportEmail: "contact@vexelsystems.lk", // Technical support
    phone: "+94740968108", // Primary phone number
    whatsapp: "+94740968108", // WhatsApp business number
    website: "https://www.vexelsystems.lk", // Official website URL
  },

  /**
   * PHYSICAL ADDRESS
   * Company location information
   * Used for:
   * - Contact page
   * - Footer
   * - JSON-LD structured data (local SEO)
   * - Google Maps integration
   */
  address: {
    street: "Vairavapuliyankulam",
    city: "Vavuniya",
    district: "Vavuniya",
    country: "Sri Lanka",
    province: "Northern Province",
    postalCode: "43000",
    fullAddress:
      "Vairavapuliyankulam, Vavuniya, 43000, Northern Province, Sri Lanka.", // Formatted full address
  },

  /**
   * BUSINESS DETAILS
   * Operational information about the company
   */
  business: {
    establishedYear: 2025, // Year company was founded
    businessType: "Technology & Software Solutions", // Industry classification
    workingHours: {
      days: "Monday - Friday", // Operating days
      time: "09:00 - 17:00", // Operating hours (Digital format)
      timezone: "IST (Sri Lanka)", // Indian Standard Time
    },
  },

  /**
   * SOCIAL MEDIA LINKS
   * Company's social media presence
   * Used in:
   * - Footer social icons
   * - JSON-LD structured data (brand verification)
   * - Share buttons
   */
  socialLinks: {
    facebook: "https://www.facebook.com/vexelsystems/",
    instagram: "https://www.instagram.com/vexelsystems/",
    linkedin: "https://www.linkedin.com/company/vexelsystems/",
    github: "https://github.com/vexelsystems",
    twitter: "https://x.com/vexelsystems",
    tiktok: "https://www.tiktok.com/@vexelsystems",
  },

  /**
   * BRAND COLORS
   * Company's brand color palette
   * Used for:
   * - Theme customization
   * - CSS variables
   * - Meta theme-color tag
   * - Brand consistency
   */
  branding: {
    primaryColor: "#0077ED", // Main brand color (blue)
    secondaryColor: "#F5F5F7", // Secondary color (light gray)
    darkColor: "#1D1D1F", // Dark theme color
    lightColor: "#FFFFFF", // Light theme color
    logoPath: "/assets/logo/vexel-logo.png", // Alternative logo path
  },
};

/**
 * Default export for convenience
 * Allows importing as: import companyDetails from '@/lib/companydetails'
 */
export default companyDetails;
