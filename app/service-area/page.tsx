import Link from "next/link";

import { FinalCTA } from "@/components/final-cta";
import { Icon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSignals } from "@/components/trust-signals";
import { ButtonLink } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "South Hampton Roads HVAC Service Area | Ferguson & Sons",
  description: "See Ferguson & Sons HVAC coverage in Chesapeake, Virginia Beach, Norfolk, Portsmouth, eastern Suffolk, and nearby South Hampton Roads communities.",
  path: "/service-area/",
});

const serviceAreas = [
  { name: "Chesapeake", note: "Home Base", href: "/service-area/chesapeake-va/", featured: true },
  { name: "Virginia Beach", note: "Regular Coverage", href: "/service-area/virginia-beach-va/" },
  { name: "Norfolk", note: "Regular Coverage", href: "/service-area/norfolk-va/" },
  { name: "Portsmouth", note: "Regular Coverage", href: "/service-area/portsmouth-va/" },
  { name: "Eastern Suffolk", note: "Regular Coverage", href: "/service-area/suffolk-va/" },
];

export default function ServiceAreaPage() {
  return (
    <>
      <SiteHeader activePath="/service-area/" />
      <main>
        <section className="area-hub-hero" aria-labelledby="area-hub-title">
          <div className="site-container area-hub-hero__layout">
            <div>
              <p className="section-eyebrow"><span aria-hidden="true" />Proudly Serving South Hampton Roads</p>
              <h1 id="area-hub-title">Local HVAC Service Across Chesapeake &amp; Beyond</h1>
              <p>Based in Chesapeake, Ferguson &amp; Sons Mechanical LLC regularly serves homes and businesses in Virginia Beach, Norfolk, Portsmouth, eastern Suffolk, and surrounding communities within the normal South Hampton Roads coverage area.</p>
              <div className="area-hub-hero__actions">
                <ButtonLink href="/contact/#schedule-service">Get Scheduled Today <Icon name="arrow-right" width={17} height={17} /></ButtonLink>
                <ButtonLink href="tel:+17574067135" variant="outline" inverse><Icon name="phone" width={17} height={17} />Call Now</ButtonLink>
              </div>
            </div>
            <div className="area-hub-hero__facts">
              <div><Icon name="location" width={24} height={24} /><span>Home Base</span><strong>Chesapeake, Virginia</strong></div>
              <div><Icon name="clock" width={24} height={24} /><span>Business Hours</span><strong>8:00 AM–5:00 PM</strong></div>
              <div><Icon name="shield" width={24} height={24} /><span>Local HVAC Team</span><strong>Licensed &amp; Insured</strong></div>
            </div>
          </div>
        </section>

        <section className="area-hub-cities" aria-labelledby="area-cities-title">
          <div className="site-container">
            <div className="area-hub-cities__heading">
              <p className="section-eyebrow">Primary Service Areas</p>
              <h2 id="area-cities-title">Where Ferguson &amp; Sons Regularly Works</h2>
              <p>Explore the individual area pages for service details and useful coverage information. If your community is nearby but not listed, contact the team to ask whether it falls within the normal coverage area.</p>
            </div>
            <div className="area-hub-cities__grid">
              {serviceAreas.map((area) => (
                <article className={area.featured ? "area-card area-card--featured" : "area-card"} key={area.href}>
                  <span><Icon name="location" width={23} height={23} /></span>
                  <div><small>{area.note}</small><h3>{area.name}</h3></div>
                  <Link href={area.href} aria-label={`HVAC service in ${area.name}`}><Icon name="arrow-right" width={19} height={19} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="area-hub-map" aria-labelledby="area-map-title">
          <div className="site-container area-hub-map__layout">
            <div>
              <p className="section-eyebrow">Regular Coverage</p>
              <h2 id="area-map-title">Centered in Chesapeake. Serving South Hampton Roads.</h2>
              <p>Ferguson &amp; Sons serves its confirmed coverage area from Chesapeake. If your community is nearby but not listed, contact the team to ask about coverage.</p>
              <ul>
                {serviceAreas.map((area) => <li key={area.href}><Icon name="check" width={17} height={17} />{area.name}</li>)}
                <li><Icon name="check" width={17} height={17} />Surrounding communities within normal coverage</li>
              </ul>
              <Link href="/services/">Explore HVAC Services <Icon name="arrow-right" width={16} height={16} /></Link>
            </div>
            <div className="area-hub-map__embed">
              <iframe title="Map of Ferguson & Sons service area centered on Chesapeake, Virginia" src="https://maps.google.com/maps?q=Chesapeake%2C%20Virginia&t=&z=10&ie=UTF8&iwloc=&output=embed" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section className="area-hub-guidance" aria-labelledby="area-guidance-title">
          <div className="site-container area-hub-guidance__layout">
            <div><p className="section-eyebrow">Not Sure About Your Address?</p><h2 id="area-guidance-title">Ask About Coverage</h2><p>Service availability outside the listed core areas depends on whether the address falls within the normal South Hampton Roads route. Share your city and service need, and the team can confirm coverage.</p></div>
            <div><ButtonLink href="/contact/#schedule-service">Get Scheduled Today</ButtonLink><ButtonLink href="tel:+17574067135" variant="outline"><Icon name="phone" width={17} height={17} />(757) 406-7135</ButtonLink></div>
          </div>
          <div className="site-container"><TrustSignals variant="bar" /></div>
        </section>
      </main>
      <FinalCTA heading="Need HVAC Service in South Hampton Roads?" description="Contact Ferguson & Sons to discuss your HVAC needs and confirm service coverage." />
      <SiteFooter />
    </>
  );
}
