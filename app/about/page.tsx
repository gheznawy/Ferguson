import Image from "next/image";

import familyPhoto from "../../Selected-Pictures-for-Website/About/01-about-family-rainbow.png";
import fieldPhoto from "../../Selected-Pictures-for-Website/About/02-about-service-philosophy-field-work.png";
import { FinalCTA } from "@/components/final-cta";
import { Icon, type IconName } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Our Family-Owned Chesapeake HVAC Company | Ferguson & Sons",
  description: "Meet Chance and Kara Ferguson and learn about their family-owned, service-first HVAC company based in Chesapeake, Virginia.",
  path: "/about/",
});

const trustCards: { icon: IconName; title: string; copy: string }[] = [
  { icon: "clock", title: "22 Years Experience", copy: "Decades of hands-on experience diagnosing and repairing a wide range of HVAC systems." },
  { icon: "shield", title: "Licensed & Insured", copy: "Licensed and insured HVAC service for homes and businesses across South Hampton Roads." },
  { icon: "briefcase", title: "Family-Owned & Operated", copy: "A personal, community-focused approach built on reputation and direct accountability." },
  { icon: "building", title: "Residential & Commercial", copy: "HVAC diagnostics, repair, maintenance, and installation for homes and businesses." },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader activePath="/about/" />
      <main>
        <section className="about-hero" aria-labelledby="about-title">
          <div className="site-container about-hero__layout">
            <div className="about-hero__content">
              <p className="section-eyebrow"><span aria-hidden="true" />About Ferguson &amp; Sons</p>
              <h1 id="about-title">Local HVAC Service Built on Experience &amp; Trust</h1>
              <p>Ferguson &amp; Sons Mechanical LLC is a family-owned and operated HVAC company based in Chesapeake, Virginia, serving homes and businesses throughout its regular South Hampton Roads service area.</p>
              <p>With 22 years of experience, Ferguson &amp; Sons focuses on dependable service, straightforward communication, diagnostics, repair, maintenance, and replacement when it makes sense.</p>
              <div className="about-hero__actions">
                <ButtonLink href="/contact/#schedule-service">Get Scheduled Today <Icon name="arrow-right" width={18} height={18} /></ButtonLink>
                <ButtonLink href="tel:+17574067135" variant="outline"><Icon name="phone" width={18} height={18} />Call Now</ButtonLink>
              </div>
            </div>
            <div className="about-hero__photo">
              <Image src={familyPhoto} alt="The Ferguson family together beneath a rainbow" fill priority sizes="(min-width: 1024px) 48vw, 100vw" />
              <div className="about-hero__badge"><span><Icon name="star" width={22} height={22} /></span><strong>22<small>Years Experience</small></strong></div>
            </div>
          </div>
        </section>

        <section className="about-story" aria-labelledby="about-story-title">
          <div className="site-container">
            <p className="about-story__label">Family-Owned &amp; Local</p>
            <h2 id="about-story-title">A Local Company That Treats Service Personally</h2>
            <div className="about-story__card">
              <Icon name="home" width={24} height={24} />
              <p>Ferguson &amp; Sons Mechanical LLC is rooted in Chesapeake and serves customers throughout South Hampton Roads with a practical, service-first approach to HVAC work. As a family-owned and operated business, the company&apos;s focus is on understanding the problem, communicating clearly, and helping customers make informed decisions about their heating and cooling systems.</p>
              <Icon name="family" width={24} height={24} />
            </div>
          </div>
        </section>

        <section className="about-experience" aria-labelledby="about-experience-title">
          <div className="site-container about-experience__layout">
            <div className="about-experience__intro">
              <p className="section-eyebrow"><span aria-hidden="true" />Experience You Can Count On</p>
              <h2 id="about-experience-title">Built Around Dependable HVAC Service</h2>
              <p>Ferguson &amp; Sons provides HVAC service, diagnostics, repair, maintenance, and replacement throughout its regular South Hampton Roads service area, with a slight emphasis on residential service while continuing to serve commercial customers.</p>
            </div>
            <div className="about-experience__cards">
              {trustCards.map((card) => <article key={card.title}><span><Icon name={card.icon} width={23} height={23} /></span><h3>{card.title}</h3><p>{card.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="about-philosophy" aria-labelledby="about-philosophy-title">
          <div className="site-container about-philosophy__layout">
            <div className="about-philosophy__photo"><Image src={fieldPhoto} alt="Ferguson & Sons technician inspecting outdoor HVAC equipment" fill sizes="(min-width: 1024px) 46vw, 100vw" /></div>
            <div>
              <p className="section-eyebrow">Our Approach</p>
              <h2 id="about-philosophy-title">Diagnose First.<br />Repair When It Makes Sense.</h2>
              <p>We believe in a service-first approach. Our technicians identify the source of the problem and explain practical options that support the reliable operation of the current system before recommending replacement.</p>
              <ul><li><Icon name="check" width={18} height={18} />Honest Diagnostics</li><li><Icon name="check" width={18} height={18} />Repair-Focused Recommendations</li><li><Icon name="check" width={18} height={18} />Replacement When Appropriate</li></ul>
            </div>
          </div>
        </section>

        <section className="about-audiences" aria-labelledby="about-audiences-title">
          <div className="site-container">
            <div className="about-audiences__heading"><p className="section-eyebrow">Residential &amp; Commercial</p><h2 id="about-audiences-title">HVAC Service for Homes &amp; Businesses</h2></div>
            <div className="about-audiences__grid">
              <article><span><Icon name="home" width={22} height={22} /></span><h3>Residential HVAC</h3><p>Year-round HVAC diagnostics, repair, maintenance, and replacement for homeowners across South Hampton Roads, with a focus on reliable comfort.</p></article>
              <article><span><Icon name="building" width={22} height={22} /></span><h3>Commercial HVAC</h3><p>Professional HVAC service, repair, diagnostics, and maintenance for local businesses, including rooftop-unit service.</p></article>
            </div>
          </div>
        </section>

        <section className="about-reputation" aria-labelledby="about-reputation-title">
          <div className="site-container about-reputation__layout">
            <div><p className="section-eyebrow">Local Reputation</p><h2 id="about-reputation-title">Trusted Around the Communities We Serve</h2></div>
            <div><p>For over two decades, Chance has built a reputation for knowledgeable, honest, and dependable HVAC service. Ferguson &amp; Sons is locally known throughout Chesapeake and the surrounding service area.</p><p className="about-reputation__note"><Icon name="location" width={21} height={21} />A trusted neighborhood favorite in Las Gaviotas.</p></div>
          </div>
        </section>
      </main>
      <FinalCTA eyebrow="Local HVAC Service You Can Trust" heading="Need Help With Your HVAC System?" description="" />
      <SiteFooter />
    </>
  );
}
