import Image from "next/image";
import Link from "next/link";

import commercialPhoto from "../../Selected-Pictures-for-Website/Services/04-services-commercial-hvac.png";
import diagnosisPhoto from "../../Selected-Pictures-for-Website/Services/02-services-diagnosis-commercial-repair.png";
import heroPhoto from "../../Selected-Pictures-for-Website/Services/01-services-hero-residential-ac-service.png";
import residentialPhoto from "../../Selected-Pictures-for-Website/Services/03-services-residential-hvac.png";
import { Icon, type IconName } from "@/components/icons";
import { ServiceCard } from "@/components/service-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "HVAC Services in Chesapeake, VA | Ferguson & Sons",
  description: "Explore residential and commercial HVAC diagnostics, repair, maintenance, component service, and installation in Chesapeake and South Hampton Roads.",
  path: "/services/",
});

const featuredServices: Array<{
  title: string;
  description: string;
  href: string;
  icon: IconName;
}> = [
  {
    title: "A/C Repair & No-Cooling Diagnosis",
    description: "Troubleshooting and repair for systems that are not cooling properly. We find the root cause to restore your comfort efficiently.",
    href: "/services/ac-repair/",
    icon: "snowflake",
  },
  {
    title: "HVAC Maintenance / Tune-Ups",
    description: "Routine tune-ups, cleaning, and preventative service to keep your system running efficiently and extend its lifespan.",
    href: "/services/hvac-maintenance/",
    icon: "tools",
  },
  {
    title: "Commercial HVAC Service",
    description: "Professional HVAC service and maintenance for commercial systems, including rooftop-unit diagnostics and repair.",
    href: "/services/commercial-hvac/",
    icon: "building",
  },
  {
    title: "HVAC Component Repair",
    description: "Diagnosis and repair or replacement of faulty components to get your existing system back to reliable operation.",
    href: "/services/hvac-component-repair/",
    icon: "gear",
  },
];

const secondaryServices: Array<{
  title: string;
  href: string;
  icon: IconName;
}> = [
  { title: "HVAC Replacement / Installation", href: "/services/hvac-replacement-installation/", icon: "home" },
  { title: "Ductless Mini-Splits", href: "/services/ductless-mini-splits/", icon: "airflow" },
  { title: "Thermostat Installation", href: "/services/thermostats/", icon: "thermostat" },
  { title: "Indoor Air Quality", href: "/services/indoor-air-quality/", icon: "air-quality" },
  { title: "Heat Pump Service / Repair", href: "/services/heat-pump-repair/", icon: "heat-pump" },
  { title: "Furnace Service / Repair", href: "/services/furnace-repair/", icon: "furnace" },
];

function AudienceCard({
  title,
  description,
  href,
  image,
  alt,
}: {
  title: string;
  description: string;
  href: string;
  image: typeof residentialPhoto;
  alt: string;
}) {
  return (
    <article className="services-audience-card">
      <div className="services-audience-card__photo">
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 42vw, 100vw" />
      </div>
      <div className="services-audience-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href}>Learn More <Icon name="arrow-right" width={15} height={15} /></Link>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader activePath="/services/" />
      <main>
        <section className="services-hero" aria-labelledby="services-page-title">
          <div className="site-container services-hero__layout">
            <div className="services-hero__content">
              <p className="section-eyebrow">Residential &amp; Commercial HVAC Services</p>
              <h1 id="services-page-title">Reliable HVAC<br />Service &amp; Repair</h1>
              <div className="services-hero__rule" aria-hidden="true" />
              <p className="services-hero__subhead">For Homes &amp; Businesses Across South Hampton Roads</p>
              <p className="services-hero__description">From no-cooling diagnostics and routine maintenance to component repairs, commercial service, and system replacement when it makes sense, Ferguson &amp; Sons provides dependable HVAC solutions backed by 22 years of experience.</p>
              <div className="services-hero__actions">
                <ButtonLink href="/contact/">Get a Free Quote</ButtonLink>
                <ButtonLink href="tel:+17574067135" variant="outline" inverse>Call Now</ButtonLink>
              </div>
            </div>
            <div className="services-hero__photo">
              <Image
                src={heroPhoto}
                alt="Ferguson & Sons technician servicing residential air-conditioning equipment"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="services-catalog" aria-labelledby="services-catalog-title">
          <div className="site-container">
            <SectionHeading eyebrow="Our Services" title="Complete HVAC Service, Repair & Installation" titleId="services-catalog-title" align="center" />
            <div className="services-catalog__featured">
              {featuredServices.map((service) => <ServiceCard key={service.href} {...service} />)}
            </div>
            <div className="services-catalog__secondary">
              {secondaryServices.map((service) => <ServiceCard key={service.href} {...service} compact />)}
            </div>
          </div>
        </section>

        <section className="services-diagnosis" aria-labelledby="services-diagnosis-title">
          <div className="site-container services-diagnosis__layout">
            <div className="services-diagnosis__photo">
              <Image src={diagnosisPhoto} alt="Technician diagnosing a commercial rooftop HVAC unit" fill sizes="(min-width: 1024px) 48vw, 100vw" />
            </div>
            <div className="services-diagnosis__content">
              <SectionHeading
                eyebrow="Service Before Replacement"
                title={<>Diagnose First.<br />Repair When It Makes Sense.</>}
                titleId="services-diagnosis-title"
                description={<p>From no-cooling diagnostics and routine maintenance to component repairs, commercial service, and system replacement when it makes sense, Ferguson &amp; Sons provides dependable HVAC solutions backed by 22 years of experience.</p>}
                theme="dark"
              />
              <ul className="services-diagnosis__points">
                <li><Icon name="check" width={17} height={17} /><div><strong>Honest Diagnostics</strong><span>We thoroughly inspect the system to identify the source of the problem.</span></div></li>
                <li><Icon name="check" width={17} height={17} /><div><strong>Repair-Focused Recommendations</strong><span>We prioritize practical repairs over replacing a whole system when repair makes sense.</span></div></li>
                <li><Icon name="check" width={17} height={17} /><div><strong>Replacement When Appropriate</strong><span>If replacement is the sensible option, we explain the available next steps clearly.</span></div></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="services-audiences" aria-labelledby="services-audiences-title">
          <div className="site-container">
            <SectionHeading eyebrow="Residential & Commercial" title="HVAC Service for Homes & Businesses" titleId="services-audiences-title" align="center" />
            <div className="services-audiences__grid">
              <AudienceCard
                title="Residential HVAC"
                description="Comprehensive heating and cooling service designed for the comfort and efficiency of your home. We treat your property with care and respect."
                href="/contact/"
                image={residentialPhoto}
                alt="Residential outdoor HVAC units prepared for service"
              />
              <AudienceCard
                title="Commercial HVAC Service & Maintenance"
                description="Reliable, hands-on service to keep your business environment comfortable and support efficient system operation."
                href="/services/commercial-hvac/"
                image={commercialPhoto}
                alt="Commercial rooftop HVAC service by a Ferguson & Sons technician"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
