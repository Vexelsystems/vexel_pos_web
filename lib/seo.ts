/**
 * PREMIUM SaaS SEO UTILITIES
 *
 * Vexel POS | A Vexel Systems Product
 */

import { Metadata } from "next";

export const BASE_URL = "https://www.vexelsystems.lk";

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
    locale: "en_LK",
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
    card: "summary_large_image" as const,
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
  const fullTitle = `${title} | Vexel POS`;
  const url = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords || DEFAULT_SEO.keywords,
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
    robots: noIndex ? { index: false, follow: true } : DEFAULT_SEO.robots,
  };
}

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
