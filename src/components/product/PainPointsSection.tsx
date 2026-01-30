interface PainPointsSectionProps {
  painPoints?: string[];
  affirmation?: string;
  subtext?: string;
}

export function PainPointsSection({ 
  painPoints = [
    "Do you feel like you're always falling behind?",
    "Are you overwhelmed with too many tools and not enough results?",
    "Do you struggle to find a clear path forward?"
  ],
  affirmation = "You're not the problem.",
  subtext = "You just need the right tools and a clear strategy."
}: PainPointsSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pain Points */}
          <div className="space-y-4 mb-10">
            {painPoints.map((point, index) => (
              <p 
                key={index} 
                className="text-lg md:text-xl text-muted-foreground italic"
              >
                {point}
              </p>
            ))}
          </div>

          {/* Affirmation */}
          <div className="border-t border-border pt-10">
            <p className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              {affirmation}
            </p>
            <p className="text-lg text-muted-foreground">
              {subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
