# Gadget Zone – Products Menu & Category Pages

## Current State
- Navigation has: Home, Brands (with 7 brand sub-pages), Services, About, Contact
- Brand pages exist at /brands/apple, /brands/samsung, etc.
- No "Products" menu item exists yet
- Google tags G-HBEHE5MY5Y and AW-959629329 are in index.html and fire on all pages automatically via SPA

## Requested Changes (Diff)

### Add
- "Products" menu item in Header NAV_ITEMS, placed after "Brands"
- Products dropdown with:
  - Mobile Phones (nested sub-menu) → Samsung, Apple, OnePlus, Xiaomi, Vivo, Realme, Motorola, Nothing
  - Mobile Accessories → /products/mobile-accessories
  - CCTV & Security → /products/cctv-security
  - Computer Accessories → /products/computer-accessories
  - Audio Devices → /products/audio-devices
  - Power & Charging → /products/power-charging
  - Smart Gadgets → /products/smart-gadgets
- 8 new Mobile Phone brand pages at /products/samsung-phones, /products/apple-phones, /products/oneplus-phones, /products/xiaomi-phones, /products/vivo-phones, /products/realme-phones, /products/motorola-phones, /products/nothing-phones
- 6 new product category pages
- All new routes added to ALL_ROUTES in App.tsx
- GA4 page_view tracking fires automatically via existing SPA tracker

### Modify
- Header.tsx: Add Products nav item with nested dropdown support for Mobile Phones sub-items
- App.tsx: Add all new routes and import new page components

### Remove
- Nothing removed

## Implementation Plan
1. Update Header.tsx to support Products menu with nested Mobile Phones sub-menu
2. Create 8 new /products/[brand]-phones pages (Samsung, Apple, OnePlus, Xiaomi, Vivo, Realme, Motorola, Nothing) - each with SEO title, intro, Chennai local SEO line, internal brand links
3. Create 6 new product category pages (Mobile Accessories, CCTV & Security, Computer Accessories, Audio Devices, Power & Charging, Smart Gadgets)
4. Update App.tsx with all new routes
5. Ensure desktop hover dropdown and mobile accordion both work for nested Products > Mobile Phones sub-items
