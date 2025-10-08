// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const base = "https://tech24.co.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/templates", "/pricing", "/contact"]; // adjust to your real pages
  const now = new Date();

  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency:
      p === "/" || p === "/templates" ? "weekly" : "monthly",
    priority: p === "/" ? 1.0 : p === "/templates" ? 0.9 : 0.8,
  }));
}
