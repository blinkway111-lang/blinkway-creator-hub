import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductByHandle, ShopifyProduct } from '@/lib/shopify';

export function useShopifyProducts(count: number = 20, query?: string) {
  return useQuery({
    queryKey: ['shopify-products', count, query],
    queryFn: () => fetchProducts(count, query),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useShopifyProduct(handle: string) {
  return useQuery({
    queryKey: ['shopify-product', handle],
    queryFn: () => fetchProductByHandle(handle),
    enabled: !!handle,
    staleTime: 1000 * 60 * 5,
  });
}

export type { ShopifyProduct };
