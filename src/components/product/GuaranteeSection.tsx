import { ShieldCheck } from "lucide-react";

interface GuaranteeSectionProps {
  guaranteeDays?: number;
  guaranteeTitle?: string;
  guaranteeDescription?: string;
}

export function GuaranteeSection({ 
  guaranteeDays = 7,
  guaranteeTitle,
  guaranteeDescription
}: GuaranteeSectionProps) {
  const defaultTitle = `${guaranteeDays}-Day Money-Back Guarantee`;
  const defaultDescription = `If this product doesn't deliver on its promise, just email us within ${guaranteeDays} days. We'll refund you—no questions asked.`;

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="gradient-hero text-primary-foreground rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                <ShieldCheck className="w-8 h-8 text-accent" />
              </div>
              
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
                🛡️ {guaranteeTitle || defaultTitle}
              </h2>
              
              <p className="text-primary-foreground/80 text-lg">
                {guaranteeDescription || defaultDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
