/**
 * Click Tracking Module
 * 
 * Implements delegated click tracking for:
 * - WhatsApp links (wa.me, api.whatsapp.com)
 * - Tel links (tel:)
 * 
 * Uses event delegation for performance and to capture dynamically added links.
 */

import { sendGA4Event } from './ga4';

let isInitialized = false;

/**
 * Check if an element or its ancestors is a link with specific href pattern
 */
function findLinkWithPattern(target: EventTarget | null, pattern: RegExp): HTMLAnchorElement | null {
  let element = target as HTMLElement | null;
  
  while (element && element !== document.body) {
    if (element.tagName === 'A' && element instanceof HTMLAnchorElement) {
      const href = element.getAttribute('href') || '';
      if (pattern.test(href)) {
        return element;
      }
    }
    element = element.parentElement;
  }
  
  return null;
}

/**
 * Handle click events and track WhatsApp and tel links
 */
function handleClick(event: MouseEvent): void {
  const target = event.target;

  // Check for WhatsApp links
  const whatsappPattern = /^https?:\/\/(wa\.me|api\.whatsapp\.com|whatsapp\.com)/i;
  const whatsappLink = findLinkWithPattern(target, whatsappPattern);
  
  if (whatsappLink) {
    sendGA4Event('whatsapp_click', {
      page_url: window.location.href,
      link_url: whatsappLink.href,
    });
    return; // Don't check for tel if we found WhatsApp
  }

  // Check for tel links
  const telPattern = /^tel:/i;
  const telLink = findLinkWithPattern(target, telPattern);
  
  if (telLink) {
    sendGA4Event('call_click', {
      page_url: window.location.href,
      phone_number: telLink.href.replace('tel:', ''),
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
  document.addEventListener('click', handleClick, true);

  // Return cleanup function
  return () => {
    if (isInitialized) {
      document.removeEventListener('click', handleClick, true);
      isInitialized = false;
    }
  };
}
