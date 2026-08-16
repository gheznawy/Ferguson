import Link from "next/link";

import { FinalCTA } from "@/components/final-cta";
import { Icon, type IconName } from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSignals } from "@/components/trust-signals";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Ferguson & Sons for HVAC Service in Chesapeake, VA",
  description: "Call or request a quote from Ferguson & Sons for residential or commercial HVAC service in Chesapeake and the South Hampton Roads service area.",
  path: "/contact/",
});

const nextSteps: { title: string; copy: string }[] = [
  { title: "Send Your Request", copy: "Fill out the contact form or give us a call with details about your HVAC issue." },
  { title: "We’ll Review the Details", copy: "Our team will review your needs and prepare to help with the appropriate next step." },
  { title: "Schedule the Next Step", copy: "We’ll coordinate a convenient time for a diagnostic visit or service appointment." },
];

function ContactItem({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return <li><span><Icon name={icon} width={19} height={19} /></span><div><strong>{title}</strong>{children}</div></li>;
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader activePath="/contact/" />
      <main>
        <section className="contact-hero" aria-labelledby="contact-title">
          <div className="site-container">
            <p className="section-eyebrow"><span aria-hidden="true" />Contact Ferguson &amp; Sons<span aria-hidden="true" /></p>
            <h1 id="contact-title">Need HVAC Help?<br />Get in Touch.</h1>
            <p>Contact Ferguson &amp; Sons Mechanical LLC for HVAC service, repair, diagnostics, maintenance, replacement, and related heating and cooling needs throughout our regular South Hampton Roads service area.</p>
            <TrustSignals variant="inline" items={[{ label: "Family-Owned & Operated", icon: "family" }, { label: "22 Years Experience", icon: "clock" }, { label: "Licensed & Insured", icon: "shield" }]} />
          </div>
        </section>

        <section className="contact-main" aria-labelledby="contact-information-title">
          <div className="site-container contact-main__layout">
            <div className="contact-main__information">
              <p className="section-eyebrow">Contact Information</p>
              <h2 id="contact-information-title">We’re Here to Help With Your HVAC Needs</h2>
              <p>Whether you need HVAC diagnostics, repair, maintenance, or another heating and cooling service, you can contact Ferguson &amp; Sons using the form or by phone.</p>
              <ul>
                <ContactItem icon="phone" title="Phone"><a href="tel:+17574067135">(757) 406-7135</a></ContactItem>
                <ContactItem icon="clock" title="Hours"><p>8:00 AM–5:00 PM</p></ContactItem>
                <ContactItem icon="location" title="Location & Service Area"><p>Based in Chesapeake, Virginia.</p><small>Serving Chesapeake, Virginia Beach, Norfolk, Portsmouth, Eastern Suffolk, and surrounding communities.</small></ContactItem>
              </ul>
            </div>
            <QuoteForm compact />
          </div>
        </section>

        <section className="contact-next" aria-labelledby="contact-next-title">
          <div className="site-container">
            <p className="section-eyebrow">What Happens Next</p>
            <h2 id="contact-next-title">A Simple Next Step</h2>
            <ol>{nextSteps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
          </div>
        </section>

        <section className="contact-area" aria-labelledby="contact-area-title">
          <div className="site-container">
            <p className="section-eyebrow">Our Service Area</p>
            <h2 id="contact-area-title">Serving South Hampton Roads</h2>
            <p>We provide professional HVAC services across our regular South Hampton Roads coverage area. If you’re unsure whether we cover your location, please reach out.</p>
            <ul><li><Link href="/service-area/chesapeake-va/">Chesapeake</Link></li><li><Link href="/service-area/virginia-beach-va/">Virginia Beach</Link></li><li><Link href="/service-area/norfolk-va/">Norfolk</Link></li><li><Link href="/service-area/portsmouth-va/">Portsmouth</Link></li><li><Link href="/service-area/suffolk-va/">Eastern Suffolk</Link></li></ul>
            <Link href="/service-area/">View Our Full Service Area <Icon name="arrow-right" width={17} height={17} /></Link>
          </div>
        </section>
      </main>
      <FinalCTA eyebrow="Local HVAC Service You Can Trust" heading="Need Help With Your HVAC System?" description="" />
      <SiteFooter />
    </>
  );
}
