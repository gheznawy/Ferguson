# PROJECT_STATUS.md

Persistent implementation state for the Ferguson & Sons Mechanical LLC website.

Read this file at the start of substantial work and update it after material project changes.

## Project Overview

A production-ready website for Ferguson & Sons Mechanical LLC, a local HVAC company based in Chesapeake, Virginia.

The website should faithfully implement the approved Ferguson & Sons designs in `Organized Screens/`, follow the visual system in `design.md`, use verified business information from `business.md`, and follow the route architecture in `sitemap.md`.

The site emphasizes HVAC service, repair, diagnostics, maintenance and replacement. It serves both residential and commercial customers with a slight residential emphasis.

## Current Phase

**Phase 13 complete — Final QA**

## Current Objective

Phase 13 is complete. All 25 launch routes have passed final visual, responsive, functional, accessibility, technical, and production-runtime QA. Mobile layouts were inspected at 390px and stress-tested at 320px, with targeted tap-area and service-page length improvements applied. The form submission provider, production domain/hosting configuration, and owner/legal decisions remain pre-launch dependencies.

## Completed

- [x] `business.md`
- [x] `design.md`
- [x] `sitemap.md`
- [x] Homepage approved
- [x] Services Hub approved
- [x] Service Detail Template approved
- [x] About approved
- [x] Contact approved
- [x] Maintenance Plan approved
- [x] Approved screens organized
- [x] Original Ferguson media collected
- [x] Gallery will be designed directly in code
- [x] `AGENTS.md` prepared
- [x] `IMPLEMENTATION_PLAN.md` prepared
- [x] Production stack confirmed: Next.js, React, TypeScript, and Tailwind CSS v4
- [x] Production application initialized in the existing repository root
- [x] App Router and server-first application shell established
- [x] Ferguson global design tokens and responsive foundations established
- [x] Local development, production build, lint, and typecheck commands established
- [x] Reusable header and responsive mobile navigation implemented
- [x] Reusable footer and compact final CTA implemented
- [x] Primary, secondary, and outline button treatments implemented
- [x] Shared section heading/eyebrow, form, service card/tile, and trust treatments implemented
- [x] Phase 2 component preview implemented without beginning Homepage sections
- [x] Complete approved Homepage implemented as one continuous page with one global header
- [x] All eight curated Homepage photographs implemented with intentional responsive crops
- [x] Hero quote form, service highlights, trust, reviews, maintenance plan, about, service area, FAQ, final CTA, and footer completed
- [x] Real Google map embed and server-first native FAQ disclosures implemented
- [x] Complete approved Services Hub implemented at `/services/`
- [x] Complete approved A/C Repair page implemented at `/services/ac-repair/`
- [x] Reusable, server-first service-detail page system established for Phase 6
- [x] All six curated Phase 4 and Phase 5 photographs implemented with responsive crops
- [x] All nine remaining service-detail routes implemented from the verified A/C Repair template
- [x] Each Phase 6 route uses its approved `01` main image and `02` secondary image from `Selected-Pictures-for-Website/Services Pages/`
- [x] Services hub thermostat link corrected to the canonical `/services/thermostats/` route
- [x] All ten service-detail pages verified together at desktop, tablet, and mobile widths
- [x] Sitewide desktop Services dropdown added with all ten service routes, grouped navigation, hover/focus access, and a View All Services link
- [x] Sitewide desktop Service Area dropdown added with all five confirmed city routes, hover/focus access, and a View Full Service Area link
- [x] Complete approved About page implemented at `/about/` from both approved About references
- [x] Complete approved Contact page implemented at `/contact/` with the shared quote form and no backend integration
- [x] Complete approved Maintenance Plan page implemented at `/maintenance-plan/` using only verified plan facts
- [x] Curated About and Maintenance Plan photographs implemented with responsive crops and meaningful alternative text
- [x] Complete Gallery page implemented at `/gallery/` with all 20 approved images in numbered order
- [x] Gallery uses a responsive four-column desktop, three-column tablet, and two-column mobile grid with optimized Next.js images and lazy loading
- [x] Complete Reviews page implemented at `/reviews/` with all 11 archived Google entries and all 5 archived Facebook recommendations
- [x] Reviews page mobile disclosure controls show three Google reviews and three Facebook recommendations initially, with accessible expand/collapse buttons; tablet and desktop layouts remain unchanged
- [x] Service Area hub implemented at `/service-area/` with confirmed coverage, business hours, city links, map embed, and quote/phone actions
- [x] Five dedicated service-area routes implemented for Chesapeake, Virginia Beach, Norfolk, Portsmouth, and eastern Suffolk
- [x] Service-area pages use distinct, fact-grounded local content and avoid mass-generated service/city combinations
- [x] Privacy Policy and Terms of Service implemented as clean footer-only legal routes
- [x] All 25 planned launch URLs are now implemented
- [x] Environment-driven `SITE_URL` configuration added for production canonicals, sitemap URLs, Open Graph URLs, structured-data IDs, and robots sitemap discovery
- [x] Unique SEO titles and meta descriptions implemented for all 25 launch routes through the Next.js Metadata API
- [x] Self-referencing canonical URLs and explicit index/follow directives implemented across every public route
- [x] Dynamic `sitemap.xml` implemented with exactly the 25 approved launch routes from `SITEMAP.md`
- [x] Dynamic `robots.txt` implemented with public crawling allowed and sitemap discovery
- [x] Sitewide Open Graph, social-sharing, application identity, and approved White-Icon favicon metadata implemented
- [x] Conservative homepage `WebSite` and `HVACBusiness` JSON-LD implemented without an unverified address, operating days, price range, aggregate rating, or unsupported claims
- [x] Structured data validated with the live Schema.org validator: 0 errors and 0 warnings
- [x] Service-to-city, homepage-to-city, contact-to-city, Gallery, and Maintenance Plan internal-link coverage improved without adding new content blocks
- [x] All 25 routes confirmed to have inbound internal links; all 25 unique internal page targets resolve successfully
- [x] Sitewide image audit confirmed descriptive alt text, responsive `srcset` output, deliberate `sizes`, above-the-fold priority, and lazy loading for supporting imagery
- [x] Existing credential-free Google Maps embeds verified on Home and Service Area with accessible titles, useful dimensions, and lazy loading
- [x] Conventional production `npm run start` command added
- [x] Final QA completed across all 25 public routes at desktop, tablet, 390px mobile, and 320px narrow-mobile widths
- [x] All approved Homepage, Services, Service Detail, About, Contact, and Maintenance Plan references compared directly against the production implementation
- [x] Mobile tap areas improved for service-area cards, Contact coverage links, legal-page contents links, footer links, and social buttons
- [x] Mobile service-detail related-card minimum height reduced so cards size to their content and long service pages scroll more naturally
- [x] Mobile navigation, FAQ/details controls, Reviews expansion controls, Gallery layout, form validation, desktop dropdown navigation, and both map embeds verified

