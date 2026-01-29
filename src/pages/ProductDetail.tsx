import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Download, 
  Clock, 
  ShoppingBag,
  Loader2,
  ShoppingCart
} from "lucide-react";
import { useShopifyProduct } from "@/hooks/useShopifyProducts";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams();
  const { data: product, isLoading, error } = useShopifyProduct(handle || '');
  const addItem = useCartStore((state) => state.addItem);
  const isAddingToCart = useCartStore((state) => state.isLoading);

  const getCurrencySymbol = (currencyCode: string) => {
    switch (currencyCode) {
      case 'INR': return '₹';
      case 'USD': return '$';
      case 'EUR': return '€';
      case 'GBP': return '£';
      default: return currencyCode + ' ';
    }
  };

  const handleAddToCart = async () => {
    if (!product) return;
    
    const selectedVariant = product.variants.edges[0]?.node;
    if (!selectedVariant) return;
    
    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    });
    
    toast.success("Added to cart", {
      description: product.title,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center min-h-[60vh]">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const imageUrl = product.images?.edges?.[0]?.node?.url;
  const price = product.priceRange.minVariantPrice;
  const selectedVariant = product.variants.edges[0]?.node;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image/Preview */}
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-3xl bg-secondary/10 border border-border overflow-hidden flex items-center justify-center">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ShoppingBag className="w-24 h-24 text-muted-foreground" />
                )}
              </div>

              {/* Additional Images */}
              {product.images?.edges?.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.edges.map((img, index) => (
                    <div 
                      key={index} 
                      className="w-20 h-20 rounded-lg border border-border overflow-hidden flex-shrink-0"
                    >
                      <img 
                        src={img.node.url} 
                        alt={img.node.altText || `${product.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Download className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Digital</div>
                  <div className="text-xs text-muted-foreground">Instant Access</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <ShieldCheck className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Secure</div>
                  <div className="text-xs text-muted-foreground">Payment</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Instant</div>
                  <div className="text-xs text-muted-foreground">Delivery</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Title */}
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                {product.title}
              </h1>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-6 whitespace-pre-wrap">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-heading font-bold text-4xl text-foreground">
                  {getCurrencySymbol(price.currencyCode)}{parseFloat(price.amount).toFixed(0)}
                </span>
              </div>

              {/* Variants */}
              {product.options && product.options.length > 0 && product.options[0].name !== 'Title' && (
                <div className="mb-6">
                  {product.options.map((option) => (
                    <div key={option.name} className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {option.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value) => (
                          <button
                            key={value}
                            className="px-4 py-2 rounded-lg border border-border bg-card text-foreground hover:border-accent transition-colors"
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full mb-6"
                onClick={handleAddToCart}
                disabled={isAddingToCart || !selectedVariant}
              >
                {isAddingToCart ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mb-8 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Download className="w-4 h-4 text-accent" />
                  <span>Instant Download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border md:hidden z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="font-heading font-bold text-xl text-foreground">
              {getCurrencySymbol(price.currencyCode)}{parseFloat(price.amount).toFixed(0)}
            </div>
          </div>
          <Button 
            variant="hero" 
            size="lg" 
            className="flex-1"
            onClick={handleAddToCart}
            disabled={isAddingToCart || !selectedVariant}
          >
            {isAddingToCart ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Add to Cart"
            )}
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
