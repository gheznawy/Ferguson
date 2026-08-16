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

export type ServiceDetailContent = {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  heroImage: StaticImageData;
  heroAlt: string;
  imageBadgeEyebrow?: string;
  imageBadge: string;
  problemsHeading: React.ReactNode;
  problemsIntro: string;
  problems: Array<{ label: string; icon: IconName }>;
  approachTitle: React.ReactNode;
  approachIntro: string;
  approachCta?: string;
  steps: Array<{ title: string; description: string; icon: IconName }>;
  realServiceEyebrow: string;
  realServiceTitle: React.ReactNode;
  realServiceDescription: string;
  realServicePoints: string[];
  realServiceImage: StaticImageData;
  realServiceAlt: string;
  supportEyebrow: string;
  supportTitle: string;
  supportDescription: string;
  supportItems: Array<{ label: string; icon: IconName }>;
  relatedServices: Array<{ title: string; description: string; href: string; icon: IconName }>;
  serviceAreaEyebrow: string;
  serviceAreaTitle: string;
  serviceAreaDescription: string;
  finalCtaHeading: string;
  finalCtaDescription: string;
};

export function ServiceDetailPage({ content }: { content: ServiceDetailContent }) {
  return (
    <>
      <SiteHeader activePath="/services/" />
      <main>
        <section className="service-detail-hero" aria-labelledby="service-detail-title">
          <div className="site-container service-detail-hero__layout">
            <div className="service-detail-hero__content">
              <p className="section-eyebrow"><span aria-hidden="true" />{content.eyebrow}</p>
              <h1 id="service-detail-title">{content.title}</h1>
              <p className="service-detail-hero__lead">{content.lead}</p>
              <div className="service-detail-hero__actions">
                <ButtonLink href="/contact/">Get a Free Quote <Icon name="arrow-right" width={17} height={17} /></ButtonLink>
                <ButtonLink href="tel:+17574067135" variant="outline"><Icon name="phone" width={17} height={17} />Call Now</ButtonLink>
              </div>
              <TrustSignals
                variant="inline"
                items={[
                  { label: "22 Years Experience", icon: "clock" },
                  { label: "Licensed & Insured", icon: "shield" },
                  { label: "Family-Owned & Operated", icon: "family" },
                ]}
              />
            </div>
            <div className="service-detail-hero__visual">
              <div className="service-detail-hero__photo">
                <Image src={content.heroImage} alt={content.heroAlt} fill priority sizes="(min-width: 1024px) 46vw, 100vw" />
              </div>
              <div className="service-detail-hero__badge">
                <span><Icon name="diagnosis" width={23} height={23} /></span>
                <div><small>{content.imageBadgeEyebrow ?? "Diagnosis First"}</small><strong>{content.imageBadge}</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-problems" aria-labelledby="service-problems-title">
          <div className="site-container">
            <div className="service-problems__heading">
              <h2 id="service-problems-title">{content.problemsHeading}</h2>
              <p>{content.problemsIntro}</p>
            </div>
            <div className="service-problems__grid">
              {content.problems.map((problem) => (
                <article key={problem.label}>
                  <span aria-hidden="true"><Icon name={problem.icon} width={23} height={23} /></span>
                  <h3>{problem.label}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-approach" aria-labelledby="service-approach-title">
          <div className="site-container service-approach__layout">
            <div className="service-approach__intro">
              <p className="section-eyebrow"><span aria-hidden="true" />Our Approach</p>
              <h2 id="service-approach-title">{content.approachTitle}</h2>
              <p>{content.approachIntro}</p>
              <Link href="/contact/">{content.approachCta ?? "Schedule a Diagnosis"} <Icon name="arrow-right" width={15} height={15} /></Link>
            </div>
            <ol className="service-approach__steps">
              {content.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="service-approach__number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3><Icon name={step.icon} width={21} height={21} />{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="service-real" aria-labelledby="service-real-title">
          <div className="site-container service-real__layout">
            <div className="service-real__content">
              <p className="section-eyebrow">{content.realServiceEyebrow}</p>
              <h2 id="service-real-title">{content.realServiceTitle}</h2>
              <p>{content.realServiceDescription}</p>
              <ul>
                {content.realServicePoints.map((point) => <li key={point}><Icon name="check" width={18} height={18} />{point}</li>)}
              </ul>
            </div>
            <div className="service-real__photo">
              <Image src={content.realServiceImage} alt={content.realServiceAlt} fill sizes="(min-width: 1024px) 48vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="service-support" aria-labelledby="service-support-title">
          <div className="site-container">
            <p className="section-eyebrow">{content.supportEyebrow}</p>
            <h2 id="service-support-title">{content.supportTitle}</h2>
            <p>{content.supportDescription}</p>
            <ul>
              {content.supportItems.map((item) => <li key={item.label}><Icon name={item.icon} width={22} height={22} />{item.label}</li>)}
            </ul>
          </div>
        </section>

        <section className="service-related" aria-labelledby="service-related-title">
          <div className="site-container">
            <div className="service-related__heading">
              <p className="section-eyebrow">Related HVAC Services</p>
              <h2 id="service-related-title">More Ways We Can Help</h2>
            </div>
            <div className="service-related__grid">
              {content.relatedServices.map((service) => <ServiceCard key={service.href} {...service} />)}
            </div>
          </div>
        </section>

        <section className="service-area-strip" aria-labelledby="service-area-strip-title">
          <div className="site-container service-area-strip__layout">
            <div>
              <p className="section-eyebrow"><Icon name="location" width={18} height={18} />{content.serviceAreaEyebrow}</p>
              <h2 id="service-area-strip-title">{content.serviceAreaTitle}</h2>
              <p>{content.serviceAreaDescription}</p>
              <Link href="/service-area/">View Our Service Area <Icon name="arrow-right" width={15} height={15} /></Link>
            </div>
            <ul className="service-area-strip__places">
              {[
                { label: "Chesapeake", href: "/service-area/chesapeake-va/" },
                { label: "Virginia Beach", href: "/service-area/virginia-beach-va/" },
                { label: "Norfolk", href: "/service-area/norfolk-va/" },
                { label: "Portsmouth", href: "/service-area/portsmouth-va/" },
                { label: "Eastern Suffolk", href: "/service-area/suffolk-va/" },
              ].map((place) => (
                <li key={place.href}><Link href={place.href}><Icon name="location" width={21} height={21} />{place.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="site-container service-area-strip__trust"><TrustSignals variant="bar" /></div>
        </section>
      </main>
      <FinalCTA heading={content.finalCtaHeading} description={content.finalCtaDescription} />
      <SiteFooter />
    </>
  );
}