## In Progress

- [x] Inspect repository state
- [x] Choose/confirm production framework
- [x] Establish local development workflow
- [x] Establish global styles/tokens
- [x] Build shared components
- [x] Build complete Homepage
- [x] Compare Homepage against all ten approved Homepage references
- [x] Verify Homepage at desktop, tablet, and mobile widths
- [x] Build and verify the complete Services Hub
- [x] Build and verify the complete A/C Repair service-detail template
- [x] Build and verify all remaining service-detail routes
- [x] Build and verify the complete About page
- [x] Build and verify the complete Contact page
- [x] Build and verify the complete Maintenance Plan page
- [x] Build and verify the complete Gallery page
- [x] Build and verify the complete Phase 11 route set
- [x] Complete and verify the Phase 12 integrations and sitewide SEO pass
- [x] Complete and verify the Phase 13 final QA pass

## Next Steps

1. [x] Confirm when the final domain, hosting, and deployment decisions will be made — owner confirmed these decisions are planned within the next few days.
2. [ ] Once selected, configure the production domain in `SITE_URL`, connect the hosting provider, and complete deployment.
3. [ ] In Netlify, enable form detection after the next deploy and add the owners’ email address as a notification recipient for the `service-request` form.
4. [ ] Decide whether static archived reviews remain the launch strategy or a credentialed live review provider will be added.
5. [ ] Obtain owner/legal review of the drafted Privacy Policy and Terms of Service before public launch.

## Initialized Stack

- Next.js `16.3.1`
- React / React DOM `19.2.8`
- TypeScript `6.0.3`
- Tailwind CSS / `@tailwindcss/postcss` `4.3.3`
- ESLint `9.39.5` with `eslint-config-next` `16.3.1`
- Hanken Grotesk Variable / Inter Variable via Fontsource `5.3.0`
- Type declarations: Node `26.2.0`, React `19.2.18`, React DOM `19.2.4`
- Local Node.js used for verification: `24.18.0`

## Available Commands

- `npm run dev` — local App Router development server
- `npm run start` — serve the optimized production build
- `npm run build` — optimized production build
- `npm run lint` — ESLint with Next.js Core Web Vitals and TypeScript rules
- `npm run typecheck` — standalone TypeScript checking with no emit

