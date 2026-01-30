import { ShoppingCart, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  headline?: string;
  subheadline?: string;
  price: { amount: string; currencyCode: string };
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

export function FinalCTASection({ 
  headline = "You don't need to wait any longer.",
  subheadline = "Start your transformation today.",
  price,
  onAddToCart,
  isLoading
}: FinalCTASectionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-xl text-accent font-medium mb-10">
            {subheadline}
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onAddToCart}
              disabled={isLoading}
              className="text-lg px-10"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Get Instant Access Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            <p className="text-muted-foreground">
              Just{" "}
              <span className="font-bold text-foreground">
                {getCurrencySymbol(price.currencyCode)}{parseFloat(price.amount).toFixed(0)}
              </span>
              {" "}• Instant delivery • Lifetime access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
