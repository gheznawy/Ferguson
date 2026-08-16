import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

import { FinalCTA } from "./final-cta";
import { Icon, type IconName } from "./icons";
import { ServiceCard } from "./service-card";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { TrustSignals } from "./trust-signals";
import { ButtonLink } from "./ui/button";

export type ServiceAreaDetailContent = {
  slug: string;
  place: string;
  metadataTitle?: string;
  metadataDescription?: string;
  eyebrow: string;
  title: string;
  lead: string;
  heroImage: StaticImageData;
  heroAlt: string;
  overviewTitle: string;
  overview: string[];
  callout: string;
  servicesIntro: string;
  services: Array<{ title: string; description: string; href: string; icon: IconName }>;
  areaContextTitle: string;
  areaContext: string;
  nearby: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export function ServiceAreaDetailPage({ content }: { content: ServiceAreaDetailContent }) {
  return (
    <>
      <SiteHeader activePath="/service-area/" />
      <main>
        <section className="area-detail-hero" aria-labelledby="area-detail-title">
          <div className="site-container area-detail-hero__layout">
            <div>
              <p className="section-eyebrow"><span aria-hidden="true" />{content.eyebrow}</p>
              <h1 id="area-detail-title">{content.title}</h1>
              <p className="area-detail-hero__lead">{content.lead}</p>
              <div className="area-detail-hero__actions">
                <ButtonLink href="/contact/">Get a Free Quote <Icon name="arrow-right" width={17} height={17} /></ButtonLink>
                <ButtonLink href="tel:+17574067135" variant="outline"><Icon name="phone" width={17} height={17} />Call Now</ButtonLink>
              </div>
              <TrustSignals variant="inline" items={[{ label: "22 Years Experience", icon: "clock" }, { label: "Licensed & Insured", icon: "shield" }, { label: "Residential & Commercial", icon: "building" }]} />
            </div>
            <div className="area-detail-hero__photo">
              <Image src={content.heroImage} alt={content.heroAlt} fill priority sizes="(min-width: 1024px) 46vw, 100vw" />
              <span className="area-detail-hero__badge"><Icon name="location" width={20} height={20} />Regular Service Area</span>
            </div>
          </div>
        </section>

        <section className="area-detail-overview" aria-labelledby="area-overview-title">
          <div className="site-container area-detail-overview__layout">
            <div>
              <p className="section-eyebrow">Local HVAC Support</p>
              <h2 id="area-overview-title">{content.overviewTitle}</h2>
            </div>
            <div>
              {content.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="area-detail-overview__callout"><Icon name="diagnosis" width={22} height={22} />{content.callout}</p>
            </div>
          </div>
        </section>

        <section className="area-detail-services" aria-labelledby="area-services-title">
          <div className="site-container">
            <div className="area-detail-services__heading">
              <p className="section-eyebrow">How We Can Help</p>
              <h2 id="area-services-title">HVAC Services in {content.place}</h2>
              <p>{content.servicesIntro}</p>
            </div>
            <div className="area-detail-services__grid">
              {content.services.map((service) => <ServiceCard key={service.href} {...service} />)}
            </div>
            <Link className="area-detail-services__all" href="/services/">View All Services <Icon name="arrow-right" width={16} height={16} /></Link>
          </div>
        </section>

        <section className="area-detail-context" aria-labelledby="area-context-title">
          <div className="site-container area-detail-context__layout">
            <div>
              <p className="section-eyebrow"><Icon name="location" width={18} height={18} />South Hampton Roads</p>
              <h2 id="area-context-title">{content.areaContextTitle}</h2>
              <p>{content.areaContext}</p>
              <Link href="/service-area/">View the Full Service Area <Icon name="arrow-right" width={16} height={16} /></Link>
            </div>
            <div>
              <h3>Nearby Regular Service Areas</h3>
              <ul>{content.nearby.map((area) => <li key={area.href}><Link href={area.href}><Icon name="location" width={19} height={19} />{area.label}</Link></li>)}</ul>
            </div>
          </div>
        </section>

        <section className="area-detail-faq" aria-labelledby="area-faq-title">
          <div className="site-container area-detail-faq__layout">
            <div>
              <p className="section-eyebrow">Common Questions</p>
              <h2 id="area-faq-title">HVAC Service in {content.place}</h2>
              <p>Clear answers about service coverage and the HVAC work Ferguson &amp; Sons provides.</p>
            </div>
            <div className="faq-list">
              {content.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
            </div>
          </div>
        </section>
      </main>
      <FinalCTA eyebrow={`HVAC Service in ${content.place}`} heading="Need Help With Your HVAC System?" description={`Contact Ferguson & Sons for residential or commercial HVAC service in ${content.place}.`} />
      <SiteFooter />
    </>
  );
}
