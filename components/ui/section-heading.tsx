import type { ElementType, ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  titleAs?: "h1" | "h2" | "h3";
  titleId?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  titleAs = "h2",
  titleId,
  className = "",
}: SectionHeadingProps) {
  const Heading = titleAs as ElementType;

  return (
    <div className={`section-heading section-heading--${align} section-heading--${theme} ${className}`.trim()}>
      <p className="section-eyebrow"><span aria-hidden="true" />{eyebrow}</p>
      <Heading className="section-heading__title" id={titleId}>{title}</Heading>
      {description ? <div className="section-heading__description">{description}</div> : null}
    </div>
  );
}
