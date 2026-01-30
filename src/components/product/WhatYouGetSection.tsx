import { Check, BookOpen, FileText, RefreshCw, Zap, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureItem {
  icon?: LucideIcon;
  text: string;
}

interface WhatYouGetSectionProps {
  title?: string;
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  { icon: BookOpen, text: "Complete step-by-step guide to master the topic" },
  { icon: Zap, text: "Actionable strategies you can implement today" },
  { icon: Target, text: "Proven frameworks used by industry experts" },
  { icon: FileText, text: "Bonus resources and templates included" },
  { icon: RefreshCw, text: "Lifetime access and future updates" }
];

export function WhatYouGetSection({ 
  title = "What You'll Learn Inside",
  features = defaultFeatures
}: WhatYouGetSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            {title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon || Check;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
