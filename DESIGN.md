# Ferguson & Sons Mechanical LLC — Design System & Homepage Implementation Specification

**Status:** Final homepage design handoff for implementation  
**Primary use:** Codex / production implementation  
**Design basis:** the ten approved Stitch homepage screens (`01-home-hero.png` through `10-home-footer.png`) plus the useful token-level information from Stitch's generated `design.md`  
**Do not treat this file as generic HVAC guidance.** It describes the specific visual system approved for Ferguson & Sons.

---

## 1. Source-of-truth rules

Use each project source for its intended domain rather than applying one universal priority list:

1. **`business.md` — business facts.** It is authoritative for company facts, services, plan pricing/details, hours, reviews, service area, phone, claims, positioning, and approved offers. A visual mockup must never override verified business data.
2. **`sitemap.md` — information architecture.** It is authoritative for URLs, page hierarchy, navigation, page roles, internal linking, and planned SEO architecture.
3. **This `design.md` — design implementation.** It is authoritative for reusable visual tokens, typography, colors, spacing, components, responsive behavior, and implementation rules.
4. **Approved final screen PNGs — homepage visual references.** They are authoritative references for the approved homepage composition, hierarchy, proportions, section rhythm, photo placement, and overall feel. If a screen and this file appear to differ visually, preserve the approved screen composition unless this file explicitly records a later refinement.
5. **Original high-resolution image/logo assets — production media.** Use them for actual implementation. Never extract production photos or logos from the Stitch screenshots.

When domains overlap, factual correctness comes first: if text shown in a Stitch screen conflicts with `business.md`, use the verified `business.md` value while preserving the visual treatment from the screen.

### Approved homepage visual references

Use these files in this exact sequence:

- `01-home-hero.png`
- `02-home-services.png`
- `03-home-trust.png`
- `04-home-reviews.png`
- `05-home-maintenance-plan.png`
- `06-home-about.png`
- `07-home-service-area.png`
- `08-home-faq.png`
- `09-home-final-cta.png`
- `10-home-footer.png`

**Important:** each Stitch screenshot repeats the header because it was designed as a standalone screen. The real homepage must render **one global header only**, followed by all homepage sections in sequence. Do not repeat the header before every section.

---

## 2. Brand character

The website should feel like a **professional, established, family-owned local HVAC company** rather than a generic contractor template or a corporate SaaS site.

The design personality is:

- local and trustworthy
- professional without feeling corporate or cold
- modern without feeling trendy
- substantial and confident
- clean, structured, and easy to scan
- authentic rather than stock-heavy
- service-first rather than replacement-first
- slightly residential-leaning while still credible for commercial work

The strongest visual identity comes from the interaction of:

- deep Ferguson navy
- Ferguson yellow
- crisp white/off-white surfaces
- real field photography
- bold dark-navy headings
- restrained rounded corners
- clean grid layouts
- alternating light and dark sections

### Avoid

Do not turn this into:

- a generic blue HVAC template
- a card-heavy SaaS dashboard
- a luxury/boutique brand site
- an all-white page with weak section separation
- a site with excessive gradients, glassmorphism, blobs, or decorative effects
- a site filled with stock photography when real Ferguson photos exist
- an over-rounded interface with pill-shaped everything
- an emergency-service/24-hour brand unless separately verified and explicitly added later

---

## 3. Core design tokens

The following tokens standardize the approved screens. Slight anti-aliasing differences in the exported PNGs should not create additional colors.

### 3.1 Color palette

```css
:root {
  /* Brand navy family */
  --ferguson-navy-950: #000A18; /* footer */
  --ferguson-navy-900: #0A192F; /* reviews / very dark section */
  --ferguson-navy-800: #001430; /* primary headings, dark buttons */
  --ferguson-navy-700: #002855; /* major navy sections */
  --ferguson-navy-600: #193E66; /* raised dark panel / secondary dark surface */

  /* Brand accent */
  --ferguson-yellow: #FFB215;

  /* Light system */
  --page-bg: #F8F9FA;
  --page-bg-alt: #F3F4F5;
  --surface: #FFFFFF;
  --surface-soft: #F3F4F5;
  --surface-panel: #E7E8E9;

  /* Text */
  --text-heading: #001430;
  --text-body: #43474F;
  --text-muted: #747780;
  --text-on-dark: #FFFFFF;
  --text-on-dark-muted: #E1E3E4;

  /* Lines / borders */
  --border: #E1E3E4;
  --border-strong: #C4C6D0;
}
```

