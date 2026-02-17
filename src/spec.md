# Specification

## Summary
**Goal:** Implement technical SEO improvements (meta tags, heading semantics, internal anchors, schema, canonical, Open Graph) with zero visual/layout changes.

**Planned changes:**
- Update `frontend/index.html` meta title and meta description to the provided exact strings.
- Adjust React page heading tags so there is exactly one H1 (“Gadget Zone”) and the specified main section titles are H2, without changing visible styling or text.
- Add in-page anchor navigation: cards link to their corresponding description sections, HOT PICK control links to the HOT PICK section, and footer includes hash links to Products, Services, and Contact.
- Add LocalBusiness JSON-LD structured data (name, address, phone/WhatsApp, hours, services) via a head script injection approach.
- Add a single canonical link tag pointing to `https://gadgetzone-nz9.caffeine.xyz/`.
- Add Open Graph tags (og:title, og:description, og:image) using the provided title/description and an existing project image asset (no new images).

**User-visible outcome:** The page looks the same, but has improved SEO/social sharing metadata, correct heading structure, and click-to-scroll in-page navigation links.
