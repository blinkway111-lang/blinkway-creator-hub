import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Check, 
  Star, 
  ShieldCheck, 
  Zap, 
  Download, 
  Clock, 
  Users, 
  FileCheck,
  Bot
} from "lucide-react";

// Mock product data - in a real app, this would come from an API
const mockProduct = {
  id: "1",
  title: "AI Prompt Mastery Pack",
  subtitle: "500+ high-converting prompts for ChatGPT, Claude, and more",
  description: "Unlock the full potential of AI with our comprehensive prompt library. Each prompt is battle-tested and designed to deliver consistent, high-quality outputs for your business needs.",
  price: "₹999",
  originalPrice: "₹1,999",
  category: "AI Templates",
  rating: 4.9,
  reviews: 127,
  downloads: "2,500+",
  benefits: [
    "500+ ready-to-use prompts across 15 categories",
    "Works with ChatGPT, Claude, Gemini, and more",
    "Copy-paste simplicity with customization guides",
    "Regular updates with new prompts added monthly",
    "Lifetime access with all future updates included",
  ],
  whatsIncluded: [
    "Complete Prompt Library (PDF + Notion)",
    "Quick-Start Guide",
    "Prompt Engineering Fundamentals",
    "Category-specific prompt collections",
    "Bonus: 50 Advanced Mega-Prompts",
  ],
  useCases: [
    { title: "Content Creators", description: "Generate blog posts, social media content, and video scripts in minutes." },
    { title: "Marketers", description: "Create compelling ad copy, email sequences, and landing page content." },
    { title: "Entrepreneurs", description: "Streamline business tasks from research to customer support." },
    { title: "Developers", description: "Write better code, debug faster, and automate documentation." },
  ],
  testimonials: [
    {
      content: "This prompt pack literally 10x'd my content output. Worth every penny.",
      author: "Rahul M.",
      role: "Content Creator",
    },
    {
      content: "Finally, prompts that actually work. The quality is exceptional.",
      author: "Aisha K.",
      role: "Marketing Manager",
    },
  ],
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProduct; // In real app, fetch based on id

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image/Preview */}
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl gradient-cta flex items-center justify-center shadow-glow">
                  <Bot className="w-12 h-12 text-accent-foreground" />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Download className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{product.downloads}</div>
                  <div className="text-xs text-muted-foreground">Downloads</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Star className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{product.rating}</div>
                  <div className="text-xs text-muted-foreground">{product.reviews} reviews</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Instant</div>
                  <div className="text-xs text-muted-foreground">Delivery</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Category */}
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                {product.category}
              </span>

              {/* Title */}
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                {product.title}
              </h1>

              {/* Subtitle */}
              <p className="text-muted-foreground text-lg mb-6">
                {product.subtitle}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-heading font-bold text-4xl text-foreground">
                  {product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold">
                  50% OFF
                </span>
              </div>

              {/* CTA */}
              <Button variant="hero" size="xl" className="w-full mb-6">
                <Zap className="w-5 h-5" />
                Buy Now - Instant Access
              </Button>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileCheck className="w-4 h-4 text-accent" />
                  <span>30-Day Money Back</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Download className="w-4 h-4 text-accent" />
                  <span>Instant Download</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-card rounded-2xl p-6 border border-border mb-8">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  What You'll Get
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <section className="mt-16">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.whatsIncluded.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-5 border border-border flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mt-16">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.useCases.map((useCase, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-accent" />
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mt-16">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
              What Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sticky CTA */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border md:hidden z-50">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-heading font-bold text-xl text-foreground">{product.price}</div>
                <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
              </div>
              <Button variant="hero" size="lg" className="flex-1">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