### Color rules

- **Ferguson yellow (`#FFB215`) is the only warm accent color used throughout the site.**
- Do not introduce separate “gold,” “amber,” orange, or heating red systems.
- Yellow is used for primary CTAs, small icons, eyebrow/accent rules, stars, active navigation underline, and selected emphasis.
- Dark navy is used for headings, secondary CTAs, dark section backgrounds, and strong information blocks.
- Use `#002855` for the large Service Area and Maintenance dark surfaces.
- Use `#0A192F` for the Reviews section to make it feel slightly deeper than standard navy.
- Use `#000A18` for the Footer so the page ends with the deepest tone.
- Light sections should alternate mainly between `#F8F9FA`, `#F3F4F5`, and white surfaces rather than inventing new tints.

---

## 4. Typography

The useful typography direction from Stitch is correct and matches the final screens.

### Fonts

```css
--font-display: "Hanken Grotesk", system-ui, sans-serif;
--font-body: "Inter", system-ui, sans-serif;
```

- **Hanken Grotesk**: headings, major numbers, strong section titles.
- **Inter**: body copy, navigation, buttons, labels, form fields, metadata.

If either font is unavailable at implementation time, load it properly rather than silently substituting a visually different display font.

### Desktop type scale

```css
--type-display: 48px/56px;      /* hero H1 */
--type-section-xl: 40px/48px;   /* large section headings */
--type-section: 32px/40px;      /* medium section headings */
--type-subheading: 24px/32px;
--type-card-title: 18px/26px;
--type-body-lg: 18px/28px;
--type-body: 16px/24px;
--type-small: 14px/20px;
--type-eyebrow: 13px/18px;
```

### Weights

- hero / major section headlines: `700–800`
- card titles: `650–700`
- navigation / CTA labels: `600–700`
- body: `400`
- eyebrow labels: `700`, uppercase, moderate tracking

### Heading behavior

- Large headings are dark navy on light sections and white on dark sections.
- Typography in approved screens must be matched exactly: font family, weight, size, line height, letter spacing, casing, and intentional line breaks are part of visual fidelity, not optional approximations.
- Set heading weights explicitly in production CSS. Do not allow an approved heading to fall back to a browser default or an unintended inherited weight.
- Do not use all-caps for major headlines.
- Eyebrows are uppercase and small.
- Headline line breaks are intentional. Preserve the visual hierarchy shown in the approved screens instead of allowing arbitrary wrapping.
- On the Service Area section, the two-line headline is intentionally hierarchical:
  - `Local HVAC Service` — larger
  - `Across Chesapeake & Beyond` — smaller, paired with a short yellow rule

### Readability

- Body copy should generally stay around `55–68ch` maximum line length.
- Dark-section body copy uses softened off-white, not low-contrast gray.
- Do not reduce body type below 16px on desktop or 15–16px on mobile.

---

## 5. Layout system

### Desktop container

```css
--container-max: 1280px;
--gutter-desktop: 24px;
--gutter-mobile: 16px;
--space-unit: 8px;
```

- Center the main site within a maximum content width of approximately **1280px**.
- Most major sections use two-column editorial layouts rather than equal card grids.
- Common desktop column gaps: `32–48px`.
- Major section padding: typically `72–96px` top and bottom.
- Compact sections such as the final CTA use less vertical padding (`40–56px`).

### Responsive grid

- Desktop `>= 1024px`: 12-column mental model / full editorial layouts.
- Tablet `768–1023px`: 8-column equivalent; reduce gaps before reducing type dramatically.
- Mobile `< 768px`: stack major columns vertically with 16px side margins.

The screenshots are desktop references. Mobile behavior below is implementation guidance inferred from the approved hierarchy; do not invent a completely different mobile aesthetic.

---

## 6. Spacing

