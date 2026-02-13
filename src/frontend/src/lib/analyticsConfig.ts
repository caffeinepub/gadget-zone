/**
 * Analytics Configuration
 * 
 * Single source of truth for all tracking IDs.
 * Configure via environment variables:
 * - VITE_GTM_CONTAINER_ID: Google Tag Manager container ID (e.g., GTM-XXXXXXX)
 * - GA4 measurement ID is hardcoded to G-HBEHE5MY5Y
 * 
 * When not configured, tracking is safely disabled.
 */

export const analyticsConfig = {
  gtm: {
    containerId: import.meta.env.VITE_GTM_CONTAINER_ID || '',
    enabled: Boolean(import.meta.env.VITE_GTM_CONTAINER_ID),
  },
  ga: {
    measurementId: 'G-HBEHE5MY5Y',
    enabled: true,
  },
} as const;
