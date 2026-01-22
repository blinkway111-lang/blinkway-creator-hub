import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, FileText, Settings, Palette, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  icon: LucideIcon;
  popular?: boolean;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    title: "AI Prompt Mastery Pack",
    description: "500+ high-converting prompts for ChatGPT, Claude, and more. Boost productivity instantly.",
    price: "₹999",
    category: "AI Templates",
    icon: Bot,
    popular: true,
  },
  {
    id: "2",
    title: "SaaS Launch Blueprint",
    description: "Complete framework to validate, build, and launch your SaaS product in 30 days.",
    price: "₹1,499",
    category: "Business PDFs",
    icon: TrendingUp,
  },
  {
    id: "3",
    title: "Notion Automation Hub",
    description: "Ready-to-use Notion templates with built-in automation for teams and solopreneurs.",
    price: "₹799",
    category: "Automation",
    icon: Settings,
  },
  {
    id: "4",
    title: "Content Creator Toolkit",
    description: "Templates, calendars, and frameworks for consistent content creation across platforms.",
    price: "₹599",
    category: "Creator Toolkits",
    icon: Palette,
  },
  {
    id: "5",
    title: "Digital Marketing Playbook",
    description: "Proven strategies and templates for growing your audience and converting leads.",
    price: "₹1,299",
    category: "Business PDFs",
    icon: FileText,
  },
  {
    id: "6",
    title: "AI Workflow Automations",
    description: "Pre-built AI workflows for common business tasks. Save 10+ hours weekly.",
    price: "₹1,199",
    category: "AI Templates",
    icon: Sparkles,
    popular: true,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Most Popular
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Most Popular on Blinkway
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proven digital products trusted by creators and builders to execute faster and smarter.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products" className="gap-2">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {product.popular && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-accent text-accent-foreground text-xs font-semibold">
          Popular
        </div>
      )}
      
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-7 h-7 text-accent" />
      </div>

      {/* Category */}
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {product.category}
      </span>

      {/* Title */}
      <h3 className="font-heading font-semibold text-xl text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
        {product.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {product.description}
      </p>

      {/* Price & CTA */}
      <div className="flex items-center justify-between">
        <span className="font-heading font-bold text-2xl text-foreground">
          {product.price}
        </span>
        <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          View Details
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