Use an 8px base rhythm with deliberate exceptions only when required by the screenshot composition.

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-8: 64px;
--space-10: 80px;
--space-12: 96px;
```

### Spacing character

- The site is spacious but not sparse.
- Keep related content grouped tightly enough to read as a unit.
- Use larger gaps between major content groups than within cards.
- Do not make sections artificially tall with empty space.
- The Final CTA is intentionally compact and must not become a second hero.

---

## 7. Shape, border, and depth system

### Radius

```css
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-round: 999px;
```

Use:

- buttons / inputs: 6–8px
- standard cards: 8–12px
- large photo frames / major panels: 12–16px
- circular icon buttons only where clearly appropriate

Do not over-round the interface.

### Shadows

Depth is restrained.

```css
--shadow-soft: 0 8px 24px rgba(0, 20, 48, 0.08);
--shadow-card: 0 10px 30px rgba(0, 20, 48, 0.10);
```

- Most cards should rely on contrast and borders rather than heavy shadows.
- Photos and the hero quote form may receive a soft shadow.
- Avoid glow effects.

### Borders

- light surface borders: `1px solid var(--border)`
- form controls may use `var(--border-strong)`
- outlined secondary buttons use navy border on light backgrounds and white/light border on dark backgrounds

---

## 8. Global header

The header is a critical repeated design element and must be built as **one reusable component**.

### Desktop structure

Left to right:

1. Ferguson & Sons logo
2. navigation
3. phone icon + `(757) 406-7135`
4. yellow `Get Scheduled Today` CTA

Navigation order:

- Home
- Services
- About
- Reviews
- Service Area
- Contact

### Header appearance

- use `Selected-Pictures-for-Website/Logos/Original-Logo.png` as the sitewide header logo
- background: `#F8F9FA` / visually white
- approximate desktop height: `88–96px`
- content constrained to the main max-width
- subtle bottom border / shadow only if needed
- active page: dark navy text + thin Ferguson-yellow underline
- nav text: Inter, medium weight
- phone: navy, bold enough to read quickly
- quote button: Ferguson yellow with navy text

### Header behavior

- The approved screenshots show a static header. Do not make it aggressively sticky unless explicitly requested later.
- Do not add extra top bars.
- Do not add emergency messaging.
- Do not add dropdown labels or pages that are not part of the approved navigation.

### Mobile

At mobile widths:

- logo left
- compact menu trigger right
- keep the quote/call action accessible without crowding the top bar
- collapse navigation into a simple menu
- preserve the same colors and CTA priority

---

## 9. Eyebrow / section-label component

A recurring section identity device appears across the homepage.

### Light sections

- uppercase label
- small navy or yellow-forward treatment depending on screenshot
- optional short horizontal rule

### Dark sections

- Ferguson yellow uppercase label
- white heading beneath

Typical examples:

- `REAL HVAC WORK`
- `TRUSTED LOCAL HVAC TEAM`
- `CUSTOMER REVIEWS`
- `HVAC MAINTENANCE PLAN`
- `FAMILY-OWNED & LOCAL`
- `PROUDLY SERVING HAMPTON ROADS`
- `COMMON QUESTIONS`
- `LOCAL HVAC HELP YOU CAN COUNT ON`

Do not invent a new decorative system for each section. Keep the eyebrow treatment recognizable and restrained.

---

## 10. Button system

### Primary yellow CTA

Used for the highest-priority action.

```css
background: var(--ferguson-yellow);
color: var(--ferguson-navy-800);
font-weight: 700;
min-height: 48px;
border-radius: 6px;
```

Examples:

- Get Scheduled Today
- Call Now where shown as yellow
- Read All Reviews
- Learn About the Maintenance Plan
- Learn More About Us

### Dark filled button

```css
background: var(--ferguson-navy-800);
color: white;
```

Used for secondary actions on light backgrounds, e.g. `View All Services`, `Call Us`.

### Outline button

- on light: navy border + navy text
- on dark: white/light border + white text
- transparent background

Examples: `Call Now`, `Read Reviews` depending on context.

### Button rules

- Keep corners restrained, not pill-shaped.
- Use one clear primary and one secondary CTA per action cluster.
- Do not introduce gold/amber variants.
- Hover states should be subtle: small color/contrast change only; no bouncy transforms.
- Visible keyboard focus state is required.

---

## 11. Iconography

- Use simple line icons with approximately `1.75–2px` strokes.
- Rounded stroke terminals are acceptable.
- On dark surfaces, icons are primarily Ferguson yellow or white.
- On light surfaces, icons are navy or Ferguson yellow depending on emphasis.
- Contact icons in the footer are Ferguson yellow.
- Avoid multi-color icon systems except for real external brand marks when appropriate.

### Social icons

The approved footer uses compact circular Facebook and Google buttons.

- keep them small and aligned
- use consistent circular sizing
- use white brand glyphs on a dark/blue circular surface
- actual links must come from verified business data

---

## 12. Photography and media direction

Real Ferguson photography is a major part of the identity.

### General rules

- Prefer original real business photos over stock or generated imagery.
- Do not use screenshot crops as production assets.
- Preserve natural lighting and real field conditions; do not over-retouch.
- Use `object-fit: cover` with deliberate `object-position` per image.
- Do not crop away the technician/action that gives the photo meaning.
- Avoid generic HVAC stock scenes if an appropriate real Ferguson photo exists.

