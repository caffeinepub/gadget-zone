# Specification

## Summary
**Goal:** Enable Google Analytics 4 in production by loading and configuring GA4 via the standard gtag.js snippet using measurement ID `G-HBEHE5MY5Y`.

**Planned changes:**
- Add the GA4 gtag.js script tag to the built app HTML head with `id=G-HBEHE5MY5Y`.
- Initialize `window.dataLayer`, define `window.gtag`, and call `gtag('config','G-HBEHE5MY5Y')` on initial page load.
- Ensure there is only one consistent GA4 initialization path in the frontend (no duplicate/conflicting GA injections) so existing tracking helpers continue to work by using `window.gtag`.

**User-visible outcome:** No visible UI changes; GA4 tracking runs in production and SPA navigation/click tracking continues without console errors.
