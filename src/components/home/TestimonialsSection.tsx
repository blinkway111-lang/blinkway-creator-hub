import { Star, Quote } from "lucide-react";
interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  rating: number;
}
const testimonials: Testimonial[] = [{
  id: "1",
  content: "Blinkway saved me weeks of work. Everything is clean, practical, and easy to implement. The AI templates alone paid for themselves on day one.",
  author: "Sarah Chen",
  role: "Startup Founder",
  rating: 5
}, {
  id: "2",
  content: "These are not generic digital products. Each one delivers real value. I use the automation workflows daily and they've transformed how my team operates.",
  author: "Marcus Johnson",
  role: "Marketing Director",
  rating: 5
}, {
  id: "3",
  content: "I use Blinkway tools daily. Highly recommended for anyone serious about growth. The quality is exceptional and the support is outstanding.",
  author: "Priya Sharma",
  role: "Content Creator",
  rating: 5
}];
export function TestimonialsSection() {
  return <section className="py-24 gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            What Customers Say About Blinkway
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied creators, founders, and businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-heading font-bold text-4xl md:text-5xl text-accent mb-2">20K+</div>
            <div className="text-primary-foreground/70">Downloads</div>
          </div>
          <div>
            
            <div className="text-primary-foreground/70">Products</div>
          </div>
          <div>
            <div className="font-heading font-bold text-4xl md:text-5xl text-accent mb-2">98%</div>
            <div className="text-primary-foreground/70">Satisfaction</div>
          </div>
          <div>
            <div className="font-heading font-bold text-4xl md:text-5xl text-accent mb-2">24/7</div>
            <div className="text-primary-foreground/70">Support</div>
          </div>
        </div>
      </div>
    </section>;
}
function TestimonialCard({
  testimonial
}: {
  testimonial: Testimonial;
}) {
  return <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-accent/30 transition-colors">
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-accent mb-6" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
      </div>

      {/* Content */}
      <p className="text-primary-foreground/90 leading-relaxed mb-6">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div>
        <div className="font-semibold text-primary-foreground">
          {testimonial.author}
        </div>
        <div className="text-sm text-primary-foreground/60">
          {testimonial.role}
        </div>
      </div>
    </div>;
}