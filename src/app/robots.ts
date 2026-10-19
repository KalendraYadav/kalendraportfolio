import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kalendrayadav.dev";
  const baseUrl = rawBaseUrl.replace(/\/+$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design-system"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
