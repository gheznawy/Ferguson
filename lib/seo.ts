import type { Metadata } from "next";

import socialImage from "../Selected-Pictures-for-Website/Social Preview/Ferguson-Sons-Website-Preview.png";

export const businessName = "Ferguson & Sons Mechanical LLC";
export const siteUrlEnvironmentVariable = "SITE_URL";

export function getSiteUrl() {
  const configuredUrl = process.env[siteUrlEnvironmentVariable]?.trim();

  if (!configuredUrl) return new URL("https://fergusonsonsmechanical.com");

  try {
    return new URL(configuredUrl);
  } catch {
    throw new Error(`${siteUrlEnvironmentVariable} must be a valid absolute URL, such as https://example.com.`);
  }
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: businessName,
      title,
      description,
      url: path,
      images: [
        {
          url: socialImage.src,
          width: socialImage.width,
          height: socialImage.height,
          alt: "Ferguson & Sons Mechanical LLC HVAC services in Chesapeake, Virginia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.src],
    },
  };
}
