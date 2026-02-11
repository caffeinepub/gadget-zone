/**
 * Analytics Configuration
 * 
 * Single source of truth for all tracking IDs.
 * Configure via environment variables:
 * - VITE_GTM_CONTAINER_ID: Google Tag Manager container ID (e.g., GTM-XXXXXXX)
 * - VITE_GA_MEASUREMENT_ID: Google Analytics measurement ID (e.g., G-XXXXXXXXXX)
 * 
 * When not configured, tracking is safely disabled.
 */

export const analyticsConfig = {
  gtm: {
    containerId: import.meta.env.VITE_GTM_CONTAINER_ID || '',
    enabled: Boolean(import.meta.env.VITE_GTM_CONTAINER_ID),
  },
  ga: {
    measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
    enabled: Boolean(import.meta.env.VITE_GA_MEASUREMENT_ID),
  },
} as const;
