import Image, { type StaticImageData } from "next/image";

import gallery01 from "../../Selected-Pictures-for-Website/Gallery/01-residential-maintenance-cleaning.jpg";
import gallery02 from "../../Selected-Pictures-for-Website/Gallery/02-commercial-rooftop-diagnostics.webp";
import gallery03 from "../../Selected-Pictures-for-Website/Gallery/03-residential-dual-system-installation.jpg";
import gallery04 from "../../Selected-Pictures-for-Website/Gallery/04-mini-split-installation-technician.jpg";
import gallery05 from "../../Selected-Pictures-for-Website/Gallery/05-residential-hvac-service-technician.jpg";
import gallery06 from "../../Selected-Pictures-for-Website/Gallery/06-commercial-rooftop-maintenance-filters.webp";
import gallery07 from "../../Selected-Pictures-for-Website/Gallery/07-residential-package-unit-installation.jpg";
import gallery08 from "../../Selected-Pictures-for-Website/Gallery/08-attic-hvac-service-technician.jpg";
import gallery09 from "../../Selected-Pictures-for-Website/Gallery/09-residential-ac-diagnostics.jpg";
import gallery10 from "../../Selected-Pictures-for-Website/Gallery/10-indoor-furnace-air-handler-installation.webp";
import gallery11 from "../../Selected-Pictures-for-Website/Gallery/11-commercial-rooftop-service-technician.jpg";
import gallery12 from "../../Selected-Pictures-for-Website/Gallery/12-residential-condenser-deep-cleaning.jpg";
import gallery13 from "../../Selected-Pictures-for-Website/Gallery/13-residential-heat-pump-installation.webp";
import gallery14 from "../../Selected-Pictures-for-Website/Gallery/14-commercial-hvac-motor-repair.jpg";
import gallery15 from "../../Selected-Pictures-for-Website/Gallery/15-indoor-heating-system-service.jpg";
import gallery16 from "../../Selected-Pictures-for-Website/Gallery/16-mini-split-temperature-check.jpg";
import gallery17 from "../../Selected-Pictures-for-Website/Gallery/17-ferguson-technician-team.jpg";
import gallery18 from "../../Selected-Pictures-for-Website/Gallery/18-hvac-control-board-diagnostics.jpg";
import gallery19 from "../../Selected-Pictures-for-Website/Gallery/19-residential-outdoor-hvac-service.jpg";
import gallery20 from "../../Selected-Pictures-for-Website/Gallery/20-commercial-rooftop-unit.webp";
import gallery21 from "../../Selected-Pictures-for-Website/Gallery/21-attic-air-handler-installation.jpg";
import gallery22 from "../../Selected-Pictures-for-Website/Gallery/22-kara-ferguson-branded-beanie.jpg";
import gallery23 from "../../Selected-Pictures-for-Website/Gallery/23-ferguson-branded-hats-and-tumblers.jpg";
import gallery24 from "../../Selected-Pictures-for-Website/Gallery/24-residential-bryant-condensers.jpg";
import gallery25 from "../../Selected-Pictures-for-Website/Gallery/25-ferguson-family-dog.jpg";
import { FinalCTA } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/seo";
import styles from "./gallery.module.css";

export const metadata = createPageMetadata({
  title: "HVAC Work Gallery | Ferguson & Sons Mechanical LLC",
  description: "See authentic Ferguson & Sons photos of residential and commercial HVAC diagnostics, maintenance, repair, and installation work.",
  path: "/gallery/",
});

const galleryImages: { src: StaticImageData; alt: string; className?: string }[] = [
  { src: gallery01, alt: "Residential outdoor HVAC unit being professionally cleaned" },
  { src: gallery02, alt: "Technician diagnosing commercial rooftop HVAC equipment" },
  { src: gallery21, alt: "New air handler installation in an attic" },
  { src: gallery03, alt: "Two residential outdoor HVAC systems after installation" },
  { src: gallery04, alt: "Technician installing a ductless mini-split system" },
  { src: gallery05, alt: "Technician servicing residential outdoor HVAC equipment" },
  { src: gallery06, alt: "Commercial rooftop HVAC filters during maintenance" },
  { src: gallery22, alt: "Ferguson & Sons team member wearing branded apparel" },
  { src: gallery07, alt: "Residential package HVAC unit after installation" },
  { src: gallery08, alt: "Technician servicing HVAC equipment in an attic" },
  { src: gallery09, alt: "Diagnostic tools connected to a residential air conditioning system" },
  { src: gallery10, alt: "Indoor furnace and air handler installation" },
  { src: gallery23, alt: "Ferguson & Sons branded hats and tumblers" },
  { src: gallery11, alt: "Technician servicing commercial rooftop HVAC equipment" },
  { src: gallery12, alt: "Residential outdoor condenser during deep cleaning" },
  { src: gallery13, alt: "Residential heat pump after installation" },
  { src: gallery14, alt: "Commercial HVAC motor being repaired" },
  { src: gallery24, alt: "Two residential Bryant outdoor HVAC units" },
  { src: gallery15, alt: "Indoor heating system being serviced" },
  { src: gallery16, alt: "Technician checking the temperature of a ductless mini-split" },
  { src: gallery17, alt: "Ferguson & Sons technicians together on the job" },
  { src: gallery18, alt: "Diagnostic work on an HVAC control board" },
  { src: gallery25, alt: "Ferguson family dog wearing Ferguson & Sons apparel", className: styles.dogPhoto },
  { src: gallery19, alt: "Technician servicing residential outdoor HVAC equipment" },
  { src: gallery20, alt: "Commercial rooftop HVAC unit" },
];

export default function GalleryPage() {
  return (
    <>
      <SiteHeader activePath="/gallery/" />
      <main>
        <section className={styles.hero} aria-labelledby="gallery-title">
          <div className="site-container">
            <p className="section-eyebrow">Real HVAC Work</p>
            <h1 id="gallery-title">See Ferguson &amp; Sons at Work</h1>
            <p>
              A look at real HVAC service, maintenance, diagnostics, and installations for homes and businesses.
            </p>
          </div>
        </section>

        <section className={styles.gallery} aria-label="Ferguson & Sons HVAC work gallery">
          <div className="site-container">
            <div className={styles.grid}>
              {galleryImages.map((image) => (
                <figure className={`${styles.item}${image.className ? ` ${image.className}` : ""}`} key={image.src.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FinalCTA
        eyebrow="Local HVAC Help You Can Count On"
        heading="Need HVAC Service? Let’s Get You Comfortable."
        description="Honest local HVAC service for homes and businesses across South Hampton Roads."
      />
      <SiteFooter />
    </>
  );
}
