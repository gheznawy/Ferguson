# AGENTS.md

Instructions for coding agents working on the Ferguson & Sons Mechanical LLC website.

## 1. Think Before Coding
- Inspect the relevant code and project docs first.
- State material assumptions.
- If the repo does not resolve an important ambiguity, ask instead of guessing.
- Prefer the simplest approach that fully satisfies the task.

## 2. Simplicity First
- Build only what is requested or documented.
- Avoid speculative features, unnecessary abstractions, and unnecessary dependencies.
- Prefer straightforward reusable components.
- If a solution is much more complicated than the requirement, simplify it.

## 3. Surgical Changes
- Touch only what the task requires.
- Do not redesign, refactor, reformat, or “improve” unrelated areas.
- Match established project patterns.
- Remove only unused code created by your own changes.
- Every changed line should trace back to the task or required support for it.

## 4. Goal-Driven Execution
For substantial tasks:
1. Inspect the relevant sources and implementation.
2. State a short plan.
3. Implement.
4. Verify with the checks relevant to the task.
5. Update `PROJECT_STATUS.md` when the project materially changes.

Do not stop at “code written”; confirm the requested result works.

## 5. Source of Truth
Use each source for its domain:
- `business.md` — business facts, services, pricing, reviews, service area, claims, positioning.
- `sitemap.md` — routes, hierarchy, navigation, page roles, internal linking.
- `design.md` — visual system, components, responsive behavior, implementation rules.
- `Organized Screens/` — approved visual references.
- `Selected-Pictures-for-Website/` — curated page-specific production photos. Prefer these when implementing approved page imagery.
When implementing an approved page, inspect the matching folder under `Selected-Pictures-for-Website/` and use those photos for the sections shown in the corresponding `Organized Screens/` references.
- `Ferguson-Sons-Assets/` — full original/raw media library; use when a needed image is not already curated.

If approved-screen copy conflicts with `business.md`, `business.md` wins.

Never invent business facts, pricing, service areas, hours/days, reviews, guarantees, discounts, financing, emergency availability, free diagnosis/inspection, or other unsupported claims.

## 6. Approved Design & Copy Fidelity
For pages/sections represented in `Organized Screens/`:
- preserve approved section order, hierarchy, layout, imagery, spacing, styling, and visual rhythm
- match the approved typography exactly, including font family, weight, size, line height, letter spacing, casing, and intentional line breaks; do not rely on browser-default or inherited heading weights when an approved screen establishes the treatment
- use the same approved copy unless `business.md` contains a newer factual correction
- do not rewrite headings, body copy, labels, or CTAs merely to “improve” them
- do not creatively redesign approved screens

Use original production media from `Ferguson-Sons-Assets/`, not images extracted from screenshots.

For pages/sections without an approved screen:
- use `business.md` for facts
- use `sitemap.md` for purpose
- use `design.md` and approved screens for tone, density, hierarchy, and CTA style
- match the established Ferguson voice: local, straightforward, professional, service-first, concise, non-hype
- never invent claims to fill space

## 7. Reuse, Responsive Design, Accessibility
- Reuse components where the design clearly repeats; do not over-abstract.
- Make every page deliberately responsive across desktop, tablet, and common mobile widths.
- Preserve readable type, useful image crops, usable forms, sensible spacing, and working navigation.
- Use semantic HTML, accessible form labels, visible focus states, adequate contrast, and keyboard-accessible interactions.
- Respect `prefers-reduced-motion` for animated UI.

## 8. Project Continuity
At the start of every substantial task:
1. Read `PROJECT_STATUS.md`.
2. Read only the source-of-truth files relevant to the task.
3. Inspect the relevant code and approved screens.

Do not rely on previous chat memory as authoritative project state.

After a task that materially changes the project, update `PROJECT_STATUS.md` with:
- what changed
- what was verified
- unresolved issues
- the next logical step

Keep it concise and factual.

## 9. Definition of Done
Before declaring a visual task complete:
- approved content/composition is faithfully represented
- correct original media is used
- responsive behavior works
- links/interactions work
- accessibility basics are addressed
- relevant build/lint/typecheck/tests pass
- business claims remain grounded in `business.md`
- `PROJECT_STATUS.md` is updated when appropriate

When visual parity is the goal, compare the running implementation directly against the relevant approved screen.
