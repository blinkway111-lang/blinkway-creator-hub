
## What’s actually causing the 404 (and why the Shopify theme is not the issue)
- Your Shopify cart checkout URL is being generated on a Shopify domain (or rewritten to it), but **Shopify is immediately redirecting that request back to `blinkway.org`** because `blinkway.org` is currently set (in Shopify) as the “primary domain / redirect target”.
- Since **`blinkway.org` is serving the Lovable app**, the path Shopify uses for checkout (often `/cart/c/...`) is handled by React Router instead of Shopify, so you see **your Lovable 404 page**.
- This is a **domain/DNS ownership conflict**, not a theme problem. The theme doesn’t control whether Shopify redirects the whole storefront to the primary domain.

## Goal you selected
- Keep `blinkway.org` for Lovable
- Use `0rwdcy-wu.myshopify.com` for Shopify checkout (and optionally the whole store)

## Solution (the only durable fix): change Shopify Domains configuration
### Step 1 — Update Shopify primary domain (required)
In **Shopify Admin → Settings → Domains**:
1. Find the domain entry for **`blinkway.org`** (and `www.blinkway.org` if present).
2. **Remove** it from Shopify (or at minimum, make sure it is NOT set as Primary and NOT used as redirect target).
3. Set **`0rwdcy-wu.myshopify.com`** as the **Primary domain**.
4. Ensure Shopify is set to **redirect all traffic to the primary domain** (so Shopify stays on myshopify.com, not blinkway.org).

Expected result after this change:
- Opening a checkout link like `https://0rwdcy-wu.myshopify.com/cart/c/...` should stay on Shopify and no longer bounce to `blinkway.org`.

### Step 2 — Confirm `blinkway.org` points only to Lovable (required)
In your domain DNS (where you manage DNS for blinkway.org):
- Keep the Lovable DNS records for `blinkway.org` / `www` pointing to Lovable (as you already chose).
- Make sure there are **no Shopify DNS records** still pointing `blinkway.org` to Shopify.

### Step 3 — Clear stale cart data and retest (required)
Because the cart is persisted in localStorage and old checkout URLs may be cached:
1. On `blinkway.org`, open DevTools → Application → Local Storage
2. Delete the key: **`shopify-cart`**
3. Reload the page
4. Add product → open cart → Checkout

## Code changes I will implement after you approve (supporting improvements)
Even after the domain fix, I’ll harden the app so this never silently fails again:

1. **Detect “dangerous” checkout URLs**
   - If the checkout URL hostname contains `blinkway.org` (or any non-Shopify host), show a clear toast explaining:
     - “Shopify is redirecting checkout to blinkway.org. Fix Shopify → Settings → Domains (Primary domain) to myshopify.com.”

2. **Centralize domain config**
   - Remove duplicated `SHOPIFY_STORE_PERMANENT_DOMAIN` constants across files and reference a single source (so it can’t drift).

3. **Add a “Reset cart” control**
   - Add a small “Reset cart” button inside the cart drawer (only visible when checkout fails), which clears `shopify-cart` state and forces a fresh Shopify cart to be created.

## How we’ll verify the fix (end-to-end)
1. Open `blinkway.org/products`
2. Add an item to cart
3. Click Checkout
4. Confirm the browser lands on a **Shopify-hosted domain** (`*.myshopify.com` or `checkout.shopify.com`) and does not return to `blinkway.org/cart/c/...`.

## Notes / future option
If you later want a branded Shopify domain while keeping `blinkway.org` for Lovable, the correct approach is a dedicated subdomain (e.g. `shop.blinkway.org`) pointing to Shopify. But since you chose **myshopify.com**, we’ll keep it simple for now.
