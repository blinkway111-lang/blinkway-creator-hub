import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/10 blur-[120px]"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Ready to Level Up?</span>
          </div>

          {/* Headline */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Start Building Smarter Today
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Browse premium digital products designed to give you an unfair advantage. 
            No subscriptions you don't need. No complicated setups. Just tools that work.
          </p>

          {/* CTA */}
          <Button variant="accent" size="xl" asChild>
            <Link to="/products" className="gap-2">
              Get Instant Access
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          {/* Trust Note */}
          <p className="mt-6 text-sm text-muted-foreground">
            ✓ Instant delivery · ✓ Lifetime access · ✓ 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
