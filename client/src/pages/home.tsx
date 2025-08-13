import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProductGrid from "@/components/product-grid";
import IslamicQuoteSection from "@/components/islamic-quote-section";
import WhyShopSection from "@/components/why-shop-section";
import TestimonialsSection from "@/components/testimonials-section";
import BestsellersCarousel from "@/components/bestsellers-carousel";
import NewsletterSignup from "@/components/newsletter-signup";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import SearchModal from "@/components/search-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <HeroSection />
      <ProductGrid />
      <IslamicQuoteSection />
      <WhyShopSection />
      <TestimonialsSection />
      <BestsellersCarousel />
      <NewsletterSignup />
      <Footer />
      <CartPreview />
      <SearchModal />
    </div>
  );
}
