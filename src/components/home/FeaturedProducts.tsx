import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, ShoppingBag, Download } from "lucide-react";
import { useShopifyProducts, ShopifyProduct } from "@/hooks/useShopifyProducts";
import { useCartStore } from "@/stores/cartStore";
import { createDirectCheckout } from "@/lib/shopify";
import { toast } from "sonner";

export function FeaturedProducts() {
  const { data: products, isLoading, error } = useShopifyProducts(6);
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Most Popular
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Most Popular on Blinkway
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proven digital products trusted by creators and builders to execute faster and smarter.
          </p>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Failed to load products. Please try again later.</p>
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found.</p>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products" className="gap-2">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((state) => state.addItem);
  const isCartLoading = useCartStore((state) => state.isLoading);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const imageUrl = product.node.images?.edges?.[0]?.node?.url;
  const price = product.node.priceRange.minVariantPrice;
  const selectedVariant = product.node.variants.edges[0]?.node;

  const getCurrencySymbol = (currencyCode: string) => {
    switch (currencyCode) {
      case 'INR': return '₹';
      case 'USD': return '$';
      case 'EUR': return '€';
      case 'GBP': return '£';
      default: return currencyCode + ' ';
    }
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!selectedVariant) return;
    
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    });
    
    toast.success("Added to cart", {
      description: product.node.title,
    });
  };

  const handleDirectCheckout = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!selectedVariant) return;
    
    setIsCheckoutLoading(true);
    try {
      const checkoutUrl = await createDirectCheckout(selectedVariant.id, 1);
      if (checkoutUrl) {
        window.open(checkoutUrl, '_blank');
      } else {
        toast.error("Failed to create checkout");
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error("Failed to create checkout");
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  return (
    <Link
      to={`/product/${product.node.handle}`}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Product Image */}
      <div className="aspect-[4/3] bg-secondary/10 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {product.node.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {product.node.description}
        </p>

        {/* Price & CTA */}
        <div className="flex flex-col gap-3">
          <span className="font-heading font-bold text-xl text-foreground">
            {getCurrencySymbol(price.currencyCode)}{parseFloat(price.amount).toFixed(0)}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="accent"
              size="sm"
              className="flex-1"
              onClick={handleDirectCheckout}
              disabled={isCheckoutLoading || !selectedVariant}
            >
              {isCheckoutLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download Now
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleAddToCart}
              disabled={isCartLoading || !selectedVariant}
            >
              {isCartLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ShoppingBag className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
