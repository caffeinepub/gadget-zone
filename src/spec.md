# Specification

## Summary
**Goal:** Improve the HOT PICK entry point and bottom-of-page HOT PICK section with dedicated Motorola SEO content, a real product image, and GA4 click tracking—without impacting other sections.

**Planned changes:**
- Update the floating action button to be fixed (not section-sticky), labeled exactly “🔥 HOT PICK”, and smoothly scroll to the bottom HOT PICK section on click.
- Add GA4 event tracking on HOT PICK button clicks using event name `hot_pick_click`, including `page_url`, and ensure no errors if GA4 is unavailable.
- Add/update a dedicated bottom-of-page section that is always the last section rendered, titled exactly “🔥 HOT PICK – Latest Motorola Signature Smartphone”.
- Render the provided SEO body text verbatim (including formatting and bullets), and add an additional short paragraph in the same section that naturally includes the specified Motorola keywords without altering the verbatim block.
- Add Call and WhatsApp CTAs directly below the HOT PICK content, linking to the existing store phone number (tel:) and existing WhatsApp number (wa.me or equivalent), matching existing CTA styling patterns.
- Add a clean, premium Motorola Signature smartphone product image as a static asset (white/transparent background; product-only; centered; no lifestyle scene) and render it using existing image conventions.
- Keep all changes isolated to the floating HOT PICK button and the bottom HOT PICK section, with no other layout/functionality changes elsewhere.

**User-visible outcome:** Users see a fixed “🔥 HOT PICK” floating button that smoothly jumps to a new bottom-of-page Motorola HOT PICK section with the exact provided SEO content, a clean product image, and Call/WhatsApp enquiry buttons; button clicks are tracked in GA4 when available.
