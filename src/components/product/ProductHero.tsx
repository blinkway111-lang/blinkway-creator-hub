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

// Parse and render formatted description
const FormattedDescription = ({ text }: { text: string }) => {
  // Split by common patterns - newlines, or between emoji markers
  const lines = text
    .split(/(?=✅|📘|📌|🎁|📈|💡|🚀)|(?<=\.)(?=\s*[A-Z])|(?:(?<=:)\s*)/)
    .map(line => line.trim())
    .filter(line => line.length > 0);

  const renderLine = (line: string, index: number) => {
    // Check if it's a bullet point (starts with emoji)
    const bulletEmojis = ['✅', '📘', '📌', '🎁', '📈', '💡'];
    const startsWithBullet = bulletEmojis.some(emoji => line.startsWith(emoji));
    
    // Check if it's a heading-like line (ends with ":" or contains key phrases)
    const isHeading = /^(Inside|Perfect for|What You'll Get|This isn't theory)/i.test(line) ||
                      (line.endsWith(':') && line.length < 50);
    
    // Intro line with rocket
    if (line.startsWith('🚀')) {
      return (
        <p key={index} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
          {line}
        </p>
      );
    }

    if (isHeading) {
      return (
        <h3 key={index} className="font-heading font-semibold text-xl md:text-2xl text-foreground mt-6 mb-3">
          {line}
        </h3>
      );
    }

    if (startsWithBullet) {
      return (
        <div key={index} className="flex items-start gap-3 mb-2">
          <span className="text-lg flex-shrink-0">{line.slice(0, 2)}</span>
          <span className="text-muted-foreground">{line.slice(2).trim()}</span>
        </div>
      );
    }

    // Regular paragraph
    return (
      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
        {line}
      </p>
    );
  };

  return (
    <div className="text-left max-w-2xl mx-auto">
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
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
          <div className="mb-8 w-full">
            <FormattedDescription text={description} />
          </div>

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
