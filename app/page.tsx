import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import aboutPhoto from "../Selected-Pictures-for-Website/Homepage/08-home-about-family-rainbow.png";
import heroPhoto from "../Selected-Pictures-for-Website/Homepage/01-home-hero-technician-bg.png";
import mobileHeroPhoto from "../Selected-Pictures-for-Website/Mobile-Hero/mobile-hero.jpg";
import serviceFeaturedPhoto from "../Selected-Pictures-for-Website/Homepage/02-home-services-featured-repair.png";
import serviceUnitsPhoto from "../Selected-Pictures-for-Website/Homepage/03-home-services-units.png";
import serviceTechnicianPhoto from "../Selected-Pictures-for-Website/Homepage/04-home-services-technician.png";
import serviceEquipmentPhoto from "../Selected-Pictures-for-Website/Homepage/05-home-services-equipment.png";
import trustPhoto from "../Selected-Pictures-for-Website/Homepage/06-home-trust-family-hvac.png";
import maintenancePhoto from "../Selected-Pictures-for-Website/Homepage/07-home-maintenance-plan-service.png";
import { FinalCTA } from "@/components/final-cta";
import { Icon, type IconName } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { QuoteForm } from "@/components/quote-form";
import { ServiceCard } from "@/components/service-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSignals } from "@/components/trust-signals";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";
import { getBusinessStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "HVAC Service & Repair in Chesapeake, VA | Ferguson & Sons",
  description: "Family-owned HVAC service, diagnostics, repair, and maintenance for homes and businesses in Chesapeake and across South Hampton Roads.",
  path: "/",
});

const reviews = [
  {
    name: "Chris Tan",
    featured: true,
    quote:
      "I reached out to Ferguson and Sons, and Chance came out the same day to diagnose the problem. That level of customer service made a stressful situation much easier. He was professional, knowledgeable, and transparent throughout the entire process, and the pricing was fair with no surprises.",
  },
  {
    name: "Darlene Dow",
    quote:
      "I’ve had a rough summer with my two units, but Ferguson and Sons have been great. They came out very quickly, took the time to educate me about what was wrong, and had it up and running the same day. Chance and Justin were professional, knowledgeable, reasonably priced, and honest. I highly recommend this company!",
  },
  {
    name: "geunjae Lee",
    quote:
      "He was knowledgeable, honest, and took the time to explain exactly what was wrong and how he was fixing it. He never made me feel rushed and truly cared about doing the job the right way instead of taking shortcuts.",
  },
];

const faqs = [
  {
    question: "Do you focus on HVAC repair or replacement?",
    answer:
      "Service and repair are a major focus at Ferguson & Sons. We believe in diagnosing the problem first and recommending the right solution for your system. Replacement is available when it makes sense, but it is not the starting point for every call.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We regularly serve Chesapeake, Virginia Beach, Norfolk, Portsmouth, Eastern Suffolk, and surrounding communities within South Hampton Roads.",
  },
  {
    question: "Do you work on both residential and commercial HVAC systems?",
    answer:
      "Yes. Ferguson & Sons provides HVAC service, diagnostics, repair, and maintenance for both homes and businesses.",
  },
  {
    question: "Do you offer an HVAC maintenance plan?",
    answer:
      "Yes. Our maintenance plan is $299 per year, per system and includes two professional maintenance visits each year. That is equivalent to approximately $25 per month.",
  },
  {
    question: "How do I know whether my HVAC system should be repaired or replaced?",
    answer:
      "We start with careful troubleshooting, explain what we find, and discuss the practical options. Repair is recommended when it is the sensible solution; replacement is available when the system’s condition makes that the better path.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "Use the quote form on this page or call (757) 406-7135. Tell us what you need and the best way to reach you.",
  },
];

function Stars() {
  return <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>;
}

function ReviewCard({ name, quote, featured = false }: (typeof reviews)[number]) {
  return (
    <article className={`review-card${featured ? " review-card--featured" : ""}`}>
      <Stars />
      <blockquote>“{quote}”</blockquote>
      <div className="review-card__footer">
        <div><strong>{name}</strong><span>Google Review</span></div>
        {featured ? <span className="review-card__google"><Icon name="google" width={25} height={25} /></span> : <Stars />}
      </div>
    </article>
  );
}

