// Centralized Shopify configuration - single source of truth
// This file ensures consistent domain/config across the entire app

export const SHOPIFY_CONFIG = {
  API_VERSION: '2025-07',
  STORE_PERMANENT_DOMAIN: 'shop.blinkway.org',
  STOREFRONT_TOKEN: 'b36672f2e4197bebd42b2814bf63ed6c',
} as const;

export const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_CONFIG.STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_CONFIG.API_VERSION}/graphql.json`;

/**
 * Checks if a URL hostname is a valid Shopify checkout host.
 * Valid hosts: checkout.shopify.com or *.myshopify.com
 */
export function isShopifyHostedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname;
    return host === 'checkout.shopify.com' || host.endsWith('.myshopify.com');
  } catch {
    return false;
  }
}

/**
 * Rewrites a checkout URL to use the myshopify.com domain if it's pointing
 * to a non-Shopify host (like blinkway.org which serves the Lovable app).
 * Also ensures the channel=online_store param is set.
 */
export function ensureShopifyCheckoutDomain(url: string): string {
  try {
    const parsed = new URL(url);
    
    if (!isShopifyHostedUrl(url)) {
      parsed.hostname = SHOPIFY_CONFIG.STORE_PERMANENT_DOMAIN;
      parsed.protocol = 'https:';
    }
    
    if (!parsed.searchParams.has('channel')) {
      parsed.searchParams.set('channel', 'online_store');
    }
    
    return parsed.toString();
  } catch {
    return url;
  }
}
