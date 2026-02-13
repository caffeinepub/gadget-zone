/**
 * Google Tracking Utilities
 * 
 * Provides safe, idempotent initialization for:
 * - Google Tag Manager (GTM)
 * - Google Analytics (gtag.js) - loaded from <head> with hardcoded measurement ID
 * 
 * All functions are safe to call when tracking is not configured.
 */

import { analyticsConfig } from './analyticsConfig';

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Initialize Google Tag Manager
 * Injects GTM script once and only once.
 * Safe to call multiple times - will no-op if already loaded or not configured.
 */
export function initializeGTM(): void {
  const { containerId, enabled } = analyticsConfig.gtm;
  
  if (!enabled || !containerId) {
    return;
  }

  // Guard against multiple injections
  const scriptId = 'gtm-script';
  if (document.getElementById(scriptId)) {
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  // Inject GTM script
  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
}

/**
 * Verify GA4 is loaded from <head>
 * GA4 is now loaded in index.html with hardcoded measurement ID G-HBEHE5MY5Y
 * This function is a no-op verification that ensures consistency
 */
export function initializeGA(): void {
  // GA4 is loaded from <head> in index.html with hardcoded measurement ID
  // This function is now just a no-op for consistency with existing code
  // The head script already handles all initialization and config
  // No additional setup or script injection is needed
}

/**
 * Initialize all configured tracking services
 * Call once on app mount.
 */
export function initializeTracking(): void {
  initializeGTM();
  initializeGA();
}
