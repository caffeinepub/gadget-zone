# Specification

## Summary
**Goal:** Add a single shared bottom description section that updates based on which Products & Services item is clicked, and smoothly scroll to it.

**Planned changes:**
- Add one shared description section at the bottom of the one-page layout in `frontend/src/App.tsx`, placed immediately before the existing Footer, with internal content (heading + description) that updates based on the selected Products & Services item.
- Make the 5 existing Products & Services items clickable so click (1) smoothly scrolls to the shared bottom section and (2) updates the bottom section heading/description using the exact provided English text mapping.
- Add Call and WhatsApp actions below the description in the bottom section, using `tel:+919840077591` and the existing WhatsApp click-to-chat (wa.me) behavior via the existing `WhatsAppQuickMessages` component.
- Ensure the mobile scroll-to-section result keeps the bottom section readable and not obscured by the existing mobile sticky bottom action bar, without changing the bar’s structure/behavior.

**User-visible outcome:** Users can click any Products & Services item to be smoothly taken to a bottom description area that shows the correct heading and description for that item, with Call and WhatsApp buttons available underneath.