## Important Decisions

- The approved production stack is Next.js, React, TypeScript, and Tailwind CSS v4.
- Use the Next.js App Router and React Server Components by default, with minimal client-side JavaScript.
- Preserve normal Next.js server capabilities for possible backend features; do not force static export mode at this stage.
- Tailwind should provide most styling, but `design.md` and the approved screens override Tailwind defaults for the Ferguson colors, typography, spacing, layout, radii, and overall visual direction.
- Small amounts of global CSS or CSS Modules are appropriate when they materially improve fidelity or clarity.
- Do not add a UI component library unless a genuine project-specific need is explicitly approved.
- Tailwind v4 default colors, typography, breakpoints, radii, shadows, and container sizes are cleared and replaced by Ferguson tokens; spacing uses the approved 8px base unit.
- Hanken Grotesk and Inter are self-hosted through installed Fontsource packages so local development and builds do not depend on Google Fonts network access.
- Approved-screen typography must match exactly, including font family, weight, size, line height, letter spacing, casing, and intentional line breaks; production CSS must set heading weights explicitly rather than relying on browser defaults or unintended inheritance.
- `next.config.ts` disables Next's automatic agent-rule injection so the existing `AGENTS.md` remains unchanged during development.
- Screens in `Organized Screens/` are the approved visual references and must be implemented faithfully, not creatively redesigned.
- Approved copy is preserved unless `business.md` has a newer factual correction.
- New copy must stay grounded in `business.md` and match the established Ferguson tone.
- Original Ferguson media is used for production; screenshots are visual references.
- Approved-page imagery is curated in `Selected-Pictures-for-Website/`; use the matching page folder when implementing approved screens.
- Use `Selected-Pictures-for-Website/Logos/Original-Logo.png` in the sitewide header and `Selected-Pictures-for-Website/Logos/White-Logo.png` in the sitewide footer.
- Build incrementally, with the Homepage as the first visual benchmark.
- Gallery will be created directly in code.
- Canonical and absolute SEO URLs are sourced from the server-side `SITE_URL` environment variable. Local builds fall back to `http://localhost:3000`; the real HTTPS origin must be supplied before launch.
- Canonical URLs, internal links, and sitemap entries consistently use the approved trailing-slash convention.
- Business structured data is limited to verified facts and appears once on the Homepage; self-serving local-business review schema and unconfirmed address/hours properties are intentionally omitted.
- The current Google Maps integration uses a credential-free embed centered on Chesapeake and does not require an API key.

## Open Questions

- Primary CTA wording may need a business-approved update because service/inspection visits carry a service fee.
- Operating days are not confirmed.
- Form submission destination/integration is not yet decided; the two quote forms are not connected to a receiver.
- Dynamic review integration, if any, is not yet decided.
- Owner/legal approval of the drafted Privacy Policy and Terms of Service is not yet recorded.
- Final domain, hosting, and deployment choices are not yet finalized; the owner confirmed they will be determined within the next few days.

## Verification Status

- Local production server: Passed; all 25 launch routes, `sitemap.xml`, and `robots.txt` returned HTTP 200
- Build: Passed with Next.js `16.3.1` / Turbopack; all 25 routes prerendered successfully
- Typecheck: Passed (`tsc --noEmit`)
- Lint: Passed (`eslint .`)
- Tests: Not started
- SEO QA: 25 unique titles, 25 unique descriptions, 25 matching self-canonicals, no missing robots metadata, no `noindex`, and no canonical mismatches
- Crawl QA: `sitemap.xml` contains exactly 25 unique canonical URLs; `robots.txt` allows `/` and advertises the sitemap; no broken internal page targets or orphaned public routes
- Structured-data QA: Homepage `WebSite` + `HVACBusiness` graph parses successfully and passed validator.schema.org with 0 errors and 0 warnings
- Responsive QA: All 25 launch routes passed browser checks at 1440px desktop and 390px mobile with one H1, visible main content, and no horizontal overflow; Homepage composition and mobile navigation were visually inspected
- Typography QA: About, Contact, and Maintenance Plan headings were re-audited against all four approved references; hero headings resolve to Hanken Grotesk 800, section/card headings to Hanken Grotesk 700, and the Maintenance Plan conversion heading to the approved 40px/48px desktop treatment at 1440px, 834px, and 390px
- Accessibility QA: Every route has one `h1`; all rendered images have alt attributes; maps have accessible titles; required form labels and native validation work; mobile navigation exposes state and closes with Escape
- Image QA: All rendered images include responsive source sets; supporting content images lazy-load; priority remains limited to header/above-the-fold imagery; the footer logo no longer receives priority
- Integration QA: Both maps render without console errors. Both quote forms remain intentionally unresolved because no submission provider/destination is approved.
- Performance QA: Passed practical production-browser review; no console/runtime warnings or errors, supporting images remain optimized and lazy-loaded, above-the-fold imagery is prioritized, and client JavaScript remains limited to the mobile navigation and Reviews disclosure controls. A formal lab Lighthouse report was not added to the repository.
- Cross-browser QA: Production Chrome passed. The implementation uses standard semantic HTML/CSS and native controls; separate Safari and Firefox engine sessions were not available in this environment.

