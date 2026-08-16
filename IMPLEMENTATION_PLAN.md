# IMPLEMENTATION_PLAN.md

High-level build strategy for the Ferguson & Sons Mechanical LLC website.

`AGENTS.md` contains durable coding rules.  
`PROJECT_STATUS.md` records current implementation state.  
This file defines the phase order and tells Codex exactly which approved visual-reference files to inspect for each designed page.

# Approved Screen Reference Index

Before implementing any page that already has an approved design, Codex must open and inspect the corresponding files under `Organized Screens/`.

These files are the visual references for the production implementation.

For approved pages, use the corresponding page folder under `Selected-Pictures-for-Website/` as the production-image source for the imagery shown in the approved screenshots.

## Homepage
Folder:
`Organized Screens/Homepage/`

Files, in page order:
1. `01-home-hero.png`
2. `02-home-services.png`
3. `03-home-trust.png`
4. `04-home-reviews.png`
5. `05-home-maintenance-plan.png`
6. `06-home-about.png`
7. `07-home-service-area.png`
8. `08-home-faq.png`
9. `09-home-final-cta.png`
10. `10-home-footer.png`

These ten images together define the complete approved Homepage.

## Services Hub
Folder:
`Organized Screens/Services/`

File:
- `01-services-page.png`

This image defines the complete approved Services Hub page.

## Service Detail Template
Folder:
`Organized Screens/Service Detail Template/`

Files, in page order:
1. `01-service-detail-hero-problems-process.png`
2. `02-service-detail-real-service-related.png`
3. `03-service-detail-service-area-cta-footer.png`

These three images together form one complete approved service-detail page. The A/C Repair page shown in these references is the master visual template for the remaining service-detail routes.

## About
Folder:
`Organized Screens/About/`

Files, in page order:
1. `01-about-hero-story-trust.png`
2. `02-about-philosophy-reputation-cta-footer.png`

These two images together define the complete approved About page.

## Contact
Folder:
`Organized Screens/Contact/`

File:
- `01-contact-page.png`

This image defines the complete approved Contact page.

## Maintenance Plan
Folder:
`Organized Screens/Maintenance Plan/`

File:
- `01-maintenance-plan-page.png`

This image defines the complete approved Maintenance Plan page.

## Gallery
There is no approved Stitch screen for Gallery.

Gallery must be designed directly in code using:
- `design.md`
- established production components from already implemented approved pages
- authentic Ferguson & Sons photos from `Ferguson-Sons-Assets/`
- relevant business facts from `business.md`

Do not introduce a new design direction for Gallery.

# Goal

Build a production-ready, responsive Ferguson & Sons website that:
- matches approved screens closely
- preserves approved copy
- uses verified business facts
- reuses sensible shared components
- performs well across desktop, tablet, and mobile
- remains accessible and maintainable

# Approved Technical Stack

- Next.js
- React
- TypeScript
- Tailwind CSS v4

Use Tailwind CSS for the majority of styling while preserving the custom Ferguson & Sons design system in `design.md` and the approved screens. Tailwind defaults must not override the established colors, typography, spacing, layout, radii, or visual direction.

Do not add a UI component library unless a genuine project-specific need is explicitly approved.

Use the Next.js App Router and React Server Components by default. Keep client components narrowly limited to UI that genuinely requires browser-side interactivity. Preserve normal Next.js server capabilities for possible backend features; do not force static export mode at this stage.

Use small amounts of global CSS or CSS Modules where they materially improve design fidelity or clarity. Do not add unnecessary frameworks, state-management systems, or other libraries.

# General Rule for Approved Screens

For every phase below that lists one or more files from `Organized Screens/`:

1. Open those exact files before implementing the page.
2. Treat them as the visual composition reference for that page.
3. Read `design.md` for reusable tokens, responsive rules, and component behavior.
4. Read `business.md` when page copy or business facts are involved.
5. Use original production media from `Ferguson-Sons-Assets/`, not imagery extracted from the screenshots.
6. Compare the running page directly against the listed screenshots before declaring the phase complete.

