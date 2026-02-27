# Specification

## Summary
**Goal:** Unify all contact numbers site-wide to a single number, add dropdown navigation with dedicated submenu pages (each with SEO metadata and structured data), and ensure GA4/Gtag page_view and conversion events fire on all new routes.

**Planned changes:**
- Replace every `tel:` link and call CTA across all components (Header, Footer, HotPickSection, ServicesPage, ProductsPage, ContactPage, BusinessHighlightsStrip, WhatsAppQuickMessages, and any floating CTAs) to use `tel:+919840077591`
- Replace every WhatsApp link and button site-wide to use `https://wa.me/919840077591`
- Add a dropdown navigation menu in Header.tsx with top-level items: Products, Services, About, and Contact — each with submenu items linking to unique URL paths (e.g. `/products/apple`, `/services/repair`, `/services/cctv`, `/services/accessories`, `/services/exchange`, `/services/emi`, `/about/story`, `/about/why-choose-us`)
- Register all new submenu routes in App.tsx as SPA pushState routes
- Create individual page components for every submenu route, each with:
  - Unique `<title>`, meta description, canonical URL, and Open Graph tags via `updateSEOMeta()`
  - BreadcrumbList JSON-LD and relevant Service/Product schema via `structuredData.ts`
  - Keyword-rich content (H1, H2s, descriptive paragraphs, feature lists)
  - Call and/or WhatsApp CTA using the unified number
- Update `robots.txt` and `sitemap.xml` to include all new page URLs
- Ensure `spaPageViews.ts` fires a GA4 `page_view` event on every navigation to the new submenu routes, with the correct `page_path`
- Invoke `googleAdsTracking.ts` conversion helpers on call and WhatsApp CTA clicks on all new pages
- Add collapsible mobile menu support in Header.tsx for all new submenu items

**User-visible outcome:** Visitors see a unified phone/WhatsApp number throughout the site, can navigate to dedicated sub-pages for each product brand, service type, and about section via dropdown menus, and all new pages are SEO-optimised and tracked with GA4 and Google Ads conversions.
