import { ArrowRight, ShoppingCart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TransformationItem {
  before: string;
  after: string;
}

interface TransformationSectionProps {
  transformations?: TransformationItem[];
  ctaText?: string;
  onCtaClick?: () => void;
  isLoading?: boolean;
}

export function TransformationSection({ 
  transformations = [
    { before: "Scattered efforts with no direction", after: "Clear, actionable roadmap to success" },
    { before: "Hours wasted on trial and error", after: "Proven strategies that work immediately" },
    { before: "Feeling stuck and overwhelmed", after: "Confident and in control of your growth" }
  ],
  ctaText = "Start Your Transformation",
  onCtaClick,
  isLoading = false
}: TransformationSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Your Transformation Awaits
          </h2>

          {/* Before/After Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Before Column */}
            <div className="bg-secondary/50 rounded-2xl p-6 md:p-8">
              <div className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-6">
                Before
              </div>
              <div className="space-y-4">
                {transformations.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.before}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After Column */}
            <div className="gradient-hero text-primary-foreground rounded-2xl p-6 md:p-8">
              <div className="text-sm uppercase tracking-wider text-primary-foreground/70 font-semibold mb-6">
                After
              </div>
              <div className="space-y-4">
                {transformations.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-primary-foreground">{item.after}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          {onCtaClick && (
            <div className="text-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={onCtaClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
