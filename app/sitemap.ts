import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/seo";

const publicRoutes = [
  "/",
  "/services/",
  "/services/ac-repair/",
  "/services/hvac-maintenance/",
  "/services/commercial-hvac/",
  "/services/hvac-replacement-installation/",
  "/services/hvac-component-repair/",
  "/services/ductless-mini-splits/",
  "/services/thermostats/",
  "/services/indoor-air-quality/",
  "/services/heat-pump-repair/",
  "/services/furnace-repair/",
  "/maintenance-plan/",
  "/about/",
  "/reviews/",
  "/service-area/",
  "/service-area/chesapeake-va/",
  "/service-area/virginia-beach-va/",
  "/service-area/norfolk-va/",
  "/service-area/portsmouth-va/",
  "/service-area/suffolk-va/",
  "/gallery/",
  "/contact/",
  "/links/",
  "/privacy-policy/",
  "/terms-of-service/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return publicRoutes.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
