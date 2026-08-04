import type { MetadataRoute } from "next";

// Update this once you move off the .vercel.app URL onto a custom domain.
const BASE_URL = "https://musetta.com.au";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
