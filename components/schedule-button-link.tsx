"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

import type { ButtonVariant } from "./ui/button";

type ScheduleButtonLinkProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  inverse?: boolean;
  className?: string;
};

export function ScheduleButtonLink({
  children,
  variant = "primary",
  inverse = false,
  className = "",
}: ScheduleButtonLinkProps) {
  function scrollToScheduleForm(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    document.getElementById("schedule-service")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", "#schedule-service");
  }

  return (
    <Link
      className={["button", `button--${variant}`, inverse ? "button--inverse" : "", className].filter(Boolean).join(" ")}
      href="#schedule-service"
      onClick={scrollToScheduleForm}
    >
      {children}
    </Link>
  );
}
