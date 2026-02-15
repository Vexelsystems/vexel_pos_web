/**
 * NAVIGATION CONFIGURATION
 *
 * Functional Overview:
 * - Centralizes all menu links (header/footer/mobile).
 * - Logic: Auto-generates Service links dynamically from `services.ts`.
 * - formatSlug: Helper to beautify URL slugs for display.dfdfsas
 */
// Helper to format slug to title (e.g., "web-development" -> "Web Development")
const formatSlug = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const navigation = {
  products: [
    { name: "Vexel POS", href: "/products/vexel-pos" },
    { name: "Vexel Track", href: "/products/vexel-track" },
    { name: "Vexel Hire", href: "/products/vexel-hire" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },

    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
};

export const navLinks = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "services",
    label: "Services",
    href: "/services",
    isDropdown: true,
    hasPage: true,
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
    isDropdown: true,
    hasPage: true,
  },
  { id: "pricing", label: "Pricing", href: "/pricing" },
  { id: "company", label: "Company", href: "/company", isDropdown: true },
];
