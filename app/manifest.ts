import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3db89e",
    icons: [
      {
        src: "/_assets/logos/logo-primary-horizontal.png",
        sizes: "200x50",
        type: "image/png",
      },
    ],
  };
}
