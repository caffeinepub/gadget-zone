# Specification

## Summary
**Goal:** Update only the Hero section logo image element to use the exact requested image source and Tailwind className.

**Planned changes:**
- In `frontend/src/App.tsx`, modify only the Hero logo `<img>` at XPath `/html[1]/body[1]/div[1]/div[1]/section[1]/div[2]/div[1]/img[1]` to set `src="/assets/Gadget Zone-Logo-1.png"`.
- On that same `<img>`, set `className="h-24 md:h-32 mx-auto mb-6"` without changing any other attributes (e.g., `alt`) or any other part of the UI.

**User-visible outcome:** The Hero section displays the specified logo image at the intended size and spacing, with no other visual or layout changes.
