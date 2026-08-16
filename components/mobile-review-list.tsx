"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type MobileReviewListProps = {
  children: ReactNode;
  id: string;
  collapsedLabel: string;
  platform: "google" | "facebook";
};

export function MobileReviewList({ children, id, collapsedLabel, platform }: MobileReviewListProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`mobile-review-list${expanded ? " is-expanded" : ""}`}>
      <div className={`reviews-grid reviews-grid--${platform}`} id={id}>
        {children}
      </div>
      <button
        className={`button button--${platform === "facebook" ? "primary" : "secondary"} reviews-section__toggle`}
        type="button"
        aria-controls={id}
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        {expanded ? "Show Less" : collapsedLabel}
      </button>
    </div>
  );
}
