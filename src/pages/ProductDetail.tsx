import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useShopifyProduct } from "@/hooks/useShopifyProducts";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

// Import all product page sections
import {
  ProductHero,
  PainPointsSection,
  TransformationSection,
  ProductIntroSection,
  WhatYouGetSection,
  WhoIsThisForSection,
  TrustSection,
  OfferStackSection,
  GuaranteeSection,
  FinalCTASection,
  ProductFAQSection,
  StickyMobileCTA,
} from "@/components/product";

const ProductDetail = () => {
  const { handle } = useParams();
  const { data: product, isLoading, error } = useShopifyProduct(handle || '');
  const addItem = useCartStore((state) => state.addItem);
  const isAddingToCart = useCartStore((state) => state.isLoading);

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20 md:pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-8 pt-4">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>

        {/* Section 1: Hero */}
        <ProductHero
          title={product.title}
          description={product.description}
          price={price}
          imageUrl={imageUrl}
          onAddToCart={handleAddToCart}
          isLoading={isAddingToCart}
        />

        {/* Section 2: Pain Points */}
        <PainPointsSection />

        {/* Section 3: Transformation */}
        <TransformationSection 
          onCtaClick={handleAddToCart}
          isLoading={isAddingToCart}
        />

        {/* Section 4: Product Intro */}
        <ProductIntroSection productName={product.title} />

        {/* Section 5: What You Get */}
        <WhatYouGetSection />

        {/* Section 6: Who Is This For */}
        <WhoIsThisForSection />

        {/* Section 7: Trust & Differentiation */}
        <TrustSection productName={product.title} />

        {/* Section 8: Offer Stack */}
        <OfferStackSection
          productName={product.title}
          price={price}
          onAddToCart={handleAddToCart}
          isLoading={isAddingToCart}
        />

        {/* Section 9: Guarantee */}
        <GuaranteeSection />

        {/* Section 10: Final CTA */}
        <FinalCTASection
          price={price}
          onAddToCart={handleAddToCart}
          isLoading={isAddingToCart}
        />

        {/* Section 11: FAQ */}
        <ProductFAQSection />
      </main>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA
        price={price}
        onAddToCart={handleAddToCart}
        isLoading={isAddingToCart}
      />

      <Footer />
    </div>
  );
};

export default ProductDetail;
