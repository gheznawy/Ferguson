"use client";

import { useState } from "react";

import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import type { IconName } from "@/components/icons";

type Service = {
  title: string;
  href: string;
  icon: IconName;
  description?: string;
};

type ServicesCatalogProps = {
  featuredServices: Service[];
  secondaryServices: Service[];
};

export function ServicesCatalog({ featuredServices, secondaryServices }: ServicesCatalogProps) {
  const [secondaryServicesVisible, setSecondaryServicesVisible] = useState(false);
  const secondaryServicesId = "additional-services";

  return (
    <>
      <div className="services-catalog__featured">
        {featuredServices.map((service) => <ServiceCard key={service.href} {...service} />)}
      </div>
      {!secondaryServicesVisible ? (
        <Button
          className="services-catalog__toggle"
          aria-controls={secondaryServicesId}
          aria-expanded={false}
          onClick={() => setSecondaryServicesVisible(true)}
        >
          See More Services
        </Button>
      ) : null}
      <div
        className={`services-catalog__secondary${secondaryServicesVisible ? " is-visible" : ""}`}
        id={secondaryServicesId}
      >
        {secondaryServices.map((service) => <ServiceCard key={service.href} {...service} compact />)}
      </div>
    </>
  );
}
