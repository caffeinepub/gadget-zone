/**
 * GA4 Helper Module
 * 
 * Provides safe wrappers for GA4 event tracking.
 * All functions are no-op when GA is not configured.
 */

import { analyticsConfig } from './analyticsConfig';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Check if GA4 is enabled and available
 */
export function isGA4Available(): boolean {
  return analyticsConfig.ga.enabled && typeof window.gtag === 'function';
}

/**
 * Send a custom GA4 event
 * Safe to call when GA is not configured - will no-op gracefully
 */
export function sendGA4Event(eventName: string, eventParams?: Record<string, unknown>): void {
  if (!isGA4Available()) {
    return;
  }

  try {
    window.gtag!('event', eventName, eventParams);
  } catch (error) {
    // Silently fail - don't break the app if tracking fails
    console.warn('GA4 event tracking failed:', error);
  }
}

/**
 * Send a page_view event for SPA navigation
 * Includes full page_location with query parameters for UTM tracking
 */
export function sendGA4PageView(pageLocation?: string): void {
  if (!isGA4Available()) {
    return;
  }

  try {
    window.gtag!('event', 'page_view', {
      page_location: pageLocation || window.location.href,
    });
  } catch (error) {
    console.warn('GA4 page_view tracking failed:', error);
  }
}
