import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap, Download } from "lucide-react";

const trustIndicators = [
  { icon: Download, text: "Instant Digital Access" },
  { icon: Sparkles, text: "Designed for Real-World Use" },
  { icon: Shield, text: "Secure Payments" },
  { icon: Zap, text: "Lifetime Value Products" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Premium Digital Products</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Build Faster. Work Smarter.{" "}
            <span className="text-gradient">Scale with Products That Perform.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Blinkway delivers high-quality PDFs, SaaS tools, AI templates, and digital systems 
            designed to save time, automate work, and accelerate growth for creators, founders, 
            and modern businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/products" className="gap-2">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/60">
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
