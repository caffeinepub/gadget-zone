# Specification

## Summary
**Goal:** Ensure the hero logo is fully visible (no top/bottom clipping) on mobile and desktop, and make the logo background blend with the hero/site background.

**Planned changes:**
- Update ONLY the Hero section logo `<img>` rendering in `frontend/src/App.tsx` to prevent any cropping/clipping while preserving the logo’s aspect ratio across viewport sizes.
- Replace the hero logo asset with a transparent-background (or background-matching) version served from `frontend/public/assets/generated`, and update the Hero logo `<img>` to reference the updated asset.

**User-visible outcome:** The hero logo displays completely (not cut off) on mobile and desktop and visually blends into the hero background without a visible solid box behind it.
