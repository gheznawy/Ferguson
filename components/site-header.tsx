import Link from "next/link";

import { Icon } from "./icons";
import { MobileNavigation, type NavigationItem } from "./mobile-navigation";
import { SiteLogo } from "./site-logo";
import { ButtonLink } from "./ui/button";

export const primaryNavigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/service-area/", label: "Service Area" },
  { href: "/contact/", label: "Contact" },
];

const serviceNavigation = [
  {
    label: "Repair & Service",
    items: [
      { href: "/services/ac-repair/", label: "A/C Repair & Diagnostics" },
      { href: "/services/heat-pump-repair/", label: "Heat Pump Service & Repair" },
      { href: "/services/furnace-repair/", label: "Furnace Service & Repair" },
      { href: "/services/hvac-component-repair/", label: "HVAC Component Repair" },
    ],
  },
  {
    label: "Maintenance & Comfort",
    items: [
      { href: "/services/hvac-maintenance/", label: "HVAC Maintenance" },
      { href: "/services/indoor-air-quality/", label: "Indoor Air Quality" },
      { href: "/services/thermostats/", label: "Thermostats" },
    ],
  },
  {
    label: "Installation",
    items: [
      { href: "/services/hvac-replacement-installation/", label: "HVAC Replacement & Installation" },
      { href: "/services/ductless-mini-splits/", label: "Ductless Mini-Splits" },
    ],
  },
  {
    label: "Commercial",
    items: [
      { href: "/services/commercial-hvac/", label: "Commercial HVAC Service" },
    ],
  },
];

const serviceAreaNavigation = [
  { href: "/service-area/chesapeake-va/", label: "Chesapeake" },
  { href: "/service-area/virginia-beach-va/", label: "Virginia Beach" },
  { href: "/service-area/norfolk-va/", label: "Norfolk" },
  { href: "/service-area/portsmouth-va/", label: "Portsmouth" },
  { href: "/service-area/suffolk-va/", label: "Eastern Suffolk" },
];

type SiteHeaderProps = {
  activePath?: string;
};

export function SiteHeader({ activePath = "" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <SiteLogo />
        <nav className="desktop-navigation" aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const active = item.href === "/" ? activePath === "/" : activePath.startsWith(item.href);

            if (item.href === "/services/") {
              return (
                <div className="desktop-navigation__item desktop-navigation__item--services" key={item.href}>
                  <Link className="desktop-navigation__dropdown-link" href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                    <Icon className="desktop-navigation__chevron" name="chevron-down" width={13} height={13} />
                  </Link>
                  <div className="services-dropdown" aria-label="Services submenu">
                    <div className="services-dropdown__grid">
                      {serviceNavigation.map((group) => (
                        <section className="services-dropdown__group" key={group.label} aria-labelledby={`services-${group.label.toLowerCase().replaceAll(/[^a-z]+/g, "-")}`}>
                          <p id={`services-${group.label.toLowerCase().replaceAll(/[^a-z]+/g, "-")}`}>{group.label}</p>
                          <ul>
                            {group.items.map((service) => (
                              <li key={service.href}><Link href={service.href}>{service.label}</Link></li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                    <Link className="services-dropdown__all" href="/services/">
                      View All Services <Icon name="arrow-right" width={16} height={16} />
                    </Link>
                  </div>
                </div>
              );
            }

            if (item.href === "/service-area/") {
              return (
                <div className="desktop-navigation__item desktop-navigation__item--service-area" key={item.href}>
                  <Link className="desktop-navigation__dropdown-link" href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                    <Icon className="desktop-navigation__chevron" name="chevron-down" width={13} height={13} />
                  </Link>
                  <div className="services-dropdown services-dropdown--service-area" aria-label="Service Area submenu">
                    <section className="services-dropdown__group" aria-labelledby="service-area-locations">
                      <p id="service-area-locations">Primary Service Areas</p>
                      <ul>
                        {serviceAreaNavigation.map((area) => (
                          <li key={area.href}><Link href={area.href}>{area.label}</Link></li>
                        ))}
                      </ul>
                    </section>
                    <Link className="services-dropdown__all" href="/service-area/">
                      View Full Service Area <Icon name="arrow-right" width={16} height={16} />
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="site-header__actions">
          <a className="site-header__phone" href="tel:+17574067135">
            <Icon name="phone" width={19} height={19} />
            <span>(757) 406-7135</span>
          </a>
          <ButtonLink href="/contact/">Get a Free Quote</ButtonLink>
        </div>
        <MobileNavigation items={primaryNavigation} />
      </div>
    </header>
  );
}