### Photo framing

- major photos: 12–16px radius
- supporting collage images: 10–14px radius
- shadows subtle
- avoid decorative borders unless shown

### Map

The Service Area section should use a **real embedded Google Map / map implementation**, not a baked screenshot in production.

The approved desktop screen is a visual reference for size, crop, and placement only.

---

## 13. Form system

The homepage hero contains the primary quote form.

### Form card

- white / very light surface
- soft shadow
- subtle Ferguson-yellow accent at the top edge
- medium radius, not highly rounded
- clear title and short helper copy

### Desktop field layout

Two-column rows where space permits:

- First Name / Last Name
- Phone Number / Email Address
- Service Needed / City
- message textarea full width
- full-width yellow submit CTA

### Field styling

- labels always visible above fields
- white inputs
- `1px` neutral border
- 44–48px control height
- dark navy focus border
- no placeholder-only labels
- accessible validation and error messaging

### Mobile

Stack fields to one column.

---

# 14. Homepage architecture and section specifications

The final homepage order is locked:

1. Header
2. Hero + Quote Form
3. Service Highlights
4. Trust / Why Homeowners Trust Ferguson & Sons
5. Customer Reviews
6. HVAC Maintenance Plan
7. Family-Owned & Local / About
8. Service Area + Business Hours
9. FAQ
10. Final CTA
11. Footer

Do not insert extra generic sections between these unless explicitly approved later.

---

## 14.1 Hero + Quote Form

**Reference:** `01-home-hero.png`

### Purpose

Immediately communicate local HVAC service/repair, trust, and a clear conversion path.

### Composition

- full-width real residential HVAC background photo below the header
- dark left-side overlay/gradient for readable text
- text/action block on left
- substantial white quote form card on right
- trust row below main CTAs on the left

Desktop feel is approximately a **60/40 split**, but the photo remains one continuous background rather than two unrelated panels.

### Approved hierarchy

Eyebrow:
`SERVING CHESAPEAKE, NORFOLK & VIRGINIA BEACH`

Headline hierarchy:

- `Reliable HVAC Service & Repair`
- `From a Local Team You Can Trust!`

The first line is significantly larger than the second.

Primary actions:

- `Get Scheduled Today`
- `Call Now`

Trust signals:

- `5.0 Google Rating`
- `22 Years Experience`
- `Licensed & Insured`

### Visual rules

- hero H1 white, bold, substantial
- supporting copy off-white
- yellow eyebrow and primary CTA
- secondary `Call Now` is outlined on the dark/photo background
- technician/action must remain visible; do not crop into a generic wall/grass image
- preserve usable negative space behind the left text
- quote form is visually prominent but does not overpower the headline

### Hero overlay

Use a dark navy gradient strong enough for white text, e.g. approximately:

```css
linear-gradient(
  90deg,
  rgba(0, 20, 48, 0.80) 0%,
  rgba(0, 20, 48, 0.60) 42%,
  rgba(0, 20, 48, 0.20) 68%,
  rgba(0, 20, 48, 0.05) 100%
)
```

Tune to the actual photo rather than blindly applying these exact stops.

### Mobile

- stack copy first, quote form second
- retain photograph as background or upper media region
- trust signals may wrap into a two-column/stacked layout
- keep the primary quote CTA visible early

---

## 14.2 Service Highlights

**Reference:** `02-home-services.png`

### Background

Light / white (`#F8F9FA` or white).

### Desktop layout

Two main columns:

- left: copy + service highlights + CTAs
- right: real-photo collage

### Left content

Eyebrow:
`REAL HVAC WORK`

Headline:
`Honest Work From a Local Team You Can Trust`

Below the intro copy is one shared light-gray panel containing **four white service cards in a 2×2 grid**.

Cards:

- AC Repair
- System Installations
- Routine Maintenance
- Commercial HVAC Service

### Service card treatment

- white card
- no heavy shadow
- yellow line icon
- navy title
- gray body copy
- moderate internal padding

The four cards belong visually to one grouped module; do not turn them into four floating oversized tiles.

### CTAs

- dark `View All Services`
- yellow `Call Now`

### Photo collage

Preserve the approved asymmetric structure:

- one large/tall hero service image on the left side of collage
- two supporting images stacked on the upper/right side
- one wider horizontal equipment/detail image across the lower collage area

