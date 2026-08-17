"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Icon } from "./icons";

export type NavigationItem = {
  href: string;
  label: string;
  children?: NavigationItem[];
};

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-navigation__trigger"
        ref={triggerRef}
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
            const hasChildren = Boolean(item.children?.length);
            const expanded = expandedItems[item.href] ?? false;

            if (hasChildren) {
              const submenuId = `mobile-navigation-${item.label.toLowerCase().replaceAll(/[^a-z]+/g, "-")}`;
              return (
                <div className="mobile-navigation__item" key={item.href}>
                  <div className="mobile-navigation__submenu-row">
                    <Link
                      className="mobile-navigation__submenu-link"
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      className="mobile-navigation__submenu-trigger"
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={submenuId}
                      aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} links`}
                      onClick={() => setExpandedItems((current) => ({ ...current, [item.href]: !expanded }))}
                    >
                      <Icon className="mobile-navigation__chevron" name="chevron-down" width={18} height={18} />
                    </button>
                  </div>
                  <ul className={`mobile-navigation__submenu${expanded ? " is-open" : ""}`} id={submenuId}>
                    {item.children?.map((child) => {
                      const childActive = child.href === "/" ? pathname === "/" : pathname === child.href;
                      return (
                        <li key={child.href}>
                          <Link href={child.href} aria-current={childActive ? "page" : undefined} onClick={() => setOpen(false)}>
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            );
          })}
          <Link
            className="mobile-navigation__maintenance-plan"
            href="/maintenance-plan/"
            aria-current={pathname.startsWith("/maintenance-plan/") ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            <Icon name="thermostat" width={20} height={20} />
            <span>Maintenance Plan</span>
            <Icon className="mobile-navigation__maintenance-arrow" name="arrow-right" width={18} height={18} />
          </Link>
        </nav>
        <div className="mobile-navigation__actions">
          <a className="mobile-navigation__phone" href="tel:+17574067135">
            <Icon name="phone" width={18} height={18} />
            (757) 406-7135
          </a>
          <Link className="button button--primary" href="/contact/">Get a Free Quote</Link>
        </div>
      </div>
    </div>
  );
}
