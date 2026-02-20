import { Metadata } from "next"; // Type: Standard Next.js interface for HTML head metadata.

/**
 * BASE_URL (Logic Constant)
 * Purpose: The authoritative root URL for the Sri Lankan production environment.
 * Why: Used for constructing absolute canonical links and Open Graph tags.
 */
export const BASE_URL = "https://www.vexelsystems.lk";

/**
 * DEFAULT_SEO (Configuration Object)
 * Purpose: Provides a fallback safety net for the SEO subsystem.
 * Logic: Every field represents a 'conservative default' that applies if a specific page fails to provide its own overrides.
 */
export const DEFAULT_SEO = {
  siteName: "Vexel POS",
  title: "Vexel POS | Modern Subscription-Based Point of Sale System",
  description:
    "Vexel POS is a smart, scalable, and secure cloud POS system designed for retail shops, supermarkets, and SMBs in Sri Lanka. Manage inventory, sales, and analytics with ease.",
  keywords: [
    "Vexel POS",
    "Vexel Systems",
    "Cloud POS Sri Lanka",
    "Retail Software Sri Lanka",
    "Supermarket Management System",
    "Subscription POS",
    "SaaS POS",
    "Vavuniya Software",
    "Inventory Management",
    "Sales Tracking",
    "Business Automation Sri Lanka",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_LK", // Specialized locale for Sri Lankan English context.
    url: BASE_URL,
    siteName: "Vexel POS",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Vexel POS - Smart Business Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const, // Strategy: Use large images for higher click-through-rates on social media.
    site: "@vexelsystems",
    creator: "@vexelsystems",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
    },
  },
};

/**
 * generatePageMetadata (The Core SEO Orchestrator)
 * Logic: A pure function that merges page-level intent with system defaults to produce a valid Next.js Metadata object.
 *
 * @param title - The page-specific primary heading.
 * @param description - High-density text for search engine result snippets.
 * @param keywords - Optional overrides; defaults to global keywords if omitted.
 * @param path - The slug used for canonical link construction.
 * @param noIndex - Logic flag: If true, tells robots NOT to index this page (used for legal/admin pages).
 */
export function generatePageMetadata({
  title,
  description,
  keywords,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  noIndex?: boolean;
}): Metadata {
  // Logic: Append the brand name to every page title automatically.
  const fullTitle = `${title} | Vexel POS`;
  // Logic: Resolve the absolute URL to prevent duplicate content flags from search engines.
  const url = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords || DEFAULT_SEO.keywords, // Logic: Fallback to defaults if page keywords are thin.
    alternates: { canonical: url },
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      ...DEFAULT_SEO.twitter,
      title: fullTitle,
      description,
    },
    // Logic: Dynamically switch indexing strategy based on the 'noIndex' prop.
    robots: noIndex ? { index: false, follow: true } : DEFAULT_SEO.robots,
  };
}

/**
 * generateOrganizationSchema (Structured Data Logic)
 * Purpose: Generates a JSON-LD compliant Org schema.
 * Logic: Helps Google understand the connection between Vexel Systems and the Vexel POS brand.
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vexel Systems",
    brand: "Vexel POS",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: DEFAULT_SEO.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vavuniya",
      addressCountry: "LK",
    },
  };
}
