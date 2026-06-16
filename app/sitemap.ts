import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";

// Keep in sync with metadataBase in app/layout.tsx.
const BASE = "https://www.gnanimarketing.com";

// Public, linked routes. /start-project is intentionally omitted —
// it exists but is unlinked, so it stays out of the sitemap.
const ROUTES = [
  "",
  "/work",
  "/studio",
  "/process",
  "/services",
  "/services/websites",
  "/services/platforms",
  "/services/growth",
  "/services/branding",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const caseStudies = CASE_STUDIES.map((c) => ({
    url: `${BASE}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...caseStudies];
}
