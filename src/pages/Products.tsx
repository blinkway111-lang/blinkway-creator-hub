import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Loader2, ShoppingBag, Download } from "lucide-react";
import { useShopifyProducts, ShopifyProduct } from "@/hooks/useShopifyProducts";
import { useCartStore } from "@/stores/cartStore";
import { createDirectCheckout } from "@/lib/shopify";
import { toast } from "sonner";

const categoryFilters = [
  { id: "all", name: "All Products" },
  { id: "digital-solution", name: "Digital Solutions" },
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: products, isLoading, error } = useShopifyProducts(20);

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = 
      product.node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.node.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  }) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                All Products
              </h1>
              <p className="text-muted-foreground text-lg">
                Premium digital products designed to help you build, automate, and scale faster.
              </p>
            </div>

            {/* Search & Filter */}
            <div className="max-w-4xl mx-auto">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === filter.id
                        ? "gradient-cta text-accent-foreground shadow-glow"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Failed to load products. Please try again later.</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((state) => state.addItem);
  const isCartLoading = useCartStore((state) => state.isLoading);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const imageUrl = product.node.images?.edges?.[0]?.node?.url;
  const price = product.node.priceRange.minVariantPrice;
  const compareAtPrice = product.node.compareAtPriceRange?.minVariantPrice;
  const selectedVariant = product.node.variants.edges[0]?.node;

  const currentPrice = parseFloat(price.amount);
  const originalPrice = compareAtPrice ? parseFloat(compareAtPrice.amount) : null;
  const discountPercent = originalPrice && originalPrice > currentPrice 
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100) 
    : 0;
  const hasDiscount = discountPercent > 0;

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
      <div className="aspect-[4/3] bg-secondary/10 overflow-hidden relative">
        {hasDiscount && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-500 text-white shadow-lg">
              -{discountPercent}% OFF
            </span>
          </div>
        )}
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
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-heading font-bold text-xl text-foreground">
              {getCurrencySymbol(price.currencyCode)}{currentPrice.toFixed(0)}
            </span>
            {hasDiscount && (
              <>
                <span className="text-muted-foreground line-through text-sm">
                  {getCurrencySymbol(price.currencyCode)}{originalPrice.toFixed(0)}
                </span>
                <span className="text-red-500 text-sm font-semibold">
                  Save {discountPercent}%
                </span>
              </>
            )}
          </div>
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

export default Products;
