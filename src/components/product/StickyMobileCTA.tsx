import { ShoppingCart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StickyMobileCTAProps {
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

export function StickyMobileCTA({ 
  price,
  onAddToCart,
  isLoading
}: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border md:hidden z-50">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-heading font-bold text-xl text-foreground">
            {getCurrencySymbol(price.currencyCode)}{parseFloat(price.amount).toFixed(0)}
          </div>
          <div className="text-xs text-muted-foreground">one-time payment</div>
        </div>
        <Button 
          variant="hero" 
          size="lg" 
          className="flex-1"
          onClick={onAddToCart}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Get Access
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
