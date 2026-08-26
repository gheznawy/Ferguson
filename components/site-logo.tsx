import Image from "next/image";
import Link from "next/link";

import originalLogo from "../Selected-Pictures-for-Website/Logos/Original-Logo.png";
import whiteLogo from "../Selected-Pictures-for-Website/Logos/White-Logo.png";

type SiteLogoProps = {
  inverted?: boolean;
};

export function SiteLogo({ inverted = false }: SiteLogoProps) {
  const logo = inverted ? whiteLogo : originalLogo;

  return (
    <Link className={`site-logo${inverted ? " site-logo--inverted" : ""}`} href="/" aria-label="Ferguson & Sons Mechanical LLC home">
      <Image
        src={logo}
        alt="Ferguson & Sons Mechanical LLC"
        fill
        sizes={inverted ? "184px" : "112px"}
      />
    </Link>
  );
}