## Last Meaningful Update

**2026-08-20** — Connected both scheduling forms to Netlify Forms through one `service-request` form. Added the required static HTML form definition for Netlify’s Next.js runtime, matching hidden form metadata, honeypot spam protection, URL-encoded AJAX submission, disabled sending state, and accessible success/error feedback. Netlify will record requests after redeployment; an owner must enable form detection and configure the email notification recipient in the Netlify dashboard. Lint, typecheck, and production build pass.

**2026-08-20** — Fixed repeated Homepage scheduling CTA clicks after the URL already contains `#schedule-service`. The four Homepage CTAs now use a focused client-side anchor component that explicitly scrolls the form into view on every normal click, preserves reduced-motion behavior and standard modified-click anchor behavior, and keeps the form submit button unchanged. Lint, typecheck, and production build pass.

**2026-08-20** — Updated every “Get Scheduled Today” CTA so Homepage instances smoothly scroll to the Homepage scheduling form, while every other sitewide/page CTA links to the Contact-page scheduling form. Added a shared `schedule-service` form anchor with sticky-header scroll offset; the form submit action remains unchanged. Rendered local HTML confirms four Homepage anchors and both form targets; lint, typecheck, and production build pass.

**2026-08-20** — Replaced every public “Get a Free Quote” CTA with “Get Scheduled Today,” including shared header, footer, mobile navigation, final CTA, form heading/submit action, service and service-area templates, and page-specific actions. Removed the free-quote statement from Terms of Service and updated the business, sitemap, and design CTA guidance to prevent future copy drift. Repository-wide copy audit found no remaining public free-quote or free-estimate wording; lint, typecheck, and production build pass.

**2026-08-17** — Added the existing shared `TrustSignals` loop between the Facebook recommendations and final CTA on `/reviews/` at mobile widths only. The wrapper preserves the shared strip’s motion, reduced-motion fallback, items, and styling while adding a compact 16px transition space above and below; tablet and desktop remain unchanged. Verified at 390px: visual order, active seamless loop, and no horizontal overflow; confirmed hidden at 834px. Lint, typecheck, and production build pass.

**2026-08-17** — Refined the shared mobile navigation with a clean uncontained 46px hamburger/close target, the footer’s `#000a18` navy panel, high-contrast navigation and submenus, and Ferguson-yellow text-only active states. Unified the Maintenance Plan, phone, and quote actions at matching 52px dimensions while retaining their outlined/accented/primary hierarchy. Verified at 390px: menu open/close, both dropdown disclosures, no horizontal overflow, and matching action dimensions. Lint, typecheck, and production build pass.

**2026-08-17** — Refined the desktop-only Maintenance Plan utility strip into a tighter 36px utility bar by reducing its type, View Plan pill, and internal gaps; the main white header remains unchanged. Verified at 1440px and 1280px with no wrapping or horizontal overflow; lint and typecheck pass.

**2026-08-17** — Added a desktop-only Maintenance Plan utility strip above the shared header with verified 22 Years Experience and Licensed & Insured trust points, plus a distinct compact navy View Plan pill. Added a featured Maintenance Plan link after the regular mobile navigation links and before the phone/quote actions. Verified the strip and links at 1440px and 1280px, the featured mobile menu treatment at 390px, and no horizontal overflow. Lint, typecheck, and production build pass.

**2026-08-17** — Removed the Google review and Facebook recommendation count labels from the Reviews hero summary cards. The centered card layout and existing responsive minimum heights remain in place to preserve balanced sizing and spacing.

**2026-08-17** — Removed volatile relative dates from all archived Google review cards and removed the unnecessary time from Dave Deuel’s Facebook recommendation, retaining its August 4 date.

**2026-08-17** — Added a mobile-only Services catalog disclosure after the HVAC Component Repair card. The existing secondary service cards are hidden initially on mobile, then revealed with a primary “See More Services” button that is removed after use; desktop and tablet grids remain unchanged. Lint and typecheck pass.

