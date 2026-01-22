import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Filter, Bot, FileText, Settings, Palette, Wrench, Sparkles, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  category: string;
  categoryId: string;
  icon: LucideIcon;
  popular?: boolean;
  new?: boolean;
}

const allProducts: Product[] = [
  {
    id: "1",
    title: "AI Prompt Mastery Pack",
    description: "500+ high-converting prompts for ChatGPT, Claude, and more.",
    price: "₹999",
    category: "AI Templates",
    categoryId: "ai-templates",
    icon: Bot,
    popular: true,
  },
  {
    id: "2",
    title: "SaaS Launch Blueprint",
    description: "Complete framework to validate, build, and launch your SaaS.",
    price: "₹1,499",
    category: "Business PDFs",
    categoryId: "business-pdfs",
    icon: TrendingUp,
  },
  {
    id: "3",
    title: "Notion Automation Hub",
    description: "Ready-to-use Notion templates with built-in automation.",
    price: "₹799",
    category: "Automation",
    categoryId: "automation",
    icon: Settings,
  },
  {
    id: "4",
    title: "Content Creator Toolkit",
    description: "Templates, calendars, and frameworks for content creation.",
    price: "₹599",
    category: "Creator Toolkits",
    categoryId: "creator-toolkits",
    icon: Palette,
  },
  {
    id: "5",
    title: "Digital Marketing Playbook",
    description: "Proven strategies and templates for growing your audience.",
    price: "₹1,299",
    category: "Business PDFs",
    categoryId: "business-pdfs",
    icon: FileText,
  },
  {
    id: "6",
    title: "AI Workflow Automations",
    description: "Pre-built AI workflows for common business tasks.",
    price: "₹1,199",
    category: "AI Templates",
    categoryId: "ai-templates",
    icon: Sparkles,
    popular: true,
  },
  {
    id: "7",
    title: "Landing Page Templates",
    description: "High-converting landing page designs and copy templates.",
    price: "₹899",
    originalPrice: "₹1,299",
    category: "SaaS Tools",
    categoryId: "saas-tools",
    icon: Wrench,
    new: true,
  },
  {
    id: "8",
    title: "Email Marketing Swipe File",
    description: "200+ proven email templates that convert subscribers.",
    price: "₹699",
    category: "Business PDFs",
    categoryId: "business-pdfs",
    icon: FileText,
  },
  {
    id: "9",
    title: "Social Media Scheduler",
    description: "Plan and schedule your content across all platforms.",
    price: "₹449",
    category: "Creator Toolkits",
    categoryId: "creator-toolkits",
    icon: Palette,
    new: true,
  },
];

const categoryFilters = [
  { id: "all", name: "All Products" },
  { id: "ai-templates", name: "AI Templates" },
  { id: "saas-tools", name: "SaaS Tools" },
  { id: "business-pdfs", name: "Business PDFs" },
  { id: "automation", name: "Automation" },
  { id: "creator-toolkits", name: "Creator Toolkits" },
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = activeFilter === "all" || product.categoryId === activeFilter;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                All Products
              </h1>
              <p className="text-muted-foreground text-lg">
                Premium digital products designed to help you build, automate, and scale faster.
              </p>
            </div>

            {/* Search & Filter */}
            <div className="max-w-4xl mx-auto">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === filter.id
                        ? "gradient-cta text-accent-foreground shadow-glow"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Badges */}
      <div className="absolute top-4 right-4 flex gap-2">
        {product.popular && (
          <span className="px-3 py-1 rounded-full gradient-accent text-accent-foreground text-xs font-semibold">
            Popular
          </span>
        )}
        {product.new && (
          <span className="px-3 py-1 rounded-full bg-foreground text-background text-xs font-semibold">
            New
          </span>
        )}
      </div>
      
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
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-2xl text-foreground">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
        <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          View Details
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

export default Products;
