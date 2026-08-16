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
3. [ ] Select a form submission provider/destination and connect both quote forms; no provider or receiving address is currently approved.
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

**2026-08-17** — Updated the Homepage hero on mobile only so the image-backed hero ends after the headline, copy, CTAs, and trust signals. The existing quote form now sits in a full-width clean light-gray band with its original fields, styling, and behavior preserved; desktop and tablet layout rules are unchanged.

**2026-08-17** — Updated the mobile hamburger navigation so Services and Service Area are accessible expandable controls with rotating chevrons, 44px nested submenu links, and the exact existing desktop submenu destinations. Verified open/close behavior, keyboard interaction and Escape focus return, route navigation, menu closure after navigation, and no horizontal overflow at 390px and 320px; desktop navigation remains unchanged.

**2026-08-17** — Completed Phase 13 final QA. Verified all 25 public routes across desktop, tablet, 390px mobile, and 320px narrow-mobile layouts; compared every approved page directly with its references; tested navigation, dropdowns, mobile menu, forms, disclosures, Gallery, maps, accessibility structure, focus visibility, links, production runtime, lint, typecheck, and build. Improved mobile tap areas and shortened related-service card minimums. Deployment, form-receiver, final CTA wording, operating-day, live-review, and legal-approval decisions remain intentionally unresolved.
