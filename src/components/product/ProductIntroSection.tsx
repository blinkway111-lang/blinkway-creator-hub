interface ProductIntroSectionProps {
  productName: string;
  intro?: string;
  tagline?: string;
}

export function ProductIntroSection({ 
  productName,
  intro,
  tagline = "This isn't about quick fixes. It's about sustainable transformation."
}: ProductIntroSectionProps) {
  const defaultIntro = `${productName} is a comprehensive resource designed to help you achieve real results—without the complexity, overwhelm, or guesswork.`;

  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            {intro || defaultIntro}
          </p>
          <p className="text-accent font-heading font-semibold text-lg">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
