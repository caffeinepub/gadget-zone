/**
 * Google Ads conversion tracking helpers.
 * Fires gtag conversion events safely when gtag is available.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_ID = 'AW-959629329';

export function trackAdsConversion(
  conversionLabel: string,
  value?: number,
  currency = 'INR'
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: `${ADS_ID}/${conversionLabel}`,
    value: value ?? 0,
    currency,
  });
}

export function trackLeadConversion(value?: number) {
  trackAdsConversion('lead', value);
}

export function trackContactFormConversion(value?: number) {
  trackAdsConversion('contact_form', value);
}

export function trackWhatsAppConversion(value?: number) {
  trackAdsConversion('whatsapp_click', value);
}

export function trackCallConversion(value?: number) {
  trackAdsConversion('call_click', value);
}
