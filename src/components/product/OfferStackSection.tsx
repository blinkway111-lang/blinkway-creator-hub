import { Package, FileText, RefreshCw, ShoppingCart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OfferItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface OfferStackSectionProps {
  productName: string;
  price: { amount: string; currencyCode: string };
  offers?: OfferItem[];
  onAddToCart: () => void;
  isLoading: boolean;
}

const getCurrencySymbol = (currencyCode: string) => {
  switch (currencyCode) {
    case 'INR': return '₹';
    case 'USD': return '$';
    case 'EUR': return '€';
    case 'GBP': return '£';
    default: return currencyCode + ' ';
  }
};

export function OfferStackSection({ 
  productName,
  price,
  offers,
  onAddToCart,
  isLoading
}: OfferStackSectionProps) {
  const defaultOffers: OfferItem[] = [
    { 
      icon: <Package className="w-6 h-6" />, 
      title: `${productName} - Complete Guide`, 
      description: "Full access to all content and strategies" 
    },
    { 
      icon: <FileText className="w-6 h-6" />, 
      title: "Bonus Resources & Templates", 
      description: "Ready-to-use materials to accelerate your progress" 
    },
    { 
      icon: <RefreshCw className="w-6 h-6" />, 
      title: "Lifetime Access & Updates", 
      description: "Get all future updates at no extra cost" 
    }
  ];

  const displayOffers = offers || defaultOffers;

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-4">
            What You Get Today
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            One-time payment. No subscriptions.
          </p>

          {/* Offer Items */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
            {displayOffers.map((offer, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 p-6 ${
                  index !== displayOffers.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-accent flex-shrink-0">
                  {offer.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price & CTA */}
          <div className="text-center">
            <div className="mb-6">
              <span className="font-heading font-bold text-5xl text-foreground">
                {getCurrencySymbol(price.currencyCode)}{parseFloat(price.amount).toFixed(0)}
              </span>
              <span className="text-muted-foreground ml-2">one-time</span>
            </div>
            
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onAddToCart}
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Get Instant Access
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
