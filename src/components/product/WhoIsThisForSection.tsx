import { Check, X } from "lucide-react";

interface WhoIsThisForSectionProps {
  idealFor?: string[];
  notFor?: string[];
}

export function WhoIsThisForSection({ 
  idealFor = [
    "You want to stop wasting time and start seeing results",
    "You prefer actionable guidance over theory",
    "You're ready to invest in your growth",
    "You want a resource you can refer back to anytime"
  ],
  notFor = [
    "People looking for instant miracles without effort"
  ]
}: WhoIsThisForSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Is This For You?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ideal For */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <div className="text-sm uppercase tracking-wider text-accent font-semibold mb-6">
                This is perfect for you if...
              </div>
              <div className="space-y-4">
                {idealFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gradient-cta flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not For */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <div className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-6">
                This is not for...
              </div>
              <div className="space-y-4">
                {notFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
