import { MetadataRoute } from "next";

/**
 * ROBOTS.TXT GENERATOR
 *
 * SaaS Strategy:
 * - Allow full indexing of marketing and product pages.
 * - Disallow system, api, and private routes.
 * - Encourage AI bots to index public product data.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/login/",
          "/dashboard/",
          "/maintenance/",
          "/*.json$",
        ],
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot"],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://www.vexelsystems.lk/sitemap.xml",
  };
}
