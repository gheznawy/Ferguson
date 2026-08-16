import Link from "next/link";

import { Icon, type IconName } from "./icons";

type ServiceCardProps = {
  title: string;
  description?: string;
  href: string;
  icon?: IconName;
  compact?: boolean;
};

export function ServiceCard({ title, description, href, icon = "tools", compact = false }: ServiceCardProps) {
  return (
    <article className={`service-card${compact ? " service-card--compact" : ""}`}>
      <span className="service-card__icon" aria-hidden="true"><Icon name={icon} width={25} height={25} /></span>
      <h3><Link href={href}>{title}</Link></h3>
      {description ? <p>{description}</p> : null}
      <Link className="service-card__link" href={href} aria-label={`Learn more about ${title}`}>
        Learn More <Icon name="arrow-right" width={15} height={15} />
      </Link>
    </article>
  );
}
