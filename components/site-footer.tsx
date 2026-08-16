import Link from "next/link";

import { Icon } from "./icons";
import { SiteLogo } from "./site-logo";
import { ButtonLink } from "./ui/button";

const quickLinks = [
  ["Home", "/"],
  ["Services", "/services/"],
  ["About", "/about/"],
  ["Reviews", "/reviews/"],
  ["Service Area", "/service-area/"],
  ["Maintenance Plan", "/maintenance-plan/"],
  ["Gallery", "/gallery/"],
  ["Contact", "/contact/"],
];

const serviceLinks = [
  ["A/C Repair & Diagnostics", "/services/ac-repair/"],
  ["HVAC Maintenance", "/services/hvac-maintenance/"],
  ["Commercial HVAC Service", "/services/commercial-hvac/"],
  ["HVAC Replacement & Installation", "/services/hvac-replacement-installation/"],
  ["Heat Pump Service", "/services/heat-pump-repair/"],
  ["Furnace Service", "/services/furnace-repair/"],
  ["Ductless Mini-Splits", "/services/ductless-mini-splits/"],
];

const serviceAreaLinks = [
  ["Chesapeake", "/service-area/chesapeake-va/"],
  ["Virginia Beach", "/service-area/virginia-beach-va/"],
  ["Norfolk", "/service-area/norfolk-va/"],
  ["Portsmouth", "/service-area/portsmouth-va/"],
  ["Eastern Suffolk", "/service-area/suffolk-va/"],
];

function FooterLinks({ links }: { links: string[][] }) {
  return (
    <ul>
      {links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <SiteLogo inverted />
            <p>Family-owned HVAC service, repair, maintenance, and installation for homes and businesses across Chesapeake and South Hampton Roads.</p>
            <address>
              <a href="tel:+17574067135"><Icon name="phone" width={16} height={16} />(757) 406-7135</a>
              <span><Icon name="clock" width={16} height={16} />8:00 AM–5:00 PM</span>
              <span><Icon name="shield" width={16} height={16} />Licensed &amp; Insured</span>
            </address>
            <div className="site-footer__socials" aria-label="Social profiles">
              <a href="https://www.facebook.com/profile.php?id=61586880370088" target="_blank" rel="noreferrer" aria-label="Ferguson & Sons on Facebook"><Icon name="facebook" width={20} height={20} /></a>
              <a href="https://share.google/6VmLpJkW5oOySqGqF" target="_blank" rel="noreferrer" aria-label="Ferguson & Sons Google Business profile"><Icon name="google" width={20} height={20} /></a>
            </div>
          </div>
          <div className="site-footer__column"><h2>Quick Links</h2><FooterLinks links={quickLinks} /></div>
          <div className="site-footer__column"><h2>Services</h2><FooterLinks links={serviceLinks} /></div>
          <div className="site-footer__column">
            <h2>Service Area</h2>
            <FooterLinks links={serviceAreaLinks} />
            <p className="site-footer__area-note">Serving South Hampton Roads and surrounding communities.</p>
            <ButtonLink href="/contact/">Get a Free Quote</ButtonLink>
          </div>
        </div>
        <div className="site-footer__legal">
          <p>© {new Date().getFullYear()} Ferguson &amp; Sons Mechanical LLC. All rights reserved.</p>
          <div><Link href="/privacy-policy/">Privacy Policy</Link><Link href="/terms-of-service/">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  );
}
