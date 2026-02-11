/**
 * Scroll Depth Tracking Module
 * 
 * Tracks scroll depth at 25%, 50%, 75%, and 100% thresholds.
 * Fires each threshold once per page load.
 * Uses passive listeners and requestAnimationFrame for performance.
 */

import { sendGA4Event } from './ga4';

type ScrollThreshold = 25 | 50 | 75 | 100;

let isInitialized = false;
let trackedThresholds = new Set<ScrollThreshold>();
let rafId: number | null = null;
let isScrolling = false;

/**
 * Calculate current scroll percentage
 */
function getScrollPercentage(): number {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Avoid division by zero
  const scrollableHeight = documentHeight - windowHeight;
  if (scrollableHeight <= 0) {
    return 100;
  }
  
  return Math.min(100, Math.round((scrollTop / scrollableHeight) * 100));
}

/**
 * Check scroll depth and fire events for reached thresholds
 */
function checkScrollDepth(): void {
  const scrollPercentage = getScrollPercentage();
  const thresholds: ScrollThreshold[] = [25, 50, 75, 100];
  
  for (const threshold of thresholds) {
    if (scrollPercentage >= threshold && !trackedThresholds.has(threshold)) {
      trackedThresholds.add(threshold);
      sendGA4Event('scroll_depth', {
        depth: threshold,
        page_url: window.location.href,
      });
    }
  }
  
  isScrolling = false;
}

/**
 * Handle scroll events with requestAnimationFrame throttling
 */
function handleScroll(): void {
  if (isScrolling) {
    return; // Already scheduled
  }
  
  isScrolling = true;
  
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
  }
  
  rafId = requestAnimationFrame(checkScrollDepth);
}

/**
 * Reset tracked thresholds (call on SPA navigation)
 */
export function resetScrollDepthTracking(): void {
  trackedThresholds.clear();
}

/**
 * Initialize scroll depth tracking
 * Uses passive listener for performance
 * Safe to call multiple times - will only initialize once
 */
export function initializeScrollDepthTracking(): () => void {
  if (isInitialized) {
    return () => {}; // Return no-op cleanup if already initialized
  }

  isInitialized = true;
  trackedThresholds.clear();

  // Use passive listener for better scroll performance
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Check initial scroll position (in case page loads scrolled)
  setTimeout(checkScrollDepth, 100);

  // Return cleanup function
  return () => {
    if (isInitialized) {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      trackedThresholds.clear();
      isScrolling = false;
      isInitialized = false;
    }
  };
}