function Photo({ src, alt, className, sizes }: { src: StaticImageData; alt: string; className?: string; sizes: string }) {
  return <Image className={className} src={src} alt={alt} fill sizes={sizes} />;
}

function FeatureRow({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return <li><span><Icon name={icon} width={19} height={19} /></span><strong>{children}</strong></li>;
}

export default function Home() {
  return (
    <>
      <JsonLd data={getBusinessStructuredData()} />
      <SiteHeader activePath="/" />
      <main>
        <section className="home-hero" aria-labelledby="home-hero-title">
          <Image className="home-hero__image" src={heroPhoto} alt="Ferguson & Sons technician servicing an outdoor HVAC unit" fill priority sizes="100vw" />
          <Image className="home-hero__image home-hero__image--mobile" src={mobileHeroPhoto} alt="Ferguson & Sons technician servicing an outdoor HVAC unit" fill priority sizes="100vw" />
          <div className="home-hero__overlay" />
          <div className="site-container home-hero__inner">
            <div className="home-hero__content">
              <p className="section-eyebrow"><span aria-hidden="true" />Serving Chesapeake, Norfolk &amp; Virginia Beach</p>
              <h1 id="home-hero-title">Reliable HVAC Service &amp; Repair <small>From a Local Team You Can Trust!</small></h1>
              <p className="home-hero__lead">Family-owned with 22 years of experience, Ferguson &amp; Sons provides honest and dependable HVAC solutions for homes and businesses across South Hampton Roads.</p>
              <div className="home-hero__actions">
                <ButtonLink href="/contact/">Get a Free Quote <Icon name="arrow-right" width={18} height={18} /></ButtonLink>
                <ButtonLink href="tel:+17574067135" variant="outline" inverse><Icon name="phone" width={18} height={18} />Call Now</ButtonLink>
              </div>
              <TrustSignals
                variant="inline"
                inverse
                items={[
                  { label: "5.0 Google Rating", icon: "star" },
                  { label: "22 Years Experience", icon: "clock" },
                  { label: "Licensed & Insured", icon: "shield" },
                ]}
              />
            </div>
            <div className="home-hero__form-area">
              <QuoteForm />
            </div>
          </div>
        </section>

        <section className="home-section home-services" aria-labelledby="services-title">
          <div className="site-container home-services__layout">
            <div>
              <SectionHeading
                eyebrow="Real HVAC Work"
                title="Honest Work From a Local Team You Can Trust"
                titleId="services-title"
                description={<p>Ferguson &amp; Sons Mechanical LLC provides dependable HVAC service, repair, maintenance, and installation for homeowners and businesses across Chesapeake and South Hampton Roads, with a focus on honest workmanship and transparent service.</p>}
              />
              <div className="home-services__cards">
                <ServiceCard title="AC Repair" description="Fast, reliable cooling solutions." href="/services/ac-repair/" icon="snowflake" />
                <ServiceCard title="System Installations" description="Expert setup for new, efficient units." href="/services/hvac-replacement-installation/" icon="home" />
                <ServiceCard title="Routine Maintenance" description="Prevent breakdowns and support reliable operation." href="/services/hvac-maintenance/" icon="tools" />
                <ServiceCard title="Commercial HVAC Service" description="Reliable climate control for your business." href="/services/commercial-hvac/" icon="building" />
              </div>
              <div className="home-services__actions">
                <ButtonLink href="/services/" variant="secondary">View All Services</ButtonLink>
                <ButtonLink href="tel:+17574067135"><Icon name="phone" width={18} height={18} />Call Now</ButtonLink>
              </div>
            </div>
            <div className="service-collage" aria-label="Ferguson & Sons HVAC service work">
              <div className="service-collage__featured"><Photo src={serviceFeaturedPhoto} alt="Technician diagnosing an outdoor HVAC system" sizes="(min-width: 1024px) 27vw, 45vw" /></div>
              <div className="service-collage__units"><Photo src={serviceUnitsPhoto} alt="Two outdoor residential HVAC units" sizes="(min-width: 1024px) 18vw, 45vw" /></div>
              <div className="service-collage__technician"><Photo src={serviceTechnicianPhoto} alt="Ferguson & Sons technician working beside a building" sizes="(min-width: 1024px) 18vw, 45vw" /></div>
              <div className="service-collage__equipment"><Photo src={serviceEquipmentPhoto} alt="HVAC service gauges connected to equipment" sizes="(min-width: 1024px) 45vw, 90vw" /></div>
            </div>
          </div>
        </section>

        <section className="home-section home-trust" aria-labelledby="trust-title">
          <div className="site-container home-trust__layout">
            <div>
              <SectionHeading
                eyebrow="Trusted Local HVAC Team"
                title="Why Homeowners Trust Ferguson & Sons"
                titleId="trust-title"
                description={<p>Ferguson &amp; Sons Mechanical LLC provides dependable HVAC service, repair, maintenance, and installation across Chesapeake and South Hampton Roads, with a focus on honest diagnostics, dependable workmanship, and responsive local service.</p>}
              />
              <TrustSignals />
              <figure className="trust-review">
                <Stars />
                <blockquote>“Same day service with the owner Chance Ferguson. His knowledge and professionalism are outstanding. Family owned and operated business you can’t ask for better!”</blockquote>
                <figcaption>— Justin Hoffman</figcaption>
              </figure>
              <div className="home-trust__actions">
                <ButtonLink href="/reviews/" variant="outline">Read Reviews</ButtonLink>
                <ButtonLink href="/contact/">Get a Free Quote</ButtonLink>
              </div>
            </div>
            <div className="home-trust__photo">
              <Photo src={trustPhoto} alt="Ferguson & Sons team members beside installed HVAC equipment" sizes="(min-width: 1024px) 45vw, 100vw" />
              <div className="rating-badge"><span className="rating-badge__google"><Icon name="google" width={30} height={30} /></span><div><strong>5.0</strong><Stars /></div></div>
            </div>
          </div>
        </section>

        <section className="home-section home-reviews" aria-labelledby="reviews-title">
          <div className="site-container">
            <div className="home-reviews__header">
              <SectionHeading eyebrow="Customer Reviews" title="Don’t Just Take Our Word for It" titleId="reviews-title" theme="dark" />
              <div className="rating-display"><strong>5.0</strong><div><Stars /><span>Google Rating</span></div></div>
              <ButtonLink href="/reviews/">Read All Reviews</ButtonLink>
            </div>
            <div className="home-reviews__grid">
              <ReviewCard {...reviews[0]} />
              <div className="home-reviews__stack"><ReviewCard {...reviews[1]} /><ReviewCard {...reviews[2]} /></div>
            </div>
          </div>
        </section>

        <section className="home-section home-maintenance" aria-labelledby="maintenance-title">
          <div className="site-container home-maintenance__layout">
            <div className="home-maintenance__photo"><Photo src={maintenancePhoto} alt="Ferguson & Sons technician performing HVAC maintenance" sizes="(min-width: 1024px) 50vw, 100vw" /></div>
            <div className="home-maintenance__panel">
              <SectionHeading
                eyebrow="HVAC Maintenance Plan"
                title="Protect Your Comfort. Prevent Costly Breakdowns."
                titleId="maintenance-title"
                description={<p>Keep your HVAC system running reliably with regular professional maintenance from Ferguson &amp; Sons. Our maintenance plan is designed to help catch issues early and reduce unexpected breakdowns throughout the year.</p>}
                theme="dark"
              />
              <div className="maintenance-price">
                <p><strong>$299</strong><span>/ year per system</span></p>
                <b>Equivalent to approximately $25 / month</b>
                <span className="maintenance-price__visits"><Icon name="check" width={17} height={17} />2 maintenance visits per year</span>
              </div>
              <ul className="maintenance-benefits">
                <li><Icon name="check" width={16} height={16} />Two professional maintenance visits each year</li>
                <li><Icon name="check" width={16} height={16} />Help catch problems before they become expensive repairs</li>
                <li><Icon name="check" width={16} height={16} />Keep your system operating reliably throughout the year</li>
              </ul>
              <div className="home-maintenance__actions">
                <ButtonLink href="/maintenance-plan/">Learn About the Maintenance Plan</ButtonLink>
                <a href="tel:+17574067135"><Icon name="phone" width={18} height={18} />Call Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section home-about" aria-labelledby="about-title">
          <div className="site-container home-about__layout">
            <div className="home-about__photo"><Photo src={aboutPhoto} alt="The Ferguson family together beneath a rainbow" sizes="(min-width: 1024px) 48vw, 100vw" /></div>
            <div>
              <SectionHeading
                eyebrow="Family-Owned & Local"
                title="Built on Family, Trust, and Local Service"
                titleId="about-title"
                description={<p>Ferguson &amp; Sons Mechanical LLC is a family-owned HVAC company proudly serving Chesapeake and surrounding South Hampton Roads communities. We believe homeowners deserve honest service, dependable workmanship, and a team that treats every home with care. Known as a trusted local company and a neighborhood favorite in Las Gaviotas, we’re proud to serve our community with integrity.</p>}
              />
              <ul className="about-features">
                <FeatureRow icon="family">Family-Owned &amp; Operated</FeatureRow>
                <FeatureRow icon="shield">Trusted Local Reputation</FeatureRow>
                <FeatureRow icon="location">Neighborhood Favorite in Las Gaviotas</FeatureRow>
              </ul>
              <div className="home-about__actions">
                <ButtonLink href="/about/">Learn More About Us</ButtonLink>
                <Link href="/reviews/">See Our Reviews <Icon name="arrow-right" width={17} height={17} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section home-area" aria-labelledby="area-title">
          <div className="site-container home-area__layout">
            <div>
              <p className="section-eyebrow">Proudly Serving Hampton Roads</p>
              <h2 id="area-title">Local HVAC Service <small><span aria-hidden="true" />Across Chesapeake &amp; Beyond</small></h2>
              <p className="home-area__intro">Ferguson &amp; Sons Mechanical LLC is based in Chesapeake and proudly serves homes and businesses throughout South Hampton Roads, including Virginia Beach, Norfolk, Portsmouth, Eastern Suffolk, and surrounding communities.</p>
              <h3>Primary Service Areas</h3>
              <ul className="area-list">
                <li><Link href="/service-area/chesapeake-va/"><Icon name="location" width={20} height={20} />Chesapeake (Home Base)</Link></li>
                <li><Link href="/service-area/virginia-beach-va/"><Icon name="location" width={20} height={20} />Virginia Beach</Link></li>
                <li><Link href="/service-area/norfolk-va/"><Icon name="location" width={20} height={20} />Norfolk</Link></li>
                <li><Link href="/service-area/portsmouth-va/"><Icon name="location" width={20} height={20} />Portsmouth</Link></li>
                <li><Link href="/service-area/suffolk-va/"><Icon name="location" width={20} height={20} />Eastern Suffolk</Link></li>
              </ul>
              <div className="business-hours"><Icon name="clock" width={20} height={20} /><div><strong>Business Hours</strong><span>8:00 AM–5:00 PM</span></div></div>
              <div className="home-area__actions">
                <ButtonLink href="/contact/">Get a Free Quote</ButtonLink>
                <ButtonLink href="tel:+17574067135" variant="outline" inverse>Call Now</ButtonLink>
              </div>
            </div>
            <div className="home-area__map">
              <iframe
                title="Map showing Ferguson & Sons service area around Chesapeake, Virginia"
                src="https://maps.google.com/maps?q=Chesapeake%2C%20Virginia&t=&z=10&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="home-section home-faq" aria-labelledby="faq-title">
          <div className="site-container home-faq__layout">
            <div>
              <SectionHeading
                eyebrow="Common Questions"
                title="Straight Answers About Your HVAC Service"
                titleId="faq-title"
                description={<p>Have questions about repairs, maintenance, service areas, or getting a quote? Here are a few of the questions homeowners and businesses commonly ask Ferguson &amp; Sons.</p>}
              />
              <aside className="faq-contact">
                <h3>Still Have Questions?</h3>
                <p>Our team is ready to provide the answers you need and schedule your service.</p>
                <div><ButtonLink href="tel:+17574067135" variant="secondary"><Icon name="phone" width={17} height={17} />Call Us</ButtonLink><ButtonLink href="/contact/">Get a Free Quote <Icon name="arrow-right" width={17} height={17} /></ButtonLink></div>
              </aside>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FinalCTA imageSrc={heroPhoto.src} />
      <SiteFooter />
    </>
  );
}
