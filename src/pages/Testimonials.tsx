import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star, Quote } from "lucide-react";
interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  product: string;
  rating: number;
  featured?: boolean;
}
const testimonials: Testimonial[] = [{
  id: "1",
  content: "Blinkway saved me weeks of work. Everything is clean, practical, and easy to implement. The AI templates alone paid for themselves on day one. I've tried many digital products before, but nothing comes close to this quality.",
  author: "Sarah Chen",
  role: "Startup Founder",
  product: "AI Prompt Mastery Pack",
  rating: 5,
  featured: true
}, {
  id: "2",
  content: "These are not generic digital products. Each one delivers real value. I use the automation workflows daily and they've transformed how my team operates. Our productivity has increased by 40%.",
  author: "Marcus Johnson",
  role: "Marketing Director",
  product: "Automation Hub",
  rating: 5,
  featured: true
}, {
  id: "3",
  content: "I use Blinkway tools daily. Highly recommended for anyone serious about growth. The quality is exceptional and the support is outstanding. Best investment I've made this year.",
  author: "Priya Sharma",
  role: "Content Creator",
  product: "Content Creator Toolkit",
  rating: 5
}, {
  id: "4",
  content: "The SaaS Launch Blueprint helped me validate my idea in just 2 weeks. I would have spent months figuring this out on my own. Now my product is live and generating revenue.",
  author: "David Park",
  role: "Indie Hacker",
  product: "SaaS Launch Blueprint",
  rating: 5
}, {
  id: "5",
  content: "Finally, prompts that actually work. The quality is exceptional and the organization makes it so easy to find exactly what I need. This is my go-to resource for any AI project.",
  author: "Aisha Khan",
  role: "Marketing Manager",
  product: "AI Prompt Mastery Pack",
  rating: 5
}, {
  id: "6",
  content: "The email templates have completely transformed our outreach. Our open rates went from 15% to 45%. The results speak for themselves.",
  author: "Tom Anderson",
  role: "Sales Lead",
  product: "Email Marketing Swipe File",
  rating: 5
}, {
  id: "7",
  content: "As a solo creator, I need tools that just work. Blinkway delivers exactly that. No fluff, no complicated setups—just practical resources I can use immediately.",
  author: "Lisa Wong",
  role: "YouTuber",
  product: "Content Creator Toolkit",
  rating: 5
}, {
  id: "8",
  content: "The Notion templates are incredibly well-designed. They've helped me organize my entire business and save hours every week on planning and tracking.",
  author: "James Martinez",
  role: "Freelance Consultant",
  product: "Notion Automation Hub",
  rating: 5
}];
const Testimonials = () => {
  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);
  return <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                What Our Customers Say
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Join thousands of creators, founders, and businesses who trust Blinkway 
                to help them build faster and work smarter.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8 flex justify-center">
            <div className="flex-wrap gap-6 flex items-center justify-center">
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="font-heading font-bold text-4xl text-accent mb-2">5K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="font-heading font-bold text-4xl text-accent mb-2">4.9</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="font-heading font-bold text-4xl text-accent mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="font-heading font-bold text-4xl text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Products</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredTestimonials.map(testimonial => <div key={testimonial.id} className="bg-primary text-primary-foreground rounded-3xl p-8 relative overflow-hidden">
                  <Quote className="absolute top-6 right-6 w-16 h-16 text-primary-foreground/10" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                  </div>

                  <p className="text-lg leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-primary-foreground/70">{testimonial.role}</div>
                    </div>
                    <div className="text-sm text-primary-foreground/50">
                      {testimonial.product}
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* All Testimonials */}
        <section className="pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
              More Reviews
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularTestimonials.map(testimonial => <div key={testimonial.id} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-accent mt-1">{testimonial.product}</div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Testimonials;