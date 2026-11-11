import { CategoriesSection } from "@/components/sections/categories-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LookbookSection } from "@/components/sections/lookbook-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <LookbookSection />
      <NewsletterSection />
    </main>
  );
}
