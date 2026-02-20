"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

/**
 * BREADCRUMBS COMPONENT
 *
 * Renders a navigation trail based on the current URL path.
 *
 * Features:
 * - Automatically parses the URL segments
 * - Converts hyphenated slugs to Title Case (e.g., "web-development" -> "Web Development")
 * - Hides automatically on the Homepage
 * - Responsive and stylable
 */

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Paths where breadcrumbs should be hidden
  /**
   * BREADCRUMB VISIBILITY LOGIC
   * Strategy: Static exclusion list.
   * Logic: Returns null for high-level landing pages to maintain a clean hero aesthetic.
   */
  const hiddenPaths = ["/", "/login", "/consultation", "/quote", "/contact"];

  if (hiddenPaths.includes(pathname)) return null;

  // Split path into segments and remove empty strings
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Generate breadcrumb items
  const breadcrumbItems = segments.map((segment, index) => {
    // Reconstruct the path for this segment
    const href = `/${segments.slice(0, index + 1).join("/")}`;

    // Format the label: replace hyphens with spaces and capitalize
    /**
     * SLUG TRANSFORMATION LOGIC
     * Strategy: Regex-based title casing.
     * Logic:
     * 1. Replaces hyphens with spaces (e.g., 'web-dev' -> 'web dev').
     * 2. Capitalizes the first letter of every word for professional UI display.
     */
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return { href, label };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-[90%] md:w-[80%] mx-auto pt-28 pb-4 relative z-20"
    >
      <ol className="flex items-center gap-2 text-sm text-foreground/60 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {/* Home Link */}
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary transition-colors duration-200"
          >
            <Home size={14} />
            <span className="hidden xs:inline">Home</span>
          </Link>
        </li>

        {/* Dynamic Segments */}
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-foreground/40 shrink-0" />

              {isLast ? (
                // Current Page (Non-clickable)
                <span
                  className="font-medium text-foreground cursor-default"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                // Intermediate Link
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
