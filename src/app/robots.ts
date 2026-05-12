// Desarrollado por Jhoan Camilo

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://caishen.com.co/sitemap.xml",
    host: "https://caishen.com.co",
  };
}