import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Wrench, FileText, Settings, Palette, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";
interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  productCount: number;
  color: string;
}
const categories: Category[] = [{
  id: "ai-templates",
  name: "AI Templates",
  description: "Ready-to-use AI prompts and systems to boost productivity and creativity. From ChatGPT to Claude, we've got you covered.",
  icon: Bot,
  productCount: 25,
  color: "from-cyan-500 to-blue-500"
}, {
  id: "saas-tools",
  name: "SaaS Tools",
  description: "Simple, powerful tools built to solve specific problems efficiently. No complex setup required.",
  icon: Wrench,
  productCount: 18,
  color: "from-purple-500 to-pink-500"
}, {
  id: "business-pdfs",
  name: "Business & Marketing PDFs",
  description: "Actionable guides, frameworks, and playbooks you can apply instantly to grow your business.",
  icon: FileText,
  productCount: 32,
  color: "from-orange-500 to-red-500"
}, {
  id: "automation",
  name: "Automation & Systems",
  description: "Digital workflows to reduce manual work and increase output. Automate the boring stuff.",
  icon: Settings,
  productCount: 15,
  color: "from-green-500 to-emerald-500"
}, {
  id: "creator-toolkits",
  name: "Creator Toolkits",
  description: "Everything you need to create, grow, and monetize your content across all platforms.",
  icon: Palette,
  productCount: 22,
  color: "from-yellow-500 to-orange-500"
}, {
  id: "bundles",
  name: "Premium Bundles",
  description: "Get more value with our curated bundles. Save up to 40% on handpicked product collections.",
  icon: Package,
  productCount: 8,
  color: "from-indigo-500 to-purple-500"
}];
const Categories = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Explore by Category
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Find exactly what you need to accelerate your work. Every product is designed 
                for real-world use and immediate implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map(category => <CategoryCard key={category.id} category={category} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
function CategoryCard({
  category
}: {
  category: Category;
}) {
  const Icon = category.icon;
  return <Link to={`/products?category=${category.id}`} className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-500">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      <div className="p-8 relative">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Product Count */}
        

        {/* Title */}
        <h2 className="font-heading font-semibold text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
          {category.name}
        </h2>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {category.description}
        </p>

        {/* CTA */}
        <div className="flex items-center text-accent font-medium gap-2 group-hover:gap-3 transition-all">
          Browse Category
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>;
}
export default Categories;