The collage should feel editorial, not like a masonry gallery plugin.

### Mobile

- copy + cards first
- cards can become one column or 2×2 if width allows
- collage becomes a simpler two-column image grid or one hero + supporting images

---

## 14.3 Trust Section

**Reference:** `03-home-trust.png`

### Background

Soft light gray/off-white, approximately `#F3F4F5`.

### Layout

Two columns:

- left: trust copy + proof chips + review excerpt + CTAs
- right: large real photo

### Approved hierarchy

Eyebrow:
`TRUSTED LOCAL HVAC TEAM`

Headline:
`Why Homeowners Trust Ferguson & Sons`

### Trust chips

2×2 white chip/card grid:

- 22 Years Experience
- Licensed & Insured
- Family-Owned & Operated
- 5.0 Google Rating

Use yellow icons and navy labels.

### Review proof

The short testimonial beneath the chips is a **verified customer review**, not marketing copy. Use exact approved review text from the verified review source / `business.md`.

### Photo

Large authentic customer/team photo with a compact Google 5.0 rating badge overlapping the lower-left of the image.

### CTAs

- outlined `Read Reviews`
- yellow `Get Scheduled Today`

### Mobile

Stack copy above photo; trust chips remain compact and readable.

---

## 14.4 Customer Reviews

**Reference:** `04-home-reviews.png`

### Background

Very deep navy: `#0A192F`.

### Top row

Three visual zones:

1. left: eyebrow + large heading
2. center: `5.0` + yellow stars + `GOOGLE RATING`
3. right: yellow `Read All Reviews` button

Headline:
`Don’t Just Take Our Word for It`

### Review-card composition

- one large white featured review card occupying the left ~2/3
- two smaller white cards stacked on the right ~1/3
- clean white cards with navy text and yellow stars
- restrained radius
- no dark cards inside the dark section

### Review content

Use exact approved/verified reviews. Do not paraphrase or invent testimonials.

Approved screen uses:

- Chris Tan as the featured large review
- Darlene Dow
- geunjae Lee

### Mobile

Stack all three cards vertically; keep featured card first.

---

## 14.5 HVAC Maintenance Plan

**Reference:** `05-home-maintenance-plan.png`

### Overall background

Light page surface.

### Layout

Strong 50/50 split:

- left: large real maintenance/service photo
- right: deep navy content panel

Both sides align vertically and use matching large radii.

### Dark panel

Background: `#001430` / very deep navy.

Eyebrow:
`HVAC MAINTENANCE PLAN`

Headline:
`Protect Your Comfort. Prevent Costly Breakdowns.`

### Price module

Inside the dark panel, place a raised medium-navy price block.

Confirmed plan summary from `business.md`:

- `$299 / year per system`
- `Equivalent to approximately $25 / month`
- `2 professional maintenance visits per year`

If the business later changes the offer, update `business.md` first and let the production UI source the revised values from there.

### Benefits

Use the confirmed Maintenance Plan inclusions from `business.md` with yellow check icons. Keep the list concise; when the approved inclusions require more than three rows, use a compact two-column desktop list that stacks on mobile.

### CTAs

- yellow `Learn About the Maintenance Plan`
- text/secondary `Call Now`

### Mobile

Stack photo above plan panel. Keep price block visually prominent.

---

## 14.6 Family-Owned & Local / About

**Reference:** `06-home-about.png`

### Background

Light `#F8F9FA`.

### Layout

- left: large family/local photo
- right: eyebrow, headline, paragraph, three trust bullets, CTAs

### Approved hierarchy

Eyebrow:
`FAMILY-OWNED & LOCAL`

Headline:
`Built on Family, Trust, and Local Service`

Trust bullets:

- Family-Owned & Operated
- Trusted Local Reputation
- Neighborhood Favorite in Las Gaviotas

The Las Gaviotas statement is a local reputation statement, **not an official award or certification**. Do not add a badge implying official recognition.

### CTAs

- yellow `Learn More About Us`
- subtle `See Our Reviews` text link

### Mobile

Photo first, then copy. Keep the personal/local feeling; do not replace the family photo with equipment stock photography.

---

## 14.7 Service Area + Business Hours

**Reference:** `07-home-service-area.png`

### Background

Ferguson navy: `#002855`.

### Layout

Two columns:

- left: service-area copy, location grid, business hours, CTAs
- right: Google Map embed

### Approved hierarchy

Eyebrow:
`PROUDLY SERVING HAMPTON ROADS`

Two-level headline:

