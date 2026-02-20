import { MetadataRoute } from "next";

/**
 * SITEMAP GENERATOR
 *
 * Functional Overview:
 * - Type: Dynamic Server Function generating `sitemap.xml`.
 * - Logic:
 *   1. Defines static priority routes for the SaaS platform.
 *   2. Assigns `changeFrequency` and `priority` based on content type importance.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vexelsystems.lk";
  const lastModified = new Date();

  // SaaS Core Routes
  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/platform", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/features", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/download", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/demo", priority: 0.8, changeFrequency: "monthly" as const },

    { url: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/team", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: [`${baseUrl}/favicon.ico`],
  }));
}
