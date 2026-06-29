// app/robots.ts
import type { MetadataRoute } from "next";

// Next.js genererer automatisk /robots.txt fra denne filen ved build-time.
// Plasser denne filen direkte i app/-roten (ikke i en undermappe).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://www.varigebad.no/sitemap.xml",
  };
}
