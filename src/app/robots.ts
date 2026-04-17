import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [
      "https://www.wepayyoujunkremoval.com/sitemap/0.xml",
      "https://www.wepayyoujunkremoval.com/sitemap/1.xml",
      "https://www.wepayyoujunkremoval.com/sitemap/2.xml",
    ],
    host: "https://www.wepayyoujunkremoval.com",
  };
}
