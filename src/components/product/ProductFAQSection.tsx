import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQSectionProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Is this a physical or digital product?",
    answer: "This is a 100% digital product. You'll receive instant access to download immediately after purchase."
  },
  {
    question: "How will I receive the product?",
    answer: "After completing your purchase, you'll receive an email with download links. You can also access it directly from your account."
  },
  {
    question: "Can I access this on my phone or tablet?",
    answer: "Yes! The product is available in PDF format and can be viewed on any device—phone, tablet, or computer."
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Absolutely. This product is designed with beginners in mind, with clear explanations and step-by-step guidance."
  },
  {
    question: "What if I don't find it helpful?",
    answer: "We offer a 7-day money-back guarantee. If you're not satisfied, simply email us for a full refund—no questions asked."
  }
];

export function ProductFAQSection({ 
  faqs = defaultFAQs
}: ProductFAQSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
