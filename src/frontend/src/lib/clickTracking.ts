/**
 * Click Tracking Module
 *
 * Implements delegated click tracking for:
 * - Context-specific CTA events (hero, HOT PICK section, etc.)
 * - Product & Service category clicks
 * - WhatsApp links (wa.me, api.whatsapp.com)
 * - Tel links (tel:)
 *
 * Uses event delegation for performance and to capture dynamically added links.
 * Supports data attributes for context-specific tracking.
 */

import { sendGA4Event } from "./ga4";

let isInitialized = false;

/**
 * Check if an element or its ancestors is a link with specific href pattern
 */
function findLinkWithPattern(
  target: EventTarget | null,
  pattern: RegExp,
): HTMLAnchorElement | null {
  let element = target as HTMLElement | null;

  while (element && element !== document.body) {
    if (element.tagName === "A" && element instanceof HTMLAnchorElement) {
      const href = element.getAttribute("href") || "";
      if (pattern.test(href)) {
        return element;
      }
    }
    element = element.parentElement;
  }

  return null;
}

/**
 * Find closest element with a data attribute
 */
function findElementWithData(
  target: EventTarget | null,
  dataAttr: string,
): HTMLElement | null {
  let element = target as HTMLElement | null;

  while (element && element !== document.body) {
    if (element.hasAttribute(dataAttr)) {
      return element;
    }
    element = element.parentElement;
  }

  return null;
}

/**
 * Handle click events and track WhatsApp and tel links with context
 */
function handleClick(event: MouseEvent): void {
  const target = event.target;

  // Check for context-specific tracking first (highest priority)
  const contextElement = findElementWithData(target, "data-ga-event");
  if (contextElement) {
    const eventName = contextElement.getAttribute("data-ga-event");
    const eventContext = contextElement.getAttribute("data-ga-context") || "";
    const eventLabel = contextElement.getAttribute("data-ga-label") || "";

    if (eventName) {
      const eventParams: Record<string, string> = {
        page_url: window.location.href,
      };

      if (eventContext) {
        eventParams.context = eventContext;
      }

      if (eventLabel) {
        eventParams.label = eventLabel;
      }

      sendGA4Event(eventName, eventParams);
      return; // Don't fire generic events if we have a specific one
    }
  }

  // Check for WhatsApp links (only if no specific event was fired)
  const whatsappPattern =
    /^https?:\/\/(wa\.me|api\.whatsapp\.com|whatsapp\.com)/i;
  const whatsappLink = findLinkWithPattern(target, whatsappPattern);

  if (whatsappLink) {
    sendGA4Event("whatsapp_click", {
      page_url: window.location.href,
      link_url: whatsappLink.href,
    });
    return; // Don't check for tel if we found WhatsApp
  }

  // Check for tel links (only if no specific event was fired)
  const telPattern = /^tel:/i;
  const telLink = findLinkWithPattern(target, telPattern);

  if (telLink) {
    sendGA4Event("call_click", {
      page_url: window.location.href,
      phone_number: telLink.href.replace("tel:", ""),
    });
  }
}

/**
 * Initialize click tracking
 * Uses event delegation on document for performance
 * Safe to call multiple times - will only initialize once
 */
export function initializeClickTracking(): () => void {
  if (isInitialized) {
    return () => {}; // Return no-op cleanup if already initialized
  }

  isInitialized = true;

  // Use capture phase to ensure we catch the event before any stopPropagation
  document.addEventListener("click", handleClick, true);

  // Return cleanup function
  return () => {
    if (isInitialized) {
      document.removeEventListener("click", handleClick, true);
      isInitialized = false;
    }
  };
}
