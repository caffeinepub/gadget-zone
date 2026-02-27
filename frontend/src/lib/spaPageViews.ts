/**
 * SPA Page View Tracking
 * 
 * Listens for history changes (pushState, replaceState, popstate)
 * and sends page_view events to GA4 for single-page app navigation.
 */

import { sendGA4PageView } from './ga4';

type HistoryMethod = 'pushState' | 'replaceState';

let isInitialized = false;
let originalPushState: typeof history.pushState;
let originalReplaceState: typeof history.replaceState;

/**
 * Initialize SPA page view tracking
 * Patches history methods and listens to popstate
 * Safe to call multiple times - will only initialize once
 */
export function initializeSPAPageViews(): () => void {
  if (isInitialized) {
    return () => {}; // Return no-op cleanup if already initialized
  }

  isInitialized = true;

  // Store original methods
  originalPushState = history.pushState;
  originalReplaceState = history.replaceState;

  // Patch history.pushState
  history.pushState = function(...args) {
    originalPushState.apply(history, args);
    sendGA4PageView(window.location.href);
  };

  // Patch history.replaceState
  history.replaceState = function(...args) {
    originalReplaceState.apply(history, args);
    sendGA4PageView(window.location.href);
  };

  // Listen to popstate (back/forward buttons)
  const handlePopState = () => {
    sendGA4PageView(window.location.href);
  };
  window.addEventListener('popstate', handlePopState);

  // Return cleanup function
  return () => {
    if (isInitialized) {
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', handlePopState);
      isInitialized = false;
    }
  };
}
