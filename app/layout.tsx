import type { Metadata } from "next";

import navyIcon from "../Selected-Pictures-for-Website/Logos/Navy-Icon.png";
import { businessName, getSiteUrl } from "@/lib/seo";

import "@fontsource-variable/hanken-grotesk";
import "@fontsource-variable/inter";
import "./globals.css";
import "./services.css";
import "./phases-7-9.css";
import "./phase-11.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: "HVAC Service & Repair in Chesapeake, VA | Ferguson & Sons",
  description: "Family-owned HVAC service, repair, diagnostics, and maintenance for homes and businesses across Chesapeake and South Hampton Roads.",
  applicationName: businessName,
  category: "HVAC services",
  icons: {
    icon: [{ url: navyIcon.src, type: "image/png" }],
    shortcut: navyIcon.src,
    apple: navyIcon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
