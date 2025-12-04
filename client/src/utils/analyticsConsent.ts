export function grantAnalyticsConsent() {
  try {
    if (typeof window !== 'undefined') {
      // Ensure dataLayer exists
      (window as any).dataLayer = (window as any).dataLayer || [];
      // Update Consent Mode to grant analytics/ad storage
      (window as any).dataLayer.push({
        event: 'update_consent',
        'gtm.consentUpdate': {
          ad_storage: 'granted',
          analytics_storage: 'granted',
          functionality_storage: 'granted',
          security_storage: 'granted'
        }
      });
      // Trigger GTM load immediately if available
      if (typeof (window as any).loadGTMNow === 'function') {
        (window as any).loadGTMNow();
      }
      // Also trigger lazy Google Fonts load if available
      if (typeof (window as any).loadFontsNow === 'function') {
        (window as any).loadFontsNow();
      }
    }
  } catch (e) {
    // noop
  }
}

export function onImportantInteraction() {
  // Alias for future expansion; currently just grants consent
  grantAnalyticsConsent();
}