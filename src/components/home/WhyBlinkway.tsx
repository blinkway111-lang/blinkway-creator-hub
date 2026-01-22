import { Zap, Clock, Target } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Built for Action",
    description: "Every Blinkway product is designed to be used immediately—no fluff, no theory. Just practical tools you can implement today.",
  },
  {
    icon: Clock,
    title: "Time-Saving by Design",
    description: "Automate tasks, simplify workflows, and skip months of trial and error. Our products are optimized for maximum efficiency.",
  },
  {
    icon: Target,
    title: "Creator & Business Focused",
    description: "Whether you're a solo creator or scaling a business, Blinkway products adapt to your goals and grow with you.",
  },
];

export function WhyBlinkway() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Why Thousands Choose Blinkway
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not just digital products — digital leverage for your success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-lg transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-cta flex items-center justify-center text-accent-foreground font-bold text-sm shadow-glow">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
