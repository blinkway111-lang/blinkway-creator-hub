import { Heart, Sparkles, Users } from "lucide-react";

interface TrustSectionProps {
  productName: string;
  trustMessage?: string;
  highlights?: string[];
}

export function TrustSection({ 
  productName,
  trustMessage,
  highlights = [
    "Created with real-world experience in mind",
    "Designed for busy professionals",
    "Loved by readers seeking practical guidance"
  ]
}: TrustSectionProps) {
  const defaultTrustMessage = `${productName} was created for people who are tired of fluff and want real, actionable guidance they can trust.`;

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-6">
            <Heart className="w-8 h-8 text-accent" />
          </div>
          
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
            Why Trust This Product?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            {trustMessage || defaultTrustMessage}
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-secondary/50 rounded-full px-5 py-2"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
