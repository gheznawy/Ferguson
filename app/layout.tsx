import type { Metadata } from "next";
import Script from "next/script";

import whiteIcon from "../Selected-Pictures-for-Website/Logos/White-Icon.png";
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
    icon: [{ url: whiteIcon.src, type: "image/png" }],
    shortcut: whiteIcon.src,
    apple: whiteIcon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Script id="reset-scroll-on-load" strategy="beforeInteractive">
          {`(() => {
            const scrollPositionKey = "ferguson-scroll-position";
            const navigationEntry = performance.getEntriesByType("navigation")[0];
            const isReload = navigationEntry?.type === "reload";

            window.addEventListener("pagehide", () => {
              sessionStorage.setItem(scrollPositionKey, String(window.scrollY));
            });

            if ("scrollRestoration" in history) history.scrollRestoration = "manual";

            const savedScrollY = Number(sessionStorage.getItem(scrollPositionKey));
            if (!isReload || !Number.isFinite(savedScrollY) || savedScrollY <= 0) {
              window.scrollTo(0, 0);
              return;
            }

            window.scrollTo(0, savedScrollY);
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                window.scrollTo({
                  top: 0,
                  behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                });
              });
            });
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
