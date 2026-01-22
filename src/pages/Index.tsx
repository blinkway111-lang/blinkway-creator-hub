import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyBlinkway } from "@/components/home/WhyBlinkway";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <WhyBlinkway />
        <CategoriesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