- `Local HVAC Service`
- `Across Chesapeake & Beyond`

A short yellow rule visually bridges the two levels.

### Primary service-area cards

Keep the approved geometry:

- two columns for first four rows/items
- one full-width bottom item
- dark/navy outlined cards, not white cards
- same yellow location-pin icon on all items

Items shown:

- Chesapeake (Home Base)
- Virginia Beach
- Norfolk
- Portsmouth
- Surrounding Hampton Roads Areas

Use `business.md` for the final production wording if the verified service-area list changes.

### Business hours

Directly below the city cards and above the CTAs, preserve the approved compact visual treatment:

- yellow clock icon
- `BUSINESS HOURS`
- one concise schedule line sourced from `business.md`

The approved static screen shows `Monday–Friday · 8:00 AM–5:00 PM`, but production must **not hard-code or infer day names unless they are confirmed in `business.md`**. The currently confirmed time range is `8:00 AM–5:00 PM`.

Do not turn this into a separate large card.

### CTAs

- yellow `Get Scheduled Today`
- outlined `Call Now`

### Map

Embed a real Google Map / appropriate map experience.

- desktop map roughly balances the left content column
- modest rounded corners
- do not stylize it into a fake dark map graphic

### Mobile

- copy/cards/hours/CTAs first
- map below, full width
- minimum useful map height ~320px

---

## 14.8 FAQ

**Reference:** `08-home-faq.png`

### Background

Soft gray: `#F3F4F5`.

### Layout

- left ~36–40%: intro + compact CTA card
- right ~60–64%: white accordion panel

### Approved hierarchy

Eyebrow:
`COMMON QUESTIONS`

Headline:
`Straight Answers About Your HVAC Service`

The approved desktop screenshot intentionally allows a 3-line headline at this width; do not shrink it unnaturally just to force one line.

### Left CTA card

`Still Have Questions?`

- white surface
- comfortable internal padding
- flatter styling; minimal shadow
- content must not hug the left edge
- dark `Call Us` button
- yellow `Get Scheduled Today` button

### FAQ panel

- white surface
- first question open by default
- subtle horizontal separators
- navy question text
- yellow plus/minus controls
- no individual card box around every question

### FAQ topics

Use the approved/verified FAQ copy from project content. The current design covers:

- service/repair vs replacement focus
- service area
- residential + commercial
- maintenance plan
- repair vs replacement decision
- requesting a quote

### Mobile

Stack intro/CTA first, accordion second. Accordion rows remain full-width and touch-friendly.

---

## 14.9 Final CTA

**Reference:** `09-home-final-cta.png`

### Purpose

A compact closing conversion band, **not a second hero**.

### Height

Desktop visual target: approximately **220–240px** of CTA content.

Do not expand this into a 500–700px feature section.

### Background

- real HVAC/exterior photo subtly visible
- strong navy overlay
- image remains atmospheric rather than dominant
- overlay should still allow the photo to show slightly

Target overlay strength: approximately **78–82% dark**, tuned for actual photo readability.

### Layout

Single horizontal row:

- left: eyebrow + headline + one supporting line
- right: two CTA buttons

Eyebrow:
`LOCAL HVAC HELP YOU CAN COUNT ON`

Headline:
`Need HVAC Service? Let’s Get You Comfortable.`

Supporting line:
`Honest local HVAC service for homes and businesses across South Hampton Roads.`

Actions:

- yellow `Get Scheduled Today`
- outlined `Call Now` / phone CTA

### Mobile

Stack content and CTAs; keep the section compact.

---

## 14.10 Footer

**Reference:** `10-home-footer.png`

### Background

Deepest navy: `#000A18`.

The footer should feel visually connected to the Final CTA while clearly becoming the final page layer.

### Desktop layout

Four columns:

1. Brand / contact
2. Quick Links
3. Services
4. Service Area

### Column 1

- use `Selected-Pictures-for-Website/Logos/White-Logo.png` as the sitewide footer logo
- keep the body paragraph narrower than the full column so there is clear breathing room before Quick Links
- phone, hours, Licensed & Insured rows use **Ferguson-yellow icons**
- Facebook + Google circular icon buttons below

### Footer column headings

Use Ferguson yellow for:

- `QUICK LINKS`
- `SERVICES`
- `SERVICE AREA`

Do not use a separate beige/gold heading color.

### Quick Links

- Home
- Services
- About
- Reviews
- Service Area
- Contact

### Services

The approved footer uses a compact subset:

