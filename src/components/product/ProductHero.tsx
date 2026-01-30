import { ShoppingCart, Loader2, Check, Download, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductHeroProps {
  title: string;
  description: string;
  price: { amount: string; currencyCode: string };
  imageUrl?: string;
  onAddToCart: () => void;
  isLoading: boolean;
  features?: string[];
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

export function ProductHero({ 
  title, 
  description, 
  price, 
  imageUrl, 
  onAddToCart, 
  isLoading,
  features = ["Instant Digital Download", "Beginner Friendly", "Lifetime Access"]
}: ProductHeroProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* 1. Product Image */}
          <div className="w-full mb-8">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-5 blur-2xl" />
              
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                    <Sparkles className="w-24 h-24 text-accent/40" />
                  </div>
                )}
              </div>

              {/* Trust badges floating */}
              <div className="absolute -bottom-4 left-4 right-4 flex justify-center gap-4">
                <div className="bg-card rounded-xl px-4 py-2 border border-border shadow-lg flex items-center gap-2">
                  <Download className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Digital</span>
                </div>
                <div className="bg-card rounded-xl px-4 py-2 border border-border shadow-lg flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Instant</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Heading */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight text-center">
            {title}
          </h1>

          {/* 3. Price & Buy Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="text-center sm:text-left">
              <span className="font-heading font-bold text-4xl md:text-5xl text-foreground">
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

          {/* 4. Description */}
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 text-center max-w-2xl">
            {description}
          </p>

          {/* Quick Features */}
          <div className="flex flex-col gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full gradient-cta flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