Approved screenshots define the intended desktop composition. Responsive behavior should follow `design.md` and the established component system.

# Phase 1 — Foundation

- Inspect the existing repository and determine whether a framework is already initialized.
- Initialize the approved Next.js, React, TypeScript, and Tailwind CSS v4 production stack if no project exists.
- Establish local development, build, lint, and typecheck commands.
- Implement global typography, colors, spacing, containers, and responsive foundations from `design.md`.

**Verify:** project runs locally and global tokens match the approved design system.

# Phase 2 — Shared Components

Before building shared components, inspect recurring patterns across:
- `Organized Screens/Homepage/`
- `Organized Screens/Services/`
- `Organized Screens/Service Detail Template/`
- `Organized Screens/About/`
- `Organized Screens/Contact/`
- `Organized Screens/Maintenance Plan/`

Build the clear repeated patterns first:
- header/navigation
- mobile navigation
- footer
- primary/secondary buttons
- section heading/eyebrow patterns
- form primitives
- service cards/tiles
- trust treatment
- compact final CTA

Do not over-abstract single-use sections.

**Verify:** shared components match the approved references and behave correctly responsively.

# Phase 3 — Homepage

Before implementation, inspect all files in:

`Organized Screens/Homepage/`

in this exact order:

1. `01-home-hero.png`
2. `02-home-services.png`
3. `03-home-trust.png`
4. `04-home-reviews.png`
5. `05-home-maintenance-plan.png`
6. `06-home-about.png`
7. `07-home-service-area.png`
8. `08-home-faq.png`
9. `09-home-final-cta.png`
10. `10-home-footer.png`

Implement those references as one continuous Homepage in the same order.

Use the Homepage as the production visual benchmark.

Compare the running page directly against every listed Homepage screenshot. Fix systemic differences in shared tokens/components before adding one-off hacks.

**Verify:** desktop fidelity, responsive behavior, form presentation, interactions, build/lint/typecheck.

# Phase 4 — Services Hub

Before implementation, inspect:

`Organized Screens/Services/01-services-page.png`

This file is the visual reference for the complete Services Hub.

Implement the page from that screenshot while reusing the already-built global header, footer, buttons, typography, and other shared components.

Preserve the approved:
- compact hero
- featured service cards
- secondary service tiles
- diagnosis-first section
- residential/commercial section
- footer/CTA structure
- copy and imagery shown in the approved screen, subject to factual corrections in `business.md`

**Verify:** direct visual comparison against `01-services-page.png`, responsive grids, correct internal links, no copy drift.

# Phase 5 — Service Detail Template

Before implementation, inspect these exact files in order:

`Organized Screens/Service Detail Template/01-service-detail-hero-problems-process.png`

`Organized Screens/Service Detail Template/02-service-detail-real-service-related.png`

`Organized Screens/Service Detail Template/03-service-detail-service-area-cta-footer.png`

These three screenshots are not three separate pages. They are three portions of one complete A/C Repair service-detail page.

Implement them as one continuous page and use that implementation as the reusable service-detail template.

The complete template includes:
- service hero
- common problems/service situations
- diagnosis/service approach
- real-service image/content section
- compact service-specific supporting block
- related services
- service-area reassurance
- trust treatment
- final CTA
- footer

**Verify:** the complete A/C Repair page matches all three screenshots in sequence and the structure can be reused cleanly.

# Phase 6 — Remaining Service Pages

Use the production implementation created from:

`Organized Screens/Service Detail Template/`

as the visual/layout template for the remaining service routes in `sitemap.md`.

Do not expect separate Stitch screenshots for every service page.

For each remaining service page:
- preserve the established service-detail structure and styling
- use service-specific factual content from `business.md`
- follow the route/page purpose in `sitemap.md`
- match the approved Ferguson copy tone
- use relevant related services
- avoid unsupported technical claims
- avoid filler or duplicated copy where page-specific content is possible

Do not redesign the template for each service unless the content genuinely requires a variation.

# Phase 7 — About

Before implementation, inspect these exact files in order:

