import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/privacy"],
      },
    ],
    sitemap: "https://bistricaai.vercel.app/sitemap.xml",
  };
}
