"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon } from "./icons";

export type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-navigation__trigger"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <Icon name={open ? "x" : "menu"} width={25} height={25} />
      </button>
      <div className={`mobile-navigation__panel${open ? " is-open" : ""}`} id="mobile-navigation-menu">
        <nav aria-label="Mobile navigation">
          {items.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a className="mobile-navigation__phone" href="tel:+17574067135">
          <Icon name="phone" width={18} height={18} />
          (757) 406-7135
        </a>
        <Link className="button button--primary" href="/contact/">Get a Free Quote</Link>
      </div>
    </div>
  );
}
