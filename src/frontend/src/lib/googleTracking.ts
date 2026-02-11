/**
 * Google Tracking Utilities
 * 
 * Provides safe, idempotent initialization for:
 * - Google Tag Manager (GTM)
 * - Google Analytics (gtag.js) - now loaded from <head>
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
 * Check if GA4 is already loaded from <head>
 * GA4 is now loaded in index.html, so we just verify it's available
 */
export function initializeGA(): void {
  const { enabled } = analyticsConfig.ga;
  
  if (!enabled) {
    return;
  }

  // GA4 is loaded from <head> in index.html
  // This function now just verifies it's available
  // The head script already handles initialization and config
  
  // Guard: check if already loaded from head
  if (document.getElementById('ga-head-script')) {
    return; // Already loaded from head
  }
  
  // If for some reason head script didn't load, this is a fallback
  // but normally this shouldn't execute since GA is in <head>
}

/**
 * Initialize all configured tracking services
 * Call once on app mount.
 */
export function initializeTracking(): void {
  initializeGTM();
  initializeGA();
}
