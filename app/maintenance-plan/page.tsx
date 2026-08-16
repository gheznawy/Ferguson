import Image from "next/image";

import maintenancePhoto from "../../Selected-Pictures-for-Website/Maintenance Plan/01-maintenance-plan-hero.png";
import { Icon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSignals } from "@/components/trust-signals";
import { ButtonLink } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "HVAC Maintenance Plan in Chesapeake, VA | Ferguson & Sons",
  description: "Keep up with routine HVAC care through two professional maintenance visits per year for $299 per system from Ferguson & Sons.",
  path: "/maintenance-plan/",
});

export default function MaintenancePlanPage() {
  return (
    <>
      <SiteHeader activePath="/maintenance-plan/" />
      <main>
        <section className="plan-hero" aria-labelledby="plan-title">
          <div className="site-container plan-hero__layout">
            <div>
              <p className="section-eyebrow">Ferguson &amp; Sons Maintenance Plan</p>
              <h1 id="plan-title">Stay Ahead of HVAC Maintenance.</h1>
              <p>Routine HVAC maintenance can help keep your system cared for throughout the year. The Ferguson &amp; Sons Maintenance Plan makes it simple with two professional maintenance visits per year for one annual price per system.</p>
              <div className="plan-price"><p><strong>$299</strong><b>per year / per system</b><span>•</span><span>≈ $25 / Month</span></p><small><Icon name="check" width={17} height={17} />2 Professional Maintenance Visits Per Year</small></div>
              <div className="plan-hero__actions"><ButtonLink href="/contact/" variant="secondary">Get a Free Quote</ButtonLink><ButtonLink href="tel:+17574067135" variant="outline"><Icon name="phone" width={18} height={18} />Call Now</ButtonLink></div>
            </div>
            <div className="plan-hero__photo"><Image src={maintenancePhoto} alt="Ferguson & Sons technician performing maintenance on outdoor HVAC equipment" fill priority sizes="(min-width: 1024px) 48vw, 100vw" /></div>
          </div>
        </section>

        <section className="plan-care" aria-labelledby="plan-care-title">
          <div className="site-container plan-care__layout">
            <div><p className="section-eyebrow">Routine HVAC Care</p><h2 id="plan-care-title">A Simple Way to Stay on Top of Your System.</h2><p>Regular professional maintenance gives homeowners and businesses a consistent way to have their HVAC equipment looked after throughout the year.</p></div>
            <ul><li><Icon name="tools" width={25} height={25} />Consistent System Care</li><li><Icon name="clock" width={25} height={25} />Two Planned Maintenance Visits</li><li><Icon name="family" width={25} height={25} />Professional HVAC Service</li></ul>
          </div>
        </section>

        <div className="plan-trust"><div className="site-container"><TrustSignals variant="bar" items={[{ label: "22 Years Experience", icon: "star" }, { label: "Licensed & Insured", icon: "shield" }, { label: "Family-Owned & Operated", icon: "family" }, { label: "Residential & Commercial HVAC", icon: "building" }]} /></div></div>

        <section className="plan-conversion" aria-labelledby="plan-conversion-title">
          <div className="site-container">
            <p className="section-eyebrow">Maintenance Plan</p>
            <h2 id="plan-conversion-title">Straightforward Annual HVAC Maintenance</h2>
            <p className="plan-conversion__summary"><strong>$299 / Year / System</strong><span>•</span><b>≈ $25 / Month</b><span>•</span><b>2 Professional Maintenance Visits / Year</b></p>
            <div className="plan-conversion__card"><div><h3>Ask About the Ferguson &amp; Sons Maintenance Plan</h3><p>Two professional maintenance visits per year for $299 per system.</p></div><div><ButtonLink href="/contact/">Get a Free Quote</ButtonLink><ButtonLink href="tel:+17574067135" variant="outline" inverse><Icon name="phone" width={18} height={18} />Call Now: (757) 406-7135</ButtonLink></div></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
