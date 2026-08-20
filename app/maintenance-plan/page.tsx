import Image from "next/image";
import Script from "next/script";

import maintenancePhoto from "../../Selected-Pictures-for-Website/Maintenance Plan/01-maintenance-plan-hero.png";
import { Icon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSignals } from "@/components/trust-signals";
import { ButtonLink } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

const adobeEnrollmentWidgetUrl = "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCQv-p84NbA55GtQcKYsrBiBvOS5dfpq14N0xeHiGkzhj5PzzIRywOs1WFfh3VA2Q0*&hosted=false";
const adobeEnrollmentScriptUrl = "https://na4.documents.adobe.com/public/embeddedWidget?wid=CBFCIBAA3AAABLblqZhCQv-p84NbA55GtQcKYsrBiBvOS5dfpq14N0xeHiGkzhj5PzzIRywOs1WFfh3VA2Q0";

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
              <div className="plan-hero__actions"><ButtonLink href="#maintenance-enrollment" variant="secondary">Start Enrollment</ButtonLink><ButtonLink href="tel:+17574067135" variant="outline"><Icon name="phone" width={18} height={18} />Call Now</ButtonLink></div>
            </div>
            <div className="plan-hero__photo"><Image src={maintenancePhoto} alt="Ferguson & Sons technician performing maintenance on outdoor HVAC equipment" fill priority sizes="(min-width: 1024px) 48vw, 100vw" /></div>
          </div>
        </section>

        <section className="plan-care" aria-labelledby="plan-care-title">
          <div className="site-container plan-care__layout">
            <div><p className="section-eyebrow">What Your Plan Includes</p><h2 id="plan-care-title">Practical Care for Your HVAC System.</h2><p>The Maintenance Plan combines seasonal care with additional services designed to help keep your equipment running efficiently throughout the year.</p></div>
            <ul><li><Icon name="check" width={21} height={21} /><span>Two Included Maintenance Services: Fall &amp; Summer Cleaning <small>$190 Value</small></span></li><li><Icon name="check" width={21} height={21} /><span>Chemical Cleaning &amp; Waxing of Heat Pumps <small>$600 Value</small></span></li><li><Icon name="check" width={21} height={21} /><span>15% Off Repairs</span></li><li><Icon name="check" width={21} height={21} /><span>Priority Scheduling</span></li><li><Icon name="check" width={21} height={21} /><span>Furnace Cleaning</span></li><li><Icon name="check" width={21} height={21} /><span>Up to 1 lb of Refrigerant Included for Maximum Efficiency</span></li></ul>
          </div>
        </section>

        <section className="plan-enrollment" id="maintenance-enrollment" aria-labelledby="maintenance-enrollment-title">
          <div className="site-container">
            <div className="plan-enrollment__heading">
              <p className="section-eyebrow">Enroll in the Maintenance Plan</p>
              <h2 id="maintenance-enrollment-title">Complete Your Enrollment Form, Then Purchase Your Plan.</h2>
              <p>Please complete the enrollment form first. Once it is submitted, use the secure Square checkout below to purchase the Ferguson &amp; Sons Maintenance Plan.</p>
            </div>

            <ol className="plan-enrollment__steps" aria-label="Maintenance Plan enrollment steps">
              <li><span>1</span><div><strong>Complete the form</strong><p>Provide the information requested in the secure enrollment form.</p></div></li>
              <li><span>2</span><div><strong>Purchase the plan</strong><p>After submitting the form, continue to Square to complete your $299 annual purchase.</p></div></li>
            </ol>

            <div className="plan-enrollment__form">
              <iframe title="Ferguson & Sons Maintenance Plan enrollment form" src={adobeEnrollmentWidgetUrl} loading="lazy" />
            </div>
            <Script src={adobeEnrollmentScriptUrl} strategy="afterInteractive" />

            <div className="plan-enrollment__checkout">
              <div>
                <p className="section-eyebrow">Step 2: Purchase Your Plan</p>
                <h3>Ready to Continue?</h3>
                <p>After submitting the enrollment form above, complete your secure purchase through Square.</p>
              </div>
              <a className="plan-enrollment__buy-button" href="https://square.link/u/CDCnFzTQ?src=embed" target="_blank" rel="noopener noreferrer">Buy Now</a>
            </div>
          </div>
        </section>

        <div className="plan-trust"><div className="site-container"><TrustSignals variant="bar" items={[{ label: "22 Years Experience", icon: "star" }, { label: "Licensed & Insured", icon: "shield" }, { label: "Family-Owned & Operated", icon: "family" }, { label: "Residential & Commercial HVAC", icon: "building" }]} /></div></div>

        <section className="plan-conversion" aria-labelledby="plan-conversion-title">
          <div className="site-container">
            <p className="section-eyebrow">Maintenance Plan</p>
            <h2 id="plan-conversion-title">Straightforward Annual HVAC Maintenance</h2>
            <p className="plan-conversion__summary"><strong>$299 / Year / System</strong><span>•</span><b>≈ $25 / Month</b><span>•</span><b>2 Professional Maintenance Visits / Year</b></p>
            <div className="plan-conversion__card"><div><h3>Ready to Enroll in the Ferguson &amp; Sons Maintenance Plan?</h3><p>Complete the enrollment form before purchasing your plan.</p></div><div><ButtonLink href="#maintenance-enrollment">Complete Enrollment Form</ButtonLink><ButtonLink href="tel:+17574067135" variant="outline" inverse><Icon name="phone" width={18} height={18} />Call Now: (757) 406-7135</ButtonLink></div></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
