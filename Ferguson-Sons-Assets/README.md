# Ferguson & Sons Mechanical LLC — Visual Asset Library

This library contains **323 preserved source assets** collected from the two approved public sources on **2026-08-11 and 2026-08-12**:

- Facebook: <https://www.facebook.com/profile.php?id=61586880370088>
- Google Business: <https://share.google/6VmLpJkW5oOySqGqF>

All image files are preserved exactly as downloaded. They were not cropped, enhanced, upscaled, compressed, recolored, or otherwise edited. Facebook JPEGs retain the source-package filename. Google Business returned WebP originals without filename extensions. To make them preview correctly in Windows, `.webp` was added to the local filenames without changing their image data; the original provider naming remains documented in `asset-inventory.csv`.

## Contents

- 303 Facebook-source files (including **272 originals recovered from the signed-in Facebook Photos archive**)
- 20 Google Business gallery files
- All recovered Facebook originals have been visually classified into brand, team/family-business, vehicle, residential, commercial, equipment, social/reference, or review/reference folders.
- The temporary `11-raw-facebook-photos/unclassified/` holding folder is now empty.

Classification preserves original Facebook filenames and inventory provenance. Personal or family/business-life images are retained in `02-team/family-business/` for later privacy/suitability review; shared, promotional, screenshot, and reference material is retained in clearly labeled social or review/reference folders rather than being presented as authentic job photography. Exact SHA-256 review currently identifies 24 duplicate file groups, principally where a Photos-tab original repeats a previously preserved Facebook image. No source file was deleted during this raw-preservation pass; duplicate relationships remain available for later human review.

## Inventory

See `asset-inventory.csv` for every asset's filename, category, source page, date signal, source context, people shown, market, service shown, location, quality, potential use, notes, relationships, and SHA-256 checksum.

Dates shown by Facebook or Google as relative values were normalized only when the crawl date made that reasonable. Approximate dates are explicitly marked as approximate.

## Access and collection limits

- Facebook public access initially exposed only eight recent business photos plus profile/cover images. After the user signed into Facebook in their own browser session, the Photos archive became accessible and 272 original Facebook files were preserved into the completeness-first raw archive, in addition to the 31 Facebook files already catalogued.
- Google Business exposed 20 owner-uploaded gallery images. All 20 selected image downloads succeeded.
- No selected download failed. Expiring CDN image URLs are not used as the durable source reference; each inventory row points to its stable public source page.
- A shared comedy/video post visible on Facebook was excluded because it was unrelated shared content, consistent with the collection rules.
- The Facebook Photos grid loaded approximately 302 distinct image files at its accessible end. This includes profile/cover/interface-related images as well as business-page media. The 272 recovered originals are the distinct source-photo files preserved from that pass; exact duplication against prior archive files is recorded by SHA-256 rather than silently removed.

## Preserved but flagged assets

Four promotional assets appear synthetic, AI-generated, or heavily composited, and one is a photograph of a printed composite flyer. They were preserved rather than deleted:

- `09-social-graphics/0cf19a437907cd0d.jpg`
- `09-social-graphics/bbdb50b1e589e818`
- `09-social-graphics/5fa82f65bffc8fa6`
- `09-social-graphics/7042b6a8e4f7323c`

These should not be treated as authentic documentary portraits, factual work locations, or proof of equipment work without owner confirmation.

## Imagery gaps

The archive now contains owner/family, service, diagnostic, equipment, job-site, and promotional photos organized by subject. Strong, clearly identified imagery is still lacking for:

- Kara Ferguson (no confidently identifiable Kara photo)
- clean, authentic headshots of Chance and Kara
- a clearly identified full-team/group portrait
- branded vehicle exterior shots from multiple angles
- mini-split indoor heads and ductless installations
- verified before/after pairs
- Las Gaviotas-specific work or community content
- community/event/local-partnership imagery
- review-related visuals or customer-provided photos
- commercial maintenance/repair breadth beyond the single rooftop/job set
- emergency/no-cooling repair situations with clear context

Some people and job relationships are inferred from appearance or visual continuity. Those records are marked `unconfirmed` and should be verified before public captions are written.