- A/C Repair & Diagnostics
- HVAC Maintenance
- Commercial HVAC Service
- HVAC Replacement & Installation
- Heat Pump Service
- Furnace Service
- Ductless Mini-Splits

### Service Area

Vertical list:

- Chesapeake
- Virginia Beach
- Norfolk
- Portsmouth
- Eastern Suffolk

Supporting italic/muted line:
`Serving South Hampton Roads and surrounding communities.`

Compact yellow `Get Scheduled Today` button below.

### Bottom legal row

- thin dark divider
- copyright left
- Privacy Policy + Terms of Service right
- use a dynamic/current year in production rather than hard-coding the year shown in a static Stitch export

### Mobile

- stack columns with clear heading separation
- legal row stacks if necessary
- preserve social icons and quote CTA
- avoid a huge footer height by keeping link spacing compact

---

# 15. Background rhythm across the full homepage

The approved homepage depends on alternating visual weight. Preserve this sequence:

1. Hero — photographic / dark overlay
2. Services — light
3. Trust — light gray / subtle tint
4. Reviews — deep navy
5. Maintenance — light page + deep navy split panel
6. About — light
7. Service Area — navy
8. FAQ — light gray
9. Final CTA — navy/photo
10. Footer — deepest navy

Do not flatten all light sections into pure white and do not make all dark sections the same navy. The progression gives the homepage personality and section separation.

---

## 16. Content / business guardrails

Visual implementation must not introduce unsupported business claims.

### Approved recurring facts currently represented by the design

The visual system is built around these recurring facts, but the current values must always be read from `business.md`:

- Ferguson & Sons Mechanical LLC
- family-owned and operated
- 22 years experience
- licensed & insured
- phone: `(757) 406-7135`
- confirmed business-hour time: `8:00 AM–5:00 PM`; day-of-week labels require confirmation in `business.md`
- local service across Chesapeake / South Hampton Roads
- residential and commercial capability
- emphasis on service, repair, diagnostics, and maintenance before replacement

### Do not invent

- 24/7 service
- emergency service
- same-day guarantees
- awards
- guarantee programs
- financing
- official “Las Gaviotas award” language
- fake license numbers
- fake certifications
- fake review copy
- additional locations outside verified coverage
- Newport News / Hampton as normal service-area claims unless later verified and intentionally changed

### Reviews

Any review shown as a customer quote must be copied exactly from the verified review source. Never invent or paraphrase a testimonial and present it as a direct customer review.

### Maintenance plan

The maintenance plan is an approved active offering. Current verified summary in `business.md`:

- `$299/year per system`
- approximately `$25/month` equivalent
- `2 professional maintenance visits per year`

Do not infer monthly billing terms, priority service, discounts, waived fees, warranties, or other membership perks unless they are added to `business.md`.

---

## 17. Responsive implementation rules

The approved references are desktop-first. Responsive work should preserve hierarchy rather than recreate the desktop grid at tiny widths.

### General

At `< 768px`:

- use 16px side margins
- stack two-column sections
- use 32–48px section padding
- reduce display headlines to approximately 34–40px with proportional line-height
- section headings approximately 28–34px
- keep buttons at least 44px tall
- avoid horizontal scrolling

### Image ordering

Recommended mobile order:

- Hero: copy → form
- Services: copy/cards → collage
- Trust: copy/proof → photo
- Maintenance: photo → plan content
- About: photo → copy
- Service Area: copy/cards/hours/CTAs → map
- FAQ: intro/CTA → accordion
- Final CTA: text → buttons

### Tablet

At 768–1023px:

- preserve two columns where content remains readable
- otherwise stack before shrinking typography excessively
- service cards can remain 2×2
- review cards may become one featured + two beneath

---

## 18. Interaction and motion

The approved visual design is largely static. Do not invent elaborate motion.

Allowed:

- subtle button hover color changes
- link underline/opacity transitions
- FAQ expand/collapse animation ~150–250ms
- gentle focus ring transitions
- subtle image hover only if used on linked gallery/service media

Avoid:

- parallax
- large entrance animations
- bouncing CTAs
- continuous motion
- auto-rotating review carousels on the homepage unless explicitly requested

Respect `prefers-reduced-motion`.

---

## 19. Accessibility requirements

Implementation should look like the approved design while remaining accessible.

