import type { MetadataRoute } from "next";
import { pieces } from "@/data/pieces";

// Update this once you move off the .vercel.app URL onto a custom domain.
const BASE_URL = "https://musetta-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/collection`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/showroom`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Sold pieces are still valid pages (people search for sold-item provenance
  // and it signals an active, moving collection), so they're included too.
  const pieceRoutes: MetadataRoute.Sitemap = pieces.map((piece) => ({
    url: `${BASE_URL}/collection/${piece.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: piece.sold ? 0.4 : 0.8,
  }));

  return [...staticRoutes, ...pieceRoutes];
}
