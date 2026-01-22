import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Wrench, FileText, Settings, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  productCount: number;
}

const categories: Category[] = [
  {
    id: "ai-templates",
    name: "AI Templates",
    description: "Ready-to-use AI prompts and systems to boost productivity and creativity.",
    icon: Bot,
    productCount: 25,
  },
  {
    id: "saas-tools",
    name: "SaaS Tools",
    description: "Simple, powerful tools built to solve specific problems efficiently.",
    icon: Wrench,
    productCount: 18,
  },
  {
    id: "business-pdfs",
    name: "Business & Marketing PDFs",
    description: "Actionable guides, frameworks, and playbooks you can apply instantly.",
    icon: FileText,
    productCount: 32,
  },
  {
    id: "automation",
    name: "Automation & Systems",
    description: "Digital workflows to reduce manual work and increase output.",
    icon: Settings,
    productCount: 15,
  },
  {
    id: "creator-toolkits",
    name: "Creator Toolkits",
    description: "Everything you need to create, grow, and monetize your content.",
    icon: Palette,
    productCount: 22,
  },
];

export function CategoriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find exactly what you need to accelerate your work and business.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/categories" className="gap-2">
              View All Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  
  return (
    <Link
      to={`/categories?filter=${category.id}`}
      className="group relative bg-card rounded-2xl p-6 border border-border hover:border-accent/30 shadow-card hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center shrink-0 shadow-glow group-hover:scale-105 transition-transform">
          <Icon className="w-7 h-7 text-accent-foreground" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
              {category.name}
            </h3>
            <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
              {category.productCount} products
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      {/* Hover Arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-5 h-5 text-accent" />
      </div>
    </Link>
  );
}
