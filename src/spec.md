# Specification

## Summary
**Goal:** Add Google Analytics 4 (gtag.js) tracking loaded from the document `<head>` on all pages, with enhanced measurement support and custom events for WhatsApp, calls, and scroll depth.

**Planned changes:**
- Add GA4 base `gtag.js` snippet to the app so it loads from the document `<head>` on all pages, using a Measurement ID provided via configuration (not hardcoded) and ensuring initialization is idempotent.
- Ensure GA4 enhanced measurement is not disabled in code and that page views are sent on initial load (and on SPA route changes if applicable), with outbound click tracking supported via enhanced measurement or a safe fallback when GA is enabled.
- Add custom event tracking:
  - `whatsapp_click` for any click on WhatsApp links/buttons (including `wa.me` links), including `page_url`.
  - `call_click` for any click on `tel:` links, including `page_url`.
  - `scroll_depth` at 25% / 50% / 75% / 100% thresholds (once per threshold per page load), including `depth` and `page_url`, implemented with a performance-safe scroll listener.
- Ensure UTM parameters remain captured by GA4 (do not overwrite attribution fields; preserve default campaign attribution behavior).

**User-visible outcome:** Site behavior and design remain unchanged, while GA4 collects page views and enhanced measurement signals, plus custom WhatsApp/call click and scroll-depth analytics events when a Measurement ID is configured.
