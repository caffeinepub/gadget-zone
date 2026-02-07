# Specification

## Summary
**Goal:** Make the hero section’s logo image display larger on both mobile and desktop.

**Planned changes:**
- Update only the Tailwind height sizing classes on the hero logo `<img>` element in `frontend/src/App.tsx` (XPath `/html[1]/body[1]/div[1]/div[1]/section[1]/div[2]/div[1]/img[1]`) to increase its rendered size at mobile and `md+` breakpoints.

**User-visible outcome:** The hero logo appears noticeably larger on mobile and desktop, with all other hero content and behavior unchanged.
