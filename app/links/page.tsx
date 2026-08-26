import Image from "next/image";
import Link from "next/link";

import { Icon, type IconName } from "@/components/icons";
import { createPageMetadata } from "@/lib/seo";

import whiteLogo from "../../Selected-Pictures-for-Website/Logos/White-Logo.png";
import styles from "./links.module.css";

export const metadata = createPageMetadata({
  title: "Ferguson & Sons Mechanical | Quick Links",
  description: "Quick links to call, text, schedule HVAC service, read reviews, and connect with Ferguson & Sons Mechanical LLC.",
  path: "/links/",
});

const facebookUrl = "https://www.facebook.com/profile.php?id=61586880370088";
const googleBusinessUrl = "https://share.google/6VmLpJkW5oOySqGqF";

type QuickLink = {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
  primary?: boolean;
};

const quickLinks: QuickLink[] = [
  { label: "Call Us", href: "tel:+17574067135", icon: "phone", primary: true },
  { label: "Text Us", href: "sms:+17574067135", icon: "message" },
  { label: "Get Scheduled Today", href: "/contact/#schedule-service", icon: "calendar" },
  { label: "Our Website", href: "/", icon: "globe" },
  { label: "Maintenance Plan", href: "/maintenance-plan/", icon: "thermostat" },
  { label: "Leave Us a Review", href: googleBusinessUrl, icon: "google", external: true },
  { label: "Facebook", href: facebookUrl, icon: "facebook", external: true },
];

export default function LinksPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.brand}>
          <Image className={styles.logo} src={whiteLogo} alt="Ferguson & Sons Mechanical LLC" priority />
          <p>Chesapeake, Virginia</p>
          <nav className={styles.socials} aria-label="Quick access">
            <Link href="/" aria-label="Visit Ferguson & Sons website"><Icon name="globe" width={19} height={19} /></Link>
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Visit Ferguson & Sons on Facebook"><Icon name="facebook" width={19} height={19} /></a>
            <a href={googleBusinessUrl} target="_blank" rel="noreferrer" aria-label="Leave a review for Ferguson & Sons on Google"><Icon name="google" width={19} height={19} /></a>
          </nav>
        </header>

        <nav aria-label="Ferguson & Sons links">
          <ul className={styles.links}>
            {quickLinks.map(({ label, href, icon, external, primary }) => (
              <li key={label}>
                {external ? (
                  <a className={`${styles.link}${primary ? ` ${styles.primary}` : ""}`} href={href} target="_blank" rel="noreferrer">
                    <Icon className={styles.linkIcon} name={icon} width={21} height={21} />
                    <span>{label}</span>
                    <Icon className={styles.arrow} name="arrow-right" width={19} height={19} />
                  </a>
                ) : href.startsWith("/") ? (
                  <Link className={`${styles.link}${primary ? ` ${styles.primary}` : ""}`} href={href}>
                    <Icon className={styles.linkIcon} name={icon} width={21} height={21} />
                    <span>{label}</span>
                    <Icon className={styles.arrow} name="arrow-right" width={19} height={19} />
                  </Link>
                ) : (
                  <a className={`${styles.link}${primary ? ` ${styles.primary}` : ""}`} href={href}>
                    <Icon className={styles.linkIcon} name={icon} width={21} height={21} />
                    <span>{label}</span>
                    <Icon className={styles.arrow} name="arrow-right" width={19} height={19} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.footer}>Family-owned HVAC service for South Hampton Roads.</p>
      </div>
    </main>
  );
}
