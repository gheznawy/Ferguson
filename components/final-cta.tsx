import type { CSSProperties } from "react";

import { Icon } from "./icons";
import { ButtonLink } from "./ui/button";

type FinalCTAProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  imageSrc?: string;
};

export function FinalCTA({
  eyebrow = "Local HVAC Help You Can Count On",
  heading = "Need HVAC Service? Let’s Get You Comfortable.",
  description = "Honest local HVAC service for homes and businesses across South Hampton Roads.",
  imageSrc,
}: FinalCTAProps) {
  const style = imageSrc ? ({ "--cta-image": `url("${imageSrc}")` } as CSSProperties) : undefined;
  return (
    <section className={`final-cta${imageSrc ? " final-cta--image" : ""}`} style={style} aria-labelledby="final-cta-title">
      <div className="site-container final-cta__inner">
        <div>
          <p className="section-eyebrow"><span aria-hidden="true" />{eyebrow}</p>
          <h2 id="final-cta-title">{heading}</h2>
          <p>{description}</p>
        </div>
        <div className="final-cta__actions">
          <ButtonLink href="/contact/#schedule-service">Get Scheduled Today</ButtonLink>
          <ButtonLink href="tel:+17574067135" variant="outline" inverse>
            <Icon name="phone" width={18} height={18} /> Call Now: (757) 406-7135
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
