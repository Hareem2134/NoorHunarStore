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
import PageTransition from "@/components/page-transition";
import AnimatedSection from "@/components/animated-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageTransition className="min-h-screen bg-off-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
      </motion.div>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProductGrid />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.68, -0.55, 0.265, 1.55] }}
      >
        <IslamicQuoteSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
      >
        <WhyShopSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotateY: 90, x: 50 }}
        whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <TestimonialsSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotateX: 90, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.68, -0.55, 0.265, 1.55] }}
      >
        <BestsellersCarousel />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: -30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <NewsletterSignup />
      </motion.div>
      <Footer />
      <CartPreview />
      <SearchModal />
    </PageTransition>
  );
}