**2026-08-17** — Refined the shared quote-form service selector typography and added Ferguson's Maintenance Plan immediately before Other HVAC Service in every quote form. Verified the rendered selector styling and option order on the Homepage, confirmed both Homepage and Contact use the shared form, and ran lint and typecheck successfully.

**2026-08-17** — Updated the shared desktop header phone icon to render as a solid navy glyph, matching the approved Homepage hero reference. Verified visually at the approved 1320px desktop width.

**2026-08-17** — Updated the shared header navigation to include Gallery after Services in desktop and mobile menus, refined desktop current-page, phone, and CTA treatments against the approved Homepage hero reference, and kept the first Homepage hero headline line unbroken at desktop widths. Verified desktop header/hero against the reference, active navigation states, Gallery navigation on desktop and mobile, and responsive 1440px, 834px, and 390px layouts without horizontal overflow; lint, typecheck, and production build pass.

**2026-08-17** — Updated the shared `TrustSignals` component so every recurring trust treatment becomes a smooth, CSS-only horizontal loop on mobile. The duplicate animation list is hidden from assistive technology; reduced-motion users receive a clean static wrapping row. Desktop and tablet layouts remain unchanged. Verified the Homepage at 390px and 1440px with no horizontal overflow, confirmed all 18 routes using the component return the trust markup, then ran lint, typecheck, and production build successfully.

**2026-08-17** — Updated the mobile hamburger Services and Service Area rows so the text links open their hub pages while the separate chevron buttons expand and collapse the existing nested links. Desktop navigation remains unchanged.

**2026-08-17** — Refined page-refresh behavior so a reload from lower on a page briefly restores that position and then quickly scrolls smoothly to the top, while initial loads and normal in-site navigation still start at the top. Reduced-motion preferences use an immediate return.

**2026-08-17** — Added sitewide top-of-page restoration on page load and a sticky header that hides after downward scrolling, reappears on a slight upward scroll, and hides again when scrolling down on both desktop and mobile. Mobile Services and Service Area menu triggers now use the same Inter type treatment as the other hamburger options. Verified with lint, typecheck, and a production build.

**2026-08-17** — Added 24px of mobile-only breathing room below the Homepage hero trust signals, so the final Licensed & Insured item no longer sits against the quote-form band. Verified at 390px with no horizontal overflow; tablet and desktop remain unchanged.

**2026-08-17** — Updated the Homepage hero on mobile only so the image-backed hero ends after the headline, copy, CTAs, and trust signals. The existing quote form now sits in a full-width clean light-gray band with its original fields, styling, and behavior preserved; desktop and tablet layout rules are unchanged.

**2026-08-17** — Updated the Homepage hero to use the newly supplied portrait HVAC technician image at mobile widths only. Desktop and tablet retain the approved hero image, while the existing mobile overlay, content, trust signals, and quote-form band remain unchanged. Verified at 390px with no horizontal overflow or readability issue.

**2026-08-17** — Refined the mobile Homepage portrait-hero framing by limiting the image layer to the existing image-backed content area and moving its focal point left. The technician and open HVAC equipment now share the 390px composition without changing the desktop/tablet image, mobile layout, or overlay.

**2026-08-17** — Updated the mobile hamburger navigation so Services and Service Area are accessible expandable controls with rotating chevrons, 44px nested submenu links, and the exact existing desktop submenu destinations. Verified open/close behavior, keyboard interaction and Escape focus return, route navigation, menu closure after navigation, and no horizontal overflow at 390px and 320px; desktop navigation remains unchanged.

**2026-08-17** — Completed Phase 13 final QA. Verified all 25 public routes across desktop, tablet, 390px mobile, and 320px narrow-mobile layouts; compared every approved page directly with its references; tested navigation, dropdowns, mobile menu, forms, disclosures, Gallery, maps, accessibility structure, focus visibility, links, production runtime, lint, typecheck, and build. Improved mobile tap areas and shortened related-service card minimums. Deployment, form-receiver, final CTA wording, operating-day, live-review, and legal-approval decisions remain intentionally unresolved.

**2026-08-18** — Rebuilt the owner review package as a 37-page US Letter landscape PDF using section-aware pagination across the eight requested main pages (Home, Services, Gallery, About, Reviews, Service Area, Contact, and Maintenance Plan). Corrected the initially missing off-screen photo panels, restored the Home hero and service-collage imagery, captured both the Service Area and Home service-area maps in their loaded states, and replaced the Contact hero with its centered trust-strip state. The live website was only viewed and was not modified.
