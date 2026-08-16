import navyIcon from "../Selected-Pictures-for-Website/Logos/Navy-Icon.png";
import { businessName, getSiteUrl } from "./seo";

export function getBusinessStructuredData() {
  const siteUrl = getSiteUrl();
  const homeUrl = new URL("/", siteUrl).toString();
  const businessId = new URL("/#business", siteUrl).toString();
  const websiteId = new URL("/#website", siteUrl).toString();
  const logoUrl = new URL(navyIcon.src, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessName,
        inLanguage: "en-US",
        publisher: { "@id": businessId },
      },
      {
        "@type": "HVACBusiness",
        "@id": businessId,
        name: businessName,
        url: homeUrl,
        description:
          "Family-owned HVAC service, repair, diagnostics, maintenance, and installation for homes and businesses across Chesapeake and South Hampton Roads.",
        telephone: "+1-757-406-7135",
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: navyIcon.width,
          height: navyIcon.height,
        },
        image: logoUrl,
        founder: [
          { "@type": "Person", name: "Chance Ferguson" },
          { "@type": "Person", name: "Kara Ferguson" },
        ],
        areaServed: [
          { "@type": "City", name: "Chesapeake, Virginia" },
          { "@type": "City", name: "Virginia Beach, Virginia" },
          { "@type": "City", name: "Norfolk, Virginia" },
          { "@type": "City", name: "Portsmouth, Virginia" },
          { "@type": "Place", name: "Eastern Suffolk, Virginia" },
          { "@type": "AdministrativeArea", name: "South Hampton Roads, Virginia" },
        ],
        sameAs: ["https://www.facebook.com/profile.php?id=61586880370088"],
        hasMap: "https://share.google/6VmLpJkW5oOySqGqF",
      },
    ],
  };
}
