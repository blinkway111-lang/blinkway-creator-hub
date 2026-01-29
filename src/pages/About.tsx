import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Sparkles, Heart } from "lucide-react";
import aboutLogo from "@/assets/about-logo.png";

const values = [
  {
    icon: Zap,
    title: "Speed",
    description: "We believe in fast execution. Every product is designed to help you move quickly without sacrificing quality.",
  },
  {
    icon: Target,
    title: "Simplicity",
    description: "No complicated setups or steep learning curves. Our products work right out of the box.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    description: "We obsess over details. Every template, guide, and tool is crafted to deliver exceptional results.",
  },
  {
    icon: Heart,
    title: "Innovation",
    description: "We stay ahead of the curve, constantly updating our products with the latest tools and strategies.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px]"></div>
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                About Blinkway
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Helping You Build Faster, Work Smarter
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Blinkway exists to help individuals and businesses move faster without 
                sacrificing quality. Every product is carefully crafted to deliver clarity, 
                efficiency, and measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                    Why Blinkway Exists
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We started Blinkway because we were tired of digital products that 
                    overpromise and underdeliver. Products that are bloated with features 
                    you'll never use or require hours of setup before you can get started.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our mission is simple: create digital products that work immediately. 
                    Products that save you time from day one and help you achieve real results.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    No subscriptions you don't need. No complicated setups. Just tools that work.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl gradient-hero flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl gradient-cta flex items-center justify-center shadow-glow animate-float">
                      <img src={aboutLogo} alt="Blinkway Logo" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Who We Build For
              </h2>
              <p className="text-muted-foreground text-lg">
                Blinkway is for anyone who values their time and wants to work smarter, not harder.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Founders & Entrepreneurs
                </h3>
                <p className="text-muted-foreground">
                  Launch faster, validate ideas, and scale your business with proven frameworks and tools.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Creators & Freelancers
                </h3>
                <p className="text-muted-foreground">
                  Create more content, grow your audience, and monetize your skills with ready-to-use resources.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Marketing Teams
                </h3>
                <p className="text-muted-foreground">
                  Execute campaigns faster, automate workflows, and drive results with battle-tested strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                These principles guide everything we create at Blinkway.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-5 shadow-glow">
                    <value.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Explore our collection of premium digital products and start building smarter today.
              </p>
              <Button variant="accent" size="xl" asChild>
                <Link to="/products" className="gap-2">
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