- semantic heading hierarchy (`h1` once, then logical `h2` / `h3`)
- visible keyboard focus for all links, buttons, fields, accordion controls
- form labels programmatically associated with inputs
- FAQ controls implemented as buttons with `aria-expanded`
- alt text for meaningful photos
- decorative icons hidden from screen readers when appropriate
- minimum touch targets ~44px
- maintain WCAG AA contrast
- do not rely on yellow alone to convey status
- embedded map requires an accessible title

---

## 20. Production asset rules

### Never

- use the exported Stitch screen PNG itself as a production section image
- crop the logo out of a screenshot
- use screenshot-extracted Google Maps pixels
- use compressed screenshot photos when the original is available

### Use instead

- original full-resolution Ferguson photography
- approved logo assets
- real icon set
- actual Google Maps embed/API implementation as appropriate
- real text and semantic HTML/CSS

### Image optimization

- preserve source resolution
- output web-optimized AVIF/WebP where appropriate
- provide responsive `srcset`
- avoid quality loss that makes real business photography look soft

---

## 21. Suggested reusable component map

Codex should build reusable primitives rather than ten isolated static screen clones.

Suggested components:

- `SiteHeader`
- `SiteLogo`
- `NavLink`
- `PrimaryButton`
- `DarkButton`
- `OutlineButton`
- `SectionEyebrow`
- `TrustSignal`
- `ServiceCard`
- `ReviewCard`
- `RatingDisplay`
- `QuoteForm`
- `MaintenancePriceBlock`
- `ServiceAreaItem`
- `BusinessHours`
- `FAQAccordion`
- `FinalCTA`
- `SiteFooter`

Section-level components:

- `HeroSection`
- `ServicesSection`
- `TrustSection`
- `ReviewsSection`
- `MaintenancePlanSection`
- `AboutSection`
- `ServiceAreaSection`
- `FAQSection`

Keep section components flexible enough to support inner pages later without forcing every page into the homepage layout.

---

## 22. Implementation QA checklist

Before considering the homepage complete, compare the production build side-by-side with all ten approved screens.

### Global

- [ ] Only one header appears on the assembled homepage.
- [ ] Header navigation order and CTA match the approved design.
- [ ] Ferguson yellow is consistent; no extra gold/amber shades were introduced.
- [ ] Light/dark section rhythm matches the approved architecture.
- [ ] Headline font family, weight, and hierarchy feel consistent across sections.
- [ ] Section padding does not make the page feel either cramped or excessively long.
- [ ] Real photos use deliberate crops.

### Hero

- [ ] Technician/action remains visible.
- [ ] Left copy has strong contrast.
- [ ] Quote form matches desktop 2-column structure.
- [ ] Trust signals display correctly.

### Services

- [ ] Four cards remain within one shared subtle panel.
- [ ] Photo collage keeps the approved asymmetric composition.

### Trust

- [ ] 2×2 trust chips remain compact.
- [ ] verified testimonial is exact.
- [ ] rating badge sits cleanly on the photo.

### Reviews

- [ ] one large left review + two stacked right reviews.
- [ ] white cards on deep navy.
- [ ] all customer text is verified.

### Maintenance

- [ ] photo and dark plan panel are balanced.
- [ ] price block is clearly visible.

### About

- [ ] authentic family photo remains prominent.
- [ ] Las Gaviotas wording is not presented as an official award.

### Service Area

- [ ] two-level headline hierarchy is preserved.
- [ ] service-area item geometry matches the approved screen.
- [ ] hours appear beneath locations and above CTAs.
- [ ] real Google map implementation is used.

### FAQ

- [ ] first item open by default.
- [ ] accordion panel is one clean white surface, not six floating cards.
- [ ] left CTA card has comfortable padding.

### Final CTA

- [ ] remains compact (~220–240px desktop).
- [ ] photo is visible only subtly behind navy overlay.

### Footer

- [ ] four-column structure is preserved on desktop.
- [ ] first-column paragraph is not crowded against Quick Links.
- [ ] column titles and contact icons use Ferguson yellow.
- [ ] service areas are a vertical list.
- [ ] Facebook and Google buttons are present.
- [ ] year is dynamic/current.

---

## 23. Final implementation principle

**Reproduce the approved visual system, not the accidental artifacts of Stitch.**

The ten screenshots define the intended composition and personality; this file standardizes the rules needed to implement them cleanly, responsively, and consistently.

When uncertain:

- prefer the approved screenshot's visual hierarchy
- prefer verified business data for facts/copy
- prefer reusable components over one-off markup
- prefer real Ferguson assets over generic imagery
- prefer the established navy / white / Ferguson-yellow palette over introducing new colors
- preserve the service-first, local, family-owned character of the site
