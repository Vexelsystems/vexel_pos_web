/**
 * SCHEMA UTILITIES
 *
 * This file provides utility functions for generating structured data (JSON-LD)
 * for product pages, specifically SoftwareApplication schema.
 *
 * Purpose:
 * - Generate rich product schema for better search engine visibility
 * - Support product pages with detailed metadata
 * - Enable rich snippets in search results
 */

import { BASE_URL } from "./seo";
import { companyDetails } from "./companydetails";

/**
 * Generate JSON-LD structured data for SoftwareApplication (Product Pages)
 *
 * This schema helps Google understand your software products and can enable
 * rich snippets in search results with ratings, pricing, and features.
 *
 * @param name - Product name (e.g., "Vexel POS System")
 * @param description - Detailed product description
 * @param applicationCategory - Category (e.g., "BusinessApplication", "FinanceApplication")
 * @param operatingSystem - Supported OS (e.g., "Windows, Web", "iOS, Android")
 * @param offers - Pricing information
 * @param aggregateRating - Optional rating data
 * @param features - Array of key features
 * @param screenshot - Optional screenshot URL
 * @param url - Product page URL
 */
export function generateSoftwareApplicationSchema({
  name,
  description,
  applicationCategory = "BusinessApplication",
  operatingSystem,
  offers,
  aggregateRating,
  features = [],
  screenshot,
  url,
}: {
  name: string;
  description: string;
  applicationCategory?: string;
  operatingSystem: string;
  offers?: {
    priceCurrency: string;
    price?: string;
    priceRange?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  features?: string[];
  screenshot?: string;
  url: string;
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    operatingSystem,
    url: `${BASE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: companyDetails.name,
      url: companyDetails.contact.website,
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
  };

  // Add offers if provided
  if (offers) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: offers.priceCurrency,
      availability: "https://schema.org/InStock",
    };

    if (offers.price) {
      schema.offers.price = offers.price;
    }

    if (offers.priceRange) {
      schema.offers.priceRange = offers.priceRange;
    }
  }

  // Add aggregate rating if provided
  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    };
  }

  // Add features if provided
  if (features.length > 0) {
    schema.featureList = features;
  }

  // Add screenshot if provided
  if (screenshot) {
    schema.screenshot = `${BASE_URL}${screenshot}`;
  }

  return schema;
}

/**
 * Generate Product schema with local SEO emphasis
 *
 * This variant emphasizes local availability and regional targeting
 * for better local search rankings in Sri Lanka.
 */
export function generateLocalProductSchema({
  name,
  description,
  url,
  price,
  priceCurrency = "LKR",
  image,
  availability = "InStock",
  regions = ["Vavuniya", "Colombo", "Kandy", "Jaffna"],
}: {
  name: string;
  description: string;
  url: string;
  price?: string;
  priceCurrency?: string;
  image?: string;
  availability?: string;
  regions?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `${BASE_URL}${url}`,
    image: image ? `${BASE_URL}${image}` : `${BASE_URL}/Vexcel Logo.png`,
    brand: {
      "@type": "Brand",
      name: companyDetails.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency,
      price,
      availability: `https://schema.org/${availability}`,
      seller: {
        "@type": "Organization",
        name: companyDetails.name,
      },
      areaServed: regions.map((region) => ({
        "@type": "City",
        name: region,
      })),
    },
  };
}
