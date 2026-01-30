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
  return <section className="py-16 md:py-20">
      
    </section>;
}