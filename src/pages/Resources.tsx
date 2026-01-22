import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText, Bot, Sparkles, ArrowRight, Mail, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FreeResource {
  id: string;
  title: string;
  description: string;
  type: string;
  icon: LucideIcon;
  downloadCount: string;
}

const freeResources: FreeResource[] = [
  {
    id: "1",
    title: "50 Free AI Prompts",
    description: "Get started with AI using our curated collection of high-performing prompts for productivity and creativity.",
    type: "PDF",
    icon: Bot,
    downloadCount: "5,200+",
  },
  {
    id: "2",
    title: "Content Calendar Template",
    description: "Plan your content for the next 30 days with our easy-to-use template for all platforms.",
    type: "Notion",
    icon: FileText,
    downloadCount: "3,800+",
  },
  {
    id: "3",
    title: "Startup Idea Validator",
    description: "A simple framework to validate your next business idea before investing time and money.",
    type: "PDF",
    icon: Sparkles,
    downloadCount: "2,100+",
  },
];

const Resources = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                Free Resources
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Free Tools to Get You Started
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Download free templates, guides, and tools. No strings attached—just pure value 
                to help you build faster and work smarter.
              </p>
            </div>
          </div>
        </section>

        {/* Free Resources Grid */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {freeResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Get Exclusive Resources
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                Join 5,000+ creators and entrepreneurs. Get free templates, early access to new 
                products, and exclusive discounts delivered to your inbox.
              </p>

              {isSubscribed ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/20 text-accent">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">You're in! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 px-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <Button variant="hero" size="lg" type="submit">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}

              <p className="mt-4 text-sm text-primary-foreground/50">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                More Coming Soon
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're constantly adding new free resources. Subscribe to our newsletter 
                to be the first to know when new tools drop.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["AI Cheat Sheet", "Email Templates", "SEO Guide", "Analytics Tracker"].map((item) => (
                  <div key={item} className="bg-card rounded-xl p-4 border border-border text-center">
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

function ResourceCard({ resource }: { resource: FreeResource }) {
  const Icon = resource.icon;
  
  return (
    <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-5 shadow-glow">
        <Icon className="w-7 h-7 text-accent-foreground" />
      </div>

      {/* Type Badge */}
      <span className="inline-block px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium mb-3">
        {resource.type}
      </span>

      {/* Title */}
      <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
        {resource.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {resource.description}
      </p>

      {/* Download Count & CTA */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          {resource.downloadCount} downloads
        </span>
        <Button variant="accent" size="sm">
          <Download className="w-4 h-4 mr-1" />
          Free Download
        </Button>
      </div>
    </div>
  );
}

export default Resources;