`Organized Screens/About/01-about-hero-story-trust.png`

`Organized Screens/About/02-about-philosophy-reputation-cta-footer.png`

These two screenshots together form one continuous About page.

Implement them in sequence as the complete page.

Preserve the approved:
- local/family hero
- family-owned story
- trust/experience section
- service philosophy
- residential/commercial reassurance
- local reputation
- final CTA
- footer

**Verify:** direct visual comparison against both About screenshots and strong mobile hierarchy.

# Phase 8 — Contact

Before implementation, inspect:

`Organized Screens/Contact/01-contact-page.png`

This file is the visual reference for the complete Contact page.

Implement the page from this screenshot.

Requirements:
- reuse the approved Homepage form component where the design matches
- preserve confirmed contact information
- preserve “What Happens Next”
- preserve the approved service-area treatment
- preserve final CTA/footer
- preserve approved copy unless `business.md` contains a newer factual correction

Do not invent submission destinations or backend behavior.

**Verify:** direct visual comparison against `01-contact-page.png`, form consistency, accessibility, and responsive behavior.

# Phase 9 — Maintenance Plan

Before implementation, inspect:

`Organized Screens/Maintenance Plan/01-maintenance-plan-page.png`

This file is the visual reference for the complete Maintenance Plan page.

Implement the page from this screenshot.

Use only verified plan facts from `business.md`.

Preserve the approved:
- hero/pricing presentation
- routine-care section
- trust treatment
- combined pricing + CTA
- footer
- copy shown in the screen unless a factual correction in `business.md` overrides it

Do not invent membership benefits.

**Verify:** direct visual comparison against `01-maintenance-plan-page.png`.

# Phase 10 — Gallery

There is no approved Gallery screenshot in `Organized Screens/`.

Create Gallery directly in code using the design language already established by the implemented approved pages.

Before designing Gallery:
- inspect `design.md`
- inspect the already implemented shared components
- inspect relevant approved screens for image treatment, spacing, typography, CTA, header, and footer patterns
- inspect authentic Ferguson photos in `Ferguson-Sons-Assets/`

Keep Gallery:
- simple
- photo-first
- responsive
- visually consistent with the rest of the site
- free of fabricated project names, locations, dates, or case-study claims

Use an accessible lightbox only if it materially improves the experience.

# Phase 11 — Service Area and Other Derived Pages

Implement:
- Service Area hub
- city pages
- Reviews
- legal pages
- other launch routes from `sitemap.md`

These pages do not all have dedicated full-page Stitch screens.

Reuse visual patterns/components from the approved pages in `Organized Screens/` and follow:
- `sitemap.md` for purpose/structure
- `business.md` for facts/copy constraints
- `design.md` for visual rules

Do not introduce new visual systems for derived pages.

# Phase 12 — Integrations and SEO

After core visual implementation is stable:
- titles/meta descriptions
- canonical URLs
- schema where appropriate
- sitemap/robots
- real map/embed
- form submission integration
- review integration only if a real source/strategy is chosen
- image optimization
- internal-linking review

# Phase 13 — Final QA

Check:

## Visual
- compare every approved page directly with its corresponding file(s) in `Organized Screens/`
- verify typography, spacing, colors, imagery, cards, header/footer

## Responsive
- desktop
- tablet
- common mobile widths

## Functional
- navigation
- links
- forms
- accordions
- gallery/lightbox if used
- maps/integrations

## Accessibility
- headings
- labels
- keyboard use
- focus states
- contrast
- alt text
- reduced motion

## Technical
- production build
- lint
- typecheck
- tests where applicable
- runtime/console errors
- performance/Core Web Vitals
- cross-browser review

# Working Method

Do not build the whole site in one uncontrolled pass.

Preferred loop:
1. open the exact approved screenshot file(s) listed for the phase
2. inspect relevant business/design/sitemap documentation
3. implement one meaningful phase
4. run the relevant checks
5. compare the implementation directly against the approved screenshots
6. fix systemic issues
7. update `PROJECT_STATUS.md`
8. move to the next phase
