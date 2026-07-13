import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/our-services", priority: 0.8 },
  { path: "/about-us", priority: 0.8 },
  { path: "/contact-us", priority: 0.8 },
  { path: "/news", priority: 0.8 },
  { path: "/resources", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